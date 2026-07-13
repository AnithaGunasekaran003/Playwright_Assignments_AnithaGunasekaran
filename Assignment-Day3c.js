
// function launchBrowser(browserName) {
//     if (browserName === "Chrome") {
//         console.log("This is chrome browser");
//     } else {
//         console.log("This is edge browser");
//     }
// }
// launchBrowser("Chrome");

function runTests(testType) {
switch (testType) {
    case "smoke":
        console.log("Running smoke tests");
        break;
    case "regression":
        console.log("Running regression tests");
        break;
    case "sanity":
        console.log("Running sanity tests");
        break;
    default:
        console.log("smoke ");
        break;
}
}
runTests("smoke");