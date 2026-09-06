---
title: "Marketplace App Manifest"
description: "Discover the essential properties of an App Manifest file, including name, type, description, icon, target type, framework version, and version."
url: /developer-hub/app-manifest
uid: blt154bec0a078ac59f
---

# Marketplace App Manifest

## Marketplace App Manifest

The App Manifest represents an app within Contentstack, encapsulating the app's identity, locations, and permissions within the ecosystem. This foundational entity holds crucial metadata necessary for the installation, management, and behavior of an app while it operates within Contentstack.

Users can view the app’s manifest by clicking the respective app and navigating to the “App Manifest” section. Users who can manage the app have access to the full view of the manifest, while other users in the organization can access the basic view of the app manifest.

Highlighted below is a comprehensive guide to understanding the significance, structure and management of App Manifest components such as the app's name, description, visibility settings, event interactions, and authorization scopes.

Supported Attributes for App Manifest:

-   [UID (System Defined)](#uid-system-defined)
-   [Name (Required)](#name-required)
-   [Description (Optional)](#description-optional)
-   [Target Type (Optional)](#target-type-optional)
-   [Framework Version (System Defined)](#framework-version-system-defined)
-   [Version (System Defined)](#version-system-defined)
-   [Visibility (System Defined)](#visibility-system-defined)
-   [UI Location (Optional)](#ui-location-optional)
-   [Webhook (Optional)](#webhook-optional)
-   [OAuth (System Defined)](#oauth-system-defined)
-   [Advanced Settings (Optional)](#advanced-settings-optional)
-   [Hosting (System Defined)](#hosting-system-defined)
-   [Organization UID (System Defined)](#organization-uid-system-defined)
-   [Created By (System Defined)](#created-by-system-defined)
-   [Updated By (System Defined)](#updated-by-system-defined)
-   [Created At (System Defined)](#created-at-system-defined)
-   [Updated At (System Defined)](#updated-at-system-defined)

## App Manifest Example

Let’s look at an example of an App Manifest.

```
{
  "uid": "659e7d2a3079300012b23803",
  "name": "My Awesome App",
  "description": "This app does wonders",
  "target_type": "stack",
  "visibility": "private",
  "framework_version": "1.0",
  "version": 2,
  "ui_location": {
    "locations": [
      {
        "type": "cs.cm.stack.sidebar",
        "meta": [
          {
            "uid": "659e7e0cf****5626786803e",
            "path": "/sidebar",
            "enabled": true,
            "required": false,
            "signed": true,
            "description": "This app provides some wonderful insights about your entry"
          }
        ]
      }
    ]
  },
  "webhook": {
    "enabled": true,
    "custom_headers": [],
    "http_basic_auth": "username",
    "http_basic_password": "password",
    "target_url": "https://example.com/webhook",
    "channels": [
      "cs.apps.installations.install",
      "content_types.entries.create"
    ],
    "notifiers": [],
    "branch_scope": "$all"
  },
  "oauth": {
    "client_id": "ox_Hxe74BKqBo-DQ",
    "client_secret": "dWhzhSIccR******-***ShB8wLtzUA",
    "redirect_uri": "https://example.com/oauth/callback",
    "user_token_config": {
      "enabled": false,
      "scopes": [],
      "allow_pkce": false
    },
    "app_token_config": {
      "enabled": false,
      "scopes": []
    }
  },
  "hosting": {
       "provider": "external",
       "deployment_url": "http://localhost:3000"
  },
  "advanced_settings": {
      "variables": {
         "AI_API_KEY": "app_ai_api_key"
       },
      "mappings": {
         "WEBHOOK_URL": "notifications.webhook"
       },
      "rewrites": [
          {
             "source": "/v1/*rest",
            "destination": "https://api.ai.com/v1/*rest"
          }
      ]
  },
  "organization_uid": "blte***e9b6abc4d33c",
  "created_by": {
    "uid": "blt0c2c***ec5a7bde6"
  },
  "updated_by": {
    "uid": "blt0c2c***ec5a7bde6"
  },
  "created_at": "2024-01-10T11:19:06.029Z",
  "updated_at": "2024-01-10T11:22:52.268Z"
}
```

## Manifest Properties

### **UID** (System Defined)

**Type:** string

**Description:** Specifies the unique identity of the app.

**Code:** "uid": "659e7d2a3079300012b23803"

### Name (Required)

**Type:** string

**Description:** Specifies a name of the app. This name is used across multiple locations where the app appears.

**Minimum length:** 3

**Maximum length:** 20

**Code:** name: "My Awesome App"

### Description (Optional)

**Type:** string

**Description:** Specifies a short description of the app.

**Maximum length:** 2000

**Code:** description: "This app does wonders"

### Target Type (Optional)

**Type:** string

**Description:** Specifies the [type](/docs/developer-hub/types-of-apps) of the app.

The Target Type property can be defined as either "stack" or "organization". This specifies whether the app can be installed at the stack level or organization level. If this property is not specified, the app is considered a stack app by default. This property once defined, **cannot** be modified later.

**Code:** target\_type: "stack"

### Framework Version (System Defined)

**Type:** string

**Description:** Specifies the framework version used while creating your app.

The Contentstack Apps Framework uses versioning to maintain compatibility with existing applications, ensuring that framework modifications do not disrupt apps unexpectedly.

**Code:** "framework\_version": "1.0"

### Version (System Defined)

**Type:** number

**Description:** Specifies the version number of the app.

The version number will be displayed next to your app's name during the app installation. Initially, the app is generated with the version number 1 and thereafter, it auto-increments with each subsequent update.

**Code:** "version": 1

### Visibility (System Defined)

**Description:** Specifies whether the app is private or not.

The Visibility property can be defined as private, public, or public\_unlisted. By default, newly created apps are set as private, allowing installation only within the app developer's organization. When an app is marked as public or public\_unlisted, it becomes available for installation in any Contentstack organization. Public apps are listed on the Contentstack Marketplace, while public\_unlisted apps require the developer to provide the installation URL for access.

**Code:** visibility: "private"

### UI Location (Optional)

**Description:** Specifies where the app will be visible.

The UI Location specifies where the app appears in the product interface, and enables configuration of location-specific options. You can specify multiple locations for an app. Also, some framework APIs are available only to apps in certain locations. See [About UI Locations](/docs/developer-hub/about-ui-locations) for more information.

The ui\_location configuration contains a list of _locations_, each specifying its type and individual meta configurations.

Let's take a look at the list of all location types supported by an **organization** app:

<table><tbody><tr><td><strong>Location</strong></td><td><strong>Configuration</strong></td></tr><tr><td>App Config Location</td><td><p><span class="code">cs.org.config</span></p></td></tr></tbody></table>

Now, let's explore the list of all location types supported by a **stack** app:

<table><tbody><tr><td><strong>Location</strong></td><td><strong>Configuration</strong></td></tr><tr><td>Custom Field UI Location</td><td><p><span class="code">cs.cm.stack.custom_field</span></p></td></tr><tr><td>Dashboard UI Location</td><td><p><span class="code">cs.cm.stack.dashboard</span></p></td></tr><tr><td>Asset Sidebar Location</td><td><p><span class="code">cs.cm.stack.asset_sidebar</span></p></td></tr><tr><td>App Config Location</td><td><p><span class="code">cs.cm.stack.config</span></p></td></tr><tr><td>RTE Location</td><td><p><span class="code">cs.cm.stack.rte</span></p></td></tr><tr><td>Full Page Location</td><td><p><span class="code">cs.cm.stack.full_page</span></p></td></tr><tr><td>Field Modifier Location</td><td><p><span class="code">cs.cm.stack.field_modifier</span></p></td></tr><tr><td>Sidebar Location</td><td><p><span class="code">cs.cm.stack.sidebar</span></p></td></tr></tbody></table>

Properties that may be specified for each location:

-   name _(optional)_: Specifies the name of the location. This will be displayed at the location after app installation. If this property is not specified, the app name is used as the location name. For multiple configurations of the same location, ensure each has a distinct and appropriate unique name.
-   signed _(optional)_: When enabled, Contentstack adds a JWT Token to the initial HTTP request made for your app's first page. This token can be used to verify if the request originated from Contentstack. Please refer [Signed Locations](/docs/developer-hub/securing-your-app/) for more information.
-   path (optional): Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
-   enabled _(_optional_)_: Allows you to define whether the location is visible after the app installation. By default, a location without this property is treated as enabled. Users can manage this option post-installation by accessing the UI Locations tab on the configuration screen.
-   required _(optional)_: When enabled, the location becomes mandatory and cannot be disabled after the app's installation. Locations without this property are, by default, considered optional.

**Code:**

```
"ui_location": {
    "locations": [
      {
        "type": "cs.cm.stack.sidebar",
        "meta": [
          {
            "uid": "659e7e0cf****5626786803e",
            "path": "/sidebar",
            "enabled": true,
            "required": false,
            "signed": true,
            "description": "This app provides some wonderful insights about your entry"
          }
        ]
      }
    ]
  }
```

### Webhook (Optional)

A [webhook](/docs/developer-hub/managing-webhooks-in-an-app) provides a mechanism or a method for enabling real-time communication and data exchange between Contentstack and your application.

Properties that can be specified for a webhook:

-   enabled _(_required_)_: Allows you to define whether the webhook is active after the app installation. Users can view execution logs of the webhook post-installation by accessing the Webhook tab on the configuration screen.
-   target\_url _(required)_: This URL will receive a notification when the webhook is triggered. Only HTTPS endpoints are allowed, and localhost is not supported. To secure the target\_url with basic authorization, provide the necessary details in the http\_basic\_auth and http\_basic\_password fields. You can also provide _custom\_headers_ to further secure the URL.
-   channels (_required)_: Channels describe the list of all events for which the webhook is subscribed. Below is a complete list of all events supported by the Contentstack App Framework:  

    <table><tbody><tr><td><strong>Method</strong></td><td><strong>Description</strong></td></tr><tr><td>cs.apps.installations.install</td><td>App installed</td></tr><tr><td>cs.apps.installations.uninstall</td><td>App uninstalled</td></tr><tr><td>cs.apps.installations.update</td><td>App installation updated</td></tr><tr><td>cs.apps.installations.upgrade</td><td>App version updated</td></tr><tr><td>content_types.entries.create</td><td>Any entry is created</td></tr><tr><td>content_types.entries.update</td><td>Any entry is updated</td></tr><tr><td>content_types.entries.delete</td><td>Any entry is deleted</td></tr><tr><td>content_types.entries.environments.publish.success</td><td>An entry is successfully published in any environment</td></tr><tr><td>content_types.entries.environments.unpublish.success</td><td>An entry is successfully unpublished from any environment</td></tr><tr><td>content_types.create</td><td>New content type is created</td></tr><tr><td>content_types.update</td><td>Any content type is updated</td></tr><tr><td>content_types.delete</td><td>Any content type is deleted</td></tr><tr><td>assets.create</td><td>New asset is created</td></tr><tr><td>assets.environments.publish.success</td><td>An asset is successfully published in any environment</td></tr><tr><td>assets.update</td><td>Any asset is updated</td></tr><tr><td>assets.delete</td><td>Any asset is deleted</td></tr><tr><td>assets.environments.unpublish.success</td><td>An asset is successfully unpublished from any environment</td></tr><tr><td>global_fields.create</td><td>New global field is created</td></tr><tr><td>global_fields.update</td><td>Any global field is updated</td></tr><tr><td>global_fields.delete</td><td>Any global field is deleted</td></tr><tr><td>releases.environments.deploy</td><td>Any release deployed on all environments</td></tr><tr><td>branch.create-initiated</td><td>When branch creation is initiated</td></tr><tr><td>branch.create-completed</td><td>When branch creation is completed</td></tr><tr><td>branch.delete-initiated</td><td>When the branch deletion is initiated</td></tr><tr><td>branch.delete-completed</td><td>When the branch deletion is completed</td></tr><tr><td>branch_alias.assigned</td><td>When the branch alias is assigned</td></tr><tr><td>branch_alias.unassigned</td><td>When the branch alias is unassigned</td></tr></tbody></table>

-   notifiers _(optional)_: Notifiers specify the list of email addresses to notify whenever the [Circuit Breaker](/docs/headless-cms/webhook-circuit-breaker) disables the webhook. By default, the creator of the app and the user who installs it will receive notifications. However, for additional users to receive alerts, configuration is necessary. Contentstack sends the email alert to the specified user(s).

**Code:**

```
"webhook": {
    "enabled": true,
    "custom_headers": [],
    "http_basic_auth": "username",
    "http_basic_password": "password",
    "target_url": "https://example.com/webhook",
    "channels": [
      "cs.apps.installations.install",
      "content_types.entries.create"
    ],
    "notifiers": [],
    "branch_scope": "$all"
  }
```

### OAuth (System Defined)

Contentstack enables external applications and services to access its APIs using the OAuth 2.0 protocol. During app creation, OAuth configuration is set, and users can later update details like redirect URL and scopes for both user and app token configurations. These settings are essential for generating an access token, granting access to the Contentstack APIs.

Properties that can be specified for a configuring OAuth:

-   client\_id _(system defined)_: Identifies your application and frequently appears in the OAuth negotiation URLs.
-   client\_secret _(system defined)_: Acts as a secret credential when exchanging tokens with Contentstack.
-   redirect\_uri _(required)_: The Redirect URL is where the authorization server sends users after they've successfully authorized the app. It's important to keep this URL secure to prevent redirection to random places. Developers need to register one or more redirect URLs when setting up the app. Users can set up to **10** redirect URLs, and the first one listed becomes the default.
-   user\_token\_config _(system defined)_: Specifies the scopes and allow\_pkce options for user token flow.
-   app\_token\_config _(system defined)_: Specifies the scopes for app token flow.

**Code:**

```
"oauth": {
    "client_id": "ox_Hxe74BKqBo-DQ",
    "client_secret": "dWhzhSIcc***********B8wLtzUv",
    "redirect_uri": "https://example.com/oauth/callback",
    "user_token_config": {
      "enabled": false,
      "scopes": [],
      "allow_pkce": false
    },
    "app_token_config": {
      "enabled": false,
      "scopes": []
    }
  }
```

### Advanced Settings (Optional)

**Note:** This document contains technical information about the structure of advanced settings.

```
{
 "advanced_settings": {
    "variables": {
      "AI_API_KEY": "app_ai_api_key"
    },
    "mappings": {
      "WEBHOOK_URL": "notifications.webhook"
    },
    "rewrites": [
      {
        "source": "/v1/*rest",
        "destination": "https://api.ai.com/v1/*rest"
      }
    ]
  },
}
```

**Description:** Settings to make secure external API calls from apps without maintaining backend servers.

Advanced settings include the following properties:

#### Variables (Optional)

**Description:**  
[Variables](/docs/developer-hub/introduction-to-advanced-settings#variables) provide a secure way to store sensitive information, such as API keys, tokens, and secrets, as encrypted key–value pairs. These credentials are never exposed in the frontend and are automatically shared across all installations of an app.

**Purpose:**  
Used to securely inject secrets into API requests made with appSdk.api(), eliminating the need to hardcode credentials in frontend code or maintain a custom backend for secret management.

#### Mappings (Optional)

**Description:**  
[Mappings](/docs/developer-hub/introduction-to-advanced-settings#mappings) act as dynamic references to values defined in the **Server Configuration**. At runtime, each mapping automatically resolves to an installation-specific or environment-specific value.

**Purpose:**  
Enables app administrators or customers to define flexible, context-dependent values, such as webhook URLs or tenant-specific API keys, without exposing them in frontend code.

#### Rewrites (Optional)

**Description:**  
[Rewrites](/docs/developer-hub/introduction-to-advanced-settings#rewrites) define rules that transform incoming API request paths into destination URLs. They provide cleaner, consistent request patterns within the app while abstracting complex or changing external endpoints.

**Purpose:** Simplifies and secures API routing by mapping user-friendly paths to complex or environment-specific endpoints behind the scenes.

Each rewrite rule has two parts:

| Field | Description |
| --- | --- |
| source | The relative request path pattern your app uses (e.g., /users/:userId/profile) |
| destination | The absolute URL or mapping that the request should be rewritten to (e.g., https://api.example.com/v1/accounts/:userId/profile) |

At runtime, when a call is made to the source path, Contentstack rewrites the request to the destination URL.

##### **Supported Pattern Types:**

| Pattern type | Syntax | Description | Example |
| --- | --- | --- | --- |
| Path Parameter | :param | Matches a single path segment | /user/:id matches /user/123 |
| Wildcard | \*param | Matches one or more segments | /docs/\*path matches /docs/setup/api |
| Optional | {/:param} | Defines optional segments | /help{/:lang}/faq matches /help/faq and /help/en/faq |

##### **Example Rewrite Rules**

**User profile API**

```
{
  "source": "/users/:userId/profile",
  "destination": "https://api.myapp.com/v1/accounts/:userId/profile"
}
```

/users/123/profile → https://api.myapp.com/v1/accounts/123/profile

**Product details**

```
{
  "source": "/products/:sku",
  "destination": "https://catalog.example.com/items/:sku"
}
```

/products/ABC123 → https://catalog.example.com/items/ABC123

**Optional language parameter**

```
{
  "source": "/help{/:lang}/faq",
  "destination": "https://support.example.com/docs{/:lang}/faq"
}
```

/help/faq → https://support.example.com/docs/faq

/help/en/faq → https://support.example.com/docs/en/faq

**Admin dashboard with optional section**

```
{
  "source": "/admin{/:section}",
  "destination": "https://internal.api.com/dashboard{/:section}"
}
```

/admin/settings → https://internal.api.com/dashboard/settings

/admin → https://internal.api.com/dashboard

**Wildcard for nested documentation**

```
{
  "source": "/docs/*path",
  "destination": "https://docs.example.com/en/*path"
}
```

/docs/guides/api/setup → https://docs.example.com/en/guides/api/setup

##### **Rewrite Rule Constraints:**

-   Source Path must:
    -   Be relative (starts with /)
    -   Use only supported patterns: :, \*, {}
-   Source Path must not:
    -   Include query parameters (?key=value)
    -   Use absolute URLs
-   Destination Path must:
    -   Be an absolute URL
    -   Use placeholders that match the source pattern

##### **Rule Execution:**

-   Rules are **evaluated top-down** in the order defined.
-   The **first matching rule is applied**.
-   Place **specific rules before generic** wildcard-based ones to avoid unintended matches.

**Code:**

```
{
  "advanced_settings": {
    "variables": {
      "AI_API_KEY": "app_ai_api_key"
    },
    "mappings": {
      "WEBHOOK_URL": "notifications.webhook"
    },
    "rewrites": [
      {
        "source": "/v1/*rest",
        "destination": "https://api.ai.com/v1/*rest"
      }
    ]
  },
}
```

### Hosting (System Defined)

For an app to be accessible, Contentstack needs to know the URL of the app. Initially, during app creation, the default URL is set to

```
http://localhost:3000
```

. You can later update it to match wherever your app is running. For frontend apps, there's also the option to [host directly with Launch](/docs/developer-hub/app-hosting#hosting-with-launch).

Properties that may be required to be specified when configuring hosting:

-   provider _(required)_: A provider determines the type of hosting option you have configured. Currently, we support two providers: launch and external. When configuring hosting with Launch, you must provide details such as project\_uid, environment\_uid, and the deployment URL. However, if you opt for an external provider, only the deployment URL needs to be specified.
-   deployment\_url _(required)_: Contentstack uses this public URL to access your application. During development, you may choose to use localhost. However, for the app to be accessible to others, it needs to be hosted on the internet.

**Code:**

```
"hosting": {
    "provider": "external",
    "deployment_url": "http://localhost:3000"
  }
```

### Organization UID (System Defined)

**Description:** Specifies the organization in which the app is created.

**Code:** "organization\_uid": "bltb00c436e709d1865"

### Created By (System Defined)

**Description:** Specifies the identity of the user who created this app.

**Code:** "created\_by": {"uid":"blt65a\*\*\*\*e72183ade"}

### Updated By (System Defined)

**Description:** Specifies the identity of the user who last updated the app.

**Code:** "updated\_by": {"uid":"blt65a\*\*\*\*e72183ade"}

### Created At (System Defined)

**Description:** Specifies the timestamp when the app was created.

**Code:** "created\_at": "2021-07-06T05:02:58.868Z"

### Updated At (System Defined)

**Description:** Specifies the timestamp when the app was last updated.

**Code:** "updated\_at": "2021-07-06T05:02:58.868Z"
