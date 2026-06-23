---
title: "[.NET Management] - Get Started with .NET Management SDK"
uid: bltb806e5a92ac9103a
url: /developers/sdks/content-management-sdk/dot-net/get-started-with-dot-net-management-sdk
contentstack:
  environment: production
  assets: []
  references:
    -
      uid: blt641003bf9368e112
      content_type: navigation
      title: null
      url: null
    -
      uid: bltf3d717677924b1bc
      content_type: navigation
      title: null
      url: null
    -
      uid: bltad056648cc311542
      content_type: navigation
      title: null
      url: null
    -
      uid: blt611405a877ef5f6b
      content_type: more_articles
      title: null
      url: null
    -
      uid: blt6f243ecbb5ed1810
      content_type: more_articles
      title: null
      url: null
    -
      uid: blt8fa0f7abf528dea9
      content_type: more_articles
      title: null
      url: null
---
# [.NET Management] - Get Started with .NET Management SDK

This page explains how to install, authenticate, and initialize the Contentstack .NET Management SDK, and shows basic examples (fetching stack details, creating entries, and uploading assets).

## Get Started with .NET Management SDK

This guide helps you get started with the Contentstack [.NET Management SDK](./about-dot-net-management-sdk.md), which uses the Content Management APIs (CMA) to create, update, delete, and fetch content.

## Prerequisite

- A .NET runtime compatible with the SDK targets (`netstandard2.0`, and `net471`/`net472` on Windows).

## SDK Installation and Setup

Open the terminal and install the package using Package Manager:

```powershell
PM> Install-Package contentstack.management.csharp
```

Or using .NET CLI:

```bash
dotnet add package contentstack.management.csharp
```

Import the SDK in your code:

```csharp
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
```

Initialize a client:

```csharp
using Contentstack.Management.Core;

var client = new ContentstackClient();
```

Or initialize with options:

```csharp
using Contentstack.Management.Core;

var options = new ContentstackClientOptions
{
    Authtoken = "AUTHTOKEN"
};

var client = new ContentstackClient(options);
```

## Authentication

You can authenticate with one of these methods:
- Authtoken
- Login with credentials
- Management token (stack-level token)

### Authtoken

An [authtoken](../../../create-tokens/types-of-tokens.md#authentication-tokens-authtokens) is a user-specific read-write token for CMA requests.

```csharp
using Contentstack.Management.Core;

var options = new ContentstackClientOptions
{
    Authtoken = "AUTHTOKEN"
};

var client = new ContentstackClient(options);
```

### Login

To log in with user credentials:

```csharp
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

[Management tokens](../../../create-tokens/about-management-tokens.md) are stack-level tokens not tied to a user.

```csharp
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

var client = new ContentstackClient();
Stack stack = client.Stack("API_KEY", "MANAGEMENT_TOKEN");
```

## Initialize your SDK

### Basic Initialization

```csharp
using Contentstack.Management.Core;

var options = new ContentstackClientOptions
{
    Authtoken = "AUTHTOKEN"
};

var client = new ContentstackClient(options);
```

### Set Region Host for Management SDK (CMA)

The .NET Management SDK uses the Content Management API (CMA) host configured through `ContentstackClientOptions.Host`.

By default, the SDK uses AWS North America (`api.contentstack.io`). Set `Host` when your stack is in a different region.

Use these host values for each Management API region:

- AWS North America (AWS NA): `api.contentstack.io`
- AWS Europe (AWS EU): `eu-api.contentstack.com`
- AWS Australia (AWS AU): `au-api.contentstack.com`
- Azure North America (Azure NA): `azure-na-api.contentstack.com`
- Azure Europe (Azure EU): `azure-eu-api.contentstack.com`
- GCP North America (GCP NA): `gcp-na-api.contentstack.com`
- GCP Europe (GCP EU): `gcp-eu-api.contentstack.com`

Example: initialize the client for AWS Australia (AWS AU):

```csharp
using Contentstack.Management.Core;

var options = new ContentstackClientOptions
{
    Host = "au-api.contentstack.com",
    Authtoken = "AUTHTOKEN"
};

var client = new ContentstackClient(options);
```

Example: use the same region-configured options and work with a specific branch:

```csharp
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

For region configuration guidance across SDKs, see [Selecting Region in SDKs](../../../contentstack-regions/selecting-region-in-sdks.md).

### Set Branch

To work with a specific branch:

```csharp
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

var client = new ContentstackClient();
Stack stack = client.Stack("API_KEY", "MANAGEMENT_TOKEN", "BRANCH");
```

### Proxy Configuration

You can define an HTTP proxy using `ContentstackClientOptions`:

```csharp
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

```csharp
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

var client = new ContentstackClient();
Stack stack = client.Stack("API_KEY", "MANAGEMENT_TOKEN");
ContentstackResponse response = stack.Fetch();
var stackJson = response.OpenJObjectResponse();
```

## Create an Entry

Create a model implementing `IEntry` in `EntryModel.cs`:

```csharp
using Contentstack.Management.Core.Abstractions;
using Newtonsoft.Json;

namespace TestModels
{
    public class EntryModel : IEntry
    {
        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("url")]
        public string Url { get; set; }
    }
}
```

Create and upload an entry:

```csharp
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

```csharp
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
