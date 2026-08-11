---
title: "Agent OS Page Is Blank, Missing from the App Menu, or Not Showing Execution Log"
description: "Agent OS Page Is Blank, Missing from the App Menu, or Not Showing Execution Log"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/01-workspaces-access-administration/09-agent-os-page-is-blank-missing-from-the-app-menu-or-not-showing-execution-log
doc_type: faq
_cms_section_uid: cs88fdd58dfb5bf7c8
_cms_faq_uid: cs685f22e6aa884a3a
---

# Agent OS Page Is Blank, Missing from the App Menu, or Not Showing Execution Log

The Agent OS section is unreliable in the browser: the Automations page fails to load, Agent OS does not appear in the app menu at all, or the execution log list appears empty even though automations are running.

**Root Cause**

These symptoms most often trace back to one of two causes: browser-side caching, cookies, or extension interference in your normal browser profile; or, for the app-menu case specifically, an account role below Org Admin, Agent OS typically requires Organization-level Admin access, and a Member-level role may not see it at all.

**Resolution**

1.  Open Agent OS in an incognito/private browser window to rule out cache, cookies, or extension interference from your normal profile.
2.  If Agent OS loads correctly in incognito but not in your normal profile, clear your browser cache and cookies, or try a different browser.
3.  If the page still does not load, update your browser to the latest version and perform a hard refresh.
4.  If Agent OS is missing from the app menu specifically (not just failing to load), confirm your role at the organization level. Member-level access may not be sufficient, and Organization Admin (or equivalent) access is generally required.
5.  If the execution log appears empty, clear your browser cache first, since this alone has resolved missing-log cases previously.
6.  If clearing cache, using incognito, and trying different browsers do not resolve missing execution logs, and you see a 403 Forbidden error in your browser’s network tab, this points to a different, unresolved issue rather than a simple caching problem, contact Contentstack Support directly with a HAR file rather than continuing to try browser-level fixes.

Agent OS loads normally in your regular browser profile, appears in the app menu for users with the required Org Admin access, and execution logs display as expected. If the 403/network-level pattern applies instead, escalate to Support rather than expecting cache-clearing to resolve it.
