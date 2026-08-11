---
title: "AWS Bedrock Prompt Connector Doesn’t Show a Model That Is Enabled in Your AWS Console"
description: "AWS Bedrock Prompt Connector Doesn’t Show a Model That Is Enabled in Your AWS Console"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/04-actions-publishing-endpoints/06-aws-bedrock-prompt-connector-doesn-t-show-a-model-that-is-enabled-in-your-aws-co
doc_type: faq
_cms_section_uid: csded4ce67563284bd
_cms_faq_uid: cs3647daaf8a5b4624
---

# AWS Bedrock Prompt Connector Doesn’t Show a Model That Is Enabled in Your AWS Console

A model (for example, an Anthropic Claude model in AWS Bedrock) is enabled in your AWS console, but it does not appear in the Foundation Model drop-down of the AWS Bedrock Prompt connector step in Agent OS.

**Root Cause**

The AWS Bedrock Prompt connector originally populated its model dropdown using the ListFoundationModels API. AWS has since moved some newer Anthropic models to the ListInferenceProfiles API instead, which means those models are invisible to versions of the connector that only call ListFoundationModels.

**Resolution**

1.  Confirm in your AWS console that the model is enabled and that you can see it under Bedrock’s inference profiles (not just foundation models).
2.  Delete the existing AWS Bedrock Prompt step in your automation and re-add it; this refreshes the step to the current connector version, which supports the ListInferenceProfiles API.
3.  If, after re-adding the step, you get an error that “on-demand throughput isn’t supported” for the model, this means the model requires a global inference profile rather than on-demand throughput, select or configure the appropriate inference profile for that model.
4.  Re-test the prompt step to confirm the model can now be fetched and used to generate output.

The model appears in the **Foundation Model** dropdown, and the AWS Bedrock Prompt step successfully generates output using it.
