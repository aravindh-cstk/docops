---
title: "Get a single entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}?version={version_number}&locale={language_code}&include_workflow={boolean_value}&include_publish_details={boolean_value}
url: /get-a-single-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.076Z
updated_at: 2024-03-21T12:51:13.320Z
---

# Get a single entry

<p>The <span data-type='inlineCode'>Get a single entry</span> request fetches a particular entry of a content type.</p><p>The content of the entry is returned in JSON format. You can also specify the environment and locale of which you wish to retrieve the entries.</p><p><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.entries.management:read</span> scope. <br />Additionally, if you wish to fetch the metadata attached to each entry, then you need to pass <span data-type='inlineCode'>include_metadata</span> as a query parameter. Set this parameter to true to include the entry metadata along with all entries in the response body.</p><p>You will find the entry metadata under the <span data-type='inlineCode'>_metadata</span> key in the response. It will be associated with a specific extension UID as follows:</p><pre>"_metadata": {<br />    "extensions": {<br />        "{extension_uid}": [{<br />            "image_copyrights": "Contentstack Branding",<br />            "scope": "local"<br />        }]<br />    }<br />}<br /></pre><p class="tip"><strong>Tip:</strong> To include the publish details in the response, make use of the <span data-type='inlineCode'>include_publish_details</span> parameter and set its value to ‘true’. This query will return the publish details of the entry in every environment along with the version number that is published in each of the environment. In addition to entry publish details, the <span data-type='inlineCode'>include_publish_details</span> parameter also fetches the entry metadata publishing details in the response.<br /></p><p class="tip"><strong>Tip:&nbsp;</strong>Also, if no version is mentioned, this request will retrieve the latest published version of the entry. To retrieve a specific version, make use of the <span data-type='inlineCode'>version</span> parameter.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}?version={version_number}&locale={language_code}&include_workflow={boolean_value}&include_publish_details={boolean_value}`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry that you wish to fetch.</p>

## Query Parameters

- **version** (optional)
  <p>Enter the version number of the entry that you want to retrieve. However, to retrieve a specific version of an entry, you need to keep the <span data-type="inlineCode">environment</span> parameter blank.</p>
- **locale** (optional)
  <p>Enter the code of the language of which the entries need&nbsp;to be included. Only the entries published in this locale will be displayed.</p>
- **include_workflow** (optional)
  <p>Enter 'true' to include the workflow details of the entry.</p>
- **include_publish_details** (optional)
  <p>Enter 'true' to include the publish details of the entry.</p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
	"entry": {
		"title": "example",
		"url": "/example",
		"locale": "en-us",
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 1,
		"tags": [],
		"publish_details": [{
			"environment": "bltc15045c3098babcd",
			"version": 1,
			"locale": "en-us",
			"time": "2015-01-08T15:07:53.495Z",
			"user": "sys_bltd0f5afeabcd"
		}]
	}
}
```

