---
title: "Get Started with Swift Utils Library"
description: "Explore our comprehensive guide to getting started with Contentstack Swift Utils SDK. Learn installation, setup, and render embedded items efficiently."
url: /developers/sdks/utils-sdk/ios/get-started-with-swift-utils-library
---

# Get Started with Swift Utils Library

## Get Started with Swift Utils Library

CocoaPods is planned to move to a read-only state and may not support future SDK updates. [Install the Swift Utils SDK](/docs/developers/sdks/utils-sdk/ios/get-started-with-swift-utils-library#using-swift-package-manager) using Swift Package Manager to ensure continued access to updates. For more details, refer to the [CocoaPods Trunk Read-Only Plan](https://blog.cocoapods.org/CocoaPods-Specs-Repo/?utm_source=chatgpt.com) announcement.

This guide will help you get started with Contentstack [Swift Utils SDK](/docs/developers/sdks/utils-sdk/ios/about-ios-utils-library/) to build apps powered by Contentstack.

## Prerequisites

To get started with Swift, you will need the following:

-   Latest version of Xcode and Mac OS X

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

1.  Install libxml2 in your system:
    1.  macOS users:
        
        ```
        //For xcode 11.3 and earlier, the following settings are required
        $ brew install libxml2
        $ brew link --force libxml2
        ```
        
    2.  Linux (Ubuntu) users:
        
        ```
        $ sudo apt-get install libxml2-dev
        ```
        
2.  Add the following code to your Package.swift file:
    
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
    
3.  Build the code with this command:
    
    ```
    $ swift build
    ```
    
    **Note:** For Linux (Ubuntu) users, if a build error occurs, run the following command: $ sudo apt-get install pkg-config
    

### Manual Installation

Install the Utils SDK by manually adding the files to your project:

1.  Add the [ContentstackUtils](https://github.com/contentstack/contentstack-utils-swift/blob/master/Sources/ContentstackUtils) file to your project
2.  Add Kanna files to your project:
    1.  [Kanna](https://github.com/contentstack/contentstack-utils-swift/blob/master/Sources/Kanna)
    2.  [Modules](https://github.com/contentstack/contentstack-utils-swift/blob/master/Modules)
3.  In the target settings, add $(SDKROOT)/usr/include/libxml2 to the **Search Paths > Header Search Paths** field
4.  Next, in the target settings, add $(SRCROOT)/Modules to the **Swift Compiler - Search Paths > Import Paths** field

**Note:** If you are using Contentstack Swift SDK in your project, the ContentstackUtils file is already imported.

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
                        <div>
                        <h2 >\(product.title)</h2>
                        <img src=\(product.product_image.url) alt=\(product.product_image.title)/>
                        <p>\(product.price)</p>
                        </div>
                    """
                }
            }else {
                if let entry = embeddedObject as? Entry {
                    return """
                        <div>
                        <h2>\(entry.title)</h2>
                        <p>\(entry.description)</p>
                        </div>
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
            return "<b>\(text)</b>"
        default:
            return super.renderMark(markType: markType, text: text)
        }
    }
    
    override func renderNode(nodeType: String, node: Node, next: (([Node]) -> String)) -> String {
        switch nodeType {
        case "p":
            return "<p class='class-id'>\(next(node.children))</p>"
        case "h1":
            return "<h1 class='class-id'>\(next(node.children))</h1>"
        default:
            return super.renderNode(nodeType: nodeType, node: node, next: next)
        }
    }
```

## Basic Queries

Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry

#### Render HTML RTE Embedded object

To get an embedded item of a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the ContentstackUtils.render functions as shown below:

```
import ContentstackUtils
let stack:Stack = Contentstack.stack(apiKey: API_KEY, deliveryToken: DELIVERY_TOKEN, environment: ENVIRONMENT)
stack.contentType(uid: contentTypeUID).entry(uid: entryUID).include(.embeddedItems)
.fetch { (result: Result<EntryModel, Error>, response: ResponseType) in
    switch result {
    case .success(let model):

         ContentstackUtils.render(content: model.richTextContent, Option(entry: model)) 
    case .failure(let error):
         //Error Message
    }
 }
```

#### Render JSON RTE Contents

To get a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use ContentstackUtils.jsonToHtml function as shown below:

```
import ContentstackUtils  

let stack:Stack = Contentstack.stack(apiKey: API_KEY, deliveryToken: DELIVERY_TOKEN, environment: ENVIRONMENT)  

stack.contentType(uid: contentTypeUID)
     .entry(uid: entryUID)
     .include(.embeddedItems)  
     .fetch { (result: Result<EntryModel, Error>, response: ResponseType) in  
        switch result {  
            case .success(let model):
                ContentstackUtils.jsonToHtml(content: model.richTextContent, Option(entry: model))  
            case .failure(let error):  
                //Error Message  
        }  
    }
```

**Note:** To get all embedded items while fetching an entry with a JSON RTE field use includeEmbeddedItems function.

### Fetch Embedded Item(s) from Multiple Entries

#### Render HTML RTE Embedded Object

To get embedded items from multiple entries, you need to provide the stack API key, environment name, delivery token, and content type UID. Then, use the ContentstackUtils.render functions as shown below:

```
import ContentstackUtils
let stack = Contentstack.stack(apiKey: apiKey,
            deliveryToken: deliveryToken,
            environment: environment)

stack.contentType(uid: contentTypeUID).entry().query().include(.embeddedItems)
   .find { (result: Result<ContentstackResponse<entrymodel>, error="">, response: ResponseType) in
     switch result {
     case .success(let contentstackResponse):
       for item in contentstackResponse.items {
           ContentstackUtils.render(content: item.richTextContent, CustomRenderOption(entry: item)) 
       }

     case .failure(let error):
         //Error Message
     }
 }
</entrymodel>,>
```

#### Render JSON RTE Contents

To get a Multiple entry, you need to provide the stack API key, environment name, delivery token, content type UID. Then, use the Contentstack.Utils.jsonToHtml function as shown below:

```
import ContentstackUtils  

let stack:Stack = Contentstack.stack(apiKey: API_KEY, deliveryToken: DELIVERY_TOKEN, environment: ENVIRONMENT)  

stack.contentType(uid: contentTypeUID)
     .entry()
     .query()
     .include(.embeddedItems)
     .find { (result: Result<EntryModel, Error>, response: ResponseType) in  
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
