---
title: "Code Block"
description: "The Code Block Connector executes the JavaScript code and returns the expected output."
url: /agent-os/code-block
---

# Code Block

## Code Block

The Code Block connector lets you execute the JavaScript code and returns the expected output to assist in complex data transformation. It helps developers and software engineers to automate the execution of small code snippets.

**Additional Resource:** JavaScript is an advanced programming language. For more information, refer to the [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) documentation.

## Set up the Code Block Connector

Perform the following steps to set up the Code Block action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Code Block** connector.  
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt346af1457fcb56aa/6684d76162008a267f10c62a/Select_Connector.png)
4.  Under **Choose an Action** tab, select the **JavaScript Code** action.  
    ![Select_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc6b4d45a991f298c/6625f55cbb6372773d1ddde7/Select_Action.png)
5.  On the **Javascript Code Configure Action** tab, enter the details given below:
    1.  Under the **Select Account** drop-down, select one of the accounts connected to your project. The sensitive information, such as access code, secret key, API key, etc., is fetched from the selected account.
        
        **Note:** _Select Account_ is an optional field. You can still configure the action without selecting an account.
        
        ![Select_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt240bb310b9bce0da/6625f55cb0ec770f52d6c630/Select_Account.png)
    2.  Provide the **Input Name** and **Input Value** you want to use in your JavaScript code. You can get the input data from the previous step.
    3.  Provide the **JavaScript Code** for execution.
        
        You can debug the code at multiple lines using the console.log code. This will help identify the errors or failures at different stages of the code.
        
        You can view the console.log in the payload, once you test the action as shown in step 8.
        
        ![Code_Block_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdbb1762e854c2e42/668243a2b6a6c8a2248fa935/Code_Block_Fields.png)
        
        **Note:**
        
        1.  The automation code uses [Node.js 18.x.x](https://nodejs.org/en/download/package-manager) version for executions.
        2.  The console.log output cannot be viewed in the payload if the string exceeds 4 kilobytes in length.
        
6.  Click **Proceed**.
7.  Click **Test Action** to test the configured action.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd8a729378083db06/6625f55cc9de461eead47388/Test_Action.png)You will get the response.  
    ![Save_and_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt28afb7b67c6f2894/6625f54fcac848005f28bd9d/Save_and_Exit.png)For unsuccessful execution, an error message is displayed. This message specifies the type of error and the line number of the error to trace the issue.  
    ![Error_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba23b821ef8d7639/6625f54eb054410a4399c3b5/Error_output.png)
8.  Once set, click **Save and Exit**. ![Save_Exit_Codeblock.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt98d84a71f9e9d8f2/668243a2b1132449753a3a5c/Save_Exit_Codeblock.png)

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

![Save_Exit_Use-Case.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaaf150488f15f979/6625f54fb054416fca99c3bd/Save_Exit_Use-Case.png)

**Note:** For such scenarios, using the HTTP Action connector is preferable. For more information, please refer to the [HTTP Action Connector](/docs/agent-os/http-action/) document.

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

![Valid_Email_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt942239ccf095b89a/6625f55c85518c6db355605f/Valid_Email_Output.png)

### Comparing the calendar dates

```
let today  = new Date();
let customDate = new Date("2019/08/03"); // (YYYY-MM-DD)

if (today.getTime() < customDate.getTime())
    return "today is lesser than customDate";
else if (today.getTime() > customDate.getTime())
    return "today is greater than customDate";
else
    return "both are equal";
```

![CustomDate_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf1af78a79e179d5/6625f54ec7544004b7cebb7b/CustomDate_Save_Exit.png)

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

![Save_Exit_Loadash.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltecc80ca301ef65ba/6625f54eb05441437a99c3b9/Save_Exit_Loadash.png)

### Generating Random Numbers

```
let min = 20.4;
let max = 29.8;

let randomNum = Math.random() * (max - min) + min;

return randomNum;
```

![Save_Exit_Random_Numbers.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f31d08d9bdb2745/6625f54eca88742626ed20fe/Save_Exit_Random_Numbers.png)

## Limitations

1.  The execution time limit is **5** seconds only.
2.  You can perform up to **10,000** code block executions per month per organization.
3.  You are not allowed to use external libraries, or to install or import **npm** **modules**. Only the **standard node.js** library and the fetch and lodash package are available in the Code Block connector.
