---
title: "[Contentstack Launch] - Vue on Launch"
description: Contentstack Launch support and limitations for hosting Vue applications.
url: https://www.contentstack.com/docs/developers/launch/vue-on-launch
product: Contentstack Launch
doc_type: guide
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Contentstack Launch] - Vue on Launch

This page explains how Contentstack Launch supports hosting Vue.js applications, including what types of Vue apps are detected and deployed automatically, and what limitations apply. It is intended for developers deploying Vue projects to Launch and should be used when importing or uploading a Vue app to Launch.

## Vue on Launch

[Vue.js](https://vuejs.org/) is a progressive JavaScript framework for building user interfaces. With its simplicity and flexibility, Vue allows you to create interactive and dynamic web applications with ease. Vue has an approachable design and comprehensive ecosystem that makes it a popular choice for projects of varying scales.

Contentstack Launch offers robust support for hosting applications built with Vue. Whether you are developing a [Single Page Application (SPA)](https://vuejs.org/guide/extras/ways-of-using-vue#single-page-application-spa) or a Static Site Generated (SSG) Vue app, Launch provides a seamless hosting experience.

Launch simplifies the deployment process by automatically detecting applications built using Vue on project import or upload.

**Additional Resource:** Please refer to the [Quick Start Guide with Vue](/docs/developers/launch/quick-start-vue/) documentation for a step-by-step walkthrough to deploy a Vue.js Starter on Launch.

## Limitations

Launch currently does not support [Server-Side Rendering (SSR)](https://vuejs.org/guide/extras/ways-of-using-vue#fullstack-ssr) in Vue-based applications.

## Common questions

**Q: Does Launch support Vue Single Page Applications (SPA)?**  
A: Yes, Launch supports hosting Vue applications, including Single Page Application (SPA) projects.

**Q: Does Launch support Static Site Generated (SSG) Vue apps?**  
A: Yes, Launch supports Static Site Generated (SSG) Vue applications.

**Q: Will Launch automatically detect my Vue app during deployment?**  
A: Yes, Launch simplifies deployment by automatically detecting applications built using Vue on project import or upload.

**Q: Does Launch support Vue Server-Side Rendering (SSR)?**  
A: No, Launch currently does not support Server-Side Rendering (SSR) in Vue-based applications.