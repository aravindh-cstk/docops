---
title: "Delete publish rules"
description: /workflows/publishing_rules/{rule_uid}
url: /delete-publish-rules
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:04.673Z
updated_at: 2024-02-27T14:08:36.764Z
---

# Delete publish rules

<p>The <span data-type='inlineCode'>Delete Publish Rules</span>&nbsp;request allows you to delete an existing publish rule.&nbsp;<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.workflows.publishing-rules:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/workflows/publishing_rules/{rule_uid}`

**Method**: `DELETE`

## URL Parameters

- **rule_uid** (required)
  <p>Enter the UID of the publish rule that you want to delete.</p>

## Headers

- **api_key** (required)
  <p>Enter your stack API key</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

```json
{
	"notice": "Publish rule deleted successfully."
}
```

