import { check, sleep } from "k6";
import http from "k6/http";

export function get_products() {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let res = http.get("http://127.0.0.1:4010/api/products", params);
    check(res, {
        "status was 200": (r) => r.status == 200,
        "transaction time OK": (r) => r.timings.duration < 1000
    });
}