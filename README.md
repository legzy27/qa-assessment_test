# qa-assessment_test

# Setup and run test
- clone repo https://github.com/legzy27/qa-assessment_test.git
- cd in directory
- npm i 
- npx cypress open
- click on test.js to run test

# Test Report

So after reading the question I decided build an api test framework so there would be a regression test suite, the regression test suite will be run before release in production. One issue was  I found was  when you delete the contact id you get get a 200 response code which I  don’t think is right the response code should be 404.

To automate this process I will create a collection is postman run the test suite In newman CLI, create a repository in bitbucket and run the test suite in bitbucket pipelines. In terms of information security test.I will create test plan which will include planning, discovery and attack phase and reporting phase which should address the issue of information security.