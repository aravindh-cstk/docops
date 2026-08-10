---
title: "Modal Support for Apps/Extensions"
description: "The newly introduced functionality for “venus-components” allows you to open modal within apps and extensions for custom fields."
url: /headless-cms/modal-support-for-apps-and-extensions
---

# Modal Support for Apps/Extensions

## Modal Support for Apps/Extensions

When working with extensions, mainly custom fields, there are a few situations where we might need to open some pop-ups or modals. You can use "window.open" to launch a new browser window to address these use cases. Although the use case is handled by this method, the modal that is opened is not all-inclusive. You can use the "venus-components" to open a modal within apps and extensions to display additional information, collect additional inputs from users, or draw attention to a specific feature (or features) on a page, etc.

## Integrating Venus Components With App/Extension

Following are the prerequisites and steps to create and add a modal for apps/extension.

### Prerequisites

The Contentstack [Venus Component Library](https://venus-storybook.contentstack.com/) best works with React version >= 16.8.0

Required Packages:

-   @contentstack/app-sdk (1.1.1 or higher)
-   @contentstack/venus-components (1.0.4 or higher)

### Steps

1.  Import CSS from \`@contentstack/venus-components\`

```
import "@contentstack/venus-components/build/main.css";
```

3.  Link a DOM Element for the snapshot:  
    The snapshot of referenced DOM Element will be rendered in-place of the custom field when the modal is opened.

```
window.iframeRef = document.getElementById('root');
```

5.  Link post-robot connection to handle events:

```
window.postRobot = sdk.postRobot
```

When everything is set up, the 'cbModal' component from '@contentstack/venus-components' may be used to open the modal.

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
     component: (props) => (<SelectModal {...props} />),
     modalProps: {
       size: "max"
     }
   })
 }
 
 return (
   <div ref={ref} className="extension-wrapper">
     <div className="btn-wrapper">
       <Button buttonType="tertiary-outline" onClick={handleClick}>
         Choose a file
       </Button>
       <span className="text">
         or
       </span>
       <span onClick={() => {}}
         className="upload-btn"
       >
         Upload a new File
       </span>
     </div>
   </div>
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
           <ModalHeader title={"Select Asset"} closeModal={props.closeModal} />
           <ModalBody className="modalBodyCustomClass">
               <div className="dummy-body">
                   Contenstack Asset Picker
               </div>
           </ModalBody>
           <ModalFooter>
               <ButtonGroup>
                   <Button onClick={props.closeModal} buttonType="light">
                       Cancel
                   </Button>
                   <Button onClick={props.closeModal} icon="SaveWhite" disabled>
                       Add Selected Asset
                   </Button>
               </ButtonGroup>
           </ModalFooter>
       </>
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

![Modal_Support.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt85b4137786713b46/632c572001535d6d0be36f11/Modal_Support.gif)

**Additional Resource:** For a [comprehensive collection](https://venus-storybook.contentstack.com/) of Contentstack’s UI components which can be used to build UI Extensions and Contentstack-based applications, please refer to the Contentstack [Venus Component Library](https://venus-storybook.contentstack.com/) and the [App SDK](https://github.com/contentstack/app-sdk-docs) documentation.
