---
title: "Back up Existing Content"
description: "Set up Contentstack Webhooks to back up your content automatically. Ensure data retention and safeguard against accidental deletions."
url: /headless-cms/back-up-existing-content
uid: blt5bc67cf9981b3ed1
---

# Back up Existing Content

## Back up Existing Content

You can use Contentstack’s [Webhooks](/docs/headless-cms/about-webhooks/) to create backups of your content. A webhook is a user-defined HTTP callback that sends real-time information to any third-party app or service.

Webhooks are triggered by [specific events](/docs/headless-cms/webhook-events), such as the creation of a new [entry](/docs/headless-cms/about-entries/) in a Content Type or the deletion of an existing entry. By specifying an external URL in your webhook settings, you can instruct Contentstack to post data to that URL whenever an event occurs. This external URL will serve as your backup center, automatically storing all changes made to your content.

Using this approach ensures data retention and provides a safeguard against accidental content deletion.

**Additional Resource:** Refer to our guide on [creating a webhook](/docs/headless-cms/create-a-webhook) to automate content backups triggered by specific events.
