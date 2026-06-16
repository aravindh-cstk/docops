---
title: "[Contentstack Launch] - Upload Your Deployment Zip File to Launch"
description: Upload your deployment ZIP file to a signed URL using values from the Get a Signed Upload URL call.
url: https://www.contentstack.com/docs/developers/launch/upload-your-deployment-zip-file-to-launch
product: Contentstack Launch
doc_type: api-guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Contentstack Launch] - Upload Your Deployment Zip File to Launch

This page explains how to upload a deployment ZIP file to a signed upload URL in Contentstack Launch. It is intended for developers integrating with the Launch API and should be used after obtaining a signed upload URL and any required headers/fields from the `Get a Signed Upload URL` call.

## Upload Your Deployment Zip File to Launch

The `Upload Your Deployment Zip File to Launch` request lets you upload your deployment's ZIP file to the signed URL.
Fill the fields with the values obtained from the `Get a Signed Upload URL` call.

**Method:**

This method is the `method` value from the `Get a Signed Upload URL` call response.

**URL:**

This URL is the `uploadUrl` value from the `Get a Signed Upload URL` call response.

**Request URL Parameters: NA**

**Request Query Parameters: NA**

**Request Headers:**

If the response from the `Get a Signed Upload URL` call includes headers, add those headers to this request.

**Example Header for Azure:**

```
x-ms-blob-type: BlockBlob
Content-Type: application/zip
```

**Example Header for GCP:**

```
x-goog-content-length-range: 1024,104857600
```

**Response Status: **`**204**`

**Request Body:**

If the response from the `Get a Signed Upload URL` call includes any fields, include them in the request body.

**Note:** The request body format varies depending on the cloud provider. Use the binary type for Azure and GCP, and form-data for AWS. In all cases, you must upload a ZIP file.

**Example Body for AWS:**

```
bucket=""
X-Amz-Algorithm=""
X-Amz-Credential=""
X-Amz-Date=""
X-Amz-Security-Token=""
key=""
Policy=""
X-Amz-Signature=""
file=@""
```

**Success Response: NA**

Now, proceed to the next step by selecting the required action item from the list below:
- [Create the project](/docs/developers/apis/launch-api#create-project)
- [Create the environment](/docs/developers/apis/launch-api#create-environment)
- [Create the deployment](/docs/developers/apis/launch-api#create-deployment)

## Common questions

**How do I know which HTTP method to use for the upload request?**  
Use the `method` value returned by the `Get a Signed Upload URL` call response.

**Do I always need to upload the ZIP file in the request body?**  
Yes. Uploading the ZIP file is required for all cloud providers.

**What content type should the request body use?**  
The request body must be of type `form-data`, and must also include the ZIP file to be uploaded.

**What should I do after receiving a 204 response status?**  
Proceed to the next step by selecting the required action item from the list: Create the project, Create the environment, or Create the deployment.