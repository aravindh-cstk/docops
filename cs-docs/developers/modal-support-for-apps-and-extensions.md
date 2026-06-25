---
title: "[Extensions] - Modal Support for Apps/Extensions"
description: Modal Support for Apps/Extensions
url: https://www.contentstack.com/docs/headless-cms/modal-support-for-apps-and-extensions
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Extensions] - Modal Support for Apps/Extensions

This page explains how to open modals inside Contentstack apps and extensions using the Venus Component Library and App SDK. It is intended for developers building UI Extensions (especially custom fields) who need to display additional information or collect user input via modals instead of using `window.open`.

## Title

[Extensions] - Modal Support for Apps/Extensions

## Url

/developers/modal-support-for-apps-and-extensions

## Article content

### Item 1

#### Article section

##### Heading

Modal Support for Apps/Extensions

##### Content

When working with extensions, mainly custom fields, there are a few situations where we might need to open some pop-ups or modals. You can use "`window.open`" to launch a new browser window to address these use cases. Although the use case is handled by this method, the modal that is opened is not all-inclusive. You can use the "venus-components" to open a modal within apps and extensions to display additional information, collect additional inputs from users, or draw attention to a specific feature (or features) on a page, etc.

## Integrating Venus Components With App/Extension

Following are the prerequisites and steps to create and add a modal for apps/extension.

### Prerequisites

The Contentstack [Venus Component Library](https://venus-storybook.contentstack.com/) best works with React version >= 16.8.0

Required Packages:
- @contentstack/app-sdk (1.1.1 or higher)
- @contentstack/venus-components (1.0.4 or higher)

### Steps
- Import CSS from ``@contentstack/venus-components``

```
import "@contentstack/venus-components/build/main.css";
```

- Link a DOM Element for the snapshot:
The snapshot of referenced DOM Element will be rendered in-place of the custom field when the modal is opened.

```
window.iframeRef = document.getElementById('root');
```

- Link post-robot connection to handle events:

```
window.postRobot = sdk.postRobot
```

When everything is set up, the '`cbModal`' component from '`@contentstack/venus-components`' may be used to open the modal.

## Code Snippet for the Modal

### App Component

```
import { useEffect, useRef } from "react";
import ContentstackAppSDK from "@contentstack/app-sdk";
import { Button, cbModal } from "@contentstack/venus-components";
import "@contentstack/venus-components/build/main.css";

import SelectModal from "./components/SelectAsset";

import "./styles.css";

function App() {
 const ref = useRef(null);
 useEffect(() => {
   ContentstackAppSDK.init().then((sdk) => {
     // The snapshot of referenced DOM Element will render in-place of custom field when modal is opened
     const iframeWrapperRef = ref.current
     // or
     // const iframeWrapperRef = document.getElementById('root')
     window.iframeRef = iframeWrapperRef;

     window.postRobot = sdk.postRobot
     sdk.location.CustomField.frame.updateHeight(55)
   })
 }, []);

 const handleClick = (e) => {
   cbModal({
     component: (props) => (),
     modalProps: {
       size: "max"
     }
   })
 }

 return (

         Choose a file

         or

        {}}
         className="upload-btn"
       >
         Upload a new File

 );
}

export default App;

```

### Modal Component

```
import React from "react"
import { ModalFooter, ModalBody, ModalHeader, ButtonGroup, Button } from "@contentstack/venus-components"

const SelectModal = (props) => {
   return (
       <>

                   Contenstack Asset Picker

                       Cancel

                       Add Selected Asset

   )
}

export default SelectModal;

```

### Styles

```

.text {
 font-family: Inter;
 padding: 0 0.65rem;
 font-size: 14px;
}

.upload-btn {
 font-family: Inter;
 cursor: pointer;
 font-size: 14px;
}

.upload-btn:hover {
 color: #6c5ce7;
}

.btn-wrapper {
 margin: 10px 0 2px 10px;
}

.dummy-body {
 height: 330px;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-family: Inter;
}

```

### Result

**Additional Resource:** For a [comprehensive collection](https://venus-storybook.contentstack.com/) of Contentstack’s UI components which can be used to build UI Extensions and Contentstack-based applications, please refer to the Contentstack [Venus Component Library](https://venus-storybook.contentstack.com/) and the [App SDK](https://github.com/contentstack/app-sdk-docs) documentation.

## Common questions

### Can I use `window.open` instead of Venus components for modals?
Yes. You can use "`window.open`" to launch a new browser window, but the modal that is opened is not all-inclusive.

### What React version works best with the Venus Component Library?
The Contentstack Venus Component Library best works with React version >= 16.8.0.

### Which packages are required to create and add a modal for apps/extension?
Required Packages:
- @contentstack/app-sdk (1.1.1 or higher)
- @contentstack/venus-components (1.0.4 or higher)

### What is `cbModal` used for?
When everything is set up, the '`cbModal`' component from '`@contentstack/venus-components`' may be used to open the modal.

<!-- filename: extensions-modal-support-for-apps-extensions.md -->