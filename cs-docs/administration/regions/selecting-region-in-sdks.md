---
title: "Selecting Region in SDKs"
description: "Selecting Region in SDKs"
url: /administration/selecting-region-in-sdks
---

# Selecting Region in SDKs

## Selecting Region in SDKs

In order to use the SDK for a particular region, you need to make certain changes to the SDK configurations for different technologies. For each technology given below, set the following region configuration according to your region.

## Prerequisites

-   A Contentstack SDK integrated for your technology
-   Stack API key
-   Delivery token
-   Environment name

## What You Will Learn

-   How to set a non-default region in each supported Contentstack SDK.
    
-   The region code or host value that maps to each Contentstack region.
    
-   How to set a branch together with a region where the SDK supports it.
    

## iOS

### For Swift

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, AWS Australia, Azure North America, Azure Europe, or GCP region, refer to the code below:

```
var config: Config = Config();
config.region = ContentstackRegion.>;
let stack:Stack = Contentstack.stackWithAPIKey("API_key",
accessToken:"delivery_token",
environmentName:"environment_id",
config:config)
```

**Note:**

-   For AWS Europe, set the region as **eu.**
-   For AWS Australia (AWS AU), set the region as **au.**
-   For Azure North America, set the region as **azure\_na.**
-   For Azure Europe, set the region as **azure\_eu.**
-   For GCP NA, set region as **gcp\_na.**
-   For GCP EU, set region as **gcp\_eu.**

### For Objective-C

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, AWS Australia, Azure North America, Azure Europe, or GCP region, refer to the code below:

```
Config *config = [[Config alloc] init];
config.region = >;
Stack *stack = [Contentstack stackWithAPIKey:@"API_key"
accessToken:@"delivery_token"
environmentName:@"environment_id"
config:config];
```

**Note:**

-   For Europe, set the region as **EU**.
-   For AWS Australia (AWS AU), set the region as **AU**.
-   For Azure North America, set the region as **AZURE\_NA**.
-   For Azure Europe, set the region as **AZURE\_EU**.
-   For GCP NA, set region as **GCP\_NA**.
-   For GCP EU, set region as **GCP\_EU**.

## .NET Management SDK (CMA)

For the .NET Management SDK, region selection is done through the CMA Host value in ContentstackClientOptions (not through Delivery SDK region enums).

By default, the SDK uses AWS North America (api.contentstack.io). Set Host when your stack is in a different region.

```
using Contentstack.Management.Core;
var options = new ContentstackClientOptions
{
    Host = "au-api.contentstack.com", // AWS Australia (AWS AU)
    Authtoken = "AUTHTOKEN"
};
var client = new ContentstackClient(options);
```

**For setting a branch with a region**

If you want to initialize the SDK for a particular branch in a specific region, use the following code:

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
var options = new ContentstackClientOptions
{
    Host = "au-api.contentstack.com", // AWS Australia (AWS AU)
    Authtoken = "AUTHTOKEN"
};
var client = new ContentstackClient(options);
Stack stack = client.Stack("API_KEY", "MANAGEMENT_TOKEN", "BRANCH");
```

**Region host values for .NET Management SDK**

-   AWS North America (AWS NA): api.contentstack.io
-   AWS Europe (AWS EU): eu-api.contentstack.com
-   AWS Australia (AWS AU): au-api.contentstack.com
-   Azure North America (Azure NA): azure-na-api.contentstack.com
-   Azure Europe (Azure EU): azure-eu-api.contentstack.com
-   GCP North America (GCP NA): gcp-na-api.contentstack.com
-   GCP Europe (GCP EU): gcp-eu-api.contentstack.com

For complete setup steps and authentication flow, see .NET Management - Get Started.

## Android

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, AWS Australia, Azure North America, Azure Europe, or GCP region, refer to the code below:

```
Config config = Config();
Config.region = ContentstackRegion.>;
Stack stack = Contentstack.stack(context, "stack_api_key", "delivery_token", "environment_name", config);
```

**For Setting the Branch for a Region.**

If you want to initialize SDK in a particular branch use the code given below:

```
Config config = Config();
config.setRegion(ContentstackRegion.>);
config.setBranch("branch");
Stack stack = Contentstack.stack("api_key", "delivery_token", "environment_name", config);
```

**Note:**

-   For Europe, set the region as **EU**.
-   For AWS Australia (AWS AU), set the region as **AU**.
-   For Azure North America, set the region as **AZURE\_NA**.
-   For Azure Europe, set the region as **AZURE\_EU**.
-   For GCP NA, set region as **GCP\_NA**.
-   For GCP EU, set region as **GCP\_EU**.

## Java

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, AWS Australia, Azure North America, Azure Europe, or GCP region, refer to the code below:

```
Config config = Config();
Config.region = ContentstackRegion.>;
Stack stack = Contentstack.stack("stack_api_key", "delivery_token", "environment_name", config);
```

**For Setting the Branch for a Region.**

If you want to initialize SDK in a particular branch use the code given below:

```
Config config = Config();
config.setRegion(ContentstackRegion.>);
config.setBranch("branch");
Stack stack = Contentstack.stack("api_key", "delivery_token", "environment_name", config);
```

**Note:**

-   For Europe, set the region as **EU**.
-   For AWS Australia (AWS AU), set the region as **AU**.
-   For Azure North America, set the region as **AZURE\_NA**.
-   For Azure Europe, set the region as **AZURE\_EU**.
-   For GCP NA, set region as **GCP\_NA**.
-   For GCP EU, set region as **GCP\_EU**.

## Ruby

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, AWS Australia, Azure North America, Azure Europe, or GCP region, refer to the code below:

```
@stack = Contentstack::Client.new("API_key", "delivery_token", "environment_id",{"region": Contentstack::Region::>})
```

**For Setting the Branch for a Region.**

If you want to initialize SDK in a particular branch use the code given below:

```
@stack = Contentstack::Client.new("api_key", "delivery_token", "environment",{"region": Contentstack::Region::>, "branch": "branch"})
```

**Note:**

-   For Europe, set the region as **EU**.
-   For AWS Australia (AWS AU), set the region as **AU**.
-   For Azure North America, set the region as **AZURE\_NA**.
-   For Azure Europe, set the region as **AZURE\_EU**.
-   For GCP NA, set region as **GCP\_NA**.
-   For GCP EU, set region as **GCP\_EU**.

## JS/ React Native/ Node.js

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, AWS Australia, Azure North America, Azure Europe, or GCP region, refer to the code below:

```
const Stack = new Contentstack({ 'api_key': "stack_api_key", 'delivery_token': "environment-specific_delivery_token", 'environment': "environment_name", "region": Contentstack.Region.>})
```

**For Setting the Branch for a Region.**

If you want to initialize SDK in a particular branch use the code given below:

```
const Stack = Contentstack.Stack({ api_key: 'api_key', delivery_token: 'delivery_token', environment: 'environment', region: Contentstack.Region.>, host: '>', branch: 'branch')
```

**Note:**

-   For Europe, set region as **EU** and host as eu-cdn.contentstack.com.
-   For Azure North America, set region as **AZURE\_NA** and host as azure-na-cdn.contentstack.com.
-   For Azure Europe, set the region as **AZURE\_EU** and host as azure-eu-cdn.contentstack.com.
-   For GCP North America, set the region as **GCP\_NA** and host as gcp-na-cdn.contentstack.com.
-   For GCP Europe, set the region as **GCP\_EU** and host as gcp-eu-cdn.contentstack.com.
-   For AWS Australia (AWS AU), set the region as **AU** and host as au-cdn.contentstack.com.

## TypeScript

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

```
const stack = contentstack.stack({
 apiKey: "apiKey",
 deliveryToken: "deliveryToken",
 environment: "environment_name",
 region: Region.>
})
```

**For setting the Branch for a region**

If you want to initialize SDK in a particular branch use the code given below:

```
const stack = contentstack.stack({
 apiKey: "api_key",
 deliveryToken: "delivery_token",
 environment: "environment",
 region: Region.>;
 host: ">",
 branch: "branch"
})
```

**Note:**

-   For **Europe**, set the region as **EU**.
-   For **Azure North America**, set the region as **AZURE\_NA**.
-   For **Azure Europe**, set the region as **AZURE\_EU**.
-   For **GCP NA**, set region as **GCP\_NA**.
-   For **GCP EU**, set region as **GCP\_EU**.
-   For **AWS Australia (AWS AU)**, set region as **AU**.

## JS Marketplace

By default, the SDK uses the North American region, so configuration changes are not required for North American region users.

To set the Europe, AWS Australia, Azure North America, Azure Europe, or GCP region, refer to the code below:

```
const contentstackClient = contentstack.client({ region: contentstack.Region.> })
```

**Note:**

-   For Europe, set the region as **EU**.
-   For AWS Australia (AWS AU), set the region as **AU**.
-   For Azure North America, set the region as **AZURE\_NA**.
-   For Azure Europe, set the region as **AZURE\_EU**.
-   For GCP NA, set region as **GCP\_NA**.
-   For GCP EU, set region as **GCP\_EU**.

## Python

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, AWS Australia, Azure North America, Azure Europe, or GCP region, refer to the code below:

```
import contentstack
config = Config()
config.region = ContentstackRegion.>;
stack = contentstack.Stack(api_key="API_key", access_token="delivery_token",environment= "environment_id", config)
```

**For Setting the Branch for a Region:**

If you want to initialize SDK in a particular branch use the code given below:

```
import contentstack
stack = contentstack.Stack(api_key='api_key', access_token='delivery_token',environment= 'environment_name', region=>;,branch='branch')
```

**Note:**

-   For Europe, set the region as **EU**.
-   For AWS Australia (AWS AU), set the region as **AU**.
-   For Azure North America, set the region as **AZURE\_NA**.
-   For Azure Europe, set the region as **AZURE\_EU**.
-   For GCP NA, set region as **GCP\_NA**.
-   For GCP EU, set region as **GCP\_EU**.

## PHP

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, AWS Australia, Azure North America, Azure Europe, or GCP region, refer to the code below:

```
$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment_name', array('region' => ContentstackRegion.>));
```

**For Setting the Branch for a Region.**

If you want to initialize SDK in a particular branch use the code given below:

```
static Stack = Contentstack::Stack('api_key', 'delivery_token', 'environment_name', array('region' =>> Contentstack::Region::>, "branch"=>> "branch"))
```

**Note:**

-   For Europe, set the region as **EU**.
-   For AWS Australia (AWS AU), set the region as **AU**.
-   For Azure North America, set the region as **AZURE\_NA**.
-   For Azure Europe, set the region as **AZURE\_EU**.
-   For GCP NA, set region as **GCP\_NA**.
-   For GCP EU, set region as **GCP\_EU**.

## Dart

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, AWS Australia, Azure North America, Azure Europe, or GCP region, refer to the code below:

```
import 'package:contentstack/contentstack.dart' as contentstack;
final stack = contentstack.Stack(apiKey, deliveryToken, environment, region: contentstack.Region.>);
```

**For Setting the Branch for a Region.**

If you want to initialize SDK in a particular branch use the code given below:

```
import 'package:contentstack/contentstack.dart' as contentstack;
final stack = contentstack.Stack('apiKey', 'deliveryToken', 'environment', region: contentstack.Region.>, branch: 'branch');
```

**Note:**

-   For Europe, set the region as **eu**.
-   For AWS Australia (AWS AU), set the region as **au**.
-   For Azure North America, set the region as **azure\_na**.
-   For Azure Europe, set the region as **azure\_eu**.
-   For GCP NA, set region as **gcp\_na**.
-   For GCP EU, set region as **gcp\_eu**.
