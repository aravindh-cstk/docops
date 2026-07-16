---
title: "[Author Content] - Back up Existing Content"
description: How to back up existing content using Contentstack webhooks.
url: https://www.contentstack.com/docs/headless-cms/back-up-existing-content
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-26
---

# [Author Content] - Back up Existing Content

This page explains how to use Contentstack Webhooks to back up existing content by sending real-time event data to an external URL. It is intended for content managers and developers who want an automated safeguard for content changes and deletions.

## Back up Existing Content

You can use Contentstack’s [Webhooks](../../developers/set-up-webhooks/about-webhooks.md) to create backups of your content. A webhook is a user-defined HTTP callback that sends real-time information to any third-party app or service.

Webhooks are triggered by [specific events](../../developers/set-up-webhooks/webhook-events.md), such as the creation of a new [entry](./about-entries.md) in a Content Type or the deletion of an existing entry. By specifying an external URL in your webhook settings, you can instruct Contentstack to post data to that URL whenever an event occurs. This external URL will serve as your backup center, automatically storing all changes made to your content.

Using this approach ensures data retention and provides a safeguard against accidental content deletion.

**Additional Resource:** Refer to our guide on [creating a webhook](../../developers/set-up-webhooks/create-a-webhook.md) to automate content backups triggered by specific events.

## Common questions

### What is a webhook in Contentstack?
A webhook is a user-defined HTTP callback that sends real-time information to any third-party app or service.

### What kinds of events can trigger a backup webhook?
Webhooks are triggered by specific events, such as the creation of a new entry in a Content Type or the deletion of an existing entry.

### Where does Contentstack send the backup data?
By specifying an external URL in your webhook settings, Contentstack posts data to that URL whenever an event occurs.

### Where can I learn how to create a webhook for backups?
Refer to the guide on [creating a webhook](../../developers/set-up-webhooks/create-a-webhook.md).