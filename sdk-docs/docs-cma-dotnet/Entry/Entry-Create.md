---
title: "Create"
description: "The Create an entry call creates a new entry for the selected content type."
url: "https://www.contentstack.com/dotnet-management-entry-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Create

The Create an entry call creates a new entry for the selected content type.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | IEntry | Yes | — | IEntry for creating entry. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
ContentstackResponse

To create an entry, you need to prepare a custom model class that represents the entry's request body. To do so, create a separate EntryModel.cs file and add your custom EntryModel class, implementing IEntry interface, as follows:
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

The code below illustrates how to create an entry:

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
EntryModel model = new EntryModel();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry().Create(model);
```
