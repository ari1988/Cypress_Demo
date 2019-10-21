const cypress = require('cypress');
const fse = require('fs-extra');

async function runTests() {
    await fse.emptyDir('report/mochawesome-report');
    await fse.emptyDir('cypress/mochawesome-report');
    await cypress.run();

}

runTests();