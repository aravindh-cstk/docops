---
title: "Mobile Messaging with Lytics Webhooks and Serverless Functions"
description: "Mobile Messaging with Lytics Webhooks and Serverless Functions"
url: /lytics/mobile-messaging-with-lytics-webhooks-and-serverless-functions-1
---

# Mobile Messaging with Lytics Webhooks and Serverless Functions

## Mobile Messaging with Lytics Webhooks and Serverless Functions

Lytics webhooks paired with serverless functions are a great way to build custom workflows to power your marketing campaigns. This workflow is very flexible and can be configured as a trigger for a variety of platforms to send emails, push notifications, and alerts. This example uses a serverless cloud function to send a text message to a non-subscribed user when they become highly engaged via [Twilio](https://www.twilio.com/).

### Setup the audience

In this example, you’re going to send a personalized text message to a user when they become highly engaged determined by [Lytics behavioral scores](https://learn.lytics.com/understanding/product-docs/descriptive-and-predictive-modeling/lytics-scores). Additionally, you only want to send messages to non-subscribed users who have a phone number. Therefore, you are going to need to create an audience with three criteria. First, only users who are (or become) deeply engaged based on Lytics data-science scores. Second, their profile has a phone number. And third, they are not yet a subscriber as the text message will include a sign up link.

In the audience builder, you're going to use an [existing audience](https://learn.lytics.com/understanding/product-docs/audiences/building-audiences-existing-audiences) for highly engaged users and two [custom rules](https://learn.lytics.com/understanding/product-docs/audiences/building-audiences-custom-rules) for subscribers and phone numbers. For additional instructions on building audiences, check out [the audience builder docs](https://learn.lytics.com/understanding/product-docs/audiences/building-audiences).

**NOTE:** Twilio's API requires phone numbers with a country code (e.g. +11234567890). If phone numbers are not stored in this format in the user's Lytics profile the cloud function can be used to correctly format the number.

![Screen Shot 2019-01-16 at 1 26 28 PM](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdb4feea82ecc25bd/1f4a5706801e2b7fc3aa46df/img-0220.png)

### Create the cloud function

This example uses Google Cloud Functions to power this custom workflow, however this will work just as well with other serverless tools like AWS Lambda or Azure Functions. For a quickstart on Google Cloud Functions see [Quickstart: Using the gcloud Command-Line Tool](https://cloud.google.com/functions/docs/quickstart).

The Lytics webhook sends the full profile of a user when they enter or exit the audience. The code below receives the profile in the body of the request, then uses the Twilio API to send a custom text message to the user.

**Note:** You'll also need a [Twilio account](https://www.twilio.com/try-twilio). When using a Twilio free trial, you can only send text messages to the numbers in your [Verified Phone Number list](https://support.twilio.com/hc/en-us/articles/223180048-Adding-a-Verified-Phone-Number-or-Caller-ID-with-Twilio).

```
// Twilio Client
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.sms = (req, res) => {
 const r = req.body; 

 // Do not send a text message when the user exits the audience
 if (r.data.segment_events[0].event === "exit") {
  res.status(200).end();
  return;
 } 

 const from = 'your twilio number';
 const to = r.data.phone_number;
 const body = `Hey ${r.data.first_name || 'there'}, we thought you might be interested in subscribing. As an added bonus, here is a link to get your first month free: your_link.com?uid=${r.data._uid}`

 // Send the message
 client.messages
  .create({ from, to, body })
  .then(message => console.log(message.sid))
  .then(res.status(200).end('success'))
  .catch(err => res.status(500).end(`error: ${err}`));
}
```

Next, deploy the function. You can get your account\\\_sid and auth\\\_token from the Twilio dashboard.

```
gcloud functions deploy sms --set-env-vars ACCOUNT_SID=<your_account_sid>,AUTH_TOKEN=<your_auth_token> --runtime nodejs8 --trigger-http
```

After deploying the cloud function, you will be provided with an endpoint that triggers the function. You can also find this in the Cloud Functions console:

![Screen Shot 2019-01-16 at 1 28 48 PM](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am209cf8bab0fa7973/4c510c9efabe9ad396b21218/img-0221.png)

### Create the Webhook

Next, you need to export the audience previously created. Return to [Lytics](https://activate.getlytics.com/dashboard) and navigate to **Data** > **Integrations** and select **Webhooks**. Next, click **New Workflow** then **Segment Triggers Webhook**, select the audience created previously moving it to the right column, enter the url trigger for your cloud function into the **Webhook URL** field, and click **Start Export**. You should received a message that your webhook was successfully created. When a user enters or exits the selected audience, the Lytics webhook will send a POST request to the provided URL, triggering the cloud function.

![Screen Shot 2019-01-16 at 1 30 32 PM](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am54b542d9a419093e/809f1c3d16c20b649604144b/img-0222.png)

That’s it! You’ve successfully created a webhook trigger that will automatically send a text message to unsubscribed users when they enter the highly engaged audience.
