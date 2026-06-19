---
title: "[Automations guides and connectors] - View List of Connected Apps in Automations"
description: View and manage connected app authentications in Automations via Agent OS Settings, including edit, reauthorize, and delete actions.
url: https://www.contentstack.com/docs/agent-os/view-list-of-connected-apps-in-automations
product: Agent OS
doc_type: guide
audience:
  - developers
  - administrators
version: v1
last_updated: 2026-03-25
---

# [Automations guides and connectors] - View List of Connected Apps in Automations

This page explains how to view and manage the list of connected apps used by Automations in Agent OS Settings, including checking Active/Inactive status and performing actions like editing, reauthorizing, or deleting connections.

## View List of Connected Apps in Automations

The Connected Apps option in the **Agent OS** **Settings** displays the list of apps you have connected with in Automations.

It also displays the **Active/Inactive** status that denotes if the automation using this authentication is active or inactive.

Click any of the connected apps to view its connections. Here, you can **Edit the connection **(click the pencil button), **Reauthorize **an app (the “Reauthorize” button), and even **Delete **a connection (the “Delete” button).

**Note**: For apps such as Contentstack and Slack, you can view the **Edit **connection name icon and **Reauthorize** icon. For all the other apps, you can view the **Edit** icon to edit the connection details. **Delete** icon will be visible only if the connection is not being used in any automation (active or inactive).

Let’s look at them in detail:
- **Edit Connection**: The ‘edit’ icon allows you to edit the connection name. Edit the connection name and click the **Update **button.
- **Reauthorize:** The **Reauthorize **button allows you to change the authorizations/permissions assigned to the application. For Slack, it will be displayed as follows:

For other authentications, where you enter credentials (access key), you will only view the edit icon, and you will need to re-enter the credentials.
- For some apps, you must select the organization as shown below:
- **Delete Connection**: You can delete your connection by clicking the **Delete** button. Confirm your action by clicking **Delete** again in the **Delete Connection** modal.

## Common questions

**Q: Where do I find the list of connected apps for Automations?**  
A: In **Agent OS** **Settings**, under the **Connected Apps** option.

**Q: What does the Active/Inactive status indicate?**  
A: It denotes if the automation using this authentication is active or inactive.

**Q: Why don’t I see the Delete icon for a connection?**  
A: The **Delete** icon will be visible only if the connection is not being used in any automation (active or inactive).

**Q: When should I use Reauthorize?**  
A: Use the **Reauthorize** button to change the authorizations/permissions assigned to the application.