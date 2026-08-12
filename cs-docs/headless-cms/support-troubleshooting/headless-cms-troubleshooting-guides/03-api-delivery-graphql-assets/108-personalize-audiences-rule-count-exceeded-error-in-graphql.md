---
title: "personalize.AUDIENCES.RULE_COUNT_EXCEEDED Error in GraphQL"
description: "personalize.AUDIENCES.RULE_COUNT_EXCEEDED Error in GraphQL"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/108-personalize-audiences-rule-count-exceeded-error-in-graphql
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csa3372ef2a26db4ad
---

# personalize.AUDIENCES.RULE_COUNT_EXCEEDED Error in GraphQL

A GraphQL request returns the error personalize.AUDIENCES.RULE\_COUNT\_EXCEEDED. The error prevents audience-based personalization rules from being applied and causes GraphQL queries that use personalization to fail.

**Root Cause**

This error occurs when the number of rules configured within a Personalize audience exceeds the organization’s personalizeRulesPerAudience limit. The default limit is 50 rules per audience. When the number of configured rules reaches or exceeds this threshold, new rules cannot be added and existing personalization queries that attempt to evaluate audiences with excessive rules return this error.

**Resolution**

1.  Review the Personalize project configuration and identify audiences that have a large number of rules configured.
2.  Where possible, consolidate or simplify audience rules to stay within the current limit.
3.  If consolidation is not feasible and the use case genuinely requires more than 50 rules per audience, contact Contentstack Support and provide: the Personalize project ID and the stack API key. Request an increase to the personalizeRulesPerAudience limit. The maximum supported limit is 100 rules per audience.
4.  After the limit is increased by Support, verify the personalization rules are applied correctly by re-running the affected GraphQL query.

After the limit increase is applied, re-run the GraphQL query that was returning the error. If the query executes successfully and returns personalized content, the audience rule limit has been resolved.
