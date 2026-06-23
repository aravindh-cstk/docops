---
title: "CMA | Publish Queue"
description: Inspect and manage queued publish and unpublish jobs, including status checks for Contentstack publishing operations.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/publish-queue
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Publish Queue

The **Publish Queue** displays the historical and current details of activities such as publish, unpublish, or delete that can be performed on entries and/or assets. It also shows details of Release deployments. These details include time, entry, content type, version, language, user, environment, and status.  
  
For more details, refer the [Publish Queue](/docs/content-managers/publish-content/view-publish-status-of-entries-assets-in-publish-queue) documentation.

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

## Get Publish Queue

### Get publish queue

**GET** `/publish-queue`

The Get publish queue request returns comprehensive information on activities such as publish, unpublish, and delete that have performed on entries and/or assets. This request also includes the details of the release deployments in the response body.  
To configure the permissions for your application via OAuth, please include the cm.publish-queue.management:read scope.

**Note**: You can retrieve the publish queue details for activities performed on entries and/or assets of your stack in the last 30 days. To retrieve publish queue details for nested reference published tasks, pass api_version parameter as **3.2** in the **Headers** section.

You can apply various queries such as [count](https://www.contentstack.com/docs/developers/apis/content-delivery-api/#count), [limit](https://www.contentstack.com/docs/developers/apis/content-delivery-api/#limit), bulkJobId, include_job_details: true/false, etc. to filter the results. Refer to the [Queries](/docs/developers/apis/content-delivery-api#queries) section for more details.

Now, you can limit the number of bulk job details in the response body to **25** items. Also, you can view the summary of your bulk jobs within the summary key in the response body.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the 'branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (required)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`

#### Sample Response

```json
{
    "queue": [
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.900Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.900Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "hi-in",
                "version": 1,
                "title": "ct5-entry1-hi-in",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.862Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "b51cd99f-3b77-5d5a-bf86-19ad787107c0",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.891Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.891Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "hi-in",
                "version": 1,
                "title": "ct5-entry1-hi-in",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blte98201bbf32307b0"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.862Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "19044a26-70b2-5d07-a32e-88c15fa6c6ba",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.882Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.882Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "hi-in",
                "version": 1,
                "title": "ct5-entry1-hi-in",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blt77f78d0838d7aade"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.862Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "27971fe2-2582-55e9-829f-82294553370e",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.872Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.872Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "hi-in",
                "version": 1,
                "title": "ct5-entry1-hi-in",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blt79075cd84751ceac"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.862Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "a3434a9b-1a59-5ae8-a16b-7ed314990f6d",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.860Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.860Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "807b7d72-468e-5d85-af07-d1b432ef83a4",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.813Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.813Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "8dc071ee-a4b6-541e-8cde-bf8bdc2dbb0f",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.801Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.801Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blte98201bbf32307b0"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "1a26e4bf-1bea-575e-8fee-5744d0aee539",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.790Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.790Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blte98201bbf32307b0"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "1ab03abe-0247-5e79-a5a4-e94e53712cac",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.781Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.781Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blt77f78d0838d7aade"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "070e2fa0-fa1c-587d-98fb-f9b9134a6333",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.772Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.772Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blt77f78d0838d7aade"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "bf5fc540-f42f-55cb-b2f8-806118105c0a",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.763Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.763Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blt79075cd84751ceac"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "d2455778-dfe6-5de1-b4d4-746f657e093c",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.753Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.753Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blt79075cd84751ceac"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "f483b3c9-b127-55fc-b286-483c30a8f284",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.711Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.711Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "bltc3c07d8e15a19de6"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "a7fb8d77-73b1-5a2d-a570-cdd09b0e03a5",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.709Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.709Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "bltc3c07d8e15a19de6"
            },
            "environment": [
                "blte98201bbf32307b0"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "139739db-7b7a-5d86-99ef-3fa72fcf55ba",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.708Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.708Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "bltc3c07d8e15a19de6"
            },
            "environment": [
                "blt77f78d0838d7aade"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "55e560f8-eb00-5df3-a826-66abbdc538dc",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.706Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.706Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "bltc3c07d8e15a19de6"
            },
            "environment": [
                "blt79075cd84751ceac"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "9da7827f-da70-574e-9d1c-ca64d3e0d5a3",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.639Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.639Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "f04e9642-0878-530d-b468-47830d6cabed",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.638Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.638Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "969a51ec-6308-585b-aa4c-7fcb2fcc2659",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.636Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.636Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "blte98201bbf32307b0"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "1d9fcfd0-13e1-538c-bda2-03aee9c950ef",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.635Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.635Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "blte98201bbf32307b0"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "a9745880-f7e2-5fe0-866a-52dc20ab70c0",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.633Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.633Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "blt77f78d0838d7aade"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "d0a31411-9476-502d-9e8a-0bcc6547abdd",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.631Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.631Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "blt77f78d0838d7aade"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "72bdcd17-7ffc-5a9a-a078-5d25d5a25808",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.630Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.630Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "blt79075cd84751ceac"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "d538224f-d1a3-5289-8870-c50276929fc4",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.628Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.628Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "blt79075cd84751ceac"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "31678107-98cf-56c5-9dc0-7a4ac47bd59e",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.560Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.560Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "en-us",
                "version": 2,
                "title": "Child Entry - Level 5",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "mr-in"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.410Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "f8489855-90c1-50c6-818a-e04da9d1d51b",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        }
    ],
    "jobDetails": {
        "approval": false,
        "approved": true,
        "rejected": false,
        "created_at": "2023-06-08T12:20:46.796Z",
        "created_by": "bltbb063a2a53a012c0",
        "updated_at": "2023-06-08T12:20:51.003Z",
        "updated_by": "bltbb063a2a53a012c0",
        "user": "bltbb063a2a53a012c0",
        "action": "publish",
        "entry": {
            "title": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "uid": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        "environment": [
            "blt79075cd84751ceac",
            "blt77f78d0838d7aade",
            "blte98201bbf32307b0",
            "bltbfd5336db8928d6a"
        ],
        "locale": [
            "en-us",
            "ar",
            "fr",
            "hi-in",
            "ja",
            "mr-in",
            "es"
        ],
        "publish_details": {
            "status": "complete",
            "recordsCount": 392,
            "process_count": 392
        },
        "published_at": "2023-06-08T12:20:51.003Z",
        "stack": "blt7ba9bf271af8ee2b",
        "type": "bulk-job",
        "uid": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
        "publish_with_reference": true,
        "summary": {
            "top_level_items": 2,
            "total_processed": 392,
            "success": 189,
            "unsuccess": 0,
            "approvals": 7,
            "skip": 196
        }
    }
}
```




## Get Publish Queue Activity

### Get publish queue activity

**GET** `/publish-queue/{publish_queue_uid}`

The Get publish queue activity request returns comprehensive information on a specific publish, unpublish, or delete action that was performed on an entry and/or asset. You can also retrieve details of a specific release deployment.  
To configure the permissions for your application via OAuth, please include the cm.publish-queue.management:read scope.

**Note**: You can retrieve the publish queue details for activities performed in the last **30** days only.

You can apply queries to filter the results. Refer to the [Queries](/docs/developers/apis/content-management-api#authentication) section for more details.

#### URL Parameters

- **publish_queue_uid** (required)
  Enter the UID of a specific publish queue activity of which you want to retrieve the details. Execute the [Get publish queue](/docs/developers/apis/content-management-api#get-publish-queue) API request to retrieve the UID of a particular publish queue activity.
  Default: `your_publish_queue_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the 'branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter your stack API Key.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (required)
  Enter the API version.
  Default: `3.2`

#### Sample Response

```json
{
    "entry": {
        "_id": "blt7632hgshdg7236236733",
        "uid": "entry_uid",
        "stack": "stack_api_key",
        "created_at": "2020-06-09T06:48:46.461Z",
        "updated_at": "2020-06-09T06:48:46.461Z",
        "created_by": "user_uid",
        "updated_by": "user_uid",
        "type": "entry",
        "content_type": {
            "title": "Author Details",
            "uid": "author_details"
        },
        "publish_details": {
            "status": "success"
        },
        "entry": {
            "title": "Author 2",
            "uid": "user_uid",
            "locale": "en-us",
            "version": 1
        },
        "locale": [
            "en-us"
        ],
        "environment": [
            "environment_uid"
        ],
        "action": "publish",
        "published_at": "2020-06-09T06:48:46.410Z",
        "user": "user_uid",
        "approval": false,
        "approved": true,
        "rejected": false
    }
}
```




## Cancel Scheduled Action

### Cancel scheduled action

**GET** `/publish-queue/{publish_queue_uid}/unschedule`

The Cancel Scheduled Action request will allow you to cancel any scheduled publishing or unpublishing activity of entries and/or assets and also cancel the deployment of releases.  
To configure the permissions for your application via OAuth, please include the cm.publish-queue.management:write scope.

**Note**: You must pass api_version:3.2 parameter in the **Header** section of the request to enable Nested References Publishing.

#### URL Parameters

- **publish_queue_uid** (required)
  Enter the UID of the event to be cancelled in the publish queue.
  Default: `bltc2bbdb4a01c313a2cb3b`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (required)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`

#### Sample Response

```json
{
    "notice": "Entry unscheduled successfully."
}
```

