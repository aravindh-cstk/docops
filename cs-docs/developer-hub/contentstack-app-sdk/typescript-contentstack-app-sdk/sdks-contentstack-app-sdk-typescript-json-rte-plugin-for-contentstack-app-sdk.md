---
title: "JSON RTE Plugin for Contentstack App SDK"
description: "Learn to build JSON RTE plugins using the Contentstack App SDK: access nodes, marks, paths, and editor events to customize rich text and improve plugin flexibility."
url: /developers/sdks/contentstack-app-sdk/typescript/json-rte-plugin-for-contentstack-app-sdk
uid: bltc66522ecb250ba41
---

# JSON RTE Plugin for Contentstack App SDK

## JSON RTE Plugin for Contentstack App SDK

This document outlines how to build JSON Rich Text Editor (RTE) plugins using the Contentstack App SDK. These plugins extend the editor’s functionality by enabling custom formatting, embeds, and interactions within the JSON RTE.

## Prerequisites

-   Basic understanding of [JSON RTE](/docs/headless-cms/about-json-rich-text-editor)
-   [JSON structure](/docs/headless-cms/schema-of-json-rich-text-editor) and terminology associated with it

## Structure of JSON RTE

```
{
  "type": "doc",
  "children": [
    {
      "type": "p",
      "children": [
        {
          "text": "Paragraph"
        }
      ]
    },
    {
      "type": "h1",
      "children": [
        {
          "text": "Heading One"
        }
      ]
    }
  ]
}
```

### Node Types

In the JSON RTE, the JSON structure represents as a **Node,** which consists of two types:

-   **Block Node:** Contains a children array with nested nodes.
-   **Leaf Node:** Contains only a text property and optional formatting marks like bold, italic, etc.

The root of the document is a special Block Node of type doc. All editor content is nested within this root node.

### Marks

Marks define text formatting in leaf nodes. Common marks include bold, italic, and underline.

**Example**:

```
{
  "text": "I am Bold",
  "bold": true
}
```

In the above example, bold is the mark applied to the string "I am Bold".

![JSON RTE marks example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8e6a45da4d8a449/6960c0c41115960008afcdaa/1._BlockLeaf.png)

### Render Type

A Block node can be rendered in three ways:

-   **Block:** Rendered as a standalone block element (e.g., paragraph, heading).
-   **Inline:** Rendered within other text flows (e.g., links).
-   **Void:** Represents self-contained, non-editable elements (e.g., images, embeds).

![JSON RTE render type example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt08d37279645da9d1/6960c0c4955a7d000811a146/2._BlockTypes.png)

### Path

A Path is an array of indexes that locates a node’s exact position within the document tree.

![JSON RTE path example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfa0f9242730a17cd/6960c0c4900b3200081e7aa6/3._Path.png)

In the JSON RTE, a path is represented as: Number\[\]

**Examples:**

-   The doc node has a path of \[0\].
-   The first paragraph inside the doc node has a path of \[0, 0\].

### Point

A Point represents a specific location within a leaf node’s text.

It consists of:

-   path: Identifies the node’s position in the document tree.
-   offset: Indicates the character index within the node’s text string.

![JSON RTE point example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdf7357c2793eeb31/6960c0c492a197000922c659/4._Point.png)

**Structure**:

```
{
  path: Path,
  offset: Number
}
```

### Range

A Range defines a selection within a JSON document using two points:

-   **anchor:** The starting point of the selection.
-   **focus:** The ending point of the selection.

**Structure:**

```
{
  anchor: Point,
  focus: Point
}
```

### Location

A Location identifies a specific position within the JSON RTE document. It can be one of the following:

-   Path: Specifies a node’s position in the document tree.
-   Point: Specifies a character offset within a leaf node.
-   Range: Specifies a selection spanning from an anchor to a focus point.

Use a Location object as input when targeting or modifying content in the editor.

## Inclusion in your project

To build a JSON RTE plugin:

1.  **Install the SDK**

    Add the @contentstack/app-sdk package to your React project:

    ```
    npm install @contentstack/app-sdk
    ```

2.  **Clone the Boilerplate**

    Use the JSON RTE plugin [boilerplate](https://github.com/contentstack/rte-plugin-boilerplate) from GitHub as a starting point. It includes the required project structure and configuration.


## Classes

### RTEPlugin(plugin\_id, callback)

The RTEPlugin method allows you to create a JSON RTE plugin instance.

**Kind:** Instance property of the JSON RTE plugin

**Returns:** Plugin Object

<table><tbody><tr><td><strong>Parameter</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">plugin_id</span></td><td><span class="code">string</span></td><td>Unique ID for the plugin.</td></tr><tr><td><span class="code">configCallback</span></td><td><span class="code">(rte: IRteParam) =&gt; IConfig</span></td><td>This function receives an <a href="/docs/developers/sdks/contentstack-app-sdk/typescript/json-rte-plugin-for-contentstack-app-sdk#rte-instance-rte" target="_self">RTE instance</a> as an argument, and it expects you to return a <a href="/docs/developers/sdks/contentstack-app-sdk/typescript/json-rte-plugin-for-contentstack-app-sdk#configcallback-rte-irteparam-iconfig" target="_self">config object</a> that includes details like title, icon, render, etc.</td></tr></tbody></table>

### configCallback: (rte: IRteParam) => IConfig

The IConfig object is a user-defined object that contains metadata that controls how the plugin behaves and appears in the editor.

The following table contains the possible properties of IConfig:

<table><tbody><tr><td><strong>Key</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">title</span></td><td><span class="code">string</span></td><td>Toolbar label for the plugin.</td></tr><tr><td><span class="code">icon</span></td><td><span class="code">ReactNode</span></td><td>Icon component used for the plugin button.</td></tr><tr><td><span class="code">display</span></td><td><span class="code">('toolbar' | 'hoveringToolbar')[]</span></td><td>Location of the plugin</td></tr><tr><td><span class="code">elementType</span></td><td><span class="code">('inline' | 'void' | 'block')[]</span></td><td>Render type</td></tr><tr><td><span class="code">render</span></td><td><span class="code">ReactNode</span></td><td>Component to be rendered within the editor when corresponding <span class="code">plugin_uid</span> appears in json.</td></tr></tbody></table>

## RTE Instance (rte)

The rte object provides access to essential functions and properties for interacting with the JSON RTE.

The following is a list of properties and methods of the JSON RTE instance.

### Properties:

#### rte.ref

The rte.ref property returns the HTML reference of the JSON RTE.

#### rte.fieldConfig

The rte.fieldConfig() property provides metadata about the JSON RTE field, as defined in the content type builder page.

<table><tbody><tr><td><strong>Key</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">rich_text_type</span></td><td><span class="code">'basic' | 'advance' | 'custom'</span></td><td>Type of JSON RTE selected.</td></tr><tr><td><span class="code">reference_to</span></td><td><span class="code">string[]</span></td><td>UIDs of content types referenced in the JSON RTE.</td></tr><tr><td><span class="code">options</span></td><td><span class="code">string[]</span></td><td>Array of selected toolbar buttons (available if <span class="code">rich_text_type</span> is ‘<span class="code">custom</span>’).</td></tr><tr><td><span class="code">title</span></td><td><span class="code">string</span></td><td>Title of the RTE field.</td></tr><tr><td><span class="code">uid</span></td><td><span class="code">string</span></td><td>Unique ID for the field</td></tr></tbody></table>

```
rte.getConfig: () => Object
```

The rte.getConfig() method retrieves the configuration object defined during plugin creation or selection.

Use this method to access custom plugin parameters, such as API keys or UI settings specified in:

-   The plugin’s initialization logic.
-   Field-level configuration in the builder.

### RTE Methods

Access RTE methods using the rte.methodName() syntax. These methods allow you to retrieve paths, modify nodes, apply text formatting, and manage content within the editor.

<table><tbody><tr><td><strong>Method</strong></td><td><strong>Description</strong></td><td><strong>Type</strong></td></tr><tr><td><span class="code">getPath</span></td><td>Retrieves the path of the node</td><td><span class="code">(node: Node) =&gt; Path</span></td></tr><tr><td><span class="code">setAttrs</span></td><td>Sets attributes for the node (e.g., <span class="code">href</span> for links, <span class="code">src</span> for images).</td><td><span class="code">(attrs: Object, options: Option) =&gt; void</span> Option: <a href="/docs/developers/sdks/contentstack-app-sdk/typescript/json-rte-plugin-for-contentstack-app-sdk#node-options" target="_self">NodeOptions</a></td></tr><tr><td><span class="code">isNodeOfType</span></td><td>Checks if the node at the current selection matches the specified type.</td><td><span class="code">(type: string) =&gt; boolean</span></td></tr><tr><td><span class="code">getNode</span></td><td>Retrieves the node at the specified location</td><td><span class="code">(location: Location) =&gt; Node</span></td></tr><tr><td><span class="code">getNodes</span></td><td><p>Retrieves a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator" target="_blank" rel="noopener noreferrer">generator</a> of nodes that include the specified location in the options.</p><p>By default, it returns nodes at the current selection.</p></td><td><p class="code">(options: Option) =&gt; Node[]</p><p>Option: <a href="/docs/developers/sdks/contentstack-app-sdk/typescript/json-rte-plugin-for-contentstack-app-sdk#node-options" target="_self">NodeOptions</a></p></td></tr><tr><td><span class="code">string</span></td><td>String value of JSON in the given path</td><td><span class="code">(location: Location) =&gt; string</span></td></tr><tr><td><span class="code">addMark</span></td><td>Adds formatting (e.g., <span class="code">bold</span>, <span class="code">italic</span>) to selected text.</td><td><span class="code">(key: string, val: any) =&gt; void</span></td></tr><tr><td><span class="code">removeMark</span></td><td>Removes a formatting mark from the selected text.</td><td><span class="code">(key: string) =&gt; void</span></td></tr><tr><td><span class="code">hasMark</span></td><td>Checks if the selected text has a mark.</td><td><span class="code">(key: string) =&gt; boolean</span></td></tr><tr><td><span class="code">insertText</span></td><td>Inserts text at a specified location</td><td><span class="code">(text: string, location: Location) =&gt; void</span></td></tr><tr><td><span class="code">getText</span></td><td>Retrieves text from the specified node location.</td><td><span class="code">() =&gt; string</span></td></tr><tr><td><span class="code">deleteText</span></td><td>Deletes text from the selected range.</td><td><span class="code">() =&gt; void</span></td></tr><tr><td><span class="code">updateNode</span></td><td>Updates nodes based on specified options.</td><td><span class="code">(type: string, attrs: Object, options: Option) =&gt; void</span> Option: <a href="/docs/developers/sdks/contentstack-app-sdk/typescript/json-rte-plugin-for-contentstack-app-sdk#node-options" target="_self">NodeOptions</a></td></tr><tr><td><span class="code">unsetNode</span></td><td>Converts a node to a normal paragraph based on specified options</td><td><span class="code">(options: Option) =&gt; void</span> Option: <a href="/docs/developers/sdks/contentstack-app-sdk/typescript/json-rte-plugin-for-contentstack-app-sdk#node-options" target="_self">NodeOptions</a></td></tr><tr><td><span class="code">insertNode</span></td><td><p>Inserts a node at a specified location.</p><p>Optional <span class="code">select: true</span> selects the node after insertion.</p></td><td><span class="code">(node: Node, options?: Option) =&gt; void</span> Option: <a href="/docs/developers/sdks/contentstack-app-sdk/typescript/json-rte-plugin-for-contentstack-app-sdk#node-options" target="_self">NodeOptions</a> &amp; { select?: boolean }</td></tr><tr><td><span class="code">deleteNode</span></td><td>Removes a node from a specified location.</td><td><span class="code">(options: Option) =&gt; void</span> Option: { at?: Location, distance?: number, unit?: 'character' | 'word' | 'line' | 'block' }</td></tr><tr><td><span class="code">wrapNode</span></td><td>Wraps a node using the provided options and the specified wrapper node.</td><td><span class="code">(node: Node, options: Option) =&gt; void</span> Option: <a href="/docs/developers/sdks/contentstack-app-sdk/typescript/json-rte-plugin-for-contentstack-app-sdk#node-options" target="_self">NodeOptions</a></td></tr><tr><td><span class="code">unWrapNode</span></td><td>Unwraps a node from its parent using the specified options.</td><td><span class="code">(options: Option) =&gt; void</span> Option: <a href="/docs/developers/sdks/contentstack-app-sdk/typescript/json-rte-plugin-for-contentstack-app-sdk#node-options" target="_self">NodeOptions</a></td></tr><tr><td><span class="code">mergeNodes</span></td><td>Merges nodes based on provided options.</td><td><span class="code">(options: Option) =&gt; void</span> Option: <a href="/docs/developers/sdks/contentstack-app-sdk/typescript/json-rte-plugin-for-contentstack-app-sdk#node-options" target="_self">NodeOptions</a></td></tr><tr><td><span class="code">getEmbeddedItems</span></td><td>Gets details of embedded items JSON RTE.</td><td><span class="code">() =&gt; Object</span></td></tr><tr><td><span class="code">getVariable</span></td><td>Retrieves a local variable.</td><td><span class="code">(name: string) =&gt; any</span></td></tr><tr><td><span class="code">setVariable</span></td><td>Sets a local variable.</td><td><span class="code">(name: string, val: any) =&gt; void</span></td></tr></tbody></table>

### RTE Selection Methods (rte.selection)

The rte.selection object provides methods and hooks to manage and query the current selection within the editor.

<table><tbody><tr><td><strong>Function</strong></td><td><strong>Description</strong></td><td><strong>Type</strong></td></tr><tr><td><span class="code">get</span></td><td>Retrieves the current selection.</td><td><span class="code">() =&gt; Range</span></td></tr><tr><td><span class="code">set</span></td><td>Sets the selection to the specified location.</td><td><span class="code">(location: Location) =&gt; void</span></td></tr><tr><td><span class="code">isSelected</span></td><td>A React hook that returns <span class="code">true</span> when the current node is selected.</td><td><span class="code">() =&gt; boolean</span></td></tr><tr><td><span class="code">isFocused</span></td><td>A React hook that returns <span class="code">true</span> when the current node is focused.</td><td><span class="code">() =&gt; boolean</span></td></tr><tr><td><span class="code">getEnd</span></td><td>Retrieves the end location of the editor.</td><td><span class="code">() =&gt; Path</span></td></tr><tr><td><span class="code">before</span></td><td>Retrieves the location before the current selection.</td><td><span class="code">(location: Location, options: Option) =&gt; Location</span> Option: { distance?: number, unit?: 'offset' | 'character' | 'word' | 'line' | 'block' }</td></tr><tr><td><span class="code">after</span></td><td>Retrieves the location after the current selection.</td><td><span class="code">(location: Location, options: Option) =&gt; Location</span> Option: { distance?: number, unit?: 'offset' | 'character' | 'word' | 'line' | 'block' }</td></tr><tr><td><span class="code">isPointEqual</span></td><td>Checks if two <span class="code">Point</span> objects are equal</td><td><span class="code">(point1: Point, point2: Point) =&gt; boolean</span></td></tr></tbody></table>

## Node Options:

Functions that transform or modify content accept an options parameter. This parameter includes settings that control where and how the transformation is applied using the NodeOptions interface.

**Available Options:**

-   at: Specifies the location in the editor where the transformation should occur. It defaults to the user's current selection.
-   match: A custom function that filters which nodes should be affected, based on their content and path.

```
interface NodeOptions {
  at?: Location;
  match?: (node: Node, path: Location) => boolean;
}
```

## Events function:

The Events functions are built-in methods available on the RTE instance and can be invoked using the syntax: rte.{event\_name}().

<table><tbody><tr><td><strong>Function</strong></td><td><strong>Description</strong></td><td><strong>Arguments</strong></td></tr><tr><td><span class="code">isFocused</span></td><td>Returns <span class="code">true</span> if the editor is currently focused.</td><td><span class="code">() =&gt; boolean</span></td></tr><tr><td><span class="code">focus</span></td><td>Sets focus to the editor.</td><td><span class="code">() =&gt; boolean</span></td></tr><tr><td><span class="code">blur</span></td><td>Removes focus from the editor.</td><td><span class="code">() =&gt; boolean</span></td></tr></tbody></table>

## Plugin

Plugin instances expose methods to handle editor events and organize related plugins into dropdowns.

### Editor Events

```
Plugin.on: (event_type, callback) => void
```

<table><tbody><tr><td><strong>event_type</strong></td><td><strong>Description</strong></td><td><strong>Callback Arguments</strong></td></tr><tr><td><span class="code">keydown</span></td><td>Triggered when a key is pressed.</td><td><span class="code">({ event: KeyboardEvent, rte: RTE }) =&gt; void</span></td></tr><tr><td><span class="code">exec</span></td><td>Triggered when a plugin button is clicked.</td><td><span class="code">(rte: RTE) =&gt; void</span></td></tr><tr><td><span class="code">deleteBackward</span></td><td>Triggered on backward deletion (e.g., backspace).</td><td><span class="code">({ rte: RTE, preventDefault: Function, ...args: [unit: "character" | "word" | "line" | "block"] }) =&gt; void</span></td></tr><tr><td><span class="code">deleteForward</span></td><td>Triggered on forward deletion.</td><td><span class="code">({ rte: RTE, preventDefault: Function, ...args: [unit: "character" | "word" | "line" | "block"] }) =&gt; void</span></td></tr><tr><td><span class="code">normalize</span></td><td>Cleans up invalid or unwanted node structures.</td><td><span class="code">({ rte: RTE, preventDefault: Function, ...args: [[node: Node, path: Path]] }) =&gt; void</span></td></tr><tr><td><span class="code">insertText</span></td><td>Inserts text at the current selection.</td><td><span class="code">({ rte: RTE, preventDefault: Function, ...args: [string] }) =&gt; void</span></td></tr><tr><td><span class="code">change</span></td><td>Fires when any change occurs in the editor.</td><td><span class="code">({ rte: RTE, preventDefault: Function }) =&gt; void</span></td></tr><tr><td><span class="code">insertBreak</span></td><td>Triggered when the Enter key is pressed.</td><td><span class="code">({ rte: RTE, preventDefault: Function }) =&gt; void</span></td></tr></tbody></table>

### Dropdown plugin

The Plugin.addPlugins method groups related plugins into a single dropdown menu within the RTE toolbar.

```
Plugin.addPlugins: (...Plugin) => void
```

**Example:**

```
const ChooseAsset = RTE("choose-asset", () => {
  /** Choose Asset Code */
});
const UploadAsset = RTE("upload-asset", () => {
  /** Upload Asset Code */
});
const Asset = RTE("asset-picker", () => {
  /** Asset Picker Code */
});
Asset.addPlugins(ChooseAsset, UploadAsset);
```

This groups the ChooseAsset and UploadAsset plugins under a dropdown button represented by Asset.

![RTE dropdown plugin example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcc22af91fe859243/6960c0c492a197000922c65b/5._Dropdown.jpg)
