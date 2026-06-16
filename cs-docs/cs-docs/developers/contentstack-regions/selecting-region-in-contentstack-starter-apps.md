---
title: "[Contentstack Regions] - Selecting Region in Contentstack Starter Apps"
description: Selecting Region in Contentstack Starter Apps
url: https://www.contentstack.com/docs/developers/contentstack-regions/selecting-region-in-contentstack-starter-apps
product: Contentstack
doc_type: configuration-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Regions] - Selecting Region in Contentstack Starter Apps

This page explains how to configure Contentstack starter apps to use a specific region by updating the app’s configuration values. It is intended for developers setting up or switching regions (for example, `eu`, `au`, `azure-na`, `azure-eu`, `gcp-na`, or `gcp-eu`) and should be used when initializing or migrating a starter app environment.

## Selecting Region in Contentstack Starter Apps

In order to configure your starter app for a particular region, you need to make changes to the configuration file of your starter app.

For each technology given below, set the following configuration according to your region.

**Note**: By default, `region=na`. If you want to add or switch to `eu`, `au`, `azure-na`, `azure-eu`, `gcp-na`, or `gcp-eu` region, add this code to your configuration:

```
CONTENTSTACK_REGION =
```

## Gatsby

### Gatsby App Configuration for Europe Region

To set the Europe region, refer to the code below:

```
CONTENTSTACK_API_KEY =
CONTENTSTACK_DELIVERY_TOKEN =
CONTENTSTACK_ENVIRONMENT =
CONTENTSTACK_API_HOST = eu-api.contentstack.com

```

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = eu-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = eu-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set “CONTENTSTACK_LIVE_EDIT_TAGS= true”.
```

### Gatsby App Configuration for Australia Region

To set the Australia region, refer to the code below:

```
CONTENTSTACK_API_KEY =
CONTENTSTACK_DELIVERY_TOKEN =
CONTENTSTACK_ENVIRONMENT =
CONTENTSTACK_API_HOST = au-api.contentstack.com

```

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = au-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = au-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set “CONTENTSTACK_LIVE_EDIT_TAGS= true”.
```

### Gatsby App Configuration for Google Europe Region

To set the Google Europe region, refer to the code below:

```
CONTENTSTACK_API_KEY =
CONTENTSTACK_DELIVERY_TOKEN =
CONTENTSTACK_ENVIRONMENT =
CONTENTSTACK_API_HOST = gcp-eu-api.contentstack.com
# By default branch=main, if a branch is not provided
# CONTENTSTACK_BRANCH =

```

Mandatory configuration parameters to enable Live Preview:

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = gcp-eu-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = gcp-eu-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
# By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW=false"
CONTENTSTACK_LIVE_EDIT_TAGS = false
# By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS=true"

```

### Gatsby App Configuration for Azure NA Region

To set the Azure North America region, refer to the code below:

```
CONTENTSTACK_API_KEY =
CONTENTSTACK_DELIVERY_TOKEN =
CONTENTSTACK_ENVIRONMENT =
CONTENTSTACK_API_HOST = azure-na-api.contentstack.com

```

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = azure-na-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = azure-na-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set “CONTENTSTACK_LIVE_EDIT_TAGS= true”.
```

### Gatsby App Configuration for Azure EU Region

To set the Azure Europe region, refer to the code below:

```
CONTENTSTACK_API_KEY =
CONTENTSTACK_DELIVERY_TOKEN =
CONTENTSTACK_ENVIRONMENT =
CONTENTSTACK_API_HOST = azure-eu-api.contentstack.com
# By default branch=main, if a branch is not provided
# CONTENTSTACK_BRANCH =

```

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = azure-eu-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = azure-eu-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS= true".
```

### Gatsby App Configuration for Google NA Region

To set the Google North America region, refer to the code below:

```
CONTENTSTACK_API_KEY =
CONTENTSTACK_DELIVERY_TOKEN =
CONTENTSTACK_ENVIRONMENT =
CONTENTSTACK_API_HOST = gcp-na-api.contentstack.com
# By default branch=main, if a branch is not provided
# CONTENTSTACK_BRANCH =
```

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = gcp-na-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = gcp-na-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false"
CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS= true"
```

### Gatsby App Configuration for Google Europe Region

To set the Google Europe region, refer to the code below:

```
CONTENTSTACK_API_KEY =
CONTENTSTACK_DELIVERY_TOKEN =
CONTENTSTACK_ENVIRONMENT =
CONTENTSTACK_API_HOST = gcp-eu-api.contentstack.com
# By default branch=main, if a branch is not provided
# CONTENTSTACK_BRANCH =

```

Mandatory configuration parameters to enable Live Preview:

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = gcp-eu-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = gcp-eu-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
# By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW=false"
CONTENTSTACK_LIVE_EDIT_TAGS = false
# By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS=true"

```

## Next.js

### Next.js App Configuration for Europe Region

To set the Europe region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = eu-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = eu-app.contentstack.com
CONTENTSTACK_API_HOST = eu-api.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set “CONTENTSTACK_LIVE_EDIT_TAGS= true”.
```

### Next.js App Configuration for Australia Region

To set the Australia region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = au-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = au-app.contentstack.com
CONTENTSTACK_API_HOST = au-api.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set “CONTENTSTACK_LIVE_EDIT_TAGS= true”.
```

### Next.js App Configuration for Azure NA Region

To set the Azure North America region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = azure-na-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = azure-na-app.contentstack.com
CONTENTSTACK_API_HOST = azure-na-api.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set “CONTENTSTACK_LIVE_EDIT_TAGS= true”.
```

### Next.js App Configuration for Azure EU Region

To set the Azure Europe region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = azure-eu-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = azure-eu-app.contentstack.com
CONTENTSTACK_API_HOST = azure-eu-api.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
# By default branch=main, if a branch is not provided
# CONTENTSTACK_BRANCH =
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS= true".
```

### Next.js App Configuration for Google NA Region

To set the Google North America region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = gcp-na-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = gcp-na-app.contentstack.com
CONTENTSTACK_API_HOST = gcp-na-api.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
# By default branch=main, if a branch is not provided
# CONTENTSTACK_BRANCH =
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false"
CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS= true"
```

### Next.js App Configuration for Google EU Region

Mandatory configuration parameters to enable Live Preview:

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = gcp-eu-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = gcp-eu-app.contentstack.com
CONTENTSTACK_API_HOST = gcp-eu-api.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
# By default branch=main, if a branch is not provided
# CONTENTSTACK_BRANCH =
# By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW=false"
CONTENTSTACK_LIVE_EDIT_TAGS = false
# By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS=true"

```

## Next.js with GraphQL

### Next.js with GraphQL App Configuration for Europe Region

To set the Europe region, refer to the code below:

```
CONTENTSTACK_GRAPHQL_HOST_NAME = eu-graphql.contentstack.com

```

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_MANAGEMENT_TOKEN =
CONTENTSTACK_APP_HOST = eu-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW_HOST_NAME = eu-graphql-preview.contentstack.com
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW = false".
CONTENTSTACK_LIVE_PREVIEW = true
#By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS = true".
CONTENTSTACK_LIVE_EDIT_TAGS = false
```

### Next.js with GraphQL App Configuration for Australia Region

To set the Australia region, refer to the code below:

```
CONTENTSTACK_GRAPHQL_HOST_NAME = au-graphql.contentstack.com

```

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_MANAGEMENT_TOKEN =
CONTENTSTACK_APP_HOST = au-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW_HOST_NAME = au-graphql-preview.contentstack.com
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW = false".
CONTENTSTACK_LIVE_PREVIEW = true
#By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS = true".
CONTENTSTACK_LIVE_EDIT_TAGS = false
```

### Next.js with GraphQL App Configuration for Azure NA Region

To set the Azure NA region, refer to the code below:

```
CONTENTSTACK_GRAPHQL_HOST_NAME = azure-na-graphql.contentstack.com

```

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_MANAGEMENT_TOKEN =
CONTENTSTACK_APP_HOST = azure-na-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW_HOST_NAME = azure-na-graphql-preview.contentstack.com
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW = false".
CONTENTSTACK_LIVE_PREVIEW = true
#By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS = true".
CONTENTSTACK_LIVE_EDIT_TAGS = false
```

### Next.js with GraphQL App Configuration for Azure EU Region

To set the Azure EU region, refer to the code below:

```
CONTENTSTACK_GRAPHQL_HOST_NAME = azure-eu-graphql.contentstack.com

```

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_MANAGEMENT_TOKEN =
CONTENTSTACK_APP_HOST = azure-eu-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW_HOST_NAME = azure-eu-graphql-preview.contentstack.com
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW = false".
CONTENTSTACK_LIVE_PREVIEW = true
#By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS = true".
CONTENTSTACK_LIVE_EDIT_TAGS = false
```

### Next.js with GraphQL App Configuration for Google NA Region

To set the Google North America region, refer to the code below:

```
CONTENTSTACK_GRAPHQL_HOST_NAME = gcp-na-graphql.contentstack.com
```

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_MANAGEMENT_TOKEN =
CONTENTSTACK_APP_HOST = gcp-na-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW_HOST_NAME = gcp-na-graphql-preview.contentstack.com
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW = false"
CONTENTSTACK_LIVE_PREVIEW = true
#By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS = true"
CONTENTSTACK_LIVE_EDIT_TAGS = false
```

### Next.js with GraphQL App Configuration for Google EU Region

To set the Google Europe region, refer to the code below:

```
CONTENTSTACK_GRAPHQL_HOST_NAME = gcp-eu-graphql.contentstack.com
```

Mandatory configuration parameters to enable Live Preview:

```
CONTENTSTACK_MANAGEMENT_TOKEN =
CONTENTSTACK_APP_HOST = gcp-eu-app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW_HOST_NAME = gcp-eu-graphql-preview.contentstack.com
# By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW=false"
CONTENTSTACK_LIVE_PREVIEW = true
# By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS=true"
CONTENTSTACK_LIVE_EDIT_TAGS = false

```

## React.js

### React.js App Configuration for Europe Region

To set the Europe region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
REACT_APP_CONTENTSTACK_PREVIEW_TOKEN =
REACT_APP_CONTENTSTACK_PREVIEW_HOST = eu-rest-preview.contentstack.com
REACT_APP_CONTENTSTACK_APP_HOST = eu-app.contentstack.com
REACT_APP_CONTENTSTACK_API_HOST = eu-api.contentstack.com
REACT_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set “CONTENTSTACK_LIVE_EDIT_TAGS= true”.
```

### React.js App Configuration for Australia Region

To set the Australia region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
REACT_APP_CONTENTSTACK_PREVIEW_TOKEN =
REACT_APP_CONTENTSTACK_PREVIEW_HOST = au-rest-preview.contentstack.com
REACT_APP_CONTENTSTACK_APP_HOST = au-app.contentstack.com
REACT_APP_CONTENTSTACK_API_HOST = au-api.contentstack.com
REACT_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set “CONTENTSTACK_LIVE_EDIT_TAGS= true”.
```

### React.js App Configuration for Azure NA Region

To set the Azure North America region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
REACT_APP_CONTENTSTACK_PREVIEW_TOKEN =
REACT_APP_CONTENTSTACK_PREVIEW_HOST = azure-na-rest-preview.contentstack.com
REACT_APP_CONTENTSTACK_APP_HOST = azure-na-app.contentstack.com
REACT_APP_CONTENTSTACK_API_HOST = azure-na-api.contentstack.com
REACT_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set “CONTENTSTACK_LIVE_EDIT_TAGS= true”.
```

### React.js App Configuration for Azure EU Region

To set the Azure Europe region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
REACT_APP_CONTENTSTACK_PREVIEW_TOKEN =
REACT_APP_CONTENTSTACK_PREVIEW_HOST = azure-eu-rest-preview.contentstack.com
REACT_APP_CONTENTSTACK_APP_HOST = azure-eu-app.contentstack.com
REACT_APP_CONTENTSTACK_API_HOST = azure-eu-api.contentstack.com
# By default branch=main, if a branch is not provided
# REACT_APP_CONTENTSTACK_BRANCH =
REACT_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS= true".
```

### React.js App Configuration for Google NA Region

To set the Google North America region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
REACT_APP_CONTENTSTACK_PREVIEW_TOKEN =
REACT_APP_CONTENTSTACK_PREVIEW_HOST = gcp-na-rest-preview.contentstack.com
REACT_APP_CONTENTSTACK_APP_HOST = gcp-na-app.contentstack.com
REACT_APP_CONTENTSTACK_API_HOST = gcp-na-api.contentstack.com
# By default branch=main, if a branch is not provided
# REACT_APP_CONTENTSTACK_BRANCH =
REACT_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false"
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = false
#By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS= true"
```

### React.js App Configuration for Google EU Region

To set the Google Europe region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview:

```
REACT_APP_CONTENTSTACK_PREVIEW_TOKEN =
REACT_APP_CONTENTSTACK_PREVIEW_HOST = gcp-eu-rest-preview.contentstack.com
REACT_APP_CONTENTSTACK_APP_HOST = gcp-eu-app.contentstack.com
REACT_APP_CONTENTSTACK_API_HOST = gcp-eu-api.contentstack.com
# By default branch=main, if a branch is not provided
# REACT_APP_CONTENTSTACK_BRANCH =
REACT_APP_CONTENTSTACK_LIVE_PREVIEW = true
# By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW=false"
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = false
# By default, live editing tags are disabled for this project. To enable it, set "CONTENTSTACK_LIVE_EDIT_TAGS=true"

```

## React.js with GraphQL

### React.js with GraphQL App Configuration for Europe Region

To set the Europe region, refer to the code below:

```
REACT_APP_CONTENTSTACK_GRAPHQL_HOST_NAME = eu-graphql.contentstack.com

```

#### Mandatory configuration parameters to enable Live Preview

```
REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN =
REACT_APP_CONTENTSTACK_APP_HOST = eu-app.contentstack.com
REACT_APP_CONTENTSTACK_LIVE_PREVIEW_HOST_NAME = eu-graphql-preview.contentstack.com
#By default, the live preview feature is enabled for this project. To disable it, set "REACT_APP_CONTENTSTACK_LIVE_PREVIEW = false".
REACT_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, live editing tags are disabled for this project. To enable it, set "REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = true".
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = false
```

### React.js with GraphQL App Configuration for Australia Region

To set the Australia region, refer to the code below:

```
REACT_APP_CONTENTSTACK_GRAPHQL_HOST_NAME = au-graphql.contentstack.com

```

#### Mandatory configuration parameters to enable Live Preview

```
REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN =
REACT_APP_CONTENTSTACK_APP_HOST = au-app.contentstack.com
REACT_APP_CONTENTSTACK_LIVE_PREVIEW_HOST_NAME = au-graphql-preview.contentstack.com
#By default, the live preview feature is enabled for this project. To disable it, set "REACT_APP_CONTENTSTACK_LIVE_PREVIEW = false".
REACT_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, live editing tags are disabled for this project. To enable it, set "REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = true".
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = false
```

### React.js with GraphQL App Configuration for Azure NA Region

To set the Azure NA region, refer to the code below:

```
REACT_APP_CONTENTSTACK_GRAPHQL_HOST_NAME = azure-na-graphql.contentstack.com
```

#### Mandatory configuration parameters to enable Live Preview

```
REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN =
REACT_APP_CONTENTSTACK_APP_HOST = azure-na-app.contentstack.com
REACT_APP_CONTENTSTACK_LIVE_PREVIEW_HOST_NAME = azure-na-graphql-preview.contentstack.com
#By default, the live preview feature is enabled for this project. To disable it, set "REACT_APP_CONTENTSTACK_LIVE_PREVIEW = false".
REACT_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, live editing tags are disabled for this project. To enable it, set "REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = true".
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = false
```

### React.js with GraphQL App Configuration for Azure EU Region

To set the Azure EU region, refer to the code below:

```
REACT_APP_CONTENTSTACK_GRAPHQL_HOST_NAME = azure-eu-graphql.contentstack.com
```

#### Mandatory configuration parameters to enable Live Preview

```
REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN =
REACT_APP_CONTENTSTACK_APP_HOST = azure-eu-app.contentstack.com
REACT_APP_CONTENTSTACK_LIVE_PREVIEW_HOST_NAME = azure-eu-graphql-preview.contentstack.com
#By default, the live preview feature is enabled for this project. To disable it, set "REACT_APP_CONTENTSTACK_LIVE_PREVIEW = false".
REACT_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, live editing tags are disabled for this project. To enable it, set "REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = true".
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = false
```

### React.js with GraphQL App Configuration for Google NA Region

To set the Google North America region, refer to the code below:

```
REACT_APP_CONTENTSTACK_GRAPHQL_HOST_NAME = gcp-na-graphql.contentstack.com
```

#### Mandatory configuration parameters to enable Live Preview

```
REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN =
REACT_APP_CONTENTSTACK_APP_HOST = gcp-na-app.contentstack.com
REACT_APP_CONTENTSTACK_LIVE_PREVIEW_HOST_NAME = gcp-na-graphql-preview.contentstack.com
#By default, the live preview feature is enabled for this project. To disable it, set "REACT_APP_CONTENTSTACK_LIVE_PREVIEW = false"
REACT_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, live editing tags are disabled for this project. To enable it, set "REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = true"
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = false
```

### React.js with GraphQL App Configuration for Google EU Region

To set the Google Europe region, refer to the code below:

```
REACT_APP_CONTENTSTACK_GRAPHQL_HOST_NAME = gcp-eu-graphql.contentstack.com
```

**Mandatory configuration parameters to enable Live Preview:**

```
REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN =
REACT_APP_CONTENTSTACK_APP_HOST = gcp-eu-app.contentstack.com
REACT_APP_CONTENTSTACK_LIVE_PREVIEW_HOST_NAME = gcp-eu-graphql-preview.contentstack.com
# By default, the live preview feature is enabled for this project. To disable it, set "REACT_APP_CONTENTSTACK_LIVE_PREVIEW=false"
REACT_APP_CONTENTSTACK_LIVE_PREVIEW = true
# By default, live editing tags are disabled for this project. To enable it, set "REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS=true"
REACT_APP_CONTENTSTACK_LIVE_EDIT_TAGS = false

```

## Angular

### Angular App Configuration for Europe Region

To set the Europe region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = eu-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = eu-app.contentstack.com
CONTENTSTACK_API_HOST = eu-api.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
```

### Angular App Configuration for Australia Region

To set the Australia region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = au-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = au-app.contentstack.com
CONTENTSTACK_API_HOST = au-api.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
```

### Angular App Configuration for Azure NA Region

To set the Azure North America region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = azure-na-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = azure-na-app.contentstack.com
CONTENTSTACK_API_HOST = azure-na-api.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
```

### Angular App Configuration for Azure EU Region

To set the Azure Europe region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = azure-eu-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = azure-eu-app.contentstack.com
CONTENTSTACK_API_HOST = azure-eu-api.contentstack.com
# By default branch=main, if a branch is not provided
# CONTENTSTACK_BRANCH =
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
```

### Angular App Configuration for Google NA Region

To set the Google North America region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = gcp-na-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = gcp-na-app.contentstack.com
CONTENTSTACK_API_HOST = gcp-na-api.contentstack.com
# By default branch=main, if a branch is not provided
# CONTENTSTACK_BRANCH =
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false"
```

### Angular App Configuration for Google EU Region

To set the Google Europe region, refer to the code below:

**Mandatory configuration parameters to enable Live Preview:**

```
CONTENTSTACK_PREVIEW_TOKEN =
CONTENTSTACK_PREVIEW_HOST = gcp-eu-rest-preview.contentstack.com
CONTENTSTACK_APP_HOST = gcp-eu-app.contentstack.com
CONTENTSTACK_API_HOST = gcp-eu-api.contentstack.com
# By default branch=main, if a branch is not provided
# CONTENTSTACK_BRANCH =
CONTENTSTACK_LIVE_PREVIEW = true
# By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW=false"

```

## Vue.js

### Vue.js App Configuration for Europe Region

To set the Europe region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
VUE_APP_CONTENTSTACK_PREVIEW_TOKEN =
VUE_APP_CONTENTSTACK_PREVIEW_HOST = eu-rest-preview.contentstack.com
VUE_APP_CONTENTSTACK_APP_HOST = eu-app.contentstack.com
VUE_APP_CONTENTSTACK_API_HOST = eu-api.contentstack.com
VUE_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
```

### Vue.js App Configuration for Australia Region

To set the Australia region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
VUE_APP_CONTENTSTACK_PREVIEW_TOKEN =
VUE_APP_CONTENTSTACK_PREVIEW_HOST = au-rest-preview.contentstack.com
VUE_APP_CONTENTSTACK_APP_HOST = au-app.contentstack.com
VUE_APP_CONTENTSTACK_API_HOST = au-api.contentstack.com
VUE_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
```

### Vue.js App Configuration for Azure NA Region

To set the Azure North America region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
VUE_APP_CONTENTSTACK_PREVIEW_TOKEN =
VUE_APP_CONTENTSTACK_PREVIEW_HOST = azure-na-rest-preview.contentstack.com
VUE_APP_CONTENTSTACK_APP_HOST = azure-na-app.contentstack.com
VUE_APP_CONTENTSTACK_API_HOST = azure-na-api.contentstack.com
VUE_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
```

### Vue.js App Configuration for Azure EU Region

To set the Azure Europe region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
VUE_APP_CONTENTSTACK_PREVIEW_TOKEN =
VUE_APP_CONTENTSTACK_PREVIEW_HOST = azure-eu-rest-preview.contentstack.com
VUE_APP_CONTENTSTACK_APP_HOST = azure-eu-app.contentstack.com
VUE_APP_CONTENTSTACK_API_HOST = azure-eu-api.contentstack.com
# By default branch=main, if a branch is not provided
# VUE_APP_CONTENTSTACK_BRANCH =
VUE_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
```

### Vue.js App Configuration for Google NA Region

To set the Google North America region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
VUE_APP_CONTENTSTACK_PREVIEW_TOKEN =
VUE_APP_CONTENTSTACK_PREVIEW_HOST = gcp-na-rest-preview.contentstack.com
VUE_APP_CONTENTSTACK_APP_HOST = gcp-na-app.contentstack.com
VUE_APP_CONTENTSTACK_API_HOST = gcp-na-api.contentstack.com
# By default branch=main, if a branch is not provided
# VUE_APP_CONTENTSTACK_BRANCH =
VUE_APP_CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false"
```

### Vue.js App Configuration for Google EU Region

To set the Google Europe region, refer to the code below:

**Mandatory configuration parameters to enable Live Preview:**

```
VUE_APP_CONTENTSTACK_PREVIEW_TOKEN =
VUE_APP_CONTENTSTACK_PREVIEW_HOST = gcp-eu-rest-preview.contentstack.com
VUE_APP_CONTENTSTACK_APP_HOST = gcp-eu-app.contentstack.com
VUE_APP_CONTENTSTACK_API_HOST = gcp-eu-api.contentstack.com
# By default branch=main, if a branch is not provided
# VUE_APP_CONTENTSTACK_BRANCH =
VUE_APP_CONTENTSTACK_LIVE_PREVIEW = true
# By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW=false"

```

## Nuxt.js

### Nuxt.js App Configuration for Europe Region

To set the Europe region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_MANAGEMENT_TOKEN =
CONTENTSTACK_APP_HOST = eu-app.contentstack.com
CONTENTSTACK_API_HOST = eu-api.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
```

### Nuxt.js App Configuration for Australia Region

To set the Australia region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_MANAGEMENT_TOKEN =
CONTENTSTACK_APP_HOST = au-app.contentstack.com
CONTENTSTACK_API_HOST = au-api.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
```

### Nuxt.js App Configuration for Azure NA Region

To set the Azure North America region, refer to the code below:

Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_MANAGEMENT_TOKEN =
CONTENTSTACK_APP_HOST = azure-na-app.contentstack.com
CONTENTSTACK_API_HOST = azure-na-api.contentstack.com
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
```

### Nuxt.js App Configuration for Azure EU Region

To set the Azure Europe region, refer to the code below:

Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_MANAGEMENT_TOKEN =
CONTENTSTACK_APP_HOST = azure-eu-app.contentstack.com
CONTENTSTACK_API_HOST = azure-eu-api.contentstack.com
# By default branch=main, if a branch is not provided
# CONTENTSTACK_BRANCH =
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false".
```

### Nuxt.js App Configuration for Google NA Region

To set the Google North America region, refer to the code below:

#### Mandatory configuration parameters to enable Live Preview

```
CONTENTSTACK_MANAGEMENT_TOKEN =
CONTENTSTACK_APP_HOST = gcp-na-app.contentstack.com
CONTENTSTACK_API_HOST = gcp-na-api.contentstack.com
# By default branch=main, if a branch is not provided
# CONTENTSTACK_BRANCH =
CONTENTSTACK_LIVE_PREVIEW = true
#By default, the live preview feature is enabled for this project. To disable it, set "CONTENTSTACK_LIVE_PREVIEW= false"
```

### Nuxt.js App Configuration for Google EU Region

To set the Google Europe region, refer to the code below:

**Mandatory configuration parameters to enable Live Preview:**

```
CONTENTSTACK_MANAGEMENT_TOKEN =
CONTENTSTACK_APP_HOST = gcp-eu