---
title: "[.NET Management] -  Migrate .NET Management SDK from Newtonsoft.Json to System.Text.Json"
description: Use this guide when you upgrade the Contentstack Management .NET SDK from v0.x to v1.0.0-beta.1+ and need to migrate from Newtonsoft.Json to System.Text.Json.
url: https://www.contentstack.com/docs/developers/sdks/content-management-sdk/dot-net/migrate-dotnet-management-sdk-from-newtonsoft.json-to-system.text.json
product: Contentstack
doc_type: migration-guide
audience:
  - developers
  - dotnet-developers
version: v1.0.0-beta.1+
last_updated: 2026-06-13
---

# [.NET Management] -  Migrate .NET Management SDK from Newtonsoft.Json to System.Text.Json

This page explains how to migrate code when upgrading the Contentstack Management .NET SDK from v0.x to v1.0.0-beta.1+ by replacing Newtonsoft.Json usage with System.Text.Json equivalents. It is intended for .NET developers maintaining applications that use the SDK and should be used during an SDK upgrade that breaks call sites relying on Newtonsoft types and APIs.

## Migrate .NET Management SDK from Newtonsoft.Json to System.Text.Json

Use this guide when you upgrade the Contentstack Management .NET SDK from **v0.x** to **v1.0.0-beta.1+**. The new version removes **Newtonsoft.Json** and replaces it with **System.Text.Json**, breaking every call site that uses `JObject`, `JsonSerializerSettings`, Newtonsoft converters, or Newtonsoft attributes.

This guide shows the System.Text.Json replacement for each affected area and the exact code changes required.

## What You'll Learn
- Configure `SerializerOptions` on `ContentstackClient` to match your models.
- Read API responses with `OpenJsonObjectResponse()` or `OpenTResponse<T>()`.
- Replace `JObject`, `JToken`, and `JArray` usage with `JsonObject` and `JsonNode`.
- Rewrite custom `JsonConverter` types for System.Text.Json.
- Update model serialization attributes and JSON exception handling.
- Use the adapter to port call sites one at a time without migrating your entire codebase at once.

## Quick Decision Guide

| Approach | When to use | Key section |
|---|---|---|
| Full migration | All Newtonsoft.Json types replaced in one pass, no Newtonsoft dependency remaining | This entire guide |
| Gradual migration | Some legacy code still needs `JObject`. Port call sites one at a time | [Gradual migration with an adapter](#gradual-migration-with-an-adapter-optional) |

## Prerequisites
- **Mandatory**

  The [Contentstack Management .NET SDK](https://www.nuget.org/packages/contentstack.management.csharp) `v1.0.0-beta.1` or later, installed in your project.
- [.NET 10](https://dotnet.microsoft.com/) or later, the framework version this SDK targets.
- **Optional**

  Familiarity with [System.Text.Json](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-overview), which helps when rewriting converters and JSON-path code.

## Type mapping reference

Use this table to find the System.Text.Json equivalent for each Newtonsoft.Json type the SDK exposes.

| Area | Newtonsoft.Json (v0.x) | System.Text.Json (v1.0.0-beta.1+) |
|---|---|---|
| Client configuration | `SerializerSettings` (`JsonSerializerSettings`) | `SerializerOptions` (`JsonSerializerOptions`) |
| Serialize an object | `JsonConvert.SerializeObject(obj, settings)` | `JsonSerializer.Serialize(obj, options)` |
| Deserialize an object | `JsonConvert.DeserializeObject<T>(json, settings)` | `JsonSerializer.Deserialize<T>(json, options)` |
| Response parsing | `response.OpenJObjectResponse()` → `JObject` | `response.OpenJsonObjectResponse()` → `JsonObject` |
| Raw JSON types | `JObject`, `JToken`, `JArray` | `JsonObject`, `JsonNode`, `JsonArray` |
| Parse a JSON object | `JObject.Parse(json)` | `JsonNode.Parse(json)!.AsObject()` |
| Parse a JSON array | `JArray.Parse(json)` | `JsonNode.Parse(json)!.AsArray()` |
| JSON path | `jobj.SelectToken("$.entries")` | `jobj["entries"]` (simple paths) |
| Convert a node to a type | `token.ToObject<MyType>(serializer)` | `JsonSerializer.Deserialize<MyType>(node.GetRawText(), options)` |
| Query parameters | `ParameterCollection.AddQuery(JObject)` | `ParameterCollection.AddQuery(JsonNode)` |
| Model attributes | `[JsonProperty("field_uid")]` | `[JsonPropertyName("field_uid")]` |
| Custom converters | `Newtonsoft.Json.JsonConverter<T>` | `System.Text.Json.Serialization.JsonConverter<T>` |
| Exceptions | `Newtonsoft.Json.JsonException` | `System.Text.Json.JsonException` |

## Configure serialization on ContentstackClient

The `SerializerSettings` property is renamed to `SerializerOptions` and its type changes from `JsonSerializerSettings` to `JsonSerializerOptions`. Code that sets Newtonsoft-specific options on `SerializerSettings` does not compile after you upgrade.

### Before (Newtonsoft, v0.x)

```
using Newtonsoft.Json;

var client = new ContentstackClient(options);

client.SerializerSettings.DateParseHandling = DateParseHandling.None;
client.SerializerSettings.DateFormatHandling = DateFormatHandling.IsoDateFormat;
client.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;

// Register a custom Newtonsoft converter
client.SerializerSettings.Converters.Add(new MyNewtonsoftConverter());
```

### After (System.Text.Json, v1.0.0-beta.1+)

```
using System.Text.Json;
using System.Text.Json.Serialization;

var client = new ContentstackClient(options);

// System.Text.Json uses ISO 8601 for dates by default — no extra configuration needed for most cases
client.SerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;

// Register a custom System.Text.Json converter (must be rewritten — see Custom converters section)
client.SerializerOptions.Converters.Add(new MySystemTextJsonConverter());
```

`SerializerOptions` key points:
- The property is `SerializerOptions` (`JsonSerializerOptions`), not `SerializerSettings`.
- Newtonsoft converters **cannot** be added to `JsonSerializerOptions` without rewriting them (see [Custom converters](#custom-jsonconverter-types)).
- `SerializerOptions` is a `public` property on `ContentstackClient`. The same instance is used for all SDK API calls, so converters and options you add there apply throughout.

## Serialize and deserialize outside the SDK

### Before

```
using Newtonsoft.Json;

string json = JsonConvert.SerializeObject(myModel, client.SerializerSettings);
var copy = JsonConvert.DeserializeObject(json, client.SerializerSettings);
```

### After

```
using System.Text.Json;

string json = JsonSerializer.Serialize(myModel, client.SerializerOptions);
var copy = JsonSerializer.Deserialize(json, client.SerializerOptions);
```

Pass the same `JsonSerializerOptions` instance from `client.SerializerOptions` so field names, converters, and date behavior stay consistent with how the SDK parses entries and assets.

## Working with response objects

`ContentstackResponse` now exposes three ways to read a response:

| Method | Return type | Notes |
|---|---|---|
| `OpenJsonObjectResponse()` | `JsonObject` | Replaces `OpenJObjectResponse()`. Use this for raw JSON access. |
| `OpenTResponse<T>()` | `T?` | Deserializes to a typed model. Uses STJ internally, no change needed. |
| `OpenResponse()` | `string` | Raw JSON string, no change needed. |

### Before

```
JObject result = response.OpenJObjectResponse();
string title = result["title"]?.Value();
```

### After

```
JsonObject result = response.OpenJsonObjectResponse();
string? title = result["title"]?.GetValue();
```

Or deserialize directly to a typed model (preferred):

```
MyModel? model = response.OpenTResponse();
```

## Working with JSON documents (JObject → JsonObject)

### Parse a JSON string

**Before**

```
using Newtonsoft.Json.Linq;

JObject doc = JObject.Parse(responseJson);
var count = doc["count"]?.Value();
```

**After**

```
using System.Text.Json.Nodes;

JsonObject doc = JsonNode.Parse(responseJson)!.AsObject();
int? count = doc["count"]?.GetValue();
```

For nested objects or arrays within the document, deserialize with the client's options:

```
MyDto? dto = JsonSerializer.Deserialize(doc["nested"]!.GetRawText(), client.SerializerOptions);
```

### JSON Path and SelectToken

Newtonsoft's `SelectToken("$.entries[0].title")` has no built-in equivalent in System.Text.Json.

Simple property paths become chained indexers:

**Before**

```
var entries = obj.SelectToken("$.entries");
var title = obj.SelectToken("$.entries[0].title")?.ToString();
```

**After**

```
var entries = obj["entries"];
var title = doc["entries"]?[0]?["title"]?.GetValue();
```

For deep or dynamic paths:
- Navigate to the target node by chaining indexers and iterating arrays in a loop.
- Deserialize to a typed model and use C# property access instead of path queries.
- Use [JsonPath.Net](https://www.nuget.org/packages/JsonPath.Net) if your codebase relies heavily on dynamic path queries.
- Keep Newtonsoft as a direct project dependency in your application for legacy path-heavy code that does not pass data to or receive data from the SDK (see [Gradual migration](#gradual-migration-with-an-adapter-optional)).

### Build or mutate JSON

**Before**

```
var q = new JObject
{
    ["title"] = "Hello",
    ["locale"] = "en-us"
};
```

**After**

```
var q = new JsonObject
{
    ["title"] = "Hello",
    ["locale"] = "en-us"
};
```

## Updated SDK method signatures

The following methods now return or accept System.Text.Json types. Update every call site that stores the result or passes a parameter typed as a Newtonsoft type.

### Query parameters

`ParameterCollection.AddQuery` accepts a `System.Text.Json.Nodes.JsonNode`. Pass a `JsonObject`, which derives from `JsonNode`, wherever you previously passed a Newtonsoft `JObject`.

**Before (Newtonsoft, v0.x)**

```
using Newtonsoft.Json.Linq;

var filter = new JObject { ["locale"] = "en-us" };
query.Parameters.AddQuery(filter);
```

**After (System.Text.Json, v1.0.0-beta.1+)**

```
using System.Text.Json.Nodes;

var filter = new JsonObject { ["locale"] = "en-us" };
query.Parameters.AddQuery(filter);
```

## Custom JsonConverter types

Newtonsoft.Json and System.Text.Json both define a type named `JsonConverter<T>`, but they are in different namespaces and have different method signatures. You must rewrite any custom converters.

### Before (Newtonsoft sketch)

```
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

public class MyNewtonsoftConverter : JsonConverter
{
    public override MyModel ReadJson(JsonReader reader, Type objectType,
        MyModel? existingValue, bool hasExistingValue, JsonSerializer serializer)
    {
        JObject obj = JObject.Load(reader);
        var model = obj.ToObject(serializer)!;
        // custom logic
        return model;
    }

    public override void WriteJson(JsonWriter writer, MyModel? value, JsonSerializer serializer)
    {
        serializer.Serialize(writer, value);
    }
}
```

### After (System.Text.Json)

```
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.Json.Nodes;

public class MySystemTextJsonConverter : JsonConverter
{
    public override MyModel? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        JsonNode node = JsonNode.Parse(ref reader)!;
        var model = JsonSerializer.Deserialize(node.GetRawText(), options);
        if (model is null) return null;
        // custom logic using node.AsObject(), etc.
        return model;
    }

    public override void Write(Utf8JsonWriter writer, MyModel value, JsonSerializerOptions options)
    {
        JsonSerializer.Serialize(writer, value, options);
    }
}
```

Register with `client.SerializerOptions.Converters.Add(new MySystemTextJsonConverter());`.

**Polymorphic converters**

The SDK itself uses `[JsonPolymorphic]` and `[JsonDerivedType]` on base model types (for example, `Field` and its subtypes). If you subclass SDK models or provide your own polymorphic field types, declare them at the base class level:

```
using System.Text.Json.Serialization;

[JsonPolymorphic(UnknownDerivedTypeHandling = JsonUnknownDerivedTypeHandling.FallBackToNearestAncestor)]
[JsonDerivedType(typeof(MyCustomField))]
public class Field { ... }
```

## Attributes on your models

Replace Newtonsoft serialization attributes with System.Text.Json equivalents for any type deserialized by the SDK.

**Before**

```
using Newtonsoft.Json;

public class Product
{
    [JsonProperty("product_title")]
    public string Title { get; set; }

    [JsonIgnore]
    public string Internal { get; set; }
}
```

**After**

```
using System.Text.Json.Serialization;

public class Product
{
    [JsonPropertyName("product_title")]
    public string Title { get; set; } = "";

    [JsonIgnore]
    public string Internal { get; set; } = "";
}
```

Additional System.Text.Json attributes:

| Scenario | Attribute |
|---|---|
| Ignore null properties on write | `[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]` |
| Accept numbers from JSON strings | `[JsonNumberHandling(JsonNumberHandling.AllowReadingFromString)]` |
| Custom converter on a property | `[JsonConverter(typeof(MyConverter))]` |

## Exception handling

If you catch JSON parsing errors around SDK calls:

**Before**

```
catch (Newtonsoft.Json.JsonException ex) { /* ... */ }
```

**After**

```
catch (System.Text.Json.JsonException ex) { /* ... */ }
```

SDK-specific errors (`ContentstackErrorException`) are unchanged.

## Gradual migration with an adapter (optional)

If you need to migrate incrementally while some legacy code still uses `JObject`:

```
using System.Text.Json.Nodes;
using Newtonsoft.Json.Linq;

static JsonObject ToJsonObject(JObject jo) =>
    JsonNode.Parse(jo.ToString(Newtonsoft.Json.Formatting.None))!.AsObject();

static JObject ToJObject(JsonObject jo) =>
    JObject.Parse(jo.ToJsonString());
```

This lets your non-SDK code continue using `JObject` while satisfying the SDK's requirement for `JsonObject` at each call site. It does **not** restore full compatibility. You still need to convert every place you pass a `JObject` to or receive one from the SDK. Remove the adapter once all call sites are ported.

## Troubleshooting

### A custom Newtonsoft converter is never invoked

**Symptom:** Your existing converter compiles, but the SDK ignores it and values serialize with default behavior.

**Root cause:** The SDK serializes through its `SerializerOptions`, which is a `System.Text.Json.JsonSerializerOptions`. A Newtonsoft `JsonConverter<T>` is a different type in a different namespace, so it is never registered on those options.

**Resolution:** Rewrite the converter as a `System.Text.Json.Serialization.JsonConverter<T>` and register it with `client.SerializerOptions.Converters.Add(...)`. See [Custom converters](#custom-jsonconverter-types).

### SelectToken calls no longer compile

**Symptom:** Code using `SelectToken("$.path")` fails to build after switching to `JsonObject`.

**Root cause:** The `JsonNode` API has no `SelectToken` method, and System.Text.Json has no single built-in JSON Path equivalent.

**Resolution:** Replace simple paths with chained indexers such as `doc["a"]?[0]?["b"]`, deserialize to a typed model, or adopt a JSON Path library for `JsonNode`. See [JSON Path and SelectToken](#json-path-and-selecttoken).

### A custom field subtype deserializes as the base Field type

**Symptom:** A field type you added comes back as the base `Field` rather than your subclass.

**Root cause:** The SDK declares `Field` with `[JsonPolymorphic(UnknownDerivedTypeHandling = JsonUnknownDerivedTypeHandling.FallBackToNearestAncestor)]`, so an unrecognized subtype falls back to the nearest known ancestor instead of throwing.

**Resolution:** Declare your subtype with `[JsonDerivedType(typeof(MyCustomField))]` on the base class, as shown in [Custom converters](#custom-jsonconverter-types).

### Date values fail to parse

**Symptom:** A `JsonException` is thrown when reading models that contain date fields.

**Root cause:** System.Text.Json expects ISO 8601 date strings by default, and the SDK registers no custom date converter. Other date formats are not parsed automatically.

**Resolution:** Supply dates in ISO 8601, or register a custom `JsonConverter<DateTime>` on `client.SerializerOptions` to handle your format.

## Pre-upgrade checklist
- Search your solution for `Newtonsoft.Json`, `JObject`, `JToken`, `JArray`, `JsonConvert`, `JsonSerializerSettings`, `[JsonProperty]`, and Newtonsoft `JsonConverter`.
- Replace client configuration: move from `SerializerSettings` to `SerializerOptions` with equivalent behavior (nulls, dates, and property naming convention such as camelCase) (see [Configure serialization](#configure-serialization-on-contentstackclient)).
- Update response handling: replace `OpenJObjectResponse()` → `OpenJsonObjectResponse()`, or switch to `OpenTResponse<T>()` for typed models (see [Working with response objects](#working-with-response-objects)).
- Rewrite custom **converters** as `System.Text.Json.Serialization.JsonConverter<T>` and re-register on `SerializerOptions` (see [Custom converters](#custom-jsonconverter-types)).
- Update model attributes: `[JsonProperty]` → `[JsonPropertyName]`, etc. (see [Attributes on your models](#attributes-on-your-models)).
- Replace all `JObject`/`JToken` usage in business logic with `JsonObject`/`JsonNode` (see [Working with JSON documents](#working-with-json-documents-jobject--jsonobject)).
- Replace `SelectToken` with chained indexers or a deliberate JSON Path strategy (see [JSON Path and SelectToken](#json-path-and-selecttoken)).
- Update `catch (Newtonsoft.Json.JsonException)` to `catch (System.Text.Json.JsonException)` (see [Exception handling](#exception-handling)).
- Run integration tests against staging, and compare serialized payloads if you snapshot JSON responses.
- Remove `Newtonsoft.Json` from your project once your own code no longer needs it. The SDK no longer references it.

## Next Steps
- [System.Text.Json overview (Microsoft)](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-overview). Background on the serializer the SDK now uses, including supported types and configuration options.
- [Migrate from Newtonsoft.Json to System.Text.Json (Microsoft)](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/migrate-from-newtonsoft-how-to). Microsoft's API-by-API migration reference for cases beyond the SDK-specific changes covered here.
- [CHANGELOG.md](https://github.com/contentstack/contentstack-management-dotnet/blob/main/CHANGELOG.md). The v1.0.0-beta.1 release notes for this SDK.

## Common questions

### Do I need to change code that uses `OpenTResponse<T>()`?
No. `OpenTResponse<T>()` deserializes to a typed model and uses STJ internally, no change needed.

### What should I replace `OpenJObjectResponse()` with?
Replace `OpenJObjectResponse()` with `OpenJsonObjectResponse()`.

### Can I keep Newtonsoft.Json in my application while upgrading the SDK?
Yes. Use the adapter in [Gradual migration with an adapter (optional)](#gradual-migration-with-an-adapter-optional) to port call sites one at a time.

### Why don’t my `SelectToken` calls work after migrating?
The `JsonNode` API has no `SelectToken` method, and System.Text.Json has no single built-in JSON Path equivalent.