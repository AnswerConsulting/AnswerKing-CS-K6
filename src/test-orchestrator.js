//This file acts as the main configuration file for a test.
//Here we define the iteration, duration, executor type for a script.
export { Products_GET } from "./scenarios/web/Products_GET.js"
export { Orders_GET } from "./scenarios/web/Orders_GET.js"

export let options = {
    ext: {
        loadimpact: {
            projectID: __ENV.K6_PROJECT_ID,
            // Test runs with the same name groups test runs together
            name: "Answer King - C# - Performance Testing"

        },
    },
    scenarios: {
        test1: {
            executor: 'shared-iterations',
            exec: "Products_GET",
            vus: 100,
            iterations: __ENV.ITERATION_OVERRIDE || 100,
            maxDuration: "1m"
        },
        test2: {
            executor: 'shared-iterations',
            exec: "Orders_GET",
            vus: 100,
            iterations: __ENV.ITERATION_OVERRIDE || 100,
            maxDuration: "1m"
        }
    }
};

export default function() {

}

