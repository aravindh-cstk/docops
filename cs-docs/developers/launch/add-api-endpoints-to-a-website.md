---
title: "[Contentstack Launch] - Add API Endpoints to a Website in Launch"
description: "Step-by-step guide to add API endpoints to a website in Launch using Cloud Functions."
url: https://www.contentstack.com/docs/launch/add-api-endpoints-to-a-website
product: Contentstack Launch
doc_type: how-to
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Contentstack Launch] - Add API Endpoints to a Website in Launch

This page explains how to add API endpoints to a website in Contentstack Launch by writing and deploying Cloud Functions. It is intended for developers who have access to Launch and need to expose simple API routes as part of a deployed Launch project.

## Add API Endpoints to a Website in Launch

Launch allows you to write [Cloud Functions](./cloud-functions.md) to create API endpoints.

This step-by-step guide lets you add API endpoints to a website in Launch.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization

## Steps for Execution

Follow the steps given below to write a Cloud Function that can be used to add API endpoints to a website in Launch.
- Create a folder named `/functions` under a source folder in your project’s root folder.
- Create a JavaScript file to code your functions and then save the file to the `/functions` folder.**Example**:

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

- Zip the source folder that contains the `/functions` folder.
- Deploy your project in Launch using one of the following methods:
      [Import from a Git Repository](./import-project-using-github.md)
- [Upload a file](./import-project-using-file-upload.md)

After successful deployment, you will see the Cloud Functions displayed in the log:The function endpoint is determined by its **file path** relative to `/functions`. The function runs when you visit the path: `/users`.
- Click the icon next to the URL in the **Domains** section to open the deployed website.![Launch_API-Endpoints-DeployInfo.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt110b1b9e92067afb/66056e8fcac0bc34a0c8589b/Launch_API-Endpoints-DeployInfo.png)In this example, the URL of the API endpoint will be `https://sample-test-api.devsampleapp.com/users`.
- On sending a request to the API Endpoint, you will see the following response:
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

## Common questions

### What determines the API endpoint path for a Cloud Function?
The function endpoint is determined by its **file path** relative to `/functions`.

### Where should Cloud Function files be placed in the project?
Create a folder named `/functions` under a source folder in your project’s root folder, and save the JavaScript file to the `/functions` folder.

### What URL should I use to access the deployed API endpoint?
In this example, the URL of the API endpoint will be `https://sample-test-api.devsampleapp.com/users`.

### What should I expect after deploying the project?
After successful deployment, you will see the Cloud Functions displayed in the log.