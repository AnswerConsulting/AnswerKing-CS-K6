import { check } from "k6";
import http from "k6/http";
import { SharedArray } from 'k6/data';


const data = new SharedArray('test-data', function () {
    return JSON.parse(open('./test_data.json'));
});

export function dataExample() {
    const index = Math.floor(Math.random() * data.length);
    const user = data[index];
    console.log(user.last_name);
    console.log("test")
}

export default function() {
    dataExample()
}
