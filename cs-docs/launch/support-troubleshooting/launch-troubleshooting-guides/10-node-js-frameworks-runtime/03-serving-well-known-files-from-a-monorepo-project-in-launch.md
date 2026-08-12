---
title: "Serving .well-known Files From a Monorepo Project in Launch"
description: "Serving .well-known Files From a Monorepo Project in Launch"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/10-node-js-frameworks-runtime/03-serving-well-known-files-from-a-monorepo-project-in-launch
doc_type: faq
_cms_section_uid: cs0cbe8f9b2482f217
_cms_faq_uid: cs5628f5d304feeecb
---

# Serving .well-known Files From a Monorepo Project in Launch

A project deployed from a monorepo needs to serve files from a .well-known directory (such as apple-app-site-association for universal linking). The files are placed at the monorepo root but are not accessible at the deployed domain.

**Root Cause**

Launch deploys content based on the build output of the specific site selected within the monorepo, not from the monorepo root. Files placed at the root of the repository are not included in the site’s build output and are therefore not served by Launch.

**Resolution**

1.  Place the .well-known directory and its files inside the public folder of the specific site being deployed (e.g., apps/my-site/public/.well-known/).
2.  The framework (e.g., Next.js) will automatically include files in the public directory in the build output and serve them at the root of the deployed domain.
3.  Confirm that the .well-known path is not excluded by any .gitignore or build ignore rules.
4.  Trigger a new deployment and verify that the .well-known files are accessible at https://your-domain.com/.well-known/apple-app-site-association or the relevant path.

The issue is resolved when the .well-known files are publicly accessible at the correct URL path on the deployed Launch domain.
