---
title: "Contentstack .NET Model Generator"
description: "Generate models from Contentstack content types via .NET CLI. Supports OAuth 2.0 and API key authentication for fast, secure, automated model creation."
url: /developers/sdks/content-delivery-sdk/dot-net/contentstack-dot-net-model-generator
---

# Contentstack .NET Model Generator

## Contentstack .NET Model Generator

Use the Contentstack .NET Model Generator to create C# model classes from content types in your [stack](/docs/headless-cms/about-stack).

## Requirements

**As of v1.0.0**, the Contentstack Model Generator targets **.NET 10.0** and requires the **.NET 10.0 SDK or later** to be installed before executing the commands. Versions prior to v1.0.0 targeted .NET 7.0.

## Installation

To install Contentstack model generator, run following command:

```
dotnet tool install —-global contentstack.model.generator
```

## Usage

Once you install contentstack.model.generator run the following command to view available commands:

```
Contentstack.model.generator --help
```

## Authentication Methods

The Contentstack Model Generator supports two authentication methods:

-   Authentication using Authtoken (default)
-   Authentication using OAuth 2.0

## Authentication using Authtoken

### Authentication Options

<table><colgroup data-width="806"><col style="width:17.1216%"><col style="width:25.5583%"><col style="width:57.3201%"></colgroup><tbody><tr><td><strong>Short key</strong></td><td><strong>Long Key</strong></td><td><strong>Description</strong></td></tr><tr><td>-a</td><td>--api-key</td><td>The stack API key for the <a href="/docs/developers/apis/content-management-api" target="_self">Content Management API</a>. This key is required for both traditional (Authtoken-based) and OAuth 2.0 authentication methods.</td></tr><tr><td>-A</td><td>--authtoken</td><td>Specifies the authtoken used for traditional API key authentication with the Content Management API.</td></tr><tr><td>-b</td><td>--branch</td><td>Specifies a branch of the stack to fetch content types and generate models.</td></tr><tr><td>-e</td><td>--endpoint</td><td>The Contentstack host for the Content Management API. The default value used is <span class="code">api.contentstack.io.</span></td></tr></tbody></table>

**Note:** OAuth 2.0–related flags (such as \--oauth, \--client-id, \--client-secret, etc.) are listed separately in the OAuth 2.0 options table.

### Model Generation Options

<table><colgroup data-width="944.9839351285189"><col style="width:26.455026455026452%"><col style="width:26.455026455026452%"><col style="width:47.089947089947096%"></colgroup><tbody><tr><td><strong>Short key</strong></td><td><strong>Long Key</strong></td><td><strong>Description</strong></td></tr><tr><td>-n</td><td>--namespace</td><td><p>Specifies the C# namespace to use for generated model classes.&nbsp;</p><p><strong>Example:</strong> <span class="code">MyProject.Models</span></p><p><strong>Default value: </strong><span class="code">ContentstackModels.</span></p></td></tr><tr><td>-N</td><td>--is-nullable</td><td>Enables nullable reference types to help prevent <span class="code">System.NullReferenceException</span> errors. Disable if it disrupts your workflow.</td></tr><tr><td>-f</td><td>--force</td><td>Overwrites existing model files without confirmation prompts.</td></tr><tr><td>-m</td><td>--modular-block-prefix</td><td>Adds a custom prefix to class names generated for Modular Block fields. Helps differentiate similar block names across content types. Default value: MB.</td></tr><tr><td>-g</td><td>--group-prefix</td><td>Adds a <strong>custom prefix</strong> to class names generated for <strong>Group</strong> fields. Prevents name collisions when multiple groups share identical names. Default value: Group.</td></tr><tr><td>-p</td><td>--path</td><td>Specifies the <strong>output directory</strong> where model files should be created. Defaults to the <strong>current working directory</strong> if not specified.</td></tr></tbody></table>

### Examples for Traditional API Key Authentication

**Example 1: Basic Usage**

To create classes in current directory run the following command:

```
contentstack.model.generator -a <stack_api_key> -A <authtoken>
```

**Example 2: Specific Path**

To create classes in specific path run the following command:

```
contentstack.model.generator -a <stack_api_key> -A <authtoken> -p /User/xxx/Desktop
```

**Example 3: With Namespace**

To create classes with namespace run the following command:

```
contentstack.model.generator -a <stack_api_key> -A <authtoken> -n YourProject.Models
```

**Example 4: With Nullable Annotations**

To allow nullable annotation context in model creation run the following command:

```
contentstack.model.generator -a <stack_api_key> -A <authtoken> -N
```

**Note:** Running multiple commands in succession overwrites the previously generated files if they share the same output path. Use unique directories or enable the \--force flag when you intend to replace existing files.

## Authentication Using OAuth 2.0

### OAuth 2.0 Commands

<table><colgroup data-width="854.9999999999995"><col style="width:35.789500000000004%"><col style="width:64.2105%"></colgroup><tbody><tr><td><strong>Long Key</strong>&nbsp;</td><td><strong>Description</strong>&nbsp;</td></tr><tr><td>--oauth&nbsp;</td><td>Enables OAuth 2.0 authentication for the tool. This option cannot be used together with traditional (Authtoken–based) authentication.&nbsp;</td></tr><tr><td>--client-id&nbsp;</td><td><p>Specifies the OAuth Client ID used for authentication. Use the default ID unless you're using a custom OAuth application.</p><p><strong>Default value</strong>: <span class="code">Ie0FEfTzlfAHL4xM</span></p></td></tr><tr><td>--client-secret&nbsp;</td><td>Specifies the OAuth Client Secret. Optional for public clients using PKCE&nbsp;</td></tr><tr><td>--redirect-uri&nbsp;</td><td><p>Specifies the Redirect URI.</p><p><strong>Default value:</strong><span class="code">&nbsp;http://localhost:8184</span></p></td></tr><tr><td>--app-id&nbsp;</td><td><p>Specifies the default OAuth Application ID for authentication. Provide a custom App ID if using a different OAuth application.</p><p><strong>Default value:</strong> <span class="code">6400aa06db64de001a31c8a9</span></p></td></tr><tr><td>--scopes&nbsp;</td><td>Defines one or more OAuth scopes for the authentication request. Scopes determine the level of access granted. Use space-separated values when specifying multiple scopes.</td></tr></tbody></table>

### OAuth 2.0 Setup

#### Prerequisites

-   [Contentstack account](/docs/headless-cms/set-up-your-account) with OAuth enabled.
-   [Create an OAuth application](https://www.contentstack.com/docs/developer-hub/contentstack-oauth) in your Contentstack dashboard

#### OAuth Flow

1.  **Authorization**: The tool displays the Contentstack OAuth authorization URL for you to open manually
2.  **Authentication**: Open the URL in your browser, log in to your Contentstack account and authorize the application
3.  **Callback**: You’ll be redirected to your specified redirect URI with an authorization code
4.  **Code Entry**: Copy the authorization code from the redirect URL and paste it into the tool
5.  **Token Exchange**: The tool automatically exchanges the code for an access token
6.  **Model Generation**: The tool fetches your content types and generates models
7.  **Logout**: The tool automatically logs out and clears tokens

**Note:** Auto-logout after model generation cannot be disabled. Tokens are session-specific and not reused by other SDKs or applications.

### Examples for OAuth 2.0 Authentication

**Example 1: OAuth with PKCE (Recommended)**

For public clients or enhanced security, use OAuth with PKCE:

```
contentstack.model.generator --oauth -a <stack_api_key> --client-id <client_id> --redirect-uri http://localhost:8184
```

**Example 2: OAuth with Client Secret**

For confidential clients with client secret:

```
contentstack.model.generator --oauth -a <stack_api_key> --client-id <client_id> --client-secret <client_secret> --redirect-uri http://localhost:8184
```

**Example 3: OAuth with App ID**

For OAuth with specific app and scopes:

```
contentstack.model.generator --oauth -a <stack_api_key> --client-id <client_id> --redirect-uri http://localhost:8184 --app-id <app_id>
```

**Example 4: OAuth with Custom Path and Namespace**

```
contentstack.model.generator --oauth -a <stack_api_key> --client-id <client_id> --redirect-uri http://localhost:8184 -p /path/to/models -n YourProject.Models
```

### OAuth Command Example

Here’s what you will see when running an OAuth command:

```
$ contentstack.model.generator --oauth -a <api_key> --client-id myclient123 --redirect-uri http://localhost:8184


OAuth Authentication Required
=============================

Please open the following URL in your browser to authorize the application:

https://app.contentstack.com/#!/apps/6400aa06db64de001a31c8a9/authorize?response_type=code&client_id=myclient123&redirect_uri=http%3A%2F%2Flocalhost%3A8184&code_challenge=...&code_challenge_method=S256

After authorization, you will be redirected to a local URL.
Please copy the 'code' parameter from the redirect URL and paste it here:

Authorization code: [paste the code here]

Exchanging authorization code for access token...
OAuth authentication successful!
Access token expires at: 2026-01-15 14:30:00 UTC
Fetching stack details for the provided API key.
No path specified. Generating files in the current working directory: /Users/you/project.
Fetching content types from My Contentstack Stack stack.
Found 5 content types.
Total content types fetched: 5.
Fetching global fields from stack: My Contentstack Stack.
Found 2 global fields.
Total global fields fetched: 2.
Generating files from content types.
Files created successfully.
Opening output directory: /Users/you/project.

Logging out from OAuth...
OAuth logout successful!
```

## Generated Code

**As of v1.0.0**, generated model files use **System.Text.Json** instead of Newtonsoft.Json:

-   Properties are decorated with \[JsonPropertyName("...")\] instead of \[JsonProperty(propertyName: "...")\].
-   Generated files reference System.Text.Json, System.Text.Json.Nodes, and System.Text.Json.Serialization instead of Newtonsoft.Json.
-   Generated converters (for embedded objects and modular blocks) inherit System.Text.Json.Serialization.JsonConverter<T> and implement Read/Write instead of Newtonsoft's JsonConverter<T> with ReadJson/WriteJson.

A generated model file looks like this:

```
using System;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Utils.Interfaces;

namespace ContentstackModels.Models
{
    public partial class BlogPost : IEmbeddedObject
    {
        public const string ContentType = "blog_post";
        [JsonPropertyName("uid")]
        public string Uid { get; set; }
        [JsonPropertyName("_content_type_uid")]
        public string ContentTypeUid { get; set; }
        [JsonPropertyName("title")]
        public string Title { get; set; }
    }
}
```

**Breaking change:** if you regenerate models for an existing project using v1.0.0 or later, the attributes and converter base classes in the output will change from the Newtonsoft-based shape to the System.Text.Json-based shape shown above. Update your consuming code and Contentstack .NET SDK versions accordingly before regenerating.

## Security and Troubleshooting

### Security Features

-   **PKCE Support**: Uses Proof Key for Code Exchange for enhanced security
-   **Client Secret Optional**: Supports both confidential and public clients
-   **Automatic Token Management**: Handles token refresh and expiration
-   **Secure Logout**: Automatically clears tokens after model generation

### Troubleshooting OAuth

-   **Invalid Redirect URI**: Ensure the redirect URI matches exactly what’s configured in your OAuth app
-   **Client ID/Secret Issues**: Verify your OAuth app credentials
-   **Network Issues**: Check your internet connection and Contentstack service status
-   **Permission Issues**: Ensure your account has the necessary permissions for the stack  
    

## MIT License

Copyright (c) 2012-2025 Contentstack

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
