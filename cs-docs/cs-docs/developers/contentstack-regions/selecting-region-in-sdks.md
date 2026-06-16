---
title: "[Contentstack Regions] - Selecting Region in SDKs"
description: Selecting Region in SDKs
url: https://www.contentstack.com/docs/developers/contentstack-regions/selecting-region-in-sdks
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Regions] - Selecting Region in SDKs

This page explains how to select and configure the appropriate Contentstack region in various SDKs across different programming languages and platforms. It is intended for developers integrating Contentstack SDKs who need to target Europe, Azure, GCP, or other supported regions, and should be used when initializing or configuring a stack client for a specific region (and optionally a branch).

## Selecting Region in SDKs

In order to use the SDK for a particular region, you need to make certain changes to the SDK configurations for different technologies.  
For each technology given below, set the following region configuration according to your region.

## iOS

### For Swift

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, Azure North America, or Azure Europe region, refer to the code below:

```
var config: Config = Config();
config.region = ContentstackRegion.>;
let stack:Stack = Contentstack.stackWithAPIKey("API_key",
accessToken:"delivery_token",
environmentName:"environment_id",
config:config)
```

**Note**: For Europe, set the region as** eu.**  
For Azure North America, set the region as** azure_na.**  
For Azure Europe, set the region as** azure_eu.******For GCP NA, set region as** GCP_NA.**  
For GCP EU, set region as** GCP_EU.**

### For Objective-C

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, Azure North America, or Azure Europe region, refer to the code below:

```
Config *config = [[Config alloc] init];
config.region = >;
Stack *stack = [Contentstack stackWithAPIKey:@"API_key"
accessToken:@"delivery_token"
environmentName:@"environment_id"
config:config];
```

**Note**: For Europe, set the region as** EU.**  
For Azure North America, set the region as** AZURE_NA**  
For Azure Europe, set region as** AZURE_EU.******For GCP NA, set region as** GCP_NA.**  
For GCP EU, set region as** GCP_EU.**

## .NET

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, Azure North America, or Azure Europe region, refer to the code below:

```
ContentstackOptions options = new ContentstackOptions() {
    ApiKey = "",
    AccessToken = ";",
    Environment = "",
    Region = ContentstackRegion.>
}
ContentstackClient stack = new ContentstackClient(options);
```

**For Setting the Branch for a Region.**

If you want to initialize SDK in a particular branch use the code given below:

```
ContentstackOptions options = new ContentstackOptions() {
    ApiKey = "",
    AccessToken = "",
    Environment = "",
    Region = ContentstackRegion.>,
    Branch = """
};
ContentstackClient stack = new ContentstackClient(options);
```

**Note**: For Europe, set the region as** EU.**  
For Azure North America, set the region as** AZURE_NA.**  
For Azure Europe, set the region as** AZURE_EU.**  
For GCP NA, set region as** GCP_NA.**  
For GCP EU, set region as** GCP_EU.**

## Android

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, Azure North America, or Azure Europe region, refer to the code below:

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

**Note**: For Europe, set the region as** EU.**  
For Azure North America, set the region as** AZURE_NA.**  
For Azure Europe, set the region as** AZURE_EU.******For GCP NA, set region as** GCP_NA.**  
For GCP EU, set region as** GCP_EU.**

## Java

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, Azure North America, or Azure Europe region, refer to the code below:

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

**Note**: For Europe, set the region as** EU.**  
For Azure North America, set the region as** AZURE_NA.**  
For Azure Europe, set the region as** AZURE_EU.******For GCP NA, set region as** GCP_NA.**  
For GCP EU, set region as** GCP_EU.**

## Ruby

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, Azure North America, or Azure Europe region, refer to the code below:

```
@stack = Contentstack::Client.new("API_key", "delivery_token", "environment_id",{"region": Contentstack::Region::>})
```

**For Setting the Branch for a Region.**

If you want to initialize SDK in a particular branch use the code given below:

```
@stack = Contentstack::Client.new("api_key", "delivery_token", "environment",{"region": Contentstack::Region::>, "branch": "branch"})
```

**Note**: For Europe, set the region as** EU.**  
For Azure North America, set the region as** AZURE_NA.**  
For Azure Europe, set the region as** AZURE_EU.******For GCP NA, set region as** GCP_NA.**  
For GCP EU, set region as** GCP_EU.**

## JS/ React Native/ Node.js

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, Azure North America, GCP, or Azure Europe region, refer to the code below:

```
const Stack = new Contentstack({ 'api_key': "stack_api_key", 'delivery_token': "environment-specific_delivery_token", 'environment': "environment_name", "region": Contentstack.Region.>})
```

**For Setting the Branch for a Region.**

If you want to initialize SDK in a particular branch use the code given below:

```
const Stack = Contentstack.Stack({ api_key: 'api_key', delivery_token: 'delivery_token', environment: 'environment', region: Contentstack.Region.>, host: '>', branch: 'branch')
```

**Note:**
- For Europe, set region as **EU** and host as** eu-cdn.contentstack.com.**
- For Azure North America, set region as **AZURE_NA** and host as** azure-na-cdn.contentstack.com.**
- For Azure Europe, set the region as **AZURE_EU** and host as **azure-eu-cdn.contentstack.com.**
- For GCP North America, set the region as **GCP_NA** and host as **gcp-na-cdn.contentstack.com**.
- For GCP Europe, set the region as **GCP_EU **and host as **gcp-eu-cdn.contentstack.com**.
- For AWS Australia, set the region as **AU **and host as **au-cdn.contentstack.com**.

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
- For **Europe**, set the region as **EU**.
- For** Azure North America**, set the region as **AZURE_NA**.
- For **Azure Europe**, set the region as **AZURE_EU**.
- For **GCP NA**, set region as **GCP_NA**.
- For **GCP EU**, set region as **GCP_EU**.
- For **AWS AU**, set region as **AU**.

## JS Marketplace

By default, the SDK uses the North American region, so configuration changes are not required for North American region users.

To set the Europe, Azure North America, or Azure Europe region, refer to the code below:

```
const contentstackClient = contentstack.client({ region: contentstack.Region.> })
```

**Note:**
- For **Europe**, set the region as **EU**.
- For** Azure North America**, set the region as **AZURE_NA**.
- For **Azure Europe**, set the region as **AZURE_EU**.
- For **GCP NA**, set region as **GCP_NA**.
- For **GCP EU**, set region as **GCP_EU**.
- For **AWS AU**, set region as **AU**.

## Python

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, Azure North America, or Azure Europe region, refer to the code below:

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

**Note**: For Europe, set the region as** EU.**  
For Azure North America, set the region as** AZURE_NA.**  
For Azure Europe, set the region as** AZURE_EU.******For GCP NA, set region as** GCP_NA.**  
For GCP EU, set region as** GCP_EU.**

## PHP

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, Azure North America, or Azure Europe region, refer to the code below:

```
$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment_name', array('region' => ContentstackRegion.>));
```

**For Setting the Branch for a Region.**

If you want to initialize SDK in a particular branch use the code given below:

```
static Stack = Contentstack::Stack('api_key', 'delivery_token', 'environment_name', array('region' =>> Contentstack::Region::>, "branch"=>> "branch"))
```

**Note**: For Europe, set the region as** EU.**  
For Azure North America, set the region as** AZURE_NA.**  
For Azure Europe, set the region as** AZURE_EU.******For GCP NA, set region as** GCP_NA.**  
For GCP EU, set region as** GCP_EU.**

## Dart

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

To set the Europe, Azure North America, or Azure Europe region, refer to the code below:

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

**Note**: For Europe, set the region as** eu.**  
For Azure North America, set the region as** azure_na.**  
For Azure Europe, set the region as** azure_eu.******For GCP NA, set region as** gcp_na.**  
For GCP EU, set region as** gcp_eu.**

****
- For Europe, set region as** EU**
- For Azure North America, set region as **AZURE_NA**
- For Azure Europe, set the region as **AZURE_EU**
- For GCP North America, set region as **GCP_NA**.
- For GCP Europe, set the region as **GCP_EU.**

## Common questions

### How do I know if I need to set a region in the SDK configuration?
If you are not using the North American region, you need to set the region configuration according to your region.

### Do I need to change configuration for North American region users?
By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

### Can I set a branch along with a region?
Yes. Sections labeled **For Setting the Branch for a Region.** or similar show how to initialize SDK in a particular branch.

### Do some SDKs require setting both region and host?
Yes. In **JS/ React Native/ Node.js**, the **Note:** includes both region and host values for different regions.