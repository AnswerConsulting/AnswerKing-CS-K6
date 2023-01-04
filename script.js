"use strict";
exports.__esModule = true;
exports.options = void 0;
var k6_1 = require("k6");
var http_1 = require("k6/http");
exports.options = {
    vus: 10,
    duration: "1m"
};
function default_1() {
    var res = http_1["default"].get("https://example.com");
    (0, k6_1.check)(res, {
        "status was 200": function (r) { return r.status == 200; },
        "transaction time OK": function (r) { return r.timings.duration < 200; }
    });
}
exports["default"] = default_1;
;
