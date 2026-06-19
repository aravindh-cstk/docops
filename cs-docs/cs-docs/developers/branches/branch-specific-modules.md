---
title: "[Set Up Your Project] - Branch-specific Modules"
description: Branch-specific Modules
url: https://www.contentstack.com/docs/headless-cms/branch-specific-modules
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Branch-specific Modules

This page explains which modules in Contentstack are branch-specific, who is affected by branch-scoped changes, and when to expect changes to apply only within a particular branch (for example, when working in a development branch versus the main branch).

## Branch-specific Modules

These modules are specific to a branch. When you fork out a branch out of the main branch, you’ll get all the contents of the main branch within this child branch. But once you start making changes within these modules of the child branch, it will reflect only within that particular branch.

## Content Types

When working within specific branches, content types added or updated will be specific to that particular branch.

For example, if you create a new sample content type within the development branch, you will be able to retrieve or access this sample content type only within the development branch.

## Global Fields

Global fields added or updated will be specific to a particular branch.

For example, if you create a SEO global field within the development branch, you will be able to use or access this global field only within the development branch.

## Entries

You can create, update, delete and refer entries only within specific branches of your stack.

For example, if you create an entry within the blog content type of the development branch, you will be able to use or access this entry only within the development branch.

## Assets

You can add or update assets only within specific branches of your stack. The assets added within any other branch other than the main branch, will contain the branch name in the URL.

For example, the URL for the assets added in the development branch will be as follows: `https://images.contentstack.com/v3/assets/blt0000000/blt9c00000000/6748939030339888/AI.jpg?branch=development`

For all assets added to the main branch, the URL will be as follows: `https://images.contentstack.com/v3/assets/blt0000000/blt9c00000000/6748939030339888/AI.jpg`

## Workflows

The system allows the creation of branch-specific workflows, i.e., more than one workflow for the same content type across various branches. For instance, you can set up distinct workflows under the “Main” and “Dev” branches.

## Publish Queue

You will be able to view publish queues specific to a branch.

For example, if you are working within the development branch, you view the publishing details specific only to the development branch.

## Releases

You can create releases only within specific branches of your stack.

For example, if you create a release within the development branch, you will be able to access this release only within the development branch.

## Languages

Any language that you add or create within a branch will be available only in that specific branch.

For example, you are working within the development branch, and you add new languages such as German and Chinese to this branch. These languages will be available only within the development branch.

## Extensions

You can add experience extensions specific to a branch.

For example, you are working within the development branch, and you add new extensions ([Custom Fields](/docs/developers/create-custom-fields/about-custom-fields/), [Sidebar Extensions](/docs/developers/create-sidebar-extensions/about-sidebar-extensions/), and [Dashboard Extensions](/docs/developers/create-dashboard-extensions/about-dashboard-extensions/)) to this branch. These extensions will be available only within the development branch.

## Audit Logs

You will be able to view audit logs specific to a branch.

For example, if you are working within the development branch, you will receive audit logs specific only to the development branch.

## Global Search

Retrieves searched content types, entries, assets, etc. only from the branch you are currently working in.

For example, if you have a home content type within the development branch, you will be able to search for that content type only in the development branch.

## Labels

You can create different sets of labels for different branches of your stack. This means that labels you create within the development branch can be applied only to content types within that branch.

## Common questions

### Are changes made in a child branch reflected in the main branch?
No. Once you start making changes within these modules of the child branch, it will reflect only within that particular branch.

### Do assets have different URLs across branches?
Yes. The assets added within any other branch other than the main branch, will contain the branch name in the URL.

### Can I have different workflows for the same content type in different branches?
Yes. The system allows the creation of branch-specific workflows, i.e., more than one workflow for the same content type across various branches.

### Does Global Search search across all branches?
No. Global Search retrieves searched content types, entries, assets, etc. only from the branch you are currently working in.