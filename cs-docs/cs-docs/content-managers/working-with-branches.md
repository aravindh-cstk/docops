---
title: "[Author Content] - Working with Branches"
description: Documentation for content managers on working with branches in Contentstack.
url: https://www.contentstack.com/docs/content-managers/working-with-branches
product: Contentstack
doc_type: article
audience:
  - content-managers
version: classic
last_updated: 2026-03-26
---

# [Author Content] - Working with Branches

This page explains how Contentstack branches work for creating multiple copies of stack content. It is intended for content managers who need to understand when and how to create branches and how source branches affect inherited data.

## Working with Branches

Similar to GitHub, Contentstack provides "Branches" to create multiple copies of your stack content. Every [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack/classic/) has a **main branch** by default. To create a new branch, you can fork a branch off of the main branch.

When you create a branch for the first time, the main branch becomes your source branch. For all subsequent branches you create, you need to specify a source branch from which it will inherit data.

## Common questions

**How is the source branch determined when creating a branch for the first time?**  
When you create a branch for the first time, the main branch becomes your source branch.

**Do I always need to specify a source branch when creating new branches?**  
For all subsequent branches you create, you need to specify a source branch from which it will inherit data.

**What is the default branch in every stack?**  
Every stack has a **main branch** by default.