---
title: "[Solution Guides Articles] - Automating Generation of Cross-Stack Content Types with Custom Fields"
description: Automating generation of cross-stack content types with custom fields using the CMA and a CLI-based tool.
url: https://www.contentstack.com/docs/headless-cms/automating-generation-of-cross-stack-content-types-with-custom-fields
product: Contentstack
doc_type: solution-guide
audience:
  - developers
  - solution-architects
version: unknown
last_updated: 2026-03-25
---

# [Solution Guides Articles] - Automating Generation of Cross-Stack Content Types with Custom Fields

This page explains an approach for automating cross-stack synchronization of content types that include custom fields (extensions/apps) by using the Content Management API (CMA) and a CLI-based tool. It is intended for developers who need to programmatically map extension/app UIDs between source and destination stacks and generate stack-specific content type files for import.

## Automating Generation of Cross-Stack Content Types with Custom Fields

To minimize any manual intervention, the solution proposed here leverages the CMA to fetch both the content type to be synchronized and lists of all installed extensions/apps across the source and destination stacks. By comparing the extension/app uid in the content type with the list of installed extensions/apps in the source stack, it’s possible to programmatically match the extension/app to instances in the destination stacks and update the uid accordingly.

To keep this process reasonably automated, The solution has conceived of it as a CLI-based tool that can be converted into a webhook-triggered application fairly easily. For POC purposes, though, the solution stuck with the CLI version. Code for the project is here:

[https://github.com/jonathanpiper-cs/ctcon](https://github.com/jonathanpiper-cs/ctcon)

Before diving into the code, it’s important to note that authentication in this example is handled through a user login, with credentials provided in an .env file.

The user being authenticated must have sufficient access to content types across any target stacks. The example also uses a local file (.authtoken) to store the authtoken returned by Contentstack upon successful authentication. This helps to avoid inadvertently invalidating any existing user sessions (e.g. logging the user out of an active session in the Contentstack app).

Note that the authentication process could be approached differently, e.g. by storing management tokens for all target stacks or by implementing OAuth. User authentication was chosen here for the sake of simplicity.

The script relies on a command line argument to supply the content type that will be fetched/modified. Information about source and target stacks is currently hardcoded into the script, but this could of course be moved to a separate file or storage mechanism, or the script could be redesigned to provide programmatic access to stacks.

With content type and stack information, the script moves through several steps:
- Authenticate with Contentstack, first by attempting to use the stored authtoken. If the authtoken isn’t valid or if the file can’t be found, the script uses email/password authentication.
- Get the content type specified.
- Get a list of all extensions and apps installed in the source stack. This is accomplished using a currently-undocumented API endpoint:  
[https://api.contentstack.io/v3/extensions?include_marketplace_extensions=true](https://api.contentstack.io/v3/extensions?include_marketplace_extensions=true)
- Iterate through the target stacks with these steps:Get a list of all extensions and apps in the target stack.
- For every field in the content type that contains an “extension_uid” property, indicating a custom field or other extension/app, replace the uid with the corresponding uid from the matching extension/app in the target stack.
- Write the modified content type into a file in a stack-specific directory.

After the script is run, the user will have a folder structure reflecting their target stacks, with each folder containing a copy of the content type modified to match each stack’s specific extension/app information. These content-type files can then be imported into the Contentstack UI in the appropriate stacks. The script could be further modified to create/update the content types in each stack programmatically.

## Common questions

**How does the script match extensions/apps between stacks?**  
By comparing the extension/app uid in the content type with the list of installed extensions/apps in the source stack, then matching to corresponding instances in destination stacks and updating the uid accordingly.

**What authentication method does the example use?**  
Authentication in this example is handled through a user login, with credentials provided in an .env file, and a local file (.authtoken) is used to store the authtoken returned by Contentstack upon successful authentication.

**What output does the script produce?**  
A folder structure reflecting the target stacks, with each folder containing a copy of the content type modified to match each stack’s specific extension/app information.

**Can this be run as something other than a CLI tool?**  
The solution has conceived of it as a CLI-based tool that can be converted into a webhook-triggered application fairly easily.