---
title: "Getting Started with your First App"
description: "Use this guide to build a simple app in Developer Hub."
url: /developer-hub/getting-started-with-your-first-app
uid: blt283653acda04b2af
---

# Getting Started with your First App

## Getting Started with your First App

In this section, we will learn how to build a simple **“Color Picker”** app using the Contentstack App Framework. This app contains a [Custom Field UI location](/docs/developer-hub/custom-field-location), which provides a native color picker polyfill that Contentstack users can use as an input field.

This step-by-step guide explains how to create a Color Picker app and use it to select color as an input within an entry.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/) with access to Developer Hub
-   Organization or Stack Admin access
-   [Node.js](https://nodejs.org/en/) version 18 or above
-   CLI [installed](/docs/headless-cms/install-the-cli/v1) on your machine
-   [Apps CLI Plugin](/docs/headless-cms/apps-cli-plugin/v1) configured for Contentstack CLI
-   Understanding of [App SDK](https://github.com/contentstack/app-sdk-docs)
-   Understanding of React.js
-   [Venus Component Library](/docs/headless-cms/venus-component-library/) installed on your machine

## What You Will Learn

-   How to set up and register a Color Picker app with the Contentstack Apps CLI Plugin.

-   How to install and configure the app in a stack.

-   How to implement the Color Picker custom field logic.

-   How to prepare the app for hosting and publishing.


## Overview of Steps:

1.  [Set up and Register an App](#set-up-and-register-an-app)
2.  [Install and Configure the App](#install-and-configure-the-app)
3.  [Implement your Business Logic](#implement-your-business-logic)
4.  [Next Steps](#next-steps)

1.  ### Set up and Register an App

    As a first step, you need to create a project directory where you can work in. You can use the Contentstack [Apps CLI Plugin](/docs/headless-cms/apps-cli-plugin/v1) to clone the Marketplace App Boilerplate for creating your project.

    1.  This command allows you to create or register an app in [Developer Hub](/docs/developer-hub/) and optionally clone a boilerplate locally. Open a terminal and execute the following command:

        ```
        csdx app:create
        ```

    2.  You will be prompted to enter a name for the app.  
        ![App_Name.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte53e962915817136/65b23c279515001817a71f66/App_Name.png)
    3.  Enter a name for your app and click enter. As per our example, we are using color picker.  
        ![App_Name_Colorpicker.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte80c6789bf945e0c/65b23c2741787580ea674512/App_Name_Colorpicker.png)
    4.  You will be prompted to choose an organization.  
        ![Organization_Name.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt815897af4bfe2f90/65f82eb0edb2c70b17371d50/Organization_Name.png)
    5.  Enter **Y** i.e. Yes, if you want to fetch the app template from GitHub (recommended). This clones the latest Marketplace App Boilerplate for stack apps.  
        ![Fetch_Template.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3525551d154b8be3/65b23c275cdaec184a3b76a8/Fetch_Template.png)

        Your boilerplate will be cloned locally in the color-picker directory and the app is automatically registered in Developer Hub.

    6.  Switch to the newly created project directory from CLI using the following command.

        ```
        cd color-picker
        ```

    7.  Run the following command to install all the node modules.

        ```
        npm install
        ```

    8.  Run the following command to start the project.

        ```
        npm run dev
        ```

        This hosts your application on http://localhost:3000. We will connect to this through the Contentstack web app.

2.  ### Install and Configure the App

    The boilerplate app has sample pages for all the supported [UI locations](/docs/developer-hub/about-ui-locations) in the source code. To test the app, Install the app in one of the stacks.

    1.  Run the following commands in a **separate console window** to keep the server running. Run the following command to install the app. You can also perform the same installation via Developer Hub.

        ```
        csdx app:install
        ```

    2.  The CLI prompts you to select the organization and stack to install the app.  
        ![Select_Stac.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltefa339780863e963/65b23c2860a275c5747fb6e9/Select_Stac.png)
    3.  Once done, you will see the stack URL for quick access to the stack. Open the Stack via the URL displayed in the terminal.  
        ![Terminal_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte9b7f9cfd3fc715d/65b23c28292a0ebb6487c184/Terminal_URL.png)
    4.  Go to the stack in which you have installed the app. Create a new content type or navigate to an existing one. Select the **Sample Custom** field to add the Color Picker app.  
        ![Select_Custom_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3cf58a5358e2ebb4/65b23c2824ea49a6c8de4a4c/Select_Custom_Field.png)
    5.  In the **Select Extensions or App** popup, select the Color Picker app.  
        ![Select_Extension_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfdf29e9b4df4ce74/65b23c288fc5c0e55b0bb447/Select_Extension_App.png)
    6.  Click **Proceed**.
    7.  Click **Save or Save and Close** to update and save your changes to the content type.
    8.  Navigate to the entries page. Create an entry for the above content type to see the app in action.  
        ![Custom_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt575eb671d8ff4c1e/65b23c286f1607451c394e30/Custom_Field.png)

        You will see a custom field as shown above.

3.  ### Implement your Business Logic

    1.  For the Color Picker app, you **must** install some dependencies. Run the following command on a terminal to install the dependencies.

        ```
        npm i reactcss react-color @contentstack/venus-components 
        npm i --save-dev @types/react-color
        ```

    2.  Add the **Color Picker** type to the **Types** in src/common/types/types.ts

        ```
        export interface ColorPickerData {
            showPicker: boolean;
            pickerColor: {
                r: string;
                g: string;
                b: string;
                a: string;
            };
        }
        ```

    3.  Replace the custom field code with the code given below in the following folder src/containers/CustomField/CustomField.tsx

        ```
        /* eslint-disable @typescript-eslint/no-explicit-any */
        /* Import Node modules */
        import React from "react";
        import { useEffect, useState } from "react";
        import { Color, SketchPicker } from "react-color";
        import reactCSS from "reactcss";
        import { InstructionText } from "@contentstack/venus-components";
        import { isEmpty } from "lodash";
        /* Import our modules */
        import localeTexts from "../../common/locales/en-us/index";
        import { ColorPickerData } from "../../common/types/types";
        import { useCustomField } from "../../common/hooks/useCustomField";
        /* Import our CSS */
        import "./styles.css";

        const CustomFieldUILocation = () => {
          const { customField, setFieldData }: any = useCustomField();
          const [stateColor, setColor] = useState<ColorPickerData>({
            showPicker: false,
            pickerColor: {
              r: "108",
              g: "92",
              b: "231",
              a: "100",
            },
          });

          const styles = reactCSS({
            default: {
              color: {
                width: "70px",
                height: "30px",
                borderRadius: "4px",
                background: `rgba(${stateColor.pickerColor.r}, ${stateColor.pickerColor.g}, ${stateColor.pickerColor.b}, ${stateColor.pickerColor.a})`,
              },
            },
          });

          const togglePickerVisibility = () => {
            setColor((prev) => ({
              showPicker: !prev.showPicker,
              pickerColor: prev.pickerColor,
            }));
          };

          const closePicker = () => {
            setColor((prev) => ({
              showPicker: false,
              pickerColor: prev.pickerColor,
            }));
          };

          const pickerColorChanged = (color: any) => {
            setColor((prev) => ({
              showPicker: prev.showPicker,
              pickerColor: color.rgb,
            }));
            setFieldData(color);
          };

          useEffect(() => {

            if (!isEmpty(customField) && customField !== null) {
              setColor({
                showPicker: false,
                pickerColor: customField.rgb,
              });
            }
          }, [customField]);

          return (
            <div className="layout-container">
              <InstructionText testId="color-picker-text">{localeTexts.CustomField.instruction}</InstructionText>
              <div>
                <div className="swatch" role="none" onClick={togglePickerVisibility} onKeyDown={togglePickerVisibility}>
                  <div style={styles.color} />
                </div>
                {stateColor.showPicker ? (
                  <div className="popover">
                    <div className="cover" role="presentation" onClick={closePicker} onKeyDown={closePicker}>
                      <SketchPicker color={stateColor.pickerColor  as unknown as Color} onChange={pickerColorChanged} />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        };
        export default CustomFieldUILocation;
        ```

    4.  Create a new file styles.css and add the custom field CSS with the code given below in the following path src/containers/CustomField/

        ```
        .layout-container {
          padding: 5px;
          margin: -28px 0;
        }

        .layout-container .InstructionText {
          text-align: left;
          color: #647696;
          display: block;
          font-family: Inter;
          font-size: 0.75rem;
          line-height: 1.5;
        }

        .layout-container .swatch {
          padding: 5px;
          background: #fff;
          border-radius: 1px;
          box-shadow: 0 0 0 1px rgb(0 0 0 / 10%);
          display: inline-block;
          cursor: pointer;
        }
        ```

    5.  Add new strings to Custom Field object node in locales in src/common/locales/en-us/index.ts

        ```
        CustomField: {
            . . .
           instruction: "Pick a Color",
        },
        ```

    6.  Stop and restart your **React** project.

        ```
        npm start
        ```

    7.  Revisit the entry page to see the Color Picker loaded into the custom field.  
        ![Revisit_Image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7d7d877ebc4e7e5c/65b23c29316f0d0675aa0c7f/Revisit_Image.png)
    8.  Save any color and reload, and verify if the app is saving data and fetching it on reload.
4.  ### Next Steps

    1.  **Host the app on Launch:**

        Now that your app is ready, you can [host it on Launch](/docs/developer-hub/app-hosting) for your team to use. You can also choose to host the app on external services like Netlify, Vercel, etc.

    2.  **Secure your application:**

        Using the [signed support](/docs/developer-hub/securing-your-app/), you can learn how to secure calls to outgoing APIs from the Contentstack UI and backend using the Contentstack App Framework.

    3.  **Submit for publishing on Marketplace:**

        Once your application is production-ready and you want to share the solution with Contentstack Marketplace, you can check the [App Submission and Approval Guide](/docs/marketplace/app-submission-and-approval-guide).
