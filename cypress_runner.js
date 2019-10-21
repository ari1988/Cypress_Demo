const cypress = require('cypress');
const fse = require('fs-extra');

async function runTests() {
    await fse.emptyDir('report/mochawesome-report');
    await cypress.run();

}

runTests();