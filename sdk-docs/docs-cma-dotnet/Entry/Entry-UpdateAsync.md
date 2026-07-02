---
title: "UpdateAsync"
description: "The Update Entry call is used to update the content of an existing entry."
url: "https://www.contentstack.com/dotnet-management-entry-updateasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## UpdateAsync

The Update Entry call is used to update the content of an existing entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | IEntry | Yes | — | IEntry for updating entry. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
Task<ContentstackResponse>

To update an entry, you need to prepare a custom model class that represents the entry's request body. To do so, create a separate EntryModel.cs file and add your custom EntryModel class, implementing IEntry interface, as follows:

```
using Contentstack.Management.Core.Abstractions;
using Newtonsoft.Json;
namespace TestModels
{
	public class EntryModel : IEntry
    {
		public EntryModel()
		{
		}

        [JsonProperty(propertyName: "title")]
        public string Title { get; set; }

        [JsonProperty(propertyName: "url")]
        public string URL { get; set; }

        [JsonProperty(propertyName: "uid")]
        public string Uid { get; set; }

    }
}
```

Next, you need to set the data to the model. Here’s how you can do that:

```
EntryModel entryModel = new EntryModel()
{
    Title = "Your Entry Title",
    URL = "path/yoururl.com/example",
};
```

The code below illustrates how to update an entry

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
EntryModel model = new EntryModel();
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("ENTRY_UID").UpdateAsync(model);
```
