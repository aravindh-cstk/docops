---
title: "AWS S3 Agent OS Connector Throws “Invalid Credentials” Even Though the Credentials Are Correct"
description: "AWS S3 Agent OS Connector Throws “Invalid Credentials” Even Though the Credentials Are Correct"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/04-actions-publishing-endpoints/05-aws-s3-agent-os-connector-throws-invalid-credentials-even-though-the-credentials-are-correct
doc_type: faq
_cms_section_uid: csded4ce67563284bd
_cms_faq_uid: csa58aed24cf1790bc
---

# AWS S3 Agent OS Connector Throws “Invalid Credentials” Even Though the Credentials Are Correct

The AWS S3 connector in Agent OS returns an “Invalid Credentials” error even though the same credentials work correctly in an unrestricted environment. This typically appears once an S3 bucket has strict security policies applied, such as an IP allowlist.

**Root Cause**

The Agent OS S3 connector uses the official AWS SDK, which surfaces a generic “Invalid Credentials” message for a range of IAM restrictions, not just bad keys, including missing permissions and IP-based restrictions. Because Contentstack’s infrastructure connects to S3 through a VPC endpoint, traffic often travels over the AWS internal network rather than the public internet. Whitelisting Contentstack’s public IP addresses does not cover this internal path, so a bucket policy that only allows specific public IPs still blocks the connection.

**Resolution**

1.  Confirm that the credentials themselves are valid and have the required S3 permissions (including any needed for DeleteObject if your workflow uses it).
2.  If your bucket policy uses an IP allowlist, do not rely solely on whitelisting Contentstack’s static public IP addresses, since traffic may route over AWS’s internal network via a VPC endpoint instead of the public internet.
3.  Request Contentstack’s VPC endpoint ID from Support and add it to your bucket or IAM policy so the internal network path is authorized.
4.  Retest the S3 connector after updating the policy to confirm the “Invalid Credentials” error no longer appears.

The S3 connector authenticates successfully and the connection remains stable, because the bucket policy now authorizes Contentstack’s VPC endpoint rather than only its public IP addresses.
