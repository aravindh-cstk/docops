---
title: "Migrate the Contentstack Utils .NET SDK from Newtonsoft.Json to System.Text.Json"
description: "Utilize the Contentstack .NET Utils SDK Variant Utility to extract variant aliases and generate data-csvariants attributes using GetVariantAliases."
url: /developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json
---

# Migrate the Contentstack Utils .NET SDK from Newtonsoft.Json to System.Text.Json

## Migrate the Contentstack Utils .NET SDK from Newtonsoft.Json to System.Text.Json

Use this guide when you upgrade the Contentstack Utils .NET SDK to version 3.x.x. That version replaces **Newtonsoft.Json** with **System.Text.Json** as the serializer, breaking every place in your code that relies on JToken, JObject, Newtonsoft converter types, or Newtonsoft serialization attributes.

This guide shows the System.Text.Json replacement for each affected area and the exact code changes required.

**Note:** The most likely source of unexpected runtime failures is the attrs dictionary on Node. node.attrs values are System.Text.Json.JsonElement. Direct casts like (string)node.attrs\["key"\] throw InvalidCastException at runtime. Every place in your code that reads from node.attrs must be updated to use typed getter methods such as .GetString(). See [Accessing attrs dictionary values](/docs/developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json#accessing-attrs-dictionary-values).

## Prerequisites

-   The [Contentstack Utils .NET SDK](https://www.nuget.org/packages/contentstack.utils) version 3.x.x, installed in your project.
-   [.NET 10](https://dotnet.microsoft.com/) or later.

**Warning:** This version of the SDK removes its Newtonsoft.Json package reference and depends only on System.Text.Json. If your own application code directly uses Newtonsoft types (JObject, JsonConvert, etc.) outside of SDK calls, add the Newtonsoft.Json package reference to your project yourself, since the SDK no longer brings it in transitively.

## Breaking Changes Reference

| Area | Newtonsoft.Json (current) | System.Text.Json (3.x.x) |
| --- | --- | --- |
| Model attributes | \[JsonProperty("field\_uid")\] | \[JsonPropertyName("field\_uid")\] |
| Converter attribute on class | \[Newtonsoft.Json.JsonConverter(typeof(T))\] | \[JsonConverter(typeof(T))\] |
| attrs dictionary values | JToken (direct cast (string)node.attrs\["key"\]) | JsonElement (use .GetString(), .GetBoolean(), etc.) |
| Style attribute access | (JObject)attrs\["style"\] + .ToObject<Dictionary<string,string>>() | (JsonElement)attrs\["style"\] + JsonSerializer.Deserialize<Dictionary<string,string>>(element.GetRawText()) |
| Custom converter base class | Newtonsoft.Json.JsonConverter<T> | System.Text.Json.Serialization.JsonConverter<T> |
| Custom converter read method | ReadJson(JsonReader reader, ...) | Read(ref Utf8JsonReader reader, ...) |
| Custom converter write method | WriteJson(JsonWriter writer, ...) | Write(Utf8JsonWriter writer, ...) |
| Deserializing nodes | JsonConvert.DeserializeObject<Node>(json, settings) | JsonSerializer.Deserialize<Node>(json) |
| Deserializing GraphQL models | JsonConvert.DeserializeObject<GQLModel<T>>(json, settings) | JsonSerializer.Deserialize<GQLModel<T>>(json) |
| Exceptions | Newtonsoft.Json.JsonException | System.Text.Json.JsonException |
| Importing namespace | using Newtonsoft.Json; | using System.Text.Json.Serialization; |

## Quick Decision Guide

| Situation | Recommended path |
| --- | --- |
| Small codebase, minimal Newtonsoft usage | Full migration. Follow this guide top to bottom. |
| Many \[JsonProperty\] attributes on custom models | Full migration. Update attributes first. |
| Subclassing Options with custom RenderNode overrides that access node.attrs | Full migration. Update attrs value access to handle JsonElement. |
| Custom JsonConverter<T> implementations for Rich Text Editor (RTE) nodes | Full migration. Rewrite converters using Utf8JsonReader/Utf8JsonWriter. |
| Large codebase with many node.attrs direct casts | Full migration. Search your solution for the cast pattern, then update call sites module by module, using the compiler errors to find what is left. |

## Minimal Migration Path

For most upgrades, follow this order:

1.  Complete the prerequisites.
2.  Update \[JsonProperty\] to \[JsonPropertyName\] and \[Newtonsoft.Json.JsonConverter(...)\] to \[JsonConverter(...)\] on all model classes.
3.  Update node.attrs value access: replace direct JToken casts with the JsonElement\-aware pattern.
4.  Update attrs\["style"\] handling: replace the JObject cast with JsonElement and JsonSerializer.Deserialize.
5.  Update RenderNode overrides in your Options subclasses.
6.  Rewrite any custom JsonConverter<T> that extends Newtonsoft's base.
7.  Update catch (Newtonsoft.Json.JsonException) to catch (System.Text.Json.JsonException).
8.  Run integration tests and compare serialized payloads.

## Model attributes ([JsonProperty] to [JsonPropertyName])

Replace Newtonsoft serialization attributes with System.Text.Json equivalents on every model class that the SDK deserializes.

**Before**

```
using System.Collections.Generic;
using Newtonsoft.Json;
using Contentstack.Utils.Converters;
using Contentstack.Utils.Interfaces;

[Newtonsoft.Json.JsonConverter(typeof(RTEJsonConverter))]
public class JsonRTENode<T> where T : IEmbeddedObject
{
    [JsonProperty("json")]
    public Node Json { get; set; }

    [JsonProperty("embedded_itemsConnection.edges")]
    public List<IEdges<T>> Edges { get; set; }
}
```

**After**

```
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Contentstack.Utils.Converters;
using Contentstack.Utils.Interfaces;

[JsonConverter(typeof(RTEJsonConverterFactory))]
public class JsonRTENode<T> where T : IEmbeddedObject
{
    [JsonPropertyName("json")]
    public Node Json { get; set; }

    [JsonPropertyName("embedded_itemsConnection.edges")]
    public List<IEdges<T>> Edges { get; set; }
}
```

RTEJsonConverterFactory is a JsonConverterFactory that builds the correct closed generic converter for JsonRTENode<T> at runtime. It replaces the direct converter reference because JsonRTENode<T> is an open generic type, and a plain JsonConverter<T> cannot be attached to an open generic type through the \[JsonConverter\] attribute. See [Custom JsonConverter<T> types](/docs/developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json#custom-jsonconvertert-types) for the factory pattern.

The same pattern applies to JsonRTENodes<T> and any other model class you define that was marked with \[JsonProperty\] or \[Newtonsoft.Json.JsonConverter(...)\].

## Accessing attrs dictionary values

node.attrs values are JsonElement. JsonElement cannot be cast directly to string or other primitive types. Direct casts like (string)node.attrs\["key"\] throw InvalidCastException at runtime.

Replace every direct cast from node.attrs with a helper that handles both the string and JsonElement cases.

**Before**

```
// Direct JToken cast — throws InvalidCastException after the upgrade
string url = (string)node.attrs["url"];
string displayType = (string)node.attrs["display-type"];
string entryUid = (string)node.attrs["entry-uid"];
```

**After**

```
// Helper that handles both string and JsonElement values
string GetAttrString(string key)
{
    if (!node.attrs.ContainsKey(key) || node.attrs[key] == null) return "";
    var val = node.attrs[key];
    if (val is string s) return s;
    if (val is JsonElement je && je.ValueKind == JsonValueKind.String) return je.GetString();
    return val.ToString();
}

string url = GetAttrString("url");
string displayType = GetAttrString("display-type");
string entryUid = GetAttrString("entry-uid");
```

This pattern is used in Contentstack.Utils/Models/Metadata.cs throughout the implicit operator Metadata(Node node) conversion.

Define the helper as a local function inside each method that accesses node.attrs, or extract it to a shared utility class if multiple methods share the pattern.

## Style attribute handling

node.attrs\["style"\] holds a JsonElement with ValueKind == JsonValueKind.Object when the value is a JSON object. The JObject cast and .ToObject<>() call do not compile.

**Before**

```
if (node.attrs?.ContainsKey("style") == true)
{
    var styleVal = node.attrs["style"];
    if (styleVal != null)
    {
        if (styleVal is string)
        {
            styleAttrs = $" style=\"{styleVal}\"";
        }
        else if (styleVal is JObject)
        {
            var styleObject = (JObject)styleVal;
            var styleDictionary = styleObject.ToObject<Dictionary<string, string>>();
            styleAttrs = " style=\"";
            foreach (var pair in styleDictionary)
            {
                styleAttrs += $"{pair.Key}:{pair.Value};";
            }
            styleAttrs += "\"";
        }
    }
}
```

**After**

```
if (node.attrs.ContainsKey("style"))
{
    var styleVal = node.attrs["style"];
    if (styleVal != null)
    {
        if (styleVal is string)
        {
            styleAttrs = $" style=\"{styleVal}\"";
        }
        else if (styleVal is JsonElement styleElement && styleElement.ValueKind == JsonValueKind.Object)
        {
            var styleDictionary = JsonSerializer.Deserialize<Dictionary<string, string>>(styleElement.GetRawText());
            styleAttrs = " style=\"";
            foreach (var pair in styleDictionary)
            {
                styleAttrs += $"{pair.Key}:{pair.Value};";
            }
            styleAttrs += "\"";
        }
    }
}
```

The using System.Text.Json; directive is required for JsonElement, JsonValueKind, and JsonSerializer. Add using System.Collections.Generic; too if your file does not already import it, for Dictionary<string, string>.

## Subclassing Options with custom RenderNode overrides

If you subclass Options and override RenderNode to access node.attrs, update every attrs read to use the GetAttrString local function.

**Before**

```
public override string RenderNode(string nodeType, Node node, NodeChildrenCallBack callBack)
{
    switch (nodeType)
    {
        case "a":
            if (node.attrs.ContainsKey("target"))
            {
                return $"<a href=\"{(string)node.attrs["url"]}\" target=\"{(string)node.attrs["target"]}\">{callBack(node.children)}</a>";
            }
            return $"<a href=\"{(string)node.attrs["url"]}\">{callBack(node.children)}</a>";
    }
    return base.RenderNode(nodeType, node, callBack);
}
```

**After**

```
using System.Text.Json;

public override string RenderNode(string nodeType, Node node, NodeChildrenCallBack callBack)
{
    string GetAttrString(string key)
    {
        if (!node.attrs.ContainsKey(key) || node.attrs[key] == null) return "";
        var val = node.attrs[key];
        if (val is string s) return s;
        if (val is JsonElement je && je.ValueKind == JsonValueKind.String) return je.GetString();
        return val.ToString();
    }

    switch (nodeType)
    {
        case "a":
            if (node.attrs.ContainsKey("target"))
            {
                return $"<a href=\"{GetAttrString("url")}\" target=\"{GetAttrString("target")}\">{callBack(node.children)}</a>";
            }
            return $"<a href=\"{GetAttrString("url")}\">{callBack(node.children)}</a>";
    }
    return base.RenderNode(nodeType, node, callBack);
}
```

The CustomRenderOptionMock class in Contentstack.Utils.Tests/Mocks/CustomRenderOptionMock.cs demonstrates this pattern for the "a" node case, including the conditional check for the target attribute.

## Deserializing nodes and GraphQL models

Replace JsonConvert.DeserializeObject calls with JsonSerializer.Deserialize. JsonSerializerSettings and Newtonsoft's JsonSerializer are not needed.

**Before**

```
using Newtonsoft.Json;

public static Node parse(string jsonNode)
{
    JsonSerializerSettings SerializerSettings = new JsonSerializerSettings();
    JsonSerializer Serializer = JsonSerializer.Create(SerializerSettings);
    return JsonConvert.DeserializeObject<Node>(jsonNode, SerializerSettings);
}

public static GQLModel<T> parse<T>(string jsonNode, string embedConnection = null)
    where T : IEmbeddedObject
{
    var data = JsonToHtmlConstants.KGQLModel(jsonNode, embedConnection);
    JsonSerializerSettings SerializerSettings = new JsonSerializerSettings();
    JsonSerializer Serializer = JsonSerializer.Create(SerializerSettings);
    return JsonConvert.DeserializeObject<GQLModel<T>>(data, SerializerSettings);
}
```

**After**

```
using System.Text.Json;

public static class NodeParser
{
    private static readonly JsonSerializerOptions SerializerSettings = new JsonSerializerOptions
    {
        AllowTrailingCommas = true
    };

    public static Node parse(string jsonNode)
    {
        return JsonSerializer.Deserialize<Node>(jsonNode, SerializerSettings);
    }

    public static GQLModel<T> parse<T>(string jsonNode, string embedConnection = null)
        where T : IEmbeddedObject
    {
        var data = JsonToHtmlConstants.KGQLModel(jsonNode, embedConnection);
        return JsonSerializer.Deserialize<GQLModel<T>>(data, SerializerSettings);
    }
}
```

System.Text.Json rejects trailing commas by default. Set AllowTrailingCommas = true on a shared JsonSerializerOptions instance and pass it to every JsonSerializer.Deserialize call, as shown above. Only fall back to stripping trailing commas with a regex if you genuinely cannot control the JsonSerializerOptions used at your deserialization call site, for example when calling into a third party library. Treat that as a last resort. Regex based JSON mutation is fragile and can corrupt otherwise valid payloads.

## Custom JsonConverter<T> types

JsonConverter<T> exists in both namespaces but the signatures, reader, and writer types are incompatible. A Newtonsoft converter is not invoked by System.Text.Json. Rewrite any converter that extends Newtonsoft's base.

**Before**

```
using System;
using System.Linq;
using System.Reflection;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

public class RTEJsonConverter : JsonConverter
{
    public override bool CanConvert(Type objectType) { ... }

    public override object ReadJson(JsonReader reader, Type objectType,
                                    object existingValue, JsonSerializer serializer)
    {
        JObject jo = JObject.Load(reader);
        object targetObj = Activator.CreateInstance(objectType);

        foreach (PropertyInfo prop in objectType.GetProperties()
                                                .Where(p => p.CanRead && p.CanWrite))
        {
            JsonPropertyAttribute att = prop.GetCustomAttributes(true)
                                            .OfType<JsonPropertyAttribute>()
                                            .FirstOrDefault();
            string jsonPath = (att != null ? att.PropertyName : prop.Name);
            JToken token = jo.SelectToken(jsonPath);

            if (token != null && token.Type != JTokenType.Null)
            {
                object value = token.ToObject(prop.PropertyType, serializer);
                prop.SetValue(targetObj, value, null);
            }
        }
        return targetObj;
    }

    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
    {
        // implementation
    }
}
```

**After (System.Text.Json)**

```
using System;
using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;

public class RTEJsonConverter<T> : JsonConverter<T>
{
    public override T Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using (var jsonDoc = JsonDocument.ParseValue(ref reader))
        {
            var root = jsonDoc.RootElement;
            T targetObj = Activator.CreateInstance<T>();

            foreach (PropertyInfo prop in typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance))
            {
                var attr = prop.GetCustomAttribute<JsonPropertyNameAttribute>();
                string jsonPath = attr != null ? attr.Name : prop.Name;
                JsonElement token = root;
                bool found = false;

                // Support nested property names like 'system.uid'
                if (jsonPath.Contains("."))
                {
                    var parts = jsonPath.Split('.');
                    JsonElement current = root;
                    foreach (var part in parts)
                    {
                        if (current.ValueKind == JsonValueKind.Object && current.TryGetProperty(part, out var next))
                        {
                            current = next;
                            found = true;
                        }
                        else
                        {
                            found = false;
                            break;
                        }
                    }
                    if (found) token = current;
                }
                else if (root.TryGetProperty(jsonPath, out var directToken))
                {
                    token = directToken;
                    found = true;
                }

                if (found)
                {
                    object value = JsonSerializer.Deserialize(token.GetRawText(), prop.PropertyType, options);
                    prop.SetValue(targetObj, value);
                }
                else
                {
                    prop.SetValue(targetObj, prop.PropertyType.IsValueType
                        ? Activator.CreateInstance(prop.PropertyType)
                        : null);
                }
            }
            return targetObj;
        }
    }

    public override void Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
    {
        throw new NotSupportedException("Serialization is not supported for path mapped RTE models.");
    }
}
```

Key differences to apply when rewriting any converter:

-   Change the base class from Newtonsoft.Json.JsonConverter or Newtonsoft.Json.JsonConverter<T> to System.Text.Json.Serialization.JsonConverter<T>, using a concrete or properly constrained T rather than object. JsonConverter<T> already restricts itself to types matching T, so there is usually no need to override CanConvert.
-   Rename ReadJson to Read. Change the signature to Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options).
-   Rename WriteJson to Write. Change the signature to Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options). If the model is only ever deserialized, not serialized back, Write can throw NotSupportedException rather than implementing a round trip you do not need.
-   Replace JObject.Load(reader) with JsonDocument.ParseValue(ref reader) and work with JsonElement.
-   Replace \[JsonProperty\] attribute lookups with \[JsonPropertyName\] attribute lookups (JsonPropertyNameAttribute).
-   Replace token.ToObject<T>(serializer) with JsonSerializer.Deserialize<T>(token.GetRawText(), options).
-   Replace SelectToken with TryGetProperty and navigate nested properties step by step.
-   If your model type is itself an open generic (for example JsonRTENode<T>), System.Text.Json cannot register a JsonConverter<T> against it directly. Wrap the converter in a JsonConverterFactory that inspects the requested type in CanConvert and builds the matching closed generic converter in CreateConverter. See Contentstack.Utils.Converters.RTEJsonConverterFactory in the SDK source for a complete example of this pattern.

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

## Troubleshooting

### Cast fails at runtime

**Symptom:** Code compiles but throws InvalidCastException or InvalidOperationException at runtime when reading node.attrs\["key"\].

**Root cause:** attrs values are JsonElement. (string)node.attrs\["url"\] compiles because node.attrs is typed as IDictionary<string, object>, but the runtime cast fails when the actual value is a JsonElement.

**Resolution:** Replace the direct cast with the GetAttrString local function. See [Accessing attrs dictionary values](/docs/developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json#accessing-attrs-dictionary-values).

### A custom Newtonsoft converter is never invoked

**Symptom:** Your existing converter compiles, but the SDK ignores it and values serialize with default behavior.

**Root cause:** The SDK serializes through System.Text.Json.JsonSerializerOptions. A Newtonsoft JsonConverter<T> is a different type in a different namespace and is never registered on those options.

**Resolution:** Rewrite the converter as a System.Text.Json.Serialization.JsonConverter<T>. See [Custom JsonConverter<T> types](/docs/developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json#custom-jsonconvertert-types).

### JsonException on trailing commas in JSON strings

**Symptom:** System.Text.Json.JsonException is thrown with a message indicating that a trailing comma is not valid.

**Root cause:** System.Text.Json enforces strict JSON parsing by default. Trailing commas after the last element in an array or object are not valid JSON and are rejected.

**Resolution:** Create a JsonSerializerOptions instance with AllowTrailingCommas = true and pass it to JsonSerializer.Deserialize. Only strip trailing commas with a regex as a last resort, if you cannot control the JsonSerializerOptions used at the call site. See [Deserializing nodes and GraphQL models](/docs/developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json#deserializing-nodes-and-graphql-models).

### Date values fail to parse

**Symptom:** A JsonException is thrown when reading models that contain date fields.

**Root cause:** System.Text.Json expects ISO 8601 date strings by default (for example, 2024-01-15T00:00:00Z). Other date formats are not parsed automatically.

**Resolution:** Supply dates in ISO 8601 format, or register a custom JsonConverter<DateTime> with a JsonSerializerOptions instance to handle your format.

## Pre-upgrade checklist

Use this checklist to verify you have completed every change before releasing the upgrade.

1.  Search your solution for Newtonsoft.Json, JToken, JObject, JsonConvert, JsonSerializerSettings, \[JsonProperty\], and Newtonsoft JsonConverter.
2.  Update model attributes: \[JsonProperty\] to \[JsonPropertyName\], \[Newtonsoft.Json.JsonConverter(...)\] to \[JsonConverter(...)\] (see [Model attributes](/docs/developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json#model-attributes-jsonproperty-to-jsonpropertyname)).
3.  Update all node.attrs value access: replace direct JToken casts with the GetAttrString pattern (see [Accessing attrs dictionary values](/docs/developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json#accessing-attrs-dictionary-values)).
4.  Update attrs\["style"\] handling: replace the JObject cast with JsonElement and JsonSerializer.Deserialize (see [Style attribute handling](/docs/developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json#style-attribute-handling)).
5.  Update RenderNode overrides in your Options subclasses (see [Subclassing Options with custom RenderNode overrides](/docs/developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json#subclassing-options-with-custom-rendernode-overrides)).
6.  Update JsonConvert.DeserializeObject calls to JsonSerializer.Deserialize (see [Deserializing nodes and GraphQL models](/docs/developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json#deserializing-nodes-and-graphql-models)).
7.  Rewrite custom JsonConverter<T> implementations (see [Custom JsonConverter<T> types](/docs/developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json#custom-jsonconvertert-types)).
8.  Update catch (Newtonsoft.Json.JsonException) to catch (System.Text.Json.JsonException) (see [Exception handling](/docs/developers/sdks/utils-sdk/dot-net/migrate-dotnet-utils-sdk-from-newtonsoft.json-to-system.text.json#exception-handling)).
9.  Run integration tests and compare serialized payloads.

## Next Steps

-   [System.Text.Json overview (Microsoft)](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-overview). Background on the serializer the SDK now uses, including supported types, configuration options, and behavioral differences from Newtonsoft.Json.
-   [Migrate from Newtonsoft.Json to System.Text.Json (Microsoft)](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/migrate-from-newtonsoft). Microsoft's API-by-API migration reference for cases beyond the SDK-specific changes covered here.
