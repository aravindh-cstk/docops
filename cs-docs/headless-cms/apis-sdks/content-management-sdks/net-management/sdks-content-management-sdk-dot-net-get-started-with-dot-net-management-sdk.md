---
title: "Get Started with .NET Management SDK"
description: "Steps for getting started with .NET Management SDK"
url: /developers/sdks/content-management-sdk/dot-net/get-started-with-dot-net-management-sdk
---

# Get Started with .NET Management SDK

## Get Started with .NET Management SDK

This guide helps you get started with the Contentstack .NET Management SDK, which uses the Content Management APIs (CMA) to create, update, delete, and fetch content.

## Prerequisite

-   .NET 10 or later

## SDK Installation and Setup

Open the terminal and install the package using Package Manager:

```
PM> Install-Package contentstack.management.csharp
```

Or using .NET CLI:

```
dotnet add package contentstack.management.csharp
```

Import the SDK in your code:

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
```

Initialize a client:

```
using Contentstack.Management.Core;
var client = new ContentstackClient();
```

Or initialize with options:

```
using Contentstack.Management.Core;
var options = new ContentstackClientOptions
{
    Authtoken = "AUTHTOKEN"
};
var client = new ContentstackClient(options);
```

## Authentication

You can authenticate with one of these methods:

-   Authtoken
-   Login with credentials
-   Management token (stack-level token)

### Authtoken

An authtoken is a user-specific read-write token for CMA requests.

```
using Contentstack.Management.Core;
var options = new ContentstackClientOptions
{
    Authtoken = "AUTHTOKEN"
};
var client = new ContentstackClient(options);
```

### Login

To log in with user credentials:

```
using System.Net;
using Contentstack.Management.Core;
var credentials = new NetworkCredential("EMAIL", "PASSWORD");
var client = new ContentstackClient();
try
{
    ContentstackResponse response = client.Login(credentials);
}
catch (Exception)
{
    // Handle login failure
}
```

### Management Token

Management tokens are stack-level tokens not tied to a user.

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
var client = new ContentstackClient();
Stack stack = client.Stack("API_KEY", "MANAGEMENT_TOKEN");
```

## Initialize your SDK

### Basic Initialization

```
using Contentstack.Management.Core;
var options = new ContentstackClientOptions
{
    Authtoken = "AUTHTOKEN"
};
var client = new ContentstackClient(options);
```

### Set Region Host for Management SDK (CMA)

The .NET Management SDK uses the Content Management API (CMA) host configured through ContentstackClientOptions.Host.

By default, the SDK uses AWS North America (api.contentstack.io). Set Host when your stack is in a different region.

Use these host values for each Management API region:

-   AWS North America (AWS NA): api.contentstack.io
-   AWS Europe (AWS EU): eu-api.contentstack.com
-   AWS Australia (AWS AU): au-api.contentstack.com
-   Azure North America (Azure NA): azure-na-api.contentstack.com
-   Azure Europe (Azure EU): azure-eu-api.contentstack.com
-   GCP North America (GCP NA): gcp-na-api.contentstack.com
-   GCP Europe (GCP EU): gcp-eu-api.contentstack.com

Example: initialize the client for AWS Australia (AWS AU):

```
using Contentstack.Management.Core;
var options = new ContentstackClientOptions
{
    Host = "au-api.contentstack.com",
    Authtoken = "AUTHTOKEN"
};
var client = new ContentstackClient(options);
```

Example: use the same region-configured options and work with a specific branch:

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
var options = new ContentstackClientOptions
{
    Host = "au-api.contentstack.com",
    Authtoken = "AUTHTOKEN"
};
var client = new ContentstackClient(options);
Stack stack = client.Stack("API_KEY", "MANAGEMENT_TOKEN", "BRANCH");
```

For region configuration guidance across SDKs, see Selecting Region in SDKs.

### Set Branch

To work with a specific branch:

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
var client = new ContentstackClient();
Stack stack = client.Stack("API_KEY", "MANAGEMENT_TOKEN", "BRANCH");
```

### Proxy Configuration

You can define an HTTP proxy using ContentstackClientOptions:

```
using System.Net;
using Contentstack.Management.Core;
var contentstackConfig = new ContentstackClientOptions
{
    ProxyHost = "http://127.0.0.1",
    ProxyPort = 9000,
    ProxyCredentials = new NetworkCredential("username", "password"),
    Authtoken = "AUTHTOKEN"
};
var client = new ContentstackClient(contentstackConfig);
```

## Fetch Stack Details

Fetch stack details using a stack management token:

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
var client = new ContentstackClient();
Stack stack = client.Stack("API_KEY", "MANAGEMENT_TOKEN");
ContentstackResponse response = stack.Fetch();
var stackJson = response.OpenJsonObjectResponse();
```

## Create an Entry

Create a model implementing IEntry in EntryModel.cs:

```
using Contentstack.Management.Core.Abstractions;
using System.Text.Json.Serialization;
namespace TestModels
{
    public class EntryModel : IEntry
    {
        [JsonPropertyName("title")]
        public string Title { get; set; } = "";

        [JsonPropertyName("url")]
        public string Url { get; set; } = "";
    }
}
```

Create and upload an entry:

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using TestModels;
var client = new ContentstackClient();
Stack stack = client.Stack("API_KEY", "MANAGEMENT_TOKEN");
var entry = new EntryModel
{
    Title = "Your Entry Title",
    Url = "/your-url"
};
ContentstackResponse response = stack.ContentType("CONTENT_TYPE_UID").Entry().Create(entry);
```

## Upload Assets

Upload an asset to your stack:

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
var client = new ContentstackClient();
Stack stack = client.Stack("API_KEY", "MANAGEMENT_TOKEN");

var asset = new AssetModel(
    fileName: "sample.json",
    filePath: "/absolute/path/to/sample.json",
    contentType: "application/json",
    title: "Sample Asset"
);
ContentstackResponse response = stack.Asset().Create(asset);
```
