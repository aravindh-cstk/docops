---
title: "Get Started with Dart Utils Library"
description: "steps to use the Dart Utils Library"
url: /developers/sdks/utils-sdk/dart/get-started-with-dart-utils-library
---

# Get Started with Dart Utils Library

## Get Started with Dart Utils Library

**Warning:** The Dart Utils package (contentstack\_utils on pub.dev) is planned for deprecation. For new integrations, use the [Content Delivery API](/docs/developers/apis/content-delivery-api) and the current product documentation for Rich Text Editor and JSON RTE handling.

This guide will help you get started with Contentstack [Dart Utils SDK](/docs/developers/sdks/utils-sdk/dart/about-dart-utils-library) to build apps powered by Contentstack.

## Prerequisites

-   Latest version of Android Studio or IntelliJ IDEA or Visual Studio Code
-   Latest version of Dart
-   If using vscode, install the dart and flutter plugin extensions

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

To render embedded items on the front-end, use the renderContents function, and define the UI elements you want to show in the front-end of your website, as shown in the example code below:

```
import 'package:contentstack_utils/src/helper/Metadata.dart';
import 'package:contentstack_utils/src/model/Option.dart';

class OptionDemo implements Option {
  @override
  String renderMark(String markType, String renderText) {
    // TODO: implement renderMark
    switch (markType) {
      case 'bold':
        return '<b>' + renderText + '</b>';
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
        return "<p class='class-id'>" + children + '</p>';
        break;
      default:
        return '';
    }
  }

  @override
  String renderOption(Map obj, Metadata metadata) {
    switch (metadata.getStyleType) {
      case 'block':
        return '<p>' + obj['title'] + '</p><span>' + obj['multi'] + '</span>';
        break;
      case 'inline':
        return '<p>' + obj['title'] + '</p><span>' + obj['line'] + '</span>';
        break;
      case 'link':
        return '<p>' + obj['title'] + '</p><span>' + obj['key'] + '</span>';
        break;
      case 'display':
        return '<p>' + obj['title'] + '</p><span>' + obj['multi'] + '</span>';
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

To get an embedded item of a single entry, you need to provide the stack API key, environment name, delivery token, content type’s UID, and entry’s UID. Then, use the includeEmbeddedObjects function as shown below:

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

To get multiple entries, you need to provide the stack API key, environment name, delivery token, content type, and entry UID. Then, use the Utils.jsonToHTML function as shown below:

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

To get multiple entries, you need to provide the stack API key, environment name, delivery token, content type, and entry UID. Then, use the GQL.jsonToHTML function as shown below:

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
