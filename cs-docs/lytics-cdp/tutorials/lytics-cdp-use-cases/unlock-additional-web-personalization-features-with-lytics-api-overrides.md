---
title: "Unlock Additional Web Personalization Features with Lytics API Overrides"
description: "Unlock Additional Web Personalization Features with Lytics API Overrides"
url: /lytics/unlock-additional-web-personalization-features-with-lytics-api-overrides
uid: bltd1aa8123bce5a4b1
---

# Unlock Additional Web Personalization Features with Lytics API Overrides

## Unlock Additional Web Personalization Features with Lytics API Overrides

[Lytics web personalize Experiences](/docs/lytics/experiences) built through the Lytics UI are powered behind-the-scenes by the [Pathfora JavaScript SDK](https://lytics.github.io/pathforadocs/). Not all features of the SDK are supported by the Lytics UI however such as [custom forms](/docs/lytics/experiences), or [JavaScript callbacks](https://lytics.github.io/pathforadocs/callbacks/). Luckily you can apply these features to Experiences built through the UI using a technique called API overrides.

In this guide, you will learn how to make an API requests to override the configuration of an Experience built in the Lytics UI. You will create a slideout via the Lytics Experience editor and API overrides. The overrides will include the custom form configuration, form error and success states, and the custom callback which sends the form data to a third party.

![Output Slideout](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc2648ea8b45a51c6/91d16abb733c37e66cc4983f/img-0346.jpg)

You can download the complete API request command for this example from the [Github examples repository](https://github.com/lytics/pathforajs-examples/tree/master/examples/api-overrides).

The primary benefit of using the Lytics UI in combination with API overrides instead of the Pathfora SDK is that your experiences are easily integrated into [Goals](/docs/lytics/goals) and you will have access to the native Experience, Stage, and Journey reporting features in the Lytics UI without having to build custom audiences to track users who interact with your widgets.

### Building the Experience in Lytics

If you haven't already, you will need to build the base Experience through the Lytics [Experience Editor](/docs/lytics/experiences). The goal is to create in the experience in the UI as close as possible the desired end state of the widget, and rely on the API overrides to fill in the gaps that are not available for configuration in the UI.

#### Selecting a Tactic

Selecting the correct tactic is key, as it determines what [type](https://lytics.github.io/pathforadocs/#overview) of Pathfora widget the Experience outputs. The tactics map to types as follows:

-   **Drive Traffic** - produces a [message widget](https://lytics.github.io/pathforadocs/types/message/) with CTA ([`okShow`](https://lytics.github.io/pathforadocs/customization/buttons/#okshow) set to `true`).
-   **Capture Leads** - produces a [form widget](https://lytics.github.io/pathforadocs/types/form/).
-   **Present a Message** - produces a [message widget](https://lytics.github.io/pathforadocs/types/message/) with no buttons ([`okShow`](https://lytics.github.io/pathforadocs/customization/buttons/#okshow) set to `false`).
-   **Recommend Content** - produces a [message widget](https://lytics.github.io/pathforadocs/types/message/) with [content recommendations](https://lytics.github.io/pathforadocs/content_recommend/) and `variant` set to `3`.

The example in this guide uses a [form widget](https://lytics.github.io/pathforadocs/types/form/), thus you will select the **Capture Leads** tactic.

#### Experience Editor Steps

1.  You will be dropped into the [customize form step](/docs/lytics/experiences) of the editor. Since the example form has custom checkboxes set to select which feeds to subscribe to, you can't configure this in the UI. Simply click the **Next Step** button.

1.  In the [design step](/docs/lytics/experiences) enter the headline, body, and call to action text. Select the **Slideout** layout, and under theme you can check the **I have my own CSS** box and enter the custom class name `custom-tracking-widget`.

1.  In the [target step](/docs/lytics/experiences), select the audience you wish to show this slideout to. This example uses an audience of high intensity anonymous users.

1.  In the [display step](/docs/lytics/experiences) configure when and where you want the form slideout to display on your website. This step controls to the [`displayConditions` settings](https://lytics.github.io/pathforadocs/display_conditions/) in the Pathfora SDK.

Once you've completed all the steps, you may want to preview your Experience. Though it may not look or function in the way you would like, this starting experience will generate a foundation configuration which you will augment in the next step.

![Legacy Form](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am592c7d305b7ea6bd/9e6f41bed3fec617da5c0e1a/img-0347.jpg)

You will also need to save the Experience to make API override requests. Be sure to click **Save as Draft**.

### Creating the Override Request

To make the request for the override, you will need the ID of the Experience you just created. You can get this from the URL of the summary or review page of the experience after saving it.

In the URL example below, the ID of the Experience is `2d3e345b2ac24acd9d6d3d33f93516fd`:

![ID in URL](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0f6536c4aad2e7f4/5739c56526e510b294e45110/img-0348.jpg)

You will also need a Lytics [API token](/docs/lytics/access-tokens) with the **Admin** role. It may help to save the token as an environment variable for future use.

```
export LIOKEY={api_token_here}
```

You will make a `PATCH` request to the Experience endpoint with the id of the Experience. This command example uses [curl](https://curl.haxx.se/) and [jq](https://stedolan.github.io/jq/):

```
curl -s -H "Authorization: $LIOKEY" 
  -H "Content-Type: text/json" 
  -XPATCH "https://api.lytics.io/api/experience/{experience_id}" 
  -d '{
    JSON PAYLOAD WILL GO HERE
  }' | jq '.'
```

Your config changes will need to be nested in a field called `detail_override` this field itself is nested in the `experience.vehicle` model:

```
{
  "experience": {
    "vehicle": {
      "detail_override": {
        // configuration overrides
      }
  }
}
```

Next you will need to convert the JavaScript configuration into a JSON payload containing the settings which you were unable to apply through the UI. In this example that is:

-   `formElements` - which customizes the form.
-   `formStates` - which sets the success and error states on form submission.
-   `confirmAction` - which handles the callback to send the data to a third party.

For the most part, you can translate a config to a JSON override in the same way that the `JSON.stringify()` function would convert a JS object to JSON. In this example, that works perfectly for `formElements` and `formStates`:

```
{
  "experience": {
    "vehicle": {
      "detail_override": {
        "formElements": [
          {
            "type": "text",
            "required": true,
            "label": "Email Address",
            "name": "email"
          },
          {
            "type": "checkbox-group",
            "required": true,
            "label": "Which feeds would you like to subscribe to?",
            "name": "subscription_feeds",
            "values": [
              {
                "label": "Beauty & Perfumes",
                "value": "beauty"
              },
              {
                "label": "Electronics",
                "value": "electronics"
              },
              {
                "label": "Fashion",
                "value": "fashion"
              }
            ]
          }
        ],
        "formStates": {
          "success": {
            "headline": "Success",
            "msg": "Thanks for signing up, you can expect to receive updates in your inbox soon."
          },
          "error": {
            "headline": "Error",
            "msg": "There was an issue submitting your subscription. Please try again or <a href=\"/contact\">contact us</a> if the issue persists."
          }
        }
      }
    }
  }
}
```

But for `confirmAction`, it gets tricky because it contains a JavaScript function:

```
{
  "experience": {
    "vehicle": {
      "detail_override": {
        // formElements
        // formState

        "confirmAction": {
          "waitForAsyncResponse": true,
          "callback": // callback function here somehow?
        }
      }
    }
  }
}
```

However, the API can accept a JavaScript function as a string. It may help to minify your function first. There are a number of online tools or command line tools which will minify JavaScript for you. This helps for the API override because it creates a shorter, single line version of the function. This is the example callback function run through a minifier:

```
function(e,a,t){if(a.data){var n=a.data.reduce(function(e,a){if(e.hasOwnProperty(a.name)){var t=e[a.name],n=Array.isArray(t)?t:[t];n.push(a.value),e[a.name]=n}else e[a.name]=a.value;return e},{}),r=new XMLHttpRequest;r.onload=function(){200===this.status?t(!0):t(!1)},r.open("POST","http://yourwebsite.com/custom/endpoint",!0),r.setRequestHeader("Content-Type","application/json;charset=UTF-8"),r.send(JSON.stringify(n))}}
```

To include this function as a string, you will need to escape any double quotes within this before pasting it into your config.

```
{
  "experience": {
    "vehicle": {
      "detail_override": {
        // formElements
        // formState

        "confirmAction": {
          "waitForAsyncResponse": true,
          "callback": "function(e,a,t){if(a.data){var n=a.data.reduce(function(e,a){if(e.hasOwnProperty(a.name)){var t=e[a.name],n=Array.isArray(t)?t:[t];n.push(a.value),e[a.name]=n}else e[a.name]=a.value;return e},{}),r=new XMLHttpRequest;r.onload=function(){200===this.status?t(!0):t(!1)},r.open(\"POST\",\"https://bf484baa.ngrok.io/post\",!0),r.setRequestHeader(\"Content-Type\",\"application/json;charset=UTF-8\"),r.send(JSON.stringify(n))}}"
        }
      }
    }
  }
}
```

Putting the whole thing together, your curl command will look like this:

```
curl -s -H "Authorization: $LIOKEY" 
  -H "Content-Type: text/json" 
  -XPATCH "https://api.lytics.io/api/experience/{experience_id}" -d '{
  "experience": {
    "vehicle": {
      "detail_override": {
        "formElements": [
          {
            "type": "text",
            "required": true,
            "label": "Email Address",
            "name": "email"
          },
          {
            "type": "checkbox-group",
            "required": true,
            "label": "Which feeds would you like to subscribe to?",
            "name": "subscription_feeds",
            "values": [
              {
                "label": "Beauty & Perfumes",
                "value": "beauty"
              },
              {
                "label": "Electronics",
                "value": "electronics"
              },
              {
                "label": "Fashion",
                "value": "fashion"
              }
            ]
          }
        ],
        "formStates": {
          "success": {
            "headline": "Success",
            "msg": "Thanks for signing up, you can expect to receive updates in your inbox soon."
          },
          "error": {
            "headline": "Error",
            "msg": "There was an issue submitting your subscription. Please try again or <a href=\"/contact\">contact us</a> if the issue persists."
          }
        },
        "confirmAction": {
          "waitForAsyncResponse": true,
          "callback": "function(e,a,t){if(a.data){var n=a.data.reduce(function(e,a){if(e.hasOwnProperty(a.name)){var t=e[a.name],n=Array.isArray(t)?t:[t];n.push(a.value),e[a.name]=n}else e[a.name]=a.value;return e},{}),r=new XMLHttpRequest;r.onload=function(){200===this.status?t(!0):t(!1)},r.open(\"POST\",\"http://yourwebsite.com/custom/endpoint\",!0),r.setRequestHeader(\"Content-Type\",\"application/json;charset=UTF-8\"),r.send(JSON.stringify(n))}}"
        }
      }
    }
  }
}' | jq '.'
```

Once you run the command, check that the response from the API includes your changes. You may make subsequent `GET` requests to the same endpoint to view the entire payload of the experience.

### Testing and Validating the Override

Once you've made the API request, you should be able to view the changes as part of the regular preview process for your Experience. In the Lytics UI go the the summary or editor for your Experience. Click **Preview** and enter the URL you wish to preview the Experience on.

**Note:** If you are using the same browser session to preview the Experience that you did to create it, you may need to hard refresh the Lytics UI before clicking preview. This will ensure that Lytics is serving the most up to date version of the configuration.

You should be able to see the updated Experience in the preview. If this is not the case there are two scenarios to troubleshoot:

1.  If your widget is not displaying at all, check the JavaScript console for errors. If you find a formatting error in the translated JavaScript config you may investigate and adjust your override command accordingly. This scenario can happen if you failed to escape quotes properly, for example.

1.  If your widget is not displaying the changes, double check the response from the API and cross-reference your settings with the appropriate settings in the [Pathfora SDK Documentation](https://lytics.github.io/pathforadocs/) to ensure everything is named and formatted correctly.

If the issue persists, you can always contact [Lytics Support](http://support.lytics.com) for additional assistance with debugging.
