---
title: "Migrate .NET Delivery SDK from Newtonsoft.Json to System.Text.Json"
description: "Upgrade your Contentstack Delivery .NET SDK by migrating to System.Text.Json, with this comprehensive guide to handle breaking changes and simplify code."
url: /developers/sdks/content-delivery-sdk/dot-net/migrate-dotnet-delivery-sdk-from-newtonsoft.json-to-system.text.json
---

# Migrate .NET Delivery SDK from Newtonsoft.Json to System.Text.Json

## Migrate .NET Delivery SDK from Newtonsoft.Json to System.Text.Json

Use this guide when you upgrade the Contentstack Delivery .NET SDK to version 3.x.x. That version removes **Newtonsoft.Json** and replaces it with **System.Text.Json**, breaking every call site that uses JObject, JsonSerializerSettings, Newtonsoft converters, or Newtonsoft attributes.

This guide shows the System.Text.Json replacement for each affected area and the exact code changes required.

**Note:** If your codebase uses SelectToken() extensively, plan additional migration effort. System.Text.Json has no built-in equivalent. See [JSON Path and SelectToken](#json-path-and-selecttoken).

## Prerequisites

-   The [Contentstack Delivery .NET SDK](https://www.nuget.org/packages/contentstack.csharp) version 3.x.x or later, installed in your project.
-   [.NET 10](https://dotnet.microsoft.com/) or later.

## Breaking Changes Reference

| Area | Newtonsoft.Json (current) | System.Text.Json (3.x.x) |
| --- | --- | --- |
| Raw JSON types | JObject, JToken, JArray | JsonObject, JsonNode, JsonArray |
| Parse a JSON object | JObject.Parse(json) | JsonNode.Parse(json)!.AsObject() |
| Parse a JSON array | JArray.Parse(json) | JsonNode.Parse(json)!.AsArray() |
| Convert a node to a type | token.ToObject<MyType>(serializer) | JsonSerializer.Deserialize<MyType>(node.GetRawText(), options) |
| Entry.ToJson() | returns JObject | returns JsonObject |
| Query.Count() | returns JObject | returns JsonObject |
| AssetLibrary.Query(JObject) | accepts JObject | accepts JsonObject |
| AssetLibrary.Count() | returns JObject | returns JsonObject |
| ContentType.Fetch() | returns JObject | returns JsonObject |
| GlobalField.Fetch() | returns JObject | returns JsonObject |
| GlobalFieldQuery.Find() | returns JObject | returns JsonObject |
| Model attributes | \[JsonProperty("field\_uid")\] | \[JsonPropertyName("field\_uid")\] |
| Exceptions | Newtonsoft.Json.JsonException | System.Text.Json.JsonException |
| Client configuration | SerializerSettings (JsonSerializerSettings) | SerializerOptions (JsonSerializerOptions) |
| Serialize an object | JsonConvert.SerializeObject(obj, settings) | JsonSerializer.Serialize(obj, options) |
| Deserialize an object | JsonConvert.DeserializeObject<T>(json, settings) | JsonSerializer.Deserialize<T>(json, options) |
| JSON path | jobj.SelectToken("$.entries") | jobj\["entries"\] (simple paths only) |
| Custom converters | Newtonsoft.Json.JsonConverter<T> | System.Text.Json.Serialization.JsonConverter<T> |

## Quick Decision Guide

| Situation | Recommended path |
| --- | --- |
| Small codebase, minimal Newtonsoft usage | Full migration. Follow this guide top to bottom. |
| Heavy JObject usage throughout business logic | Gradual migration. Use the adapter while porting call sites one at a time. |
| Many SelectToken() calls | Full migration with a JSON Path strategy. Consider [JsonPath.Net](https://www.nuget.org/packages/JsonPath.Net) for dynamic paths. |
| Many custom JsonConverter<T> implementations | Full migration. Rewrite converters first before porting other call sites. |
| Large enterprise app with all of the above | Gradual migration. Start with the adapter, then converters, then remaining call sites. |

## Minimal Migration Path

For most upgrades, follow this order:

1.  Complete the prerequisites.
2.  Update SDK method call sites that return JObject (Entry.ToJson(), Query.Count(), AssetLibrary.Count(), ContentType.Fetch(), GlobalField.Fetch(), GlobalFieldQuery.Find()).
3.  Replace AssetLibrary.Query(JObject) parameter with JsonObject.
4.  Replace JObject, JToken, and JArray usage with JsonObject, JsonNode, and JsonArray.
5.  Replace SelectToken() calls with chained indexers, typed models, or a JSON Path library.
6.  Replace \[JsonProperty\] with \[JsonPropertyName\] on your models.
7.  Update catch (Newtonsoft.Json.JsonException) to catch (System.Text.Json.JsonException).
8.  Replace SerializerSettings with SerializerOptions and rewrite any custom converters.
9.  Run integration tests and compare serialized payloads. Remove the Newtonsoft.Json dependency.

## SDK methods that change return or parameter types

The following SDK methods now return or accept System.Text.Json types. Update every call site that stores the result or passes a parameter typed as a Newtonsoft type.

### Entry.ToJson()

**Before**

```
JObject raw = entry.ToJson();
string title = (string?)raw["title"];
```

**After**

```
JsonObject raw = entry.ToJson();
string? title = raw["title"]?.GetValue<string>();
```

### Query.Count() and AssetLibrary.Count()

**Before**

```
JObject countJson = await query.Count();
int total = countJson["count"]!.Value<int>();
```

**After**

```
JsonObject countJson = await query.Count();
int total = countJson["count"]!.GetValue<int>();
```

### AssetLibrary.Query(JObject)

**Before**

```
var filter = new JObject { ["tag"] = "featured" };
var library = stack.AssetLibrary().Query(filter);
```

**After**

```
var filter = new JsonObject { ["tag"] = "featured" };
var library = stack.AssetLibrary().Query(filter);
```

### ContentType.Fetch(), GlobalField.Fetch(), GlobalFieldQuery.Find()

**Before**

```
JObject schema = await contentType.Fetch();
JObject gf = await globalField.Fetch();
JObject found = await globalFieldQuery.Find();
```

**After**

```
JsonObject schema = await contentType.Fetch();
JsonObject gf = await globalField.Fetch();
JsonObject found = await globalFieldQuery.Find();
```

Adjust any code that casts to Newtonsoft.Json.Linq.JObject or uses LINQ-to-JSON APIs (Properties(), Descendants(), etc.) to the equivalent JsonObject or JsonNode APIs.

## Working with JSON documents (JObject → JsonObject)

### Parse a JSON string

**Before**

```
using Newtonsoft.Json.Linq;

JObject doc = JObject.Parse(responseJson);
var count = doc["count"]?.Value<int>();
```

**After**

```
using System.Text.Json.Nodes;

JsonObject doc = JsonNode.Parse(responseJson)!.AsObject();
int? count = doc["count"]?.GetValue<int>();
```

For nested objects or arrays within the document, deserialize with the client's options:

```
MyDto? dto = JsonSerializer.Deserialize<MyDto>(doc["nested"]!.GetRawText(), stack.SerializerOptions);
```

### JSON Path and SelectToken

Newtonsoft's SelectToken("$.entries\[0\].title") has no built-in equivalent in System.Text.Json.

Simple property paths become chained indexers:

**Before**

```
var entries = obj.SelectToken("$.entries");
var title = obj.SelectToken("$.entries[0].title")?.ToString();
```

**After**

```
var entries = obj["entries"];
var title = doc["entries"]?[0]?["title"]?.GetValue<string>();
```

For deep or dynamic paths:

-   Navigate to the target node by chaining indexers and iterating arrays in a loop.
-   Deserialize to a typed model and use C# property access instead of path queries.
-   Use [JsonPath.Net](https://www.nuget.org/packages/JsonPath.Net) if your codebase relies heavily on dynamic path queries.
-   Keep Newtonsoft as a direct project dependency in your application for legacy path-heavy code that does not pass data to or receive data from the SDK (see [Gradual migration](#gradual-migration-with-an-adapter-optional)).

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
| --- | --- |
| Ignore null properties on write | \[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)\] |
| Accept numbers from JSON strings | \[JsonNumberHandling(JsonNumberHandling.AllowReadingFromString)\] |
| Custom converter on a property | \[JsonConverter(typeof(MyConverter))\] |

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

SDK-specific errors are unchanged by this migration.

## Configure serialization on ContentstackClient

The SerializerSettings property is renamed to SerializerOptions and its type changes from JsonSerializerSettings to JsonSerializerOptions. Code that sets Newtonsoft-specific options on SerializerSettings does not compile after you upgrade.

### Before

```
using Newtonsoft.Json;

var stack = new ContentstackClient(/* ... */);

stack.SerializerSettings.DateParseHandling = DateParseHandling.None;
stack.SerializerSettings.DateFormatHandling = DateFormatHandling.IsoDateFormat;
stack.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
stack.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;

// Register a custom Newtonsoft converter
stack.SerializerSettings.Converters.Add(new MyNewtonsoftEntryConverter());
```

### After

```
using System.Text.Json;
using System.Text.Json.Serialization;

var stack = new ContentstackClient(/* ... */);

// System.Text.Json uses ISO 8601 for dates by default — no extra configuration needed for most cases
stack.SerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;

// Register a custom System.Text.Json converter (must be rewritten — see Custom converters section)
stack.SerializerOptions.Converters.Add(new MySystemTextJsonEntryConverter());
```

SerializerOptions key points:

-   The property is SerializerOptions (JsonSerializerOptions), not SerializerSettings.
-   Newtonsoft converters **cannot** be added to JsonSerializerOptions without rewriting them (see [Custom converters](#custom-jsonconverter-types)).
-   SerializerOptions is a public property on ContentstackClient. The same instance is used for all SDK API calls, so converters and options you add there apply throughout.

## Serialize and deserialize outside the SDK

### Before

```
using Newtonsoft.Json;

string json = JsonConvert.SerializeObject(myModel, stack.SerializerSettings);
var copy = JsonConvert.DeserializeObject<MyModel>(json, stack.SerializerSettings);
```

### After

```
using System.Text.Json;

string json = JsonSerializer.Serialize(myModel, stack.SerializerOptions);
var copy = JsonSerializer.Deserialize<MyModel>(json, stack.SerializerOptions);
```

Pass the same JsonSerializerOptions instance from stack.SerializerOptions so field names, converters, and date behavior stay consistent with how the SDK parses entries and assets.

## Custom JsonConverter types

Both serializers define a type named JsonConverter<T>, but they are in different namespaces and have different method signatures, reader and writer types, and parsing patterns. You must rewrite any custom converters. Re-registering an existing Newtonsoft converter does not work.

### Before (Newtonsoft sketch)

```
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

public class MyNewtonsoftConverter : JsonConverter<MyModel>
{
    public override MyModel ReadJson(JsonReader reader, Type objectType,
        MyModel? existingValue, bool hasExistingValue, JsonSerializer serializer)
    {
        JObject obj = JObject.Load(reader);
        var model = obj.ToObject<MyModel>(serializer)!;
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

public class MySystemTextJsonConverter : JsonConverter<MyModel>
{
    public override MyModel? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        JsonNode node = JsonNode.Parse(ref reader)!;
        var model = JsonSerializer.Deserialize<MyModel>(node.GetRawText(), options);
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

Register with stack.SerializerOptions.Converters.Add(new MySystemTextJsonConverter());.

## Gradual migration with an adapter (optional)

If you need to migrate incrementally while some legacy code still uses JObject:

```
using System.Text.Json.Nodes;
using Newtonsoft.Json.Linq;

static JsonObject ToJsonObject(JObject jo) =>
    JsonNode.Parse(jo.ToString(Newtonsoft.Json.Formatting.None))!.AsObject();

static JObject ToJObject(JsonObject jo) =>
    JObject.Parse(jo.ToJsonString());
```

This lets your non-SDK code continue using JObject while satisfying the SDK's requirement for JsonObject at each call site. It does **not** restore full compatibility. You still need to convert every place you pass a JObject to or receive one from the SDK. Remove the adapter once all call sites are ported.

## Troubleshooting

### A custom Newtonsoft converter is never invoked

**Symptom:** Your existing converter compiles, but the SDK ignores it and values serialize with default behavior.

**Root cause:** The SDK serializes through its SerializerOptions, which is a System.Text.Json.JsonSerializerOptions. A Newtonsoft JsonConverter<T> is a different type in a different namespace, so it is never registered on those options.

**Resolution:** Rewrite the converter as a System.Text.Json.Serialization.JsonConverter<T> and register it with stack.SerializerOptions.Converters.Add(...). See [Custom converters](#custom-jsonconverter-types).

### SelectToken calls no longer compile

**Symptom:** Code using SelectToken("$.path") fails to build after switching to JsonObject.

**Root cause:** The JsonNode API has no SelectToken method, and System.Text.Json has no single built-in JSON Path equivalent.

**Resolution:** Replace simple paths with chained indexers such as doc\["a"\]?\[0\]?\["b"\], deserialize to a typed model, or adopt a JSON Path library for JsonNode. See [JSON Path and SelectToken](#json-path-and-selecttoken).

### Date values fail to parse

**Symptom:** A JsonException is thrown when reading models that contain date fields.

**Root cause:** System.Text.Json expects ISO 8601 date strings by default, and the SDK registers no custom date converter. Other date formats are not parsed automatically.

**Resolution:** Supply dates in ISO 8601, or register a custom JsonConverter<DateTime> on stack.SerializerOptions to handle your format.

## Pre-upgrade checklist

Use this checklist to verify you have completed every change before removing the Newtonsoft.Json dependency.

1.  Search your solution for Newtonsoft.Json, JObject, JToken, JArray, JsonConvert, JsonSerializerSettings, \[JsonProperty\], and Newtonsoft JsonConverter.
2.  Update SDK method call sites that return JObject: Entry.ToJson(), Query.Count(), AssetLibrary.Count(), ContentType.Fetch(), GlobalField.Fetch(), GlobalFieldQuery.Find() (see [SDK methods that change](#sdk-methods-that-change-return-or-parameter-types)).
3.  Replace AssetLibrary.Query(JObject) parameter with JsonObject (see [SDK methods that change](#sdk-methods-that-change-return-or-parameter-types)).
4.  Replace all JObject/JToken usage in business logic with JsonObject/JsonNode (see [Working with JSON documents](#working-with-json-documents-jobject--jsonobject)).
5.  Replace SelectToken with chained indexers or a deliberate JSON Path strategy (see [JSON Path and SelectToken](#json-path-and-selecttoken)).
6.  Update model attributes: \[JsonProperty\] to \[JsonPropertyName\], etc. (see [Attributes on your models](#attributes-on-your-models)).
7.  Update catch (Newtonsoft.Json.JsonException) to catch (System.Text.Json.JsonException) (see [Exception handling](#exception-handling)).
8.  Replace client configuration: move from SerializerSettings to SerializerOptions (see [Configure serialization](#configure-serialization-on-contentstackclient)).
9.  Rewrite custom converters as System.Text.Json.Serialization.JsonConverter<T> and re-register on SerializerOptions (see [Custom converters](#custom-jsonconverter-types)).
10.  Run integration tests against staging, and compare serialized payloads if you snapshot JSON responses.
11.  Remove Newtonsoft.Json from your project once your own code no longer needs it. The SDK no longer references it.

## Next Steps

-   [System.Text.Json overview (Microsoft)](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-overview). Background on the serializer the SDK now uses, including supported types and configuration options.
-   [Migrate from Newtonsoft.Json to System.Text.Json (Microsoft)](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/migrate-from-newtonsoft?pivots=dotnet-10-0). Microsoft's API-by-API migration reference for cases beyond the SDK-specific changes covered here.
