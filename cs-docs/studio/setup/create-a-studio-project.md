---
title: "Create a Studio Project"
description: "Learn how to create a Contentstack Studio project, connect it to your stack, and configure the Studio SDK with the provisioned content type UID."
url: /studio/create-a-studio-project
---

# Create a Studio Project

## Create a Studio Project

A Studio project is where authors compose pages. Creating one links your Contentstack stack to Studio and provisions the content type that stores your composition records, and you don't need to model it yourself.

## Create

1.  Open Studio in your browser (your Studio host, e.g. app.contentstack.com/#!/studio).
2.  From the **Studio Projects** landing page, click **\+ New Project**.

![Studio Projects landing](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcf6b941cbb530503/76c082d25bc6df031250da18/projects-list.png)

1.  Give the project a name (you can rename later).
2.  **Connect it to your Contentstack stack:** pick the stack you set up the SDKs against.

Studio provisions a dedicated **Compositions** content type inside the stack. You don't need to model it yourself.

### Multiple Studio projects in one stack

> **When you need this:** only if the stack already has a Compositions content type from an earlier Studio project. For a fresh stack, skip ahead to [What you'll see after creating](#what-youll-see-after-creating).

If the stack already has a Compositions content type (from an earlier Studio project), Studio surfaces an **Advanced Settings** section in the create dialog with two extra fields:

-   **Content type name:** display name, e.g. Marketing Compositions
-   **Content type UID:** machine UID, e.g. marketing\_compositions

You set both to something unique and Studio creates the new content type alongside the existing one. Each project keeps its own composition records under its own content type.

When you wire this project to your app, point studioSdk.init at that exact UID:

```
studioSdk.init({
  stackSdk,
  contentTypeUid: "marketing_compositions",   // matches Advanced Settings UID
});
```

You can have as many Studio projects as you want in the same stack; each one needs its own dedicated content type UID, and the matching contentTypeUid in the SDK init on the route that previews it.

## What You'll See After Creating

The project lands on its **Compositions** list, empty for a new project, with two tabs (Templates and Sections) and a **\+ New Template** button at the top right.

The project also gains two settings pages:

| Settings tab | Use it for |
| --- | --- |
| **General** | Project name, description, project ID, Stack Connection status |
| **Configuration** | Environment, Language, Canvas URL, Enable Freeform |

![Project Settings → General](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcca84cd9f8fcf310/5ba9a26d2e50619f95f8e2da/project-settings.png)

On the General tab you'll see:

-   **Project Details:** name, description, project ID (copyable)
-   **Stack Connection:** your stack name with a "Connected" badge. The "Compositions" content type Studio created shows as Connected too.

If either badge isn't green, see [Troubleshoot](/docs/studio/troubleshoot-common-studio-issues), usually it's a stack credential mismatch.

## Configure Your SDK with the Content Type UID

When you installed the Studio SDK earlier, you may have left contentTypeUid blank in studioSdk.init(...). Now you have a project, so add it:

```
studioSdk.init({
  stackSdk:       stack,
  contentTypeUid: "compositions",   // the CT Studio created in your stack
});
```

The UID is "compositions" by default. If you picked a custom name in **Advanced Settings** (e.g. you're running a second project in a stack that already has a Compositions CT), use that UID instead, and check the **Stack Connection** section on the General tab to confirm.

**Why the UID matters at the SDK level.** The Studio SDK reads composition records from this content type. If contentTypeUid is wrong, useCompositionData returns nothing, and every composition fetch comes back empty even though Studio shows compositions exist. A common mistake when running multiple Studio projects on the same canvas app.

## Next

[Configure environment + language + canvas URL](/docs/studio/configure-environment-language-and-canvas-url)
