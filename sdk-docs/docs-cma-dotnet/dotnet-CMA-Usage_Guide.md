---
title: "Contentstack - .NET Management SDK"
description: "Contentstack - .NET Management SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
cms_uid: "blt4d9d5c4fb2e09ef8"
---

# Contentstack - .NET Management SDK

## .NET SDK for Contentstack's Content Management API

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favourite languages. Build your application frontend, and Contentstack will take care of the rest.

For more information, you can check out the GitHub page of our [.NET Management SDK](https://github.com/contentstack/contentstack-management-dotnet).

## Prerequisites

To get started with C#, you will need:

- .NET platform 3.1 and later
- IDE (Visual Studio)
- NuGet.

## SDK installation and setup

The .NET SDK provided by contentstack.io is available for Xamarin, Windows Phone and legacy .NET applications. You can integrate contentstack with your application by following these steps.

Open the terminal and install the contentstack module via 'Package Manager' command

```
PM> Install-Package contentstack.management.csharp
```

And via ‘.NET CLI’

```
dotnet add package contentstack.management.csharp
```

To import the SDK, use the following code:

```
using Contentstack.Management.Core;

ContentstackClient client = new ContentstackClient();
```

Or

```
using Contentstack.Management.Core;

ContentstackClientOptions options = new ContentstackClientOptions();
ContentstackClient client = new ContentstackClient(new OptionsWrapper<ContentstackClientOptions>(options));
```

## Quickstart in 5 mins

### Initializing Your SDK

To use the .NET CMA SDK, you need to first initialize it. To do this, use the following code:

```
using Contentstack.Management.Core;
ContentstackClient client = new ContentstackClient("AUTHTOKEN");
```

### Authentication

To use this SDK, you need to authenticate your users by using the Authtoken, credentials, or Management Token (stack-level token).

**Authtoken**
An Authtoken is a read-write token used to make authorized CMA requests, and it is a user-specific token.

```
ContentstackClientOptions options = new ContentstackClientOptions() {
   Authtoken: ‘AUTHTOKEN’
};
ContentstackClient client = new ContentstackClient(new OptionsWrapper<ContentstackClientOptions>(options));
```

**Login**

To log in to Contentstack, provide your credentials as shown below.

```
NetworkCredential credentials = new NetworkCredential("EMAIL", "PASSWORD");
ContentstackClient client = new ContentstackClient();
try
{
    ContentstackResponse contentstackResponse = client.Login(credentials);
} catch (Exception e)
{
}
```

**Management Token**

Management tokens are stack-level tokens with no users attached to them.

```
ContentstackClient client = new ContentstackClient();
client.Stack("API_KEY", "MANAGEMENT_TOKEN");
```

### Early Access Header

Integrating `EarlyAccess` headers into the `ContentstackClientOptions` grants access to features included in the early access program

```
var contentstackClient = new ContentstackClient(new ContentstackClientOptions()
{
    Authtoken = "token",
    EarlyAccess = new string[] { "ea1", "ea2" }
});
```

### Proxy Configuration

Contentstack allows you to define HTTP proxy for your requests with the .NET Management SDK. A proxied request allows you to anonymously access public URLs even from within a corporate firewall through a proxy server. Here is the basic syntax of the proxy settings that you can pass within fetchOptions of the .NET Management SDK:

```
var contentstackConfig = new ContentstackClientOptions();
contentstackConfig.ProxyHost = "http://127.0.0.1"
contentstackConfig.ProxyPort = 9000;
contentstackConfig.ProxyCredentials = new NetworkCredential(userName: "username", password: "password");
ContentstackClient client = new ContentstackClient(new
OptionsWrapper<ContentstackClientOptions>(options));
```

### Fetch Stack Details

To fetch your stack details through the SDK, use the following code:

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTHTOKEN");

Stack stack = client.Stack("API_KEY");
ContentstackResponse contentstackResponse = stack.Fetch();
var response = contentstackResponse.OpenJObjectResponse();
```

### Create an Entry

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
        [JsonProperty(propertyName: "uid")]
        public string Uid { get; set; }
    }
}
```

You can use the following code to create an entry in a specific content type of a stack through the SDK:

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

EntryModel entry = new EntryModel() {
 Title: 'Sample Entry',
 Url: '/sampleEntry'
}
ContentstackClient client = new ContentstackClient("AUTHTOKEN");
Stack stack = client.Stack("API_KEY");
ContentstackResponse contentstackResponse = stack.ContentType(“CONTENT_TYPE_UID”).Entry().Create(entry);
```

### Upload Assets

Use the following code snippet to upload assets to your stack through the SDK:

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTHTOKEN");
Stack stack = client.Stack("API_KEY");

var path = Path.Combine(Environment.CurrentDirectory, "path/to/file");
AssetModel asset = new AssetModel("Asset Title", path, "application/json");
ContentstackResponse response = stack.Asset().Create(asset);
```
