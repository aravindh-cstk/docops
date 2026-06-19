---
title: Automations guides and connectors - Code Block
description: The Code Block connector lets you execute the JavaScript code and returns the expected output to assist in complex data transformation.
url: https://www.contentstack.com/docs/agent-os/code-block
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - software-engineers
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Code Block

This page describes the Code Block connector, including how to set it up, example JavaScript snippets you can run, and the connector’s limitations. It is intended for developers and software engineers who need to execute JavaScript for complex data transformation within automations.

### Code Block

The Code Block connector lets you execute the JavaScript code and returns the expected output to assist in complex data transformation. It helps developers and software engineers to automate the execution of small code snippets.

**Additional Resource**: JavaScript is an advanced programming language. For more information, refer to the [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) documentation.

## Set up Code Block

Perform the following steps to set up the Code Block action connector:

- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Code Block** connector.
- Under **Choose an Action** tab, select the **JavaScript Code** action.
- On the **Javascript Code Configure Action** tab, enter the details given below:  
  Under the **Select Account** drop-down, select one of the accounts connected to your project. The sensitive information, such as access code, secret key, API key, etc., is fetched from the selected account.**Note**: *Select Account *is an optional field. You can still configure the action without selecting an account.
- Provide the **Input Name** and **Input Value** you want to use in your JavaScript code. You can get the input data from the previous step.
- Provide the **JavaScript Code** for execution.You can debug the code at multiple lines using the `console.log` code. This will help identify the errors or failures at different stages of the code.

  You can view the `console.log` in the payload, once you test the action as shown in step 8.

  **Note:**

  The automation code uses [Node.js 18.x.x](https://nodejs.org/en/download/package-manager) version for executions.
- The `console.log` output cannot be viewed in the payload if the string exceeds 4 kilobytes in length.
- Click **Proceed**.
- Click **Test Action** to test the configured action.  
  You will get the response.  
  For unsuccessful execution, an error message is displayed. This message specifies the type of error and the line number of the error to trace the issue.
- Once set, click **Save and Exit**.

This sets the **Code Block** action connector.

## Examples

### Fetching the values of JSON attributes

```
try{
    const res = await fetch('https://nodejs.org/api/documentation.json');
    if (res.ok) {
      const data = await res.json();
      return data;
    }else{
        throw new Error("Network response was not OK");
    }
}catch(err){
    throw new Error(err);
}

```

**Note**: For such scenarios, using the HTTP Action connector is preferable. For more information, please refer to the [HTTP Action Connector](/docs/developers/automation-hub-connectors/http-action/) document.

### Using regular expressions to check whether the email is valid

```
const re = /\S+@\S+\.\S+/g;

// check if the email is valid
let result = re.test(input.email);
if (result) {
    return "The email is valid.";
}
else {
   return "The email is not valid.";
}

```

### Comparing the calendar dates

```
let today  = new Date();
let customDate = new Date("2019/08/03"); // (YYYY-MM-DD)

if (today.getTime()  customDate.getTime())
    return "today is greater than customDate";
else
    return "both are equal";

```

### Using Lodash library for sorting the age of users

```
const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];

// sort by user in descending order
return _.orderBy(users, ['user'], ['desc']);

```

### Generating Random Numbers

```
let min = 20.4;
let max = 29.8;

let randomNum = Math.random() * (max - min) + min;

return randomNum;

```

## Limitations

- The execution time limit is **5 **seconds only.
- You can perform up to **10,000** code block executions per month per organization.
- You are not allowed to use external libraries, or to install or import `**npm**` **modules**. Only the **standard node.js** library and the `fetch` and `lodash` package are available in the Code Block connector.

## Common questions

**Q: What runtime version does the Code Block connector use for executions?**  
A: The automation code uses [Node.js 18.x.x](https://nodejs.org/en/download/package-manager) version for executions.

**Q: Can I view `console.log` output in the payload?**  
A: You can view the `console.log` in the payload, once you test the action as shown in step 8.

**Q: Are external libraries or npm modules allowed in the Code Block connector?**  
A: You are not allowed to use external libraries, or to install or import `**npm**` **modules**. Only the **standard node.js** library and the `fetch` and `lodash` package are available in the Code Block connector.

**Q: What are the execution limits for Code Block?**  
A: The execution time limit is **5 **seconds only, and you can perform up to **10,000** code block executions per month per organization.

<!-- Filename: automations-guides-and-connectors-code-block.md -->