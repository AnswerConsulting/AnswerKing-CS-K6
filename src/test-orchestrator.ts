//This file acts as the main configuration file for a test.
//Here we define the iteration, duration, executor type for a script.
export { getProduct } from "./scenarios/product/getProduct"
export { getWebsite } from "./scenarios/web/getWebsite"

export let options = {
    scenarios: {
        test1: {
            executor: 'shared-iterations',
            exec: "getWebsite",
            vus: 1,
            iterations: __ENV.ITERATION_OVERRIDE || 100,
            maxDuration: "1m"
        },
        test2: {
            executor: 'shared-iterations',
            exec: "getProduct",
            vus: 1,
            iterations: __ENV.ITERATION_OVERRIDE || 250,
            maxDuration: "1m"
        }
    }
};

export default function() {

}

