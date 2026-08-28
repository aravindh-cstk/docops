---
title: "Add API Endpoints to a Website in Launch"
description: "Learn how to create, test, and manage custom API endpoints in Contentstack Launch."
url: /launch/add-api-endpoints-to-a-website
uid: blta52d654583ca00dc
---

# Add API Endpoints to a Website in Launch

## Add API Endpoints to a Website in Launch

Launch allows you to write [Cloud Functions](/docs/launch/cloud-functions) to create API endpoints.

This step-by-step guide lets you add API endpoints to a website in Launch.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization

## What You Will Learn

-   How to write a Cloud Function that exposes an API endpoint.

-   How to package and deploy the function on Launch.

-   How to call the deployed API endpoint and read its response.


## Steps for Execution

Follow the steps given below to write a Cloud Function that can be used to add API endpoints to a website in Launch.

1.  Create a folder named /functions under a source folder in your project’s root folder.
2.  Create a JavaScript file to code your functions and then save the file to the /functions folder.

    **Example**:

    ```
    // functions/users.js

    export default function handler(request, response) {
        const users = [
          {name: "Jack", age: "25"},
          {name: "Rick", age: "28"},
          {name: "Jane", age: "34"},
        ];
        response.status(200).send(users);
      }
    ```

3.  Zip the source folder that contains the /functions folder.
4.  Deploy your project in Launch using one of the following methods:

    1.  [Import from a Git Repository](/docs/launch/import-project-using-github/)
    2.  [Upload a file](/docs/launch/import-project-using-file-upload/)

    After successful deployment, you will see the Cloud Functions displayed in the log:![Launch_API-Endpoints_CloudInLog.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc97bfbbebe7bc380/66056e90c3bc8b9dacdd0268/Launch_API-Endpoints_CloudInLog.png)The function endpoint is determined by its **file path** relative to /functions. The function runs when you visit the path: /users.
5.  Click the icon next to the URL in the **Domains** section to open the deployed website.![Launch_API-Endpoints-DeployInfo.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt110b1b9e92067afb/66056e8fcac0bc34a0c8589b/Launch_API-Endpoints-DeployInfo.png)In this example, the URL of the API endpoint will be https://sample-test-api.devsampleapp.com/users.
6.  On sending a request to the API Endpoint, you will see the following response:

    ```
    [
        {
          "name": "Jack",
          "age": "25"
        },
        {
          "name": "Rick",
          "age": "28"
        },
        {
          "name": "Jane",
          "age": "34"
        }
     ]
    ```
