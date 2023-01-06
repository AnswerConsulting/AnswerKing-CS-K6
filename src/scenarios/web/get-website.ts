import { check } from "k6";
import http from "k6/http";

// @ts-ignore
import pw from 'k6/x/playwright';


export function getWebsite() {
    pw.launch()
    pw.newPage()
    pw.goto("https://www.google.com/", {waitUntil: 'networkidle'})
    pw.waitForSelector("input[title='Search']", {state: 'visible'})
    pw.kill()
}

export default function() {
    getWebsite()
}
