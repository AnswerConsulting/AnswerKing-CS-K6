//This file acts as the main configuration file for a test.
//Here we define the iteration, duration, executor type for a script.
export { user_makes_an_order } from "./scenarios/web/usermakesanorder.js"

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
            exec: "user_makes_an_order",
            vus: 1,
            iterations: __ENV.ITERATION_OVERRIDE || 100,
            maxDuration: "1m"
        }
    }
};

export default function() {

}

