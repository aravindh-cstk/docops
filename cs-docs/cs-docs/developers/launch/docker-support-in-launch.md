---
title: "[Contentstack Launch] - Can I run a Docker container on Launch?"
description: Documentation explaining whether Contentstack Launch supports running Docker containers.
url: https://www.contentstack.com/docs/launch/docker-support-in-launch
product: Contentstack Launch
doc_type: faq
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Contentstack Launch] - Can I run a Docker container on Launch?

This page explains whether Contentstack Launch supports running Docker containers. It is intended for developers planning deployment on Launch and deciding whether Docker is required or supported for their hosting workflow.

## Can I Run a Docker Container on Launch?

Launch is a front-end hosting and deployment platform for websites built on the Contentstack CMS instantly, but it **cannot** run Docker containers.

Containerization can be helpful to ensure that your website works the same way on any machine. On your local machine, you can specifically define the dependencies required by your application by creating a Docker container.

You may not need to use Docker to deploy your application since Contentstack Launch supports many front-end frameworks without requiring any configuration. However, Docker can be used to replicate the same local environment across machines.

## Common questions

### Does Contentstack Launch support Docker-based deployments?

No. Launch **cannot** run Docker containers.

### When is Docker still useful if I deploy to Launch?

Docker can be used to replicate the same local environment across machines.

### Do I need Docker to deploy a site on Contentstack Launch?

You may not need to use Docker to deploy your application since Contentstack Launch supports many front-end frameworks without requiring any configuration.