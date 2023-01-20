import { check, sleep } from "k6";
import http from "k6/http";


export function Orders_GET() {
    let res = http.get(baseURL);
    check(res, {
        "status was 200": (r) => r.status == 200,
        "transaction time OK": (r) => r.timings.duration < 200
    });
    //console.log("status = " + res.status_text)
    //console.log("data = " + res.body)
}

export let options = {
    stages: [
        { duration: "30s", target: 10},
        { duration: "60s", target: 100},
        { duration: "30s", target: 10}
    ],
};

export default function() {
    Orders_GET()
}
