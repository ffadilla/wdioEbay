# FerriFadilla

## Information

1. I'm using WebDriver.io with Cucumber & TypeScript lang for scripting in this technical task
2. Many element object hasn't id, but i used others element, such as : class name, span attributes, xpath, etc

## Step by step to Congfiguring and running the project

1. types $ npm init wdio@latest ./ on vscode terminal
2. select an option on configuration wizard
3. changing specs being this './features/**/*.feature' on wdio.conf.ts file
4. changing require being this './features/step-definitions/*.ts'] on wdio.conf.ts file
5. adding ebay.feature file for create cucumber scenario
6. adding basePage.ts file for declare export function
7. adding ebay.Page.ts file for declare all object element into it
8. adding ebaySteps.ts file for declare all step definition based on object element file
9. type npm run wdio on terminal to running the scenario based on feature file
10. when all scenario running out, look at the spec report and allure result folder for the report

## Thank You
