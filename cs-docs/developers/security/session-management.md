---
title: "[Security Management] - Session Management"
description: Monitor and manage all active sessions associated with your Contentstack account, including terminating other sessions.
url: https://www.contentstack.com/docs/administration/session-management
product: Contentstack
doc_type: security-guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Security Management] - Session Management

This page explains how to use Session Management in Contentstack to monitor and manage active sessions for your account, including how to terminate other sessions. It is intended for developers and administrators who need to secure accounts, especially when sessions may exist on shared or public devices.

## Session Management

Session Management in Contentstack allows you to monitor and manage all active sessions associated with your account. This protects your account by letting you end unused sessions, especially on shared or public devices.

To terminate all active sessions, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Click the profile icon in the top-right corner of the dashboard and select **Profile Settings**.![Session_Management_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f536a51404abc75/6971bc2c595a271967af6ed7/Session_Management_1.png)
- In the **Profile** section, click the **Security** tab in the left navigation panel.![Session_Management_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte7b875aa57113453/6971bc2c31839f1a9cf3500b/Session_Management_2.png)
- Under **Session Management**, if there are active sessions on other devices or browsers, you see the following message:![Session_Management_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0880dd124f7a3cec/6971bc2c875e4806f9c882e1/Session_Management_3.png)
- Click **Terminate Other Sessions** to immediately sign out from all other devices. Only your current session remains active.

**Note**: The **Terminate Other Sessions** button appears disabled when there are no additional active sessions.

## Common questions

### Does terminating other sessions sign me out of my current session?
No. Clicking **Terminate Other Sessions** signs out from all other devices, and only your current session remains active.

### Why is the **Terminate Other Sessions** button disabled?
The **Terminate Other Sessions** button appears disabled when there are no additional active sessions.

### Where do I find Session Management settings?
Go to **Profile Settings** from the profile icon, then open the **Security** tab under the **Profile** section and look for **Session Management**.