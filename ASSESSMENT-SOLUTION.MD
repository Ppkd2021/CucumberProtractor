# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

Name: Devashish katyal
Contact Number : 9717584233

Setup :
1. Run npm install 
2. Run npm i protractor-cucumber-framework on the terminal
3. Run npm i cucumber-html-reporter on the terminal

Changes:
1. Integrated Cucumber - Protractor - HTML reporter with the framework as I personally believe that this plugin provides the report which holds all the necessary information in order to reviewed by the shareholders.
2. Integrated after and beforeAll hooks with the automation sripts in order to capture screenshots after every scenario.

Implementation:
1. I have created three feature files named:
a. AdditionalFlow
b. search-planet
c. search-person
The above three feature files holds the scenarios that are part of this assesment.
2. I have kept one step defination file for each of the feature files as most of the steps written in feature files are parametrized to take different values depending on the scenario.
By doing this I have achieved to keep code as short as possible to cover as many scenario as possible.
3. In total 28 scenarios which includes 96 steps were automated.
4. I have used data driven approach using scenario outline in order to test a particular scenario with different values 
5. I have parameterized the xpath for all the page objects in order to re use the same identifier for different labels on the UI.

Execution Status:

Passed - 24
Failed - 2

Failed Scenario 1 - Search People by keeping input field blank
Failed Scenario 2 - Search Planet by keeping input field blank




Note : 
1.Both the dependencies mention above is added to the package-json file but sometimes it needed to be run seperately if test cases are failing due to these.
2. Please view the cucumber_report.html to view the execution summary.


## Remarks 

...
