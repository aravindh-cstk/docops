---
title: "[JavaScript Personalize Edge] - JavaScript Personalize Edge SDK v1.0.9+ Migration Guide"
description: Migration guide for moving from the global Personalize namespace to the instance-based approach introduced in JavaScript Personalize Edge SDK v1.0.9+.
url: https://www.contentstack.com/docs/developers/sdks/personalize-edge-sdk/javascript/javascript-personalize-edge-v109-migration-guide
product: Contentstack Personalize Edge SDK
doc_type: migration-guide
audience:
  - developers
version: v1.0.9+
last_updated: 2026-03-25
---

# [JavaScript Personalize Edge] - JavaScript Personalize Edge SDK v1.0.9+ Migration Guide

This page explains how to migrate JavaScript Personalize Edge SDK usage from the deprecated global `Personalize` namespace to the instance-based approach introduced in v1.0.9+. It is intended for developers upgrading existing v1.x.x implementations, especially those running in edge middleware or origin environments where request isolation matters.

## JavaScript Personalize Edge SDK v1.0.9+ Migration Guide

**Note:** This guide applies to **v1.x.x** of the Personalize Edge SDK using **global functions** in the Personalize namespace. For implementation details refer to the [Get Started with JavaScript Personalize Edge SDK](./get-started-with-javascript-personalize-edge-sdk.md) and [JavaScript Personalize Edge SDK API Reference](../../../create-content-types/reference.md) documentation.

JavaScript Personalize Edge SDK version 1.0.9 introduces a new instance-based approach, replacing the global `Personalize` namespace. You should now create an SDK class instance and call its methods.

**Warning:** The global functions are now **deprecated** and will be removed in the next major release, for the exact list of deprecated methods, see [Deprecated Global Functions](./javascript-personalize-edge-v109-migration-guide.md#deprecated-global-functions) section.

**Example**

With Global `Personalize` namespace:

```
import Personalize from '@contentstack/personalize-edge-sdk';

await Personalize.init('');

// start using the SDK
const variants = Personalize.getVariants();

```

With instance-based approach (Version 1.0.9 and later):

```
import Personalize from '@contentstack/personalize-edge-sdk';

const personalizeSdk = await Personalize.init('');

// start using the SDK
const variants = personalizeSdk.getVariants();

```

## Why Upgrade?

While the global `Personalize` namespace was generally effective, with one significant exception. When using the SDK in edge middleware or at the origin, storing data globally under high traffic conditions can cause **data leakage across requests, **which may result in active variants from one request to be incorrectly served to another.

The instance-based approach in v1.0.9 eliminates this issue, ensuring each request is handled independently and prevents unintended data sharing.

## Migration Steps

To transition from the global `Personalize` namespace to the new instance-based approach, follow these steps:

- ### Upgrade the SDK to the latest version

  To ensure your project is using the latest version of the Personalize Edge SDK, run the following command:

  ```
  npm i @contentstack/personalize-edge-sdk@latest
  ```

- ### Update your SDK initialization code to store the SDK instance

  Modify your code to store the SDK instance returned by the `init` function:

  ```
  import Personalize from '@contentstack/personalize-edge-sdk';

  // store the promised value by the init function in a variable
  const personalizeSdk = await Personalize.init('');
  ```

- ### Replace the usage of global functions with SDK instance methods

  Update all function calls to use the SDK instance instead of the global `Personalize` namespace.

  ```
  // to get the current user's variants
  const activeVariants = personalizeSdk.getVariants();

  // to trigger an impression
  await personalizeSdk.triggerImpression('');

  // to get variant aliases
  const aliases = personalizeSdk.getVariantAliases();

  // similarly for the other methods listed below
  ```

- ### Remove the Personalize.reset() method

  The `reset` function is deprecated and will be removed in the next major version. Since the SDK now uses instances, resetting the SDK is no longer necessary, instead, create a new instance and discard the older one.

- ### Test your code to ensure it still works as expected

  Now that the required changes have been made, it is time to test that all functionality remains as expected. Once testing is complete, you are ready to go live!

## Deprecations

The Personalize Edge SDK remains backwards compatible with the older functions till v1.x.x, but the support will be **removed** in v2.x.x.

### Deprecated Global Functions

The following functions should be called on the SDK instance instead of the `Personalize` namespace.

- `getExperiences`
- `triggerImpression`
- `triggerImpressions`
- `triggerEvent`
- `set`
- `setUserId`
- `getUserId`
- `getActiveVariant`
- `addStateToResponse`
- `getVariants`
- `getVariantAliases`
- `getVariantParam`

### Planned Removals in the Next Major Version

- `reset`

## More Resources

- [JavaScript Personalize Edge SDK API Reference](../../../create-content-types/reference.md)
- [Get Started with JavaScript Personalize Edge SDK](./get-started-with-javascript-personalize-edge-sdk.md)
- [Setup Next.js Website with Personalize - Launch](../../../../personalize/setup-nextjs-website-with-personalize-launch.md)

## Common questions

### Do I need to change my code if I’m already on v1.x.x?
Yes, if your code uses the global `Personalize` namespace functions, you should migrate to the instance-based approach introduced in v1.0.9.

### What happens if I keep using the global `Personalize` functions?
**Warning:** The global functions are now **deprecated** and will be removed in the next major release.

### Which methods must be called on the SDK instance now?
The functions listed under **Deprecated Global Functions** should be called on the SDK instance instead of the `Personalize` namespace.

### Is `Personalize.reset()` still supported?
The `reset` function is deprecated and will be removed in the next major version.