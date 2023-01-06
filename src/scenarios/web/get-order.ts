import { check } from "k6";
import http from "k6/http";

export function getOrder() {
    let res = http.get("https://example.com");
    check(res, {
        "status was 200": (r) => r.status == 200,
        "transaction time OK": (r) => r.timings.duration < 200
    });
}

export default function() {
    getOrder()
}
