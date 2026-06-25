---
title: [Contentstack Launch] - Load Testing
description: A comprehensive checklist to conduct load testing in Contentstack Launch.
url: https://www.contentstack.com/docs/launch/load-testing
product: Contentstack
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2024-11-06
filename: load-testing.md
---

# [Contentstack Launch] - Load Testing

This page explains [Contentstack Launch] - Load Testing for Contentstack. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Load Testing

Load testing is essential to assess your application's performance, scalability, and reliability under expected traffic conditions. By simulating high traffic, it helps identify potential bottlenecks and ensures readiness for real-world scenarios. This document provides a comprehensive checklist to help customers successfully conduct a load test on Contentstack Launch.

Review the testing checklist, then share it with the [support](mailto:support@contentstack.com) team to seek approval.

**Note**: The checklist covers key areas, including timing, traffic configuration, monitoring setup, and post-test analysis, offering a thorough assessment and insights for optimizing platform performance under load.

### Testing Checklist

1. **Start and End Time/Date**: Define the exact test window.
2. **Peak Traffic Duration**: Define the time span for peak load testing.
3. **Estimated Maximum Requests per Second**: Specify the expected peak traffic.
4. **Target Hostnames**: List the domains or subdomains that you want to test.
5. **Distribution of Traffic**: Specify whether traffic is localized or geographically distributed.
6. **Geographical Source**: List specific regions like “Mumbai,” “New York,” etc., where the test traffic will originate.
7. **Source IPs**: Provide the IP addresses or ranges for the traffic.
8. **Cloud Provider Regions**: Specify the cloud provider regions (e.g., AWS, Azure, GCP), if applicable.
9. **Content Types Tested**: Specify the ratio of requests for static assets vs. dynamic content to understand load distribution.

### Key Considerations

* **Define your Caching Strategy**: Ensure all your statically rendered content/assets have appropriate cache control headers.
* **Monitoring and Logging Setup**: Ensure the monitoring tools (e.g., New Relic, Datadog) and logging are active for real-time tracking.
  + Set up your [Log Target](./log-targets.md) to receive your application logs in real time.
  + Monitor the [Server Logs](./cloud-functions.md#server-logs) in the Deployments section.
  + Monitor the Analytics for Launch in the Product Analytics and Mission Control sections.

## Common questions
### What is covered in [Contentstack Launch] - Load Testing?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Contentstack Launch] - Load Testing?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
