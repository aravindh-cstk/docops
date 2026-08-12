---
title: "Execution Count in Product Analytics Doesn’t Match the Execution Log"
description: "Execution Count in Product Analytics Doesn’t Match the Execution Log"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/03-execution-code-blocks-timeouts/09-execution-count-in-product-analytics-doesn-t-match-the-execution-log
doc_type: faq
_cms_section_uid: cs4366345a6043fd05
_cms_faq_uid: cs67488bcaec02fe27
---

# Execution Count in Product Analytics Doesn’t Match the Execution Log

The number of automation executions shown on the Product Analytics dashboard is noticeably lower than the count reflected elsewhere (for example, in a limit-reached notification), leading to confusion about actual usage.

**Root Cause**

The Product Analytics dashboard does not update in real time, it typically reflects execution data with a delay of around 24 hours, and the backend records execution timestamps in UTC while the dashboard displays only the date, not the time. Both factors mean the dashboard total can trail behind, or appear to fall on a different day than, the true count.

**Resolution**

1.  Do not rely on the Product Analytics dashboard alone to confirm current-month usage against your execution limit.
2.  Open Agent OS Execution Log, which reflect executions as they happen and are the source of truth for accurate, granular execution data.
3.  When comparing totals across a day boundary, account for the fact that the backend logs execution times in UTC, which can shift a batch of executions into a different calendar day than what the dashboard shows.
4.  If the discrepancy persists after allowing for the ~24-hour dashboard delay, contact Contentstack Support with the specific date range in question.

Execution Logs and the limit-reached notifications now agree, and any apparent discrepancy is explained by the dashboard’s reporting delay and UTC timestamping.
