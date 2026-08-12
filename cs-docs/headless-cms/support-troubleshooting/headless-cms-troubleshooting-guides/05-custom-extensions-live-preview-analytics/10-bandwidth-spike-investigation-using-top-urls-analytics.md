---
title: "Bandwidth Spike Investigation - Using Top URLs Analytics"
description: "Bandwidth Spike Investigation - Using Top URLs Analytics"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/10-bandwidth-spike-investigation-using-top-urls-analytics
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs96df33c97ee1d17c
---

# Bandwidth Spike Investigation - Using Top URLs Analytics

An unexpected increase in bandwidth usage is observed without a corresponding increase in visitor numbers. The cause is unclear and the customer needs to identify which assets or endpoints are driving the usage.

**Root Cause**

Bandwidth spikes without visitor growth are typically caused by a small number of large assets being requested at high frequency, or by external traffic (bots, scrapers, or unauthorized embedding) hitting asset URLs. The Contentstack Product Analytics dashboard provides tools to identify the source.

**Resolution**

1.  Navigate to Product Analytics in the Contentstack dashboard and open the Top URLs section.
2.  Sort by bandwidth to identify which asset or API URLs are consuming the most bandwidth. A small number of URLs driving disproportionate bandwidth indicates the root cause.
3.  Review the top asset URLs for large file sizes (for example, unoptimized MP4 videos or high-resolution images). Apply image optimization parameters (quality, resize, auto=webp) to reduce per-request bandwidth.
4.  If the top URLs correspond to assets not embedded in your own site, check for unauthorized external embedding and enable Secure Public URLs to prevent third-party sites from accessing assets.
5.  For video assets, consider serving MP4 files from a dedicated video CDN or streaming service rather than from Contentstack, to avoid bandwidth costs for progressive download.

After identifying high-bandwidth URLs and applying optimizations or access restrictions, monitor the bandwidth trend over the following 24–48 hours to confirm the spike has been addressed.
