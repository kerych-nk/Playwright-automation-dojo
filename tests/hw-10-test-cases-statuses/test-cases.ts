/* 
You are given an array of objects representing test cases. Each test case has a unique ID, a description, and a status. Your task is to write a TypeScript function that processes this array to generate a summary object. The summary should count the number of test cases for each status and group all test descriptions by their status.
const testCases = [
    { id: 1, description: "Login with valid credentials", status: "passed" },
    { id: 2, description: "Login with invalid credentials", status: "failed" },
    { id: 3, description: "Forgot password flow", status: "skipped" },
    { id: 4, description: "Update profile", status: "passed" },
    { id: 5, description: "Delete account", status: "failed" },
];

Output Example:
{
    passed: {
        count: 2,
        descriptions: ["Login with valid credentials", "Update profile"]
    },
    failed: {
        count: 2,
        descriptions: ["Login with invalid credentials", "Delete account"]
    },
    skipped: {
        count: 1,
        descriptions: ["Forgot password flow"]
    }
}
*/

interface TestCase {
    id: number;
    description: string;
    status: string;
}

interface Summary {
    [key: string]: {
        count: number;
        description: string[];
    };
}

function generateSummary(testCases: TestCase[]): Summary {
    const summary: Summary = {};

    for (const testCase of testCases) {
        if (!summary[testCase.status]) {
            summary[testCase.status] = {
                count: 0,
                description: []
            };
        }
        summary[testCase.status].count++;
        summary[testCase.status].description.push(testCase.description);
    }
    return summary;
}

const testCases = [
    { id: 1, description: "Login with valid credentials", status: "passed" },
    { id: 2, description: "Login with invalid credentials", status: "failed" },
    { id: 3, description: "Forgot password flow", status: "skipped" },
    { id: 4, description: "Update profile", status: "passed" },
    { id: 5, description: "Delete account", status: "failed" },
];
const result = generateSummary(testCases);
console.log(result);