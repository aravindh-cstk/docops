---
title: "Get Started with Android Utils Library"
description: "steps to use the Android Utils Library"
url: /developers/sdks/utils-sdk/android/get-started-with-android-utils-library
uid: bltb549f81d5c446403
---

# Get Started with Android Utils Library

## Get Started with Android Utils Library

This guide will help you get started with Contentstack [Android Utils SDK](/docs/developers/sdks/utils-sdk/android/about-android-utils-library) to build apps powered by Contentstack.

## Prerequisites

-   The latest version of Android Studio
-   JDK - 8 or later
-   Android SDK

## SDK Installation and Setup

To set up the Utils SDK in your Android project, add the following dependency to your `build.gradle` file:

```
implementation 'com.contentstack.sdk:utils:latest'
```

If you are using the Contentstack Android SDK, then the Utils SDK is already imported into your project. In this case, the latest version must be used as shown:

```
implementation 'com.contentstack.sdk:android:latest'
```

## Usage

Let’s learn how you can use Utils SDK to render embedded items.

### Create Render Option:

To render embedded items on the front-end, use the `renderContents` function, and define the UI elements you want to show in the front-end of your app, as shown in the example code below:

```
package com.contentstack.utils;
​
import com.contentstack.utils.helper.Metadata;
import com.contentstack.utils.interfaces.NodeCallback;
import com.contentstack.utils.interfaces.Option;
import com.contentstack.utils.node.MarkType;
import org.json.JSONObject;
​
public class DefaultOptionClass implements Option {
​
    @Override
    public String renderOptions(JSONObject embeddedObject, Metadata metadata) {
        switch (metadata.getStyleType()) {
            case BLOCK:
                return "<p>" + embeddedObject.getString("title") + "</p><span>" +
                        embeddedObject.getString("multi") + "</span>";
            case INLINE:
                return "<p>" + embeddedObject.getString("title") + "</p><span>" +
                        embeddedObject.getString("line") + "</span>";
            case LINK:
                return "<p>" + embeddedObject.getString("title") + "</p><span>" +
                        embeddedObject.getString("key") + "</span>";
            case DISPLAY:
                return "<p>" + embeddedObject.getString("someTitle") + "</p><span>" +
                        embeddedObject.getString("multi") + "</span>";
            default:
                return null;
        }
    }
​
    @Override
    public String renderMark(MarkType markType, String renderText) {
        if (markType == MarkType.BOLD) {
            return "<b>" + renderText + "</b>";
        }
        return null;
    }
​
    @Override
    public String renderNode(String nodeType, JSONObject nodeObject, NodeCallback callback) {
        if (nodeType.equalsIgnoreCase("paragraph")) {
            String children = callback.renderChildren(nodeObject.optJSONArray("children"));
            return "<p class='class-id'>" + children + "</p>";
        }
​
        return null;
    }
}
```

## Basic Queries

Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry

To get an embedded item of a single entry, you need to provide the stack API key, environment name, delivery token, content type’s UID, and entry’s UID. Then, use the `includeEmbeddedItems` function as shown below:

```
import Contentstack
Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", "environment_name");

ContentType contentType = stack.contentType("content_type_uid");
Entry entry = contentType.entry("entry_uid");
entry.includeEmbeddedItems();
entry.fetch(new EntryResultCallBack() {
@Override
public void onCompletion(ResponseType responseType, Error error) {
    if (error == null) {
         String[] keyPath = {
            "rich_text_editor", "global_rich_multiple.group.rich_text_editor"
            };
            JSONObject jsonObject = entry.toJSON();
            Utils.render(jsonObject, keyPath, new Option());
    } else {
         [Error block] //handle your error
    }}
 });
```

### Fetch Embedded Item(s) from Multiple Entries

To get embedded items from multiple entries, you need to provide the stack API key, environment name, delivery token, and content type’s UID.

```
import Contentstack
Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", "environment_name");

Query query = stack.contentType("content_type_uid").query();
query.includeEmbeddedItems();
query.find(new QueryResultsCallBack() {
@Override
publicvoidonCompletion(ResponseType responseType, QueryResult queryResult, Error error) {
    if(error == null){
       String[] keyPath = {
            "rich_text_editor", "global_rich_multiple.group.rich_text_editor"
            };
            for (Entry entry : entries) {
                JSONObject jsonObject = entry.toJSON();
                Utils.render(jsonObject, keyPath, new Option());
                }
    }else{
       [Error block] //handle your error
    }}});
```

### Render JSON RTE Contents

To get multiple entries, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the `Contentstack.Utils.jsonToHTML` function as shown below:

```
import Contentstack
Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment_name");
Query query = stack.contentType("content_type_uid").query();
query.includeEmbeddedItems(); // include embedded items
query.find(new QueryResultsCallBack() {
    @Override
    public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error) {
        if (error == null) {
            List<Entry> entries = queryresult.getResultObjects();
            String[] keyPath = {
            "rte_fieldUid", "group.rteFieldUID"
            };
            for (Entry entry : entries) {
                JSONObject jsonObject = entry.toJSON();
                Utils.jsonToHTML(jsonObject, keyPath, new Option());
            }
        }}
});
```
