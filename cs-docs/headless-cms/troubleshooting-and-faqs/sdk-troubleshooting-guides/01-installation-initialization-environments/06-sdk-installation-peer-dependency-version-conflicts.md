---
title: "SDK Installation Peer Dependency Version Conflicts"
description: "SDK Installation Peer Dependency Version Conflicts"
url: /headless-cms/troubleshooting-and-faqs/sdk-troubleshooting-guides/01-installation-initialization-environments/06-sdk-installation-peer-dependency-version-conflicts
doc_type: faq
_cms_section_uid: csd49f7fff9eb0385d
_cms_faq_uid: cs4990083cde3ef7f5
---

# SDK Installation Peer Dependency Version Conflicts

Installing the SDK results in a "Peer Dependency Conflict," preventing installation in projects using specific versions of React or Node.

**Root Cause** Version mismatches between the SDK’s requirements and the existing project dependencies (e.g., React or Node.js versions) prevent the package manager from resolving a stable dependency tree.

**Resolution**

Install failures often come from incorrect package names or incompatible dependency trees.

1.  Install correct SDK packages for the use case:
    -   @contentstack/delivery-sdk
    -   @contentstack/management
2.  Align Node and package manager versions with project/toolchain constraints.
3.  Resolve lockfile conflicts explicitly; use bypass flags only as a temporary debugging step.

npm i @contentstack/delivery-sdk npm i @contentstack/management

Packages install successfully and import without unresolved dependency conflicts. Escalate with lockfile excerpt, package manager version, and full install error output.
