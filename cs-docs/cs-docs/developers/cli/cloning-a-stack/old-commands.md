---
title: "[Contentstack Command-line Interface (CLI)] - Cloning a Stack | Old Commands"
description: Clone a Contentstack stack (with data) or export stack data into a new or existing empty stack using the stack-clone CLI command (old commands).
url: https://www.contentstack.com/docs/developers/cli/cloning-a-stack/old-commands
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: old-commands
last_updated: 2026-03-26
---

# [Contentstack Command-line Interface (CLI)] - Cloning a Stack | Old Commands

This page explains how to clone a Contentstack stack using the Contentstack Command-line Interface (CLI) old commands. It is intended for developers who need to copy a stack (with data) or export stack data into a new or existing empty stack, and should be used when performing stack cloning operations via the `stack-clone` CLI command.

## Cloning a Stack | Old Commands

Contentstack allows you to create a copy of a stack (along with the data) or export all data of a stack into a new or existing empty stack by using the ‘stack-clone’ CLI command.

**Note**: Before executing this command, ensure you have the required permissions for creating or accessing the destination stack. Refer to the [Stack Roles](/docs/developers/invite-users-and-assign-roles/types-of-roles) documentation to check permissions.

You can clone a stack by performing the following two steps:
- [Log in to the CLI session](#log-in-to-the-cli-session)
- [Use the ‘stack-clone’ command](#use-the-stack-clone-command)

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- [Node.js version 16 or above](https://nodejs.org/en/download/)
- CLI installed on your machine: `**npm**** install -g @contentstack/cli**`

**Note**: By default, the CLI uses the **North American** region. To set the **European** or **Azure North America** region, refer to the [Set Region](/docs/developers/cli/configure-the-cli#set-region) command for more details.

## Log in to the CLI Session

You will need an **authtoken** to perform the clone operations. To generate the authtoken, open your terminal (command prompt), and run the following command to log in to your Contentstack account:

```
csdx auth:login
```

It will ask you to provide the email address and password of your Contentstack account. After logging in successfully, an authtoken will be generated and saved to the CLI session until you [log out from this session](/docs/developers/cli/authenticate-with-the-cli#logout).

**Additional Resource**: To learn more about the login command, refer to the [Login command section](/docs/developers/cli/authenticate-with-the-cli#login).

## Use the ‘stack-clone’ command

Now that you are logged into Contentstack, let’s proceed to export content from the source stack and import it into the destination stack instantly by running the following command in your terminal:

```
csdx cm:stack-clone
```

This will prompt you to provide the following details:

**Organization name**: You’ll get a list of organizations you have access to. Select the required organization from the list where your source stack is located.
- **Source stack**: From the listed stacks, you have access to, select the source stack which you want to clone. After selecting the source stack, it will start the process of exporting the content. Then, you need to choose a destination stack, as explained below.
- **Stack preference**: Next, you'll be asked to select your preference to create a new stack: If you select **Yes**,  you’ll receive a list of organizations you have access to. Then, select an organization where you want to create the new stack.
By default, the name of the new stack will follow this format: “**Copy of {source_stack_name}**”.

To use the customized name for the new stack, type the new stack’s name in this prompt.
- If you select **No**, you need to select the organization where the destination stack exists, and then select that particular stack to which you have required permissions for importing content.**Tip**: To ensure the above operations are error-free, we recommend that you select the option of creating a new destination stack. This is because the new stack will be empty and you can easily import content to it. If you choose to import content to an existing stack, you first need to ensure that the stack is empty and then proceed with the import operation.
- **Clone type**: This option lets you decide the type of data to import into the destination stack:**Structure**: This option lets you import only the schema, i.e., all modules except the entries and assets.
- **Structure and Content**: This option lets you import all modules to your stack, including entries and assets.

Finally, the content of the source stack will be imported into the destination stack, thus completing the cloning process.

## Points to Remember
- To import the exported content into an existing destination stack, make sure you have permission to create or update the content of the destination stack.
- In case you want to create a new stack for storing the cloned content, make sure you have “[owner](/docs/owners-and-admins/organization-roles#organization-owner)” or “[admin](/docs/owners-and-admins/organization-roles#organization-admin)” rights in that organization.
- While importing workflows from one stack to another, admins and workflow stage users are not included. Therefore, admins and stage users of your workflows will not be migrated to the new stack.

## Common questions

**Q: What command do I run to clone a stack using the CLI old commands?**  
A: Run `csdx cm:stack-clone`.

**Q: Do I need to log in before cloning a stack?**  
A: Yes, you will need an **authtoken** and should run `csdx auth:login` before performing the clone operations.

**Q: Can I clone into an existing stack?**  
A: Yes, but you need to ensure that the destination stack is empty and that you have required permissions for importing content.

**Q: What are the available clone types?**  
A: **Structure** and **Structure and Content**.