---
title: "Publish with References’ - Cannot Be Disabled, and Can Silently Skip Already-Published Entries"
description: "Publish with References’ - Cannot Be Disabled, and Can Silently Skip Already-Published Entries"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/24-publish-with-references-cannot-be-disabled-and-can-silently-skip-already-published-entries
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs42c6dc00b37d23a5
---

# Publish with References’ - Cannot Be Disabled, and Can Silently Skip Already-Published Entries

This article covers two related but distinct issues with the platform’s ‘Publish with References’ behavior.

**Scenario A - Cannot Be Disabled**

A customer wants to suppress or disable the ‘Publish with References’ behavior so that publishing an entry does not trigger cascading publish operations on all referenced entries. They are also looking to identify publish-with-references events in webhook payloads or Automate action logs.

**Root Cause**

‘Publish with References’ is a platform-enforced behavior in the standard publishing workflow. There is no built-in setting or API parameter to disable or suppress it. Contentstack processes the referenced entry publishes as multiple individual publish events internally, rather than exposing a distinct flag or attribute. As a result, this option is not available as a distinguishable event in webhook payloads or Automate Hub action logs.

**Resolution**

As there is no native disable option, the following approaches can control the behavior:

1.  Publish entries individually using the CMA single-entry publish endpoint rather than the UI ‘Publish with References’ flow. The CMA publish endpoint does not automatically resolve and publish referenced entries unless explicitly instructed.
2.  In webhook-receiving logic, filter events by entry UID to distinguish which entries were explicitly published versus which were pulled in as references.
3.  Use Releases as the publishing mechanism - Releases give explicit control over which entries are included in a deployment without automatically pulling in unrequested references.
4.  If the goal is to prevent editors from accidentally publishing referenced entries, configure Publish Rules to require approval before production publishes, giving an approver visibility into what is being published.

After adopting one of the above approaches, confirm that publishing operations affect only the intended entries.

**Scenario B - Silently Skips a Previously Published Entry**

Using ‘Publish with References’ to publish a parent entry results in a referenced module being skipped rather than published. The module was previously published but has since been updated. The publish queue shows the module as ‘Skipped’.

**Root Cause**

The ‘Publish with References’ operation skips referenced entries that were already published under the same version and state. If the referenced module was previously published and the system considers the current version as already live (even if the module has been updated), the publish step is skipped. This occurs when the module was published with the same version number as the current draft version.

**Resolution**

1.  Open the skipped referenced entry (module) and make a minor save (even without content changes) to increment its version number.
2.  Re-publish the module directly from the entry editor.
3.  Then re-publish the parent entry using ‘Publish with References’ to include the now-updated module.
4.  Alternatively, use a Release to group the parent entry and all referenced modules, which provides more granular control over what is included in each publish action.

After saving and re-publishing the skipped module, confirm it is included in the next ‘Publish with References’ operation and appears as published in the target environment.
