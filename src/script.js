"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
const k6_1 = require("k6");
const http_1 = __importDefault(require("k6/http"));
exports.options = {
    vus: 10,
    duration: "1m"
};
function default_1() {
    let res = http_1.default.get("https://example.com");
    (0, k6_1.check)(res, {
        "status was 200": (r) => r.status == 200,
        "transaction time OK": (r) => r.timings.duration < 200
    });
}
exports.default = default_1;
;
