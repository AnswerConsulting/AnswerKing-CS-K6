import { check } from "k6";
import http from "k6/http";

export let options = {
    vus: 10,
    duration: "1m"
};

export default function() {
    let res = http.get("https://example.com");
    check(res, {
        "status was 200": (r) => r.status == 200,
        "transaction time OK": (r) => r.timings.duration < 200
    });
};