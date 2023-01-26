import { post_orders } from "./interactions/postorders.js";
import { get_products } from "./interactions/getproducts.js";
import { SharedArray } from 'k6/data';
import { Histogram } from "k6/metrics";

let durations = new Histogram("loop_duration");

const data = new SharedArray('test-data', function () {
    return JSON.parse(open('../fixtures/test_data.json'));
});

export function user_makes_an_order() {
    let start = performance.now()
    post_orders(data)
    get_products()
    let end = performance.end()
    let duration = end - start
    durations.add(duration)
}

export let options = {
    stages: [
        { duration: "30s", target: 10 },
        { duration: "60s", target: 100 },
        { duration: "30s", target: 10 }
    ],
};

export default function () {
    user_makes_an_order()
}
