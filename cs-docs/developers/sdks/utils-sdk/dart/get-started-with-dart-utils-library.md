---
title: "[Dart] - Get Started with Dart Utils Library"
description: Get started guide for Contentstack Dart Utils SDK to build apps powered by Contentstack and render embedded items from RTE fields.
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/dart/get-started-with-dart-utils-library
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - mobile-developers
  - frontend-developers
version: latest
last_updated: 2026-03-26
---

# [Dart] - Get Started with Dart Utils Library

This page explains how to set up and use the Contentstack Dart Utils SDK to render embedded items and work with RTE content. It’s intended for developers integrating Contentstack content into Dart-based apps and should be used when you need to install the SDK and implement rendering for embedded items.

## Get Started with Dart Utils Library

This guide will help you get started with Contentstack [Dart Utils SDK](./about-dart-utils-library.md) to build apps powered by Contentstack.

## Prerequisites
- Latest version of Android Studio or IntelliJ IDEA or Visual Studio Code
- Latest version of Dart
- If using vscode, install the dart and flutter plugin extensions

## SDK Installation and Setup

To set up Dart Utils SDK, add the following to your pom.xml file:

```
contentstack-util: any
```

**Note:** If you are using Contentstack Dart SDK, then 'contentstack-utils' is already imported into your project. Thus, in this case, you can see the following line in your pom.xml file:

```
contentstack: any
```

## Usage

Let’s learn how you can use Utils SDK to render embedded items.

### Create Render Option:

To render embedded items on the front-end, use the `renderContents` function, and define the UI elements you want to show in the front-end of your website, as shown in the example code below:

```
import 'package:contentstack_utils/src/helper/Metadata.dart';
import 'package:contentstack_utils/src/model/Option.dart';

class OptionDemo implements Option {
  @override
  String renderMark(String markType, String renderText) {
    // TODO: implement renderMark
    switch (markType) {
      case 'bold':
        return '**' + renderText + '**';
        break;
      default:
        return '';
    }
  }

  @override
  String renderNode(nodeType, Map node_obj, callback) {
    // TODO: implement renderNode
    switch (nodeType) {
      case 'paragraph':
        String children = callback.renderChildren(node_obj['children']);
        return "" + children + '

';
        break;
      default:
        return '';
    }
  }

  @override
  String renderOption(Map obj, Metadata metadata) {
    switch (metadata.getStyleType) {
      case 'block':
        return '' + obj['title'] + '

' + obj['multi'] + '';
        break;
      case 'inline':
        return '' + obj['title'] + '

' + obj['line'] + '';
        break;
      case 'link':
        return '' + obj['title'] + '

' + obj['key'] + '';
        break;
      case 'display':
        return '' + obj['title'] + '

' + obj['multi'] + '';
        break;
      default:
        return '';
    }
  }
}
```

## Basic Queries

Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry:

To get an embedded item of a single entry, you need to provide the stack API key, environment name, delivery token, content type’s UID, and entry’s UID. Then, use the `includeEmbeddedObjects` function as shown below:

```
import 'package:contentstack/contentstack.dart' as contentstack;
final stack = contentstack.Stack(apiKey, deliveryToken, environment);
final query = stack.contentType('contentTypeUid').entry().query();
await query.includeEmbeddedObjects().find().then((response) {
    var entries = response['entries'];
    const keyPath = [
        "rich_text_editor", "global_rich_multiple.group.rich_text_editor"
    ]
    entries.forEach((entry){
        Utils.render(entry, keyPath, Option);
    })}).catchError((error) {
        print(error.message.toString());
    });
}
```

### Fetch Embedded Item(s) from Multiple Entries

To get embedded items from multiple entries, you need to provide the stack API key, environment name, delivery token, and content type’s UID.

```
import 'package:contentstack/contentstack.dart' as contentstack;
final stack = contentstack.Stack(apiKey, deliveryToken, environment);
final query = stack.contentType('contentTypeUid').entry().query();
await query.includeEmbeddedObjects().find().then((response) {
    var entries = response['entries'];
    const keyPath = [
        "rich_text_editor", "global_rich_multiple.group.rich_text_editor"
    ]
    entries.forEach((entry){
        Utils.render(entry, keyPath, Option);
    })}).catchError((error) {
        print(error.message.toString());
    });
}
```

#### Render JSON RTE Contents

To get multiple entries, you need to provide the stack API key, environment name, delivery token, content type, and entry UID. Then, use the `Utils.jsonToHTML` function as shown below:

```
import 'package:contentstack/contentstack.dart' as contentstack;
final stack = contentstack.Stack(apiKey, deliveryToken, environment);
final query = stack.contentType('contentTypeUid')
.entry()
.includeEmbeddedObjects()
.query();
await query.find().then((response) {
    var entries = response['entries'];
    const keyPath = [
        "rich_text_editor"
    ]
    entries.forEach((entry){
        Utils.jsonToHTML(entry, keyPath, Option);
    })}).catchError((error) {
        print(error.message.toString());
    });
}
```

#### Render GQL SRTE Contents

To get multiple entries, you need to provide the stack API key, environment name, delivery token, content type, and entry UID. Then, use the GQL.jsonToHTML function as shown below:

```
import 'package:contentstack/contentstack.dart' as contentstack;
final stack = contentstack.Stack(apiKey, deliveryToken, environment);
final query = stack.contentType('contentTypeUid')
.entry()
.includeEmbeddedObjects()
.query();
await query.find().then((response) {
    var entries = response['entries'];
    const keyPath = [
        "rich_text_editor"
    ]
    entries.forEach((entry){
        GQL.jsonToHTML(entry, keyPath, Option);
    })}).catchError((error) {
        print(error.message.toString());
    });
}
```

## Common questions

### Do I need to install `contentstack-utils` separately if I’m already using Contentstack Dart SDK?
**Note:** If you are using Contentstack Dart SDK, then 'contentstack-utils' is already imported into your project.

### What function do I use to retrieve embedded items from RTE fields?
Use the `includeEmbeddedObjects` function as shown in the examples.

### How do I render JSON RTE contents?
Use the `Utils.jsonToHTML` function as shown below.

### How do I render GQL SRTE contents?
Use the GQL.jsonToHTML function as shown below.