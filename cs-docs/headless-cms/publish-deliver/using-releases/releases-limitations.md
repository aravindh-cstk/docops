---
title: "Releases Limitations"
description: "Explore efficient content release management in Contentstack. Learn about update, rollback, and deployment processes to optimize your workflow."
url: /headless-cms/releases-limitations
---

# Releases Limitations

## Releases Limitations

-   Max character length of the ‘Title’ field is **50**.
-   Max items that can be added in a Release is **5****00**.
-   Max items allowed to be added in a Release, in a single instance via API, is **25**.
-   The update release items option doesn't add the new references added to an updated version of a release item automatically. Manual addition is required.
-   The update release items option doesn't update the entries with newer in-progress versions.
-   A rollback release cannot be scheduled and must be deployed manually.
-   A release must be deployed before it can be rolled back. You cannot roll back a release that has not been deployed, including a scheduled release before its scheduled date.
-   After you delete a rollback release, you must redeploy the original release before creating another rollback release.
-   A rollback release cannot itself be rolled back.
