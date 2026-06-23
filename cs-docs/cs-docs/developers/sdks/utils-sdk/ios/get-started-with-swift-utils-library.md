---
title: "[iOS] - Get Started with iOS Utils Library"
description: Get started guide for Contentstack Swift Utils SDK on iOS, including installation and usage for rendering embedded items from RTE fields.
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/ios/get-started-with-ios-utils-library
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
platform:
  - iOS
language:
  - Swift
version: "1.0.0"
last_updated: 2026-03-26
---

# [iOS] - Get Started with iOS Utils Library

This page explains how to install and start using the Contentstack Swift Utils SDK on iOS, including setup options (CocoaPods, Swift Package Manager, manual) and examples for rendering embedded items from RTE fields. It is intended for iOS/Swift developers integrating Contentstack into apps and should be used when setting up the Utils SDK and implementing embedded item rendering.

Get Started with iOS Utils Library

This guide will help you get started with Contentstack [Swift Utils SDK](./about-ios-utils-library.md) to build apps powered by Contentstack.

## Prerequisites

To get started with Swift, you will need the following:
- Latest version of Xcode and Mac OS X

## SDK Installation and Setup

To use this SDK on the iOS platform, install the SDK according to the steps given below:

### Using CocoaPods

Add the following to your Podfile:

```
use_frameworks!
pod 'ContentstackUtils', '~> 1.0.0'
```

### Using Swift Package Manager

Perform the following steps to install Utils SDK using Swift package manager:
- Install libxml2 in your system:macOS users:
```
//For xcode 11.3 and earlier, the following settings are required
$ brew install libxml2
$ brew link --force libxml2
```
- Linux (Ubuntu) users:
```
$ sudo apt-get install libxml2-dev
```
- Add the following code to your `Package.swift` file:
```
// swift-tools-version:5.0
import PackageDescription

let package = Package(
    name: "YourProject",
    dependencies: [
        .package(url: "https://github.com/tid-kijyun/ContentstackUtils.git", from: "1.0.0"),
    ],
    targets: [
        .target(
            name: "YourTarget",
            dependencies: ["ContentstackUtils"]),
    ]
)
```
- Build the code with this command:
```
$ swift build
```

**Note:** For Linux (Ubuntu) users, if a build error occurs, run the following command: `$ sudo apt-get install pkg-config`

### Manual Installation

Install the Utils SDK by manually adding the files to your project:
- Add the [ContentstackUtils](https://github.com/contentstack/contentstack-utils-swift/blob/master/Sources/ContentstackUtils) file to your project
- Add Kanna files to your project:[Kanna](https://github.com/contentstack/contentstack-utils-swift/blob/master/Sources/Kanna)
- [Modules](https://github.com/contentstack/contentstack-utils-swift/blob/master/Modules)
- In the target settings, add `$(SDKROOT)/usr/include/libxml2` to the **Search Paths > Header Search Paths** field
- Next, in the target settings, add `$(SRCROOT)/Modules` to the **Swift Compiler - Search Paths > Import Paths** field

**Note**: If you are using Contentstack Swift SDK in your project, the ContentstackUtils file is already imported.

## Usage

Let’s learn how you can use Utils SDK to render embedded items.

### Create Render Option

To render embedded items on the front-end, create a class implementing Option protocol, and define the UI elements you want to show in the front-end of your website, as shown in the example below:

```
import Foundation
import ContentstackUtils
class CustomRenderOption: Option {

    func renderOptions(embeddedObject: EmbeddedObject, metadata: Metadata) -> String? {
        switch metadata.styleType {
        case .block:
            if metadata.contentTypeUid == "product" {
                if let product = embeddedObject as? Product {

                    return """

## \(product.title)

                        \(product.price)

                    """
                }
            }else {
                if let entry = embeddedObject as? Entry {
                    return """

## \(entry.title)

                        \(entry.description)

                        """
                }
            }
        default:
            return super.renderOptions(embeddedObject: embeddedObject, metadata: metadata)
        }
    }

 override func renderMark(markType: MarkType, text: String) -> String {
        switch markType {
        case .bold:
            return "**\(text)**"
        default:
            return super.renderMark(markType: markType, text: text)
        }
    }

    override func renderNode(nodeType: String, node: Node, next: (([Node]) -> String)) -> String {
        switch nodeType {
        case "p":
            return "\(next(node.children))

"
        case "h1":
            return "
# \(next(node.children))
"
        default:
            return super.renderNode(nodeType: nodeType, node: node, next: next)
        }
    }
```

## Basic Queries

Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry

#### Render HTML RTE Embedded object

To get an embedded item of a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the `ContentstackUtils.render` functions as shown below:

```
import ContentstackUtils
let stack:Stack = Contentstack.stack(apiKey: API_KEY, deliveryToken: DELIVERY_TOKEN, environment: ENVIRONMENT)
stack.contentType(uid: contentTypeUID).entry(uid: entryUID).include(.embeddedItems)
.fetch { (result: Result, response: ResponseType) in
    switch result {
    case .success(let model):

         ContentstackUtils.render(content: model.richTextContent, Option(entry: model))
    case .failure(let error):
         //Error Message
    }
 }
```

#### Render JSON RTE Contents

To get a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use `ContentstackUtils.jsonToHtml` function as shown below:

```
import ContentstackUtils

let stack:Stack = Contentstack.stack(apiKey: API_KEY, deliveryToken: DELIVERY_TOKEN, environment: ENVIRONMENT)

stack.contentType(uid: contentTypeUID)
     .entry(uid: entryUID)
     .include(.embeddedItems)
     .fetch { (result: Result, response: ResponseType) in
        switch result {
            case .success(let model):
                ContentstackUtils.jsonToHtml(content: model.richTextContent, Option(entry: model))
            case .failure(let error):
                //Error Message
        }
    }
```

**Note:** To get all embedded items while fetching an entry with a JSON RTE field use `includeEmbeddedItems` function.

### Fetch Embedded Item(s) from Multiple Entries

#### Render HTML RTE Embedded Object

To get embedded items from multiple entries, you need to provide the stack API key, environment name, delivery token, and content type UID. Then, use the `ContentstackUtils.render` functions as shown below:

```
import ContentstackUtils
let stack = Contentstack.stack(apiKey: apiKey,
            deliveryToken: deliveryToken,
            environment: environment)

stack.contentType(uid: contentTypeUID).entry().query().include(.embeddedItems)
   .find { (result: Result, error="">, response: ResponseType) in
     switch result {
     case .success(let contentstackResponse):
       for item in contentstackResponse.items {
           ContentstackUtils.render(content: item.richTextContent, CustomRenderOption(entry: item))
       }

     case .failure(let error):
         //Error Message
     }
 }
,>
```

#### Render JSON RTE Contents

To get a Multiple entry, you need to provide the stack API key, environment name, delivery token, content type UID. Then, use the `Contentstack.Utils.jsonToHtml` function as shown below:

```
import ContentstackUtils

let stack:Stack = Contentstack.stack(apiKey: API_KEY, deliveryToken: DELIVERY_TOKEN, environment: ENVIRONMENT)

stack.contentType(uid: contentTypeUID)
     .entry()
     .query()
     .include(.embeddedItems)
     .find { (result: Result, response: ResponseType) in
        switch result {
            case .success(let model):
                for item in contentstackResponse.items {
                    ContentstackUtils.jsonToHtml(content: item.richTextContent, CustomRenderOption(entry: item))
                }
            case .failure(let error):
                //Error Message
        }
    }
```

## Common questions

### Which installation method should I use?
Use CocoaPods if your project already uses Pods, Swift Package Manager if you manage dependencies via SPM, or Manual Installation if you need to directly add source files to your project.

### Why do I need libxml2?
The Swift Package Manager setup includes steps to install libxml2 (and sometimes pkg-config on Linux) to support building dependencies used by the Utils SDK.

### When should I use `ContentstackUtils.render` vs `ContentstackUtils.jsonToHtml`?
Use `ContentstackUtils.render` for rendering embedded items from HTML RTE content, and `ContentstackUtils.jsonToHtml` for rendering embedded items from JSON RTE content.

### How do I fetch embedded items from an entry?
Use `.include(.embeddedItems)` while fetching an entry (single or multiple) and then call the appropriate render function on the `richTextContent`.