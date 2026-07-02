---
title: "ContentModelling"
description: "ContentModelling for creating/updating ContentTypes. ContentModelling model = new ContentModelling(){ Title = \" This is title \", Uid = \"The uid\", Schema = new List<Field>(){ new Field(); }; };"
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/contentmodelling"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# ContentModelling

## ContentModelling

ContentModelling for creating/updating ContentTypes.

```
ContentModelling model = new ContentModelling(){
    Title = " This is title ",
    Uid = "The uid",
    Schema = new List<Field>(){
              new Field();
             };
};
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Uid | string | No | — | UID for the content type. |
| Title | string | No | — | Title for the content type. |
| FieldRules | List<FieldRules> | No | — | List of field rules for the content type fields. |
| Options | Option | No | — | Option for the content types |
| Schema | List<Field> | No | — | Schema is list of the field you want to create within content type |
