---
title: "[Extensions] - Venus Component Library"
description: Venus Component Library
url: https://www.contentstack.com/docs/developers/venus-component-library
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Extensions] - Venus Component Library

This page introduces the Contentstack Venus Component Library and explains how developers can install and use it in React-based UI Extensions or Contentstack-based applications, including prerequisites, installation, and a sample integration snippet.

## Venus Component Library

The [Contentstack Venus Component Library](https://venus-storybook.contentstack.com/) provides a comprehensive collection of Contentstack’s UI components which can be used to build UI Extensions and Contentstack-based applications.

## How to Use the Venus Component Library

The easiest way to start with the library is to create a new extension with React and [Contentstack Extensions SDK](https://github.com/contentstack/ui-extensions-sdk).

You can refer to our [Experience Extension](https://www.contentstack.com/docs/developers#extend-contentstack-s-ui-through-experience-extensions) documentation to understand how to create a sample extension. This extension will be devoid of any configuration details and you do not need to install or configure any external tools as they are preconfigured and hidden.

Let’s check out a sample code that will help you integrate the React components with extensions.

### Integrating Venus Components With Extension

Venus components can be used in [creating a React app](https://reactjs.org/docs/getting-started.html) or any React app build that uses webpack or any other bundler.

Follow the instructions given below to integrate the components with existing UI extensions built using React.

#### Prerequisites

The Contentstack Venus Component Library best works with React version >=16.8.0

#### Installation

Run the following command in your React app to install the Venus component library elements:

```
npm i  @contentstack/ui-extensions-sdk @contentstack/venus-components
```

#### Usage

Next, use the following code snippet to integrate the components into your application:

```
import React from 'react';
import ReactDOM from 'react-dom';
import ContentstackUIExtension from "@contentstack/ui-extensions-sdk";
import { Button, Heading } from '@contentstack/venus-components';
import '@contentstack/venus-components/build/main.css';

class App extends React.Component {
  render() {
    return (

       {
          console.log('You clicked on Venus button');
        }}
      >
        Click on me

    );
  }
}

ContentstackUIExtension.init().then((extension) => {

  ReactDOM.render(

    ,
    document.getElementById('root')
  );

})
```

## Important Links

- [Contentstack Venus Component Library](https://venus-storybook.contentstack.com/)
- [Work with Contentstack UI Extensions](/docs/developers/all-contentstack-experience-extensions)

## Support and Feedback

You can also help us improve the library by providing your valuable feedback and suggestions. Please contact our [Support team](mailto:support@contentstack.com) for more information.

## Common questions

### What is the Contentstack Venus Component Library used for?
The [Contentstack Venus Component Library](https://venus-storybook.contentstack.com/) provides a comprehensive collection of Contentstack’s UI components which can be used to build UI Extensions and Contentstack-based applications.

### What React version works best with the library?
The Contentstack Venus Component Library best works with React version >=16.8.0

### How do I install the Venus component library elements?
Run the following command in your React app to install the Venus component library elements:
```
npm i  @contentstack/ui-extensions-sdk @contentstack/venus-components
```

### Where can I get support or share feedback?
Please contact our [Support team](mailto:support@contentstack.com) for more information.