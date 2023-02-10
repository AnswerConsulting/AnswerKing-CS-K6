import { post_orders } from "./interactions/postorders.js";
import { get_products } from "./interactions/getproducts.js";
import { SharedArray } from 'k6/data';
import { Trend } from 'k6/metrics';

let durations = new Trend("overall_iteration_time");

const data = new SharedArray('test-data', function () {
    return JSON.parse(open('../fixtures/test_data.json'));
});

export function user_makes_an_order() {
    let start = Date.now()
    post_orders(data)
    get_products()
    let end = Date.now()
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
