---
title: "Stack.Asset"
description: "The Stack.Asset method returns an Asset object for a specific asset, to invoke asset-localization methods on that asset. Validation and Behavior It does not validate the UID for null or empty values at construction time. If uid is omitted, Stack.Asset() still returns an Asset object. Use this method before Localize , LocalizeAsync , Unlocalize , UnlocalizeAsync , GetLocalizedVersions , and GetLocalizedVersionsAsync ."
url: "https://www.contentstack.com/dotnet-management-asset-stack-asset"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Stack.Asset

The `Stack.Asset` method returns an `Asset` object for a specific asset, to invoke asset-localization methods on that asset.

**Validation and Behavior**

- It does not validate the UID for null or empty values at construction time. If `uid` is omitted, `Stack.Asset()` still returns an `Asset` object.
- Use this method before `Localize`, `LocalizeAsync`, `Unlocalize`, `UnlocalizeAsync`, `GetLocalizedVersions`, and `GetLocalizedVersionsAsync`.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | null | Defines the asset UID that the returned `Asset` object targets. Provide `ASSETUID` when the object is used for localization, unlocalization, or retrieval of localized versions. |

Returns:
Type
An Asset instance bound to the current stack context and the provided asset UID.

The following example gets an `Asset` object for an existing asset and validates that the object is ready for follow-up localization calls.

```
using System;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
public class Program
{
    public static void Main()
    {
        try
        {
            ContentstackClient client = new ContentstackClient("AUTHTOKEN");
            Stack stack = client.Stack("APIKEY");
            Asset asset = stack.Asset("ASSETUID");

            if (string.IsNullOrWhiteSpace(asset.Uid))
            {
                throw new InvalidOperationException("Asset UID is required before calling localization methods.");
            }
            Console.WriteLine($"Prepared asset object for UID: {asset.Uid}");
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}
```
