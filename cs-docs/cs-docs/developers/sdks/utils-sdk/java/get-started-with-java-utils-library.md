---
title: "[Java] - Get Started with Java Utils Library"
description: Get started guide for Contentstack Java Utils SDK to build apps powered by Contentstack and render embedded items from RTE fields.
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/java/get-started-with-java-utils-library
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - java-developers
version: latest
last_updated: 2026-03-25
---

# [Java] - Get Started with Java Utils Library

This page explains how to install and set up the Contentstack Java Utils SDK and use it to render embedded items from Rich Text Editor (RTE) fields. It is intended for developers building Java applications that consume Contentstack content and need to customize HTML rendering for embedded items.

## Get Started with Java Utils Library

This guide will help you get started with Contentstack [Java Utils SDK](/docs/developers/java/about-java-utils-library) to build apps powered by Contentstack.

## Prerequisites
To get started with the Java Utils SDK, you will need:
- [JDK 8](https://www.oracle.com/in/java/technologies/javase/javase-jdk8-downloads.html) or later
- [Contentstack account](https://www.contentstack.com/login/)
- Latest version of any of below IDEs:IntelliJ IDEA
- Eclipse
- Spring Tool Suite
- VSCode

## SDK Installation and Setup
To setup Utils SDK in your Java project, add the following dependency in the pom.xml file:

```

  com.contentstack.sdk
  util
  latest

```
**Note:** If you are using the [Java Contentstack SDK](/docs/developers/sdks/content-delivery-sdk/java/about-java-delivery-sdk), you don’t need to run the java-utils dependencies as 'com.contentstack.sdk:utils:[LATEST_VERSION]' is already imported in the SDK.

```

  com.contentstack.sdk
  java
  latest

```
Get the latest sdk dependency from [here](https://search.maven.org/artifact/com.contentstack.sdk/java).

## Usage
Let’s learn how you can use Java Utils SDK to render embedded items.

### Create Render Option
You can customize the HTML content based on user-defined attributes. However, we only offer support for predefined HTML tags with the required attributes.

To render embedded items on the front-end, you can use the renderContents function, and define the UI elements you want to display on your website.

Let's see how we can create a custom class using DefaultOption.

```
package com.contentstack.utils;

import com.contentstack.utils.helper.Metadata;
import com.contentstack.utils.interfaces.NodeCallback;
import com.contentstack.utils.node.MarkType;
import com.contentstack.utils.render.DefaultOption;
import org.json.JSONObject;

public class CustomDefaultOption extends DefaultOption {

    @Override
    public String renderOptions(JSONObject embeddedObject, Metadata metadata) {
        switch (metadata.getStyleType()) {
            case BLOCK:
                return "" + embeddedObject.getString("title") + "

" +
                        embeddedObject.getString("multi") + "";
            case INLINE:
                return "" + embeddedObject.getString("title") + "

" +
                        embeddedObject.getString("line") + "";
            case LINK:
                return "" + embeddedObject.getString("title") + "

" +
                        embeddedObject.getString("key") + "";
            case DISPLAY:
                return "" + embeddedObject.getString("someTitle") + "

" +
                        embeddedObject.getString("multi") + "";
            default:
                return super.renderOptions(embeddedObject, metadata);
        }
    }

    @Override
    public String renderMark(MarkType markType, String renderText) {
        if (markType == MarkType.BOLD) {
            return "**" + renderText + "**";
        }
        return super.renderMark(markType, renderText);
    }

    @Override
    public String renderNode(String nodeType, JSONObject nodeObject, NodeCallback callback) {
        if (nodeType.equalsIgnoreCase("paragraph")) {
            String children = callback.renderChildren(nodeObject.optJSONArray("children"));
            return "" + children + "

";
        }
        return super.renderNode(nodeType, nodeObject, callback);
    }
}
```
Once you have created the CustomDefaultOption class, you can use it like the code below and customize your html result:

```
JSONObject rteObject = new JSONObject();
String[] keyPath = { "rich_text_editor", "global_rich_multiple.group.rich_text_editor" };

Utils.jsonToHTML(rteObject, keyPath, new CustomDefaultOption());

System.out.println(rteObject)
```

## Basic Queries
Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry
To get an embedded item of a single entry, you need to provide the stack API key, environment name, delivery token, content type UID and entry UID. Then, use the includeEmbeddedItems function as shown below:

```
import Contentstack

Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment");
ContentType contentType = stack.contentType("content_type_uid");
Entry entry = contentType.entry("entryUid");
entry.includeEmbeddedItems();
entry.fetch(new EntryResultCallBack() {
    @Override
    public void onCompletion(ResponseType responseType, Error error) {
        if (error == null) {
            String[] keyPath = {
            "rich_text_editor", "global_rich_multiple.group.rich_text_editor"
            };
            JSONObject jsonObject = entry.toJSON();
            Utils.render(jsonObject, keyPath, new DefaultOption());
        } else {
            [Error block]
        }}
});
```

### Fetch Embedded Item(s) from Multiple Entries
To get embedded items from multiple entries, you need to provide the stack API key, environment name, delivery token, and content type’s UID.

```
import Contentstack
Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment");
Query query = stack.contentType("content_type_uid").query();
query.includeEmbeddedItems();
query.find(new QueryResultsCallBack() {
    @Override
    public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error) {
        if (error == null) {
            List entries = queryresult.getResultObjects();
            String[] keyPath = {
            "rich_text_editor", "global_rich_multiple.group.rich_text_editor"
            };
            for (Entry entry : entries) {
                JSONObject jsonObject = entry.toJSON();
                Utils.render(jsonObject, keyPath, new DefaultOption());
            }
        }}
});
```

### Render JSON RTE Contents
To get multiple entries, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the Contentstack.Utils.jsonToHTML function as shown below:

```
import Contentstack

Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment");
Query query = stack.contentType("content_type_uid").query();
query.includeEmbeddedItems();
query.find(new QueryResultsCallBack() {
    @Override
    public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error) {
        if (error == null) {

            List entries = queryresult.getResultObjects();
            String[] keyPath = { "rte_fieldUid", "group.rteFieldUID"};

         for (Entry entry : entries) {
                JSONObject jsonObject = entry.toJSON();
                Utils.jsonToHTML(jsonObject, keyPath, new Option());
            }
        }}
});
```

## Common questions

### Do I need to add the java-utils dependency if I already use the Java Contentstack SDK?
**Note:** If you are using the [Java Contentstack SDK](/docs/developers/sdks/content-delivery-sdk/java/about-java-delivery-sdk), you don’t need to run the java-utils dependencies as 'com.contentstack.sdk:utils:[LATEST_VERSION]' is already imported in the SDK.

### Where can I find the latest SDK dependency?
Get the latest sdk dependency from [here](https://search.maven.org/artifact/com.contentstack.sdk/java).

### How do I customize how embedded items render?
Let's see how we can create a custom class using DefaultOption.

### Which function can I use to render embedded items on the front-end?
To render embedded items on the front-end, you can use the renderContents function, and define the UI elements you want to display on your website.

