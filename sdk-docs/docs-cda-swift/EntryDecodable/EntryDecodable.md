---
title: "EntryDecodable"
description: "Decodable is a powerful Swift standard library feature that developers can use to decode custom types from external representation, such as JSON. EntryDecodable is an extension of the decodable protocol that you can use to decode the response to a specific model. By using this protocol, you can define types that will be mapped from your entries of the content type. In this guide, we will discuss how we can use the EntryDecodable Protocol in your Swift SDK. EntryDecodable Example Usage Let’s understand how to use this protocol with the help of a few examples. Standard Usage We have a content type named Session and to fetch entries of our Session content type from the Swift SDK, we need to create a class named Session that implements the EntryDecodable protocol as follows: Example usage: class Session: EntryDecodable { public enum FieldKeys: String, CodingKey { case title, uid, locale, type, speakers case createdAt = \"created_at\" case updatedAt = \"updated_at\" case createdBy = \"created_by\" case updatedBy = \"updated_by\" case sessionId = \"session_id\" case desc = \"description\" case sessionTime = \"session_time\" } var locale: String var title: String var uid: String var createdAt: Date? var updatedAt: Date? var createdBy: String? var updatedBy: String? var sessionId: Int var desc: String var type: String var sessionTime: SessionTime var speakers: [Speaker]? public required init(from decoder: Decoder) throws { let container = try decoder.container(keyedBy: FieldKeys.self) uid = try container.decode(String.self, forKey: .uid) title = try container.decode(String.self, forKey: .title) createdBy = try? container.decode(String.self, forKey: .createdBy) updatedBy = try? container.decode(String.self, forKey: .updatedBy) createdAt = try? container.decode(Date.self, forKey: .createdAt) updatedAt = try? container.decode(Date.self, forKey: .updatedAt) locale = try container.decode(String.self, forKey: .locale) sessionId = try container.decode(Int.self, forKey: .sessionId) desc = try container.decode(String.self, forKey: .desc) type = try container.decode(String.self, forKey: .type) sessionTime = try container.decode(DateTime.self, forKey: .sessionTime) speakers = try container.decode([Speaker].self, forKey: .speakers) } } Usage in Referencing Let’s say there is another content type in our Stack named Speaker that is referenced in our Session Content Type. For this case, we will create a class named Speaker that implements the EntryDecodable protocol as follows: Example usage: class Speaker: EntryDecodable { public enum FieldKeys: String, CodingKey { case createdAt = \"created_at\" case updatedAt = \"updated_at\" case createdBy = \"created_by\" case updatedBy = \"updated_by\" case desc = \"description\" } var locale: String var title: String var uid: String var createdAt: Date? var updatedAt: Date? var createdBy: String? var updatedBy: String? var sessionId: Int var desc: String var name: String public required init(from decoder: Decoder) throws { let container = try decoder.container(keyedBy: FieldKeys.self) uid = try container.decode(String.self, forKey: .uid) title = try container.decode(String.self, forKey: .title) createdBy = try? container.decode(String.self, forKey: .createdBy) updatedBy = try? container.decode(String.self, forKey: .updatedBy) createdAt = try? container.decode(Date.self, forKey: .createdAt) updatedAt = try? container.decode(Date.self, forKey: .updatedAt) locale = try container.decode(String.self, forKey: .locale) name = try container.decode(String.self, forKey: .name) desc = try container.decode(String.self, forKey: .desc) } } In the Session class, we have a ‘session_time’ Global Field. To parse it, we need to create a class named SessionTime that implements the Decodable protocol as follows. Example: class SessionTime: Decodable { var startTime: Date? var endTime: Date? public enum CodingKeys: String, CodingKey { case startTime = \"start_time\" case endTime = \"end_time\" } public required init(from decoder: Decoder) throws { let container = try decoder.container(keyedBy: CodingKeys.self) startTime = try? container.decode(Date.self, forKey: .startTime) endTime = try? container.decode(Date.self, forKey: .endTime) } } Note : If we have fields with Modular block, JSON, or an array of JSON in our content type, we can create a class that implements Decodable."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/entrydecodable"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# EntryDecodable

## EntryDecodable

Decodable is a powerful Swift standard library feature that developers can use to decode custom types from external representation, such as JSON.

EntryDecodable is an extension of the decodable protocol that you can use to decode the response to a specific model. By using this protocol, you can define types that will be mapped from your entries of the content type.

In this guide, we will discuss how we can use the EntryDecodable Protocol in your Swift SDK.

**EntryDecodable Example Usage**

Let’s understand how to use this protocol with the help of a few examples.

**Standard Usage**

We have a content type named Session and to fetch entries of our Session content type from the Swift SDK, we need to create a class named Session that implements the EntryDecodable protocol as follows:

**Example usage:**

```
class Session: EntryDecodable {
public enum FieldKeys: String, CodingKey {
     case title, uid, locale, type, speakers
     case createdAt = "created_at"
     case updatedAt = "updated_at"
     case createdBy = "created_by"
     case updatedBy = "updated_by"
     case sessionId = "session_id"
     case desc = "description"
     case sessionTime = "session_time"
 }
 var locale: String
 var title: String
 var uid: String
 var createdAt: Date?
 var updatedAt: Date?
 var createdBy: String?
 var updatedBy: String?
 var sessionId: Int
 var desc: String
 var type: String
 var sessionTime: SessionTime
 var speakers: [Speaker]?
 public required init(from decoder: Decoder) throws {
     let container   = try decoder.container(keyedBy: FieldKeys.self)
     uid = try container.decode(String.self, forKey: .uid)
     title = try container.decode(String.self, forKey: .title)
     createdBy = try? container.decode(String.self, forKey: .createdBy)
     updatedBy = try? container.decode(String.self, forKey: .updatedBy)
     createdAt = try? container.decode(Date.self, forKey: .createdAt)
     updatedAt = try? container.decode(Date.self, forKey: .updatedAt)
     locale = try container.decode(String.self, forKey: .locale)
     sessionId = try container.decode(Int.self, forKey: .sessionId)
     desc = try container.decode(String.self, forKey: .desc)
     type = try container.decode(String.self, forKey: .type)
     sessionTime = try container.decode(DateTime.self, forKey: .sessionTime)
     speakers = try container.decode([Speaker].self, forKey: .speakers)
  }
}
```

**Usage in Referencing**

Let’s say there is another content type in our Stack named Speaker that is referenced in our Session Content Type.

For this case, we will create a class named Speaker that implements the EntryDecodable protocol as follows: **Example usage:**

```
class Speaker: EntryDecodable {
  public enum FieldKeys: String, CodingKey {
    case createdAt = "created_at"
    case updatedAt = "updated_at"
    case createdBy = "created_by"
    case updatedBy = "updated_by"
    case desc = "description"
  }

  var locale: String
  var title: String
  var uid: String
  var createdAt: Date?
  var updatedAt: Date?
  var createdBy: String?
  var updatedBy: String?
  var sessionId: Int
  var desc: String
  var name: String
  public required init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: FieldKeys.self)
    uid = try container.decode(String.self, forKey: .uid)
    title = try container.decode(String.self, forKey: .title)
    createdBy = try? container.decode(String.self, forKey: .createdBy)
    updatedBy = try? container.decode(String.self, forKey: .updatedBy)
    createdAt = try? container.decode(Date.self, forKey: .createdAt)
    updatedAt = try? container.decode(Date.self, forKey: .updatedAt)
    locale = try container.decode(String.self, forKey: .locale)
    name = try container.decode(String.self, forKey: .name)
    desc = try container.decode(String.self, forKey: .desc)
  }
}
```

In the Session class, we have a ‘session_time’ Global Field. To parse it, we need to create a class named SessionTime that implements the Decodable protocol as follows.

**Example:**

```
class SessionTime: Decodable {
  var startTime: Date?
  var endTime: Date?

  public enum CodingKeys: String, CodingKey {
    case startTime = "start_time"
    case endTime = "end_time"
  }
  public required init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    startTime = try? container.decode(Date.self, forKey: .startTime)
    endTime = try? container.decode(Date.self, forKey: .endTime)
  }
}
```

**Note**: If we have fields with Modular block, JSON, or an array of JSON in our content type, we can create a class that implements Decodable.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| FieldKeys | CodingKey | No | — | The CodingKey representing the field identifiers/JSON keys for the corresponding content type. These coding keys should be the same as those used when implementing Decodable. |
