const cypress = require('cypress');
const cypressConfig = require('./cypress');
const fse = require('fs-extra');
//const merge = require('mochawesome-merge')
//const marge = require('mochawesome-report-generator')
//const reportDir = cypressConfig.reporterOptions.reportDir
//const reportFiles = `${reportDir}/*.json`

async function runTests() {
    await fse.emptyDir('report/mochawesome-report');
    await cypress.run().then((results) =>{
        const reporterOptions = {
            reportDir: results.config.reporterOptions.reportDir,
        }
        
    }).catch((error) => {
        console.error('errors: ', error)
        process.exit(1)
    })

}

runTests();