---
title: "Automating Generation of Cross-Stack Content Types with Custom Fields"
description: "Streamline Contentstack content synchronization with a CLI tool to automate extensions and app UID updates seamlessly across stacks."
url: /headless-cms/automating-generation-of-cross-stack-content-types-with-custom-fields
---

# Automating Generation of Cross-Stack Content Types with Custom Fields

## Automating Generation of Cross-Stack Content Types with Custom Fields

To minimize any manual intervention, the solution proposed here leverages the CMA to fetch both the content type to be synchronized and lists of all installed extensions/apps across the source and destination stacks. By comparing the extension/app uid in the content type with the list of installed extensions/apps in the source stack, it’s possible to programmatically match the extension/app to instances in the destination stacks and update the uid accordingly.

To keep this process reasonably automated, The solution has conceived of it as a CLI-based tool that can be converted into a webhook-triggered application fairly easily. For POC purposes, though, the solution stuck with the CLI version. Code for the project is here:

[https://github.com/jonathanpiper-cs/ctcon](https://github.com/jonathanpiper-cs/ctcon)

Before diving into the code, it’s important to note that authentication in this example is handled through a user login, with credentials provided in an .env file.

![1st_image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30cc47a599df3bde/660e8be2dd5b9e52d7a8a581/1st_image.png)

The user being authenticated must have sufficient access to content types across any target stacks. The example also uses a local file (.authtoken) to store the authtoken returned by Contentstack upon successful authentication. This helps to avoid inadvertently invalidating any existing user sessions (e.g. logging the user out of an active session in the Contentstack app).

![2nd_Image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt25b2dd60ae0e49ca/660e8be2e838c8adbf60ef28/2nd_Image.png)

**Note:** Note that the authentication process could be approached differently, e.g. by storing management tokens for all target stacks or by implementing OAuth. User authentication was chosen here for the sake of simplicity.

The script relies on a command line argument to supply the content type that will be fetched/modified. Information about source and target stacks is currently hardcoded into the script, but this could of course be moved to a separate file or storage mechanism, or the script could be redesigned to provide programmatic access to stacks.

![3rd_image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77669ee90335cf74/660e8be2fa138c204e87f8a4/3rd_image.png)

With content type and stack information, the script moves through several steps:

1.  Authenticate with Contentstack, first by attempting to use the stored authtoken. If the authtoken isn’t valid or if the file can’t be found, the script uses email/password authentication.
2.  Get the content type specified.
3.  Get a list of all extensions and apps installed in the source stack. This is accomplished using a currently-undocumented API endpoint:  
    [https://api.contentstack.io/v3/extensions?include\_marketplace\_extensions=true](https://api.contentstack.io/v3/extensions?include_marketplace_extensions=true)
4.  Iterate through the target stacks with these steps:
    1.  Get a list of all extensions and apps in the target stack.
    2.  For every field in the content type that contains an “extension\_uid” property, indicating a custom field or other extension/app, replace the uid with the corresponding uid from the matching extension/app in the target stack.
    3.  Write the modified content type into a file in a stack-specific directory.

![4th_Image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt81bd8b1f56efad15/660e8be20713759c22c43c98/4th_Image.png)

After the script is run, the user will have a folder structure reflecting their target stacks, with each folder containing a copy of the content type modified to match each stack’s specific extension/app information. These content-type files can then be imported into the Contentstack UI in the appropriate stacks. The script could be further modified to create/update the content types in each stack programmatically.
