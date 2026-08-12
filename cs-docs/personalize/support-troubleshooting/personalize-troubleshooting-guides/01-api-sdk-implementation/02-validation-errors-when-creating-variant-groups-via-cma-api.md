---
title: "Validation Errors When Creating Variant Groups via CMA API"
description: "Validation Errors When Creating Variant Groups via CMA API"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/01-api-sdk-implementation/02-validation-errors-when-creating-variant-groups-via-cma-api
doc_type: faq
_cms_section_uid: cs770b42cb56e18e4b
_cms_faq_uid: cs749efe1af0afd74c
---

# Validation Errors When Creating Variant Groups via CMA API

Creating variant groups via CMA APIs in Personalize may result in specific validation errors, such as "name must be a string," when attempting to use unsupported POST requests. This prevents the automated creation of variants through the current API implementation.

**Root Cause**

The issue is caused by a system limitation where the variants endpoint within the CMA API currently only supports read operations (GET) and does not permit the creation of variants via the POST method.

**Resolution**

1.  Check the API request method to ensure it is not a POST request, as creating variants via API is not currently supported.
2.  Identify validation errors in the response, such as "name must be shorter than or equal to 200 characters", "name must be a string", or "name should not be empty", as indicators of an unsupported write attempt.
3.  Use the GET method exclusively to fetch existing variants from the endpoint.
4.  Manually create variants within the user interface until API write support is available.

After discontinuing the unsupported POST request and using the API only for fetching variants, check the API responses. If the validation errors no longer occur during read operations, the issue is resolved.
