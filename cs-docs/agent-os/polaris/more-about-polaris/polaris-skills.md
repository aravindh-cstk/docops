---
title: "Get Started with Polaris Skills | Contentstack"
description: "Skills teach Polaris how your team wants work done. Write a set of instructions once, and Polaris applies it whenever it is relevant. Create skills, share them, and control who can use them."
url: /agent-os/polaris-skills
uid: blt8475768866cb895c
---

# Get Started with Polaris Skills | Contentstack

## Get Started with Polaris Skills

A skill is a named set of instructions you write once, and Polaris applies whenever it is relevant, such as your naming conventions, your tone, or the checks that always have to run. You can keep a skill to yourself, share it with a few people, or give it to your whole organization.

Polaris already knows how to use Contentstack. A skill does not teach it that. It tells Polaris _how you want the work done_. Skills shape how Polaris works, not what it is allowed to do. A skill can't give anyone access to content they don't already have, and it can't skip a confirmation. Polaris still shows you a preview before it changes anything.

## What You Will Learn

-   What a skill is made of.
-   How to create a skill, from the Skills page or by asking Polaris.
-   How Polaris runs a skill, deliberately or automatically.
-   How to share a skill and control who can use or edit it.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to Agent OS and Polaris for your organization
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions to make a skill _required_. Anyone with Polaris access can create and share skills.

## What a Skill Is Made Of

A skill has four parts:

-   **Skill name:** What people see in the Skills list.
-   **Invocation command:** What you type after **/** in the composer to run the skill on purpose. It uses lowercase letters, digits, and hyphens, and is unique across your organization.
-   **Description:** The summary shown on the skill card. It also does double duty: Polaris reads the description to decide whether the skill is relevant when no one invoked it by name, so it is worth writing carefully.
-   **System instructions:** The skill itself, the rules Polaris follows. Written in Markdown, with a **Raw** and **Preview** toggle.

**Tip:** The description does real work. A specific description, such as "Reviews an entry's title, meta description, and slug against our SEO rules before publishing," lets Polaris apply the skill on its own. A vague one leaves the skill unused until someone invokes it by name.

![The Polaris Skills page showing the All, Private, and Shared tabs, search, and the Create button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfdddef9c6e926c70/95a5fdd283cb977a4586ab4a/polaris-skills-page.png)

## Create a Skill

You can create a skill in two ways, and both produce the same thing.

### From the Skills Page

1.  Open Polaris from the sparkle icon in the top navigation bar, click the **menu** icon to open **Your Chats**, and select **Skills**.
2.  On the **Skills** page, click **Create**.
3.  Fill in the **Skill name**, **Description**, and **System instructions**. The **Invocation command** is suggested from the name, and you can change it while you own the skill.
4.  Click **Create Skill**. The skill is private to you and enabled straight away.
5.  To let other people use it, share it. The **Share** button stays disabled until the skill is saved, because a skill has to exist before it can be shared.

![The Create Skill form showing Skill name, Invocation command, Description, and System instructions with the Raw and Preview toggle](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am461c32823bc130a2/6c5093eb448a2e47ff74e62b/polaris-skills-create-skill-form.png)

### By Asking Polaris

You can also describe the skill in a Polaris conversation, for example, "Make me a skill that checks entries against our SEO rules before publishing." Polaris drafts the skill and shows it to you as a card. Nothing is saved until you confirm it, and you can ask for changes first.

**Note:** Polaris checks the existing skills before it creates a new one. If something similar already exists, it asks whether to update that skill instead of adding a near-duplicate.

## How Polaris Uses a Skill

A skill becomes active in one of two ways. Either way, the skill's instructions shape that turn, while the tools, previews, and confirmations stay the same.

### Run a Skill Deliberately

Type **/** in Polaris and pick the skill from the menu, or type its command directly. The skill applies to that message only; it does not stay on for the rest of the conversation. You can invoke more than one skill in a single message.

### Let Polaris Choose

Polaris can see the name and description of every skill available to you. When your request matches a skill's description, Polaris loads that skill's instructions and follows them. This is why the description matters as much as the instructions.

**Note:** More than one skill can apply in the same turn. Contentstack's own rules for the page you are on are applied last and win on any conflict, so your skills shape tone, naming, and house style within those rules, not around them.

## Find and Manage Skills

The **Skills** page lists everything you can reach, under three tabs:

-   **All:** Everything available to you.
-   **Private:** Skills you own.
-   **Shared:** Skills other people shared with you, plus your organization's skills.

Each card shows what the skill does and whether it is on for you.

### Turn a Skill Off for Yourself

The switch on a card is yours alone. It hides the skill from your Polaris without affecting anyone else. Use it when a teammate's skill is not relevant to your work. Required skills have no switch.

### Disable Versus Delete

-   **Disabling** takes a skill out of use for everybody while keeping it editable. Use it to park something that is not ready.
-   **Deleting** archives the skill. It disappears from the lists and releases its invocation command for reuse, and an owner or organization admin can restore it.

### Leave a Skill

If someone shares a skill with you and you do not want it, you can remove yourself from it. This option does not exist for organization-wide skills; switch those off for yourself instead.

## Share a Skill

General access has two settings, chosen in the share sheet:

-   **Restricted:** Only you and the people you name. Every new skill starts here.
-   **Anyone in the organization:** Every member can use it without being named. You then choose what everyone gets, either **Can use** or **Can edit**. Choose **Can edit** carefully, because every member can then change the skill's instructions.

To share a skill, perform the following steps:

1.  Open the skill and choose **Share**.
2.  Type an email address and press **Enter**, or choose **Invite**.
3.  The row defaults to **Can use**. Use the dropdown on the row to switch it to **Can edit**, or to **Remove** the person.
4.  Set **General access** if the skill should go to the whole organization.
5.  Choose **Done**.

The address must belong to a member of the same organization who has access to Polaris. Anyone who is not is named in the error, and the whole request is rejected rather than half-applied. Only the person's identity is stored, never the address you typed, so the list follows them if their name or email later changes.

**Note:** Sharing sends no notification in this release. Tell the people you share a skill with.

## Who Can Do What

Editing covers the skill's content. Managing covers its existence and its rules: the invocation command, who can see it, whether it is required, the share list, and deletion.

| Action | Owner | Org admin (org-wide skills) | Can edit | Can use |
| --- | --- | --- | --- | --- |
| Run it, from **/** or automatically | Yes | Yes | Yes | Yes |
| Switch it off for yourself | Yes | Yes | Yes | Yes |
| Edit name, description, instructions | Yes | Yes | Yes | No |
| Change the invocation command | Yes | Yes | No | No |
| Enable or disable it | Yes | Yes | No | No |
| Change general access | Yes | Yes | No | No |
| Add or remove people | Yes | Yes | No | No |
| Make it required | No | Yes | No | No |
| Delete and restore | Yes | Yes | No | No |

**Note:** "Org admin" means an owner or admin of the Contentstack organization, and that reach applies only to organization-wide skills. An admin has no special claim over someone's restricted skill.

## Required Skills

An organization-wide skill can be made **required**, which means nobody can switch it off for themselves. It is how a house style or a compliance rule reaches everyone's Polaris rather than waiting for people to opt in.

-   Only an organization **admin or owner** can set it.
-   It applies to **organization-wide skills only**. A restricted skill can always be switched off.
-   You can have at most **10** required skills per organization.
-   Making a skill required clears existing opt-outs, so it comes back on for people who had switched it off.
-   Moving a required skill back to **Restricted** makes it optional again.

## Limits

Keep these limits in mind when you create and share skills:

-   **Skill name:** up to 120 characters.
-   **Description:** up to 1,024 characters.
-   **System instructions:** up to 100,000 characters.
-   **Invocation command:** up to 64 characters; lowercase letters, digits, and hyphens; unique per organization.
-   **Sharing:** up to 200 people per share request.
-   **Required skills:** up to 10 per organization.

## Troubleshooting

-   **The skill did not apply.** Check that it is enabled, that it is on for you, and, if you relied on Polaris choosing it, that the description actually describes the situation. Invoking it with **/** removes the guesswork.
-   **"Invocation command is already in use."** Commands are unique per organization across live skills. Another skill holds it, possibly one you cannot see. Choose a different command.
-   **"Not a member with Polaris access."** The address is not in this organization, or that person cannot reach Polaris. The error names who was rejected, and nothing was shared.
-   **"The skill changed since you read it."** Someone saved the skill while your form was open. Reload and reapply your change; their change is intact.

## Additional Resources

-   To learn more about Polaris, refer to the [Get Started with Polaris](/docs/agent-os/get-started-with-polaris) documentation.
-   To build an agent, refer to the [Get Started with Agents](/docs/agent-os/get-started-with-agents) documentation.
