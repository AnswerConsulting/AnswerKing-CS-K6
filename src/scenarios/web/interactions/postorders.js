import { check, sleep } from "k6";
import http from "k6/http";
import { getRandomValueFromArray } from "../../utils/utilities.js";

export function post_orders(data) {
    const userData = getRandomValueFromArray(data)
    const payload = JSON.stringify({
        "lineItems": [
            {
                "productId": userData.productId,
                "quantity": userData.quantity
            }
        ]
    });    
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let res = http.post("http://127.0.0.1:4010/api/orders", payload, params);
    check(res, {
        "status was 200": (r) => r.status == 201,
        "transaction time OK": (r) => r.timings.duration < 1000
    });    
}