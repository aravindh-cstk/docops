---
title: "[Contentstack Launch] - Blocking AI Crawlers"
description: Blocking AI crawlers in Contentstack Launch using robots.txt and Launch Edge Functions.
url: https://www.contentstack.com/docs/launch/blocking-ai-crawlers
product: Contentstack Launch
doc_type: guide
audience:
  - developers
  - site-reliability
  - security
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Blocking AI Crawlers

This page explains how to manage and block AI crawler access for sites deployed on Contentstack Launch. It is intended for developers and teams responsible for site performance, security, and content protection, and should be used when you want to reduce unwanted bot traffic or prevent AI crawlers from accessing specific content.

## Blocking AI Crawlers

AI crawlers have become a common presence across the web, scanning websites and collecting large volumes of content. While some serve legitimate purposes, others operate in ways that are overly aggressive, consuming resources and capturing information that site owners may want to keep private. To maintain control and protect valuable content, it is important to have effective measures in place for managing and blocking unwanted AI crawler access.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization

Launch provides two ways to help you control access by AI crawlers:
- Using a `robots.txt` file.
- Using [Contentstack Launch Edge Functions](/docs/launch/edge-functions/) to block crawlers at runtime.

**Note:**
- If you want to **disallow all web crawlers**, including non-AI crawlers, for **a specific domain**, you can add the [**X-Robots-Tag header**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Robots-Tag) (for example, `"noindex, nofollow"`) to your responses. See [this example](https://github.com/contentstack-launch-examples/monorepo-with-edge-function/blob/block-crawlers-for-a-domain/functions/%5Bproxy%5D.edge.js) on how to implement it in your Launch project using **Launch Edge Functions**.
- Some bots may not follow the rules and continue crawling your site.

## Using robots.txt to Disallow AI Crawlers

The `robots.txt` file provides crawl instructions for compliant bots. You can use it to disallow specific User-Agent strings from accessing certain parts of your site.

Here’s a [sample](https://edge-ai-block-example.eu-contentstackapps.com/robots.txt) `robots.txt` to block common AI crawlers:

```
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: ai-crawler
Disallow: /

User-agent: *
Disallow: /private-directory/
```

**Note:** Some bots may ignore the `robots.txt` file and continue crawling your site. To strictly block AI crawlers, you can enforce the restriction at the edge using [Launch Edge Functions](https://github.com/contentstack-launch-examples/launch-edge-ai-crawlers-block-example).

### How to Add robots.txt in Next.js
- [Using App router](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
- [Using Pages router](https://nextjs.org/docs/pages/api-reference/file-conventions/public-folder#robots-favicons-and-others)

## Blocking AI Crawlers Using Launch Edge Functions

As bots can ignore the `robots.txt` file, you can use Launch Edge Functions to detect and block suspicious User-Agent strings in real time.

**Example Launch Edge Function**

```
const KNOWN_BOTS = [
  'claudebot',
  'gptbot',
  'googlebot',
  'bingbot',
  'ahrefsbot',
  'yandexbot',
  'semrushbot',
  'mj12bot',
  'facebookexternalhit',
  'twitterbot',
  //more bots can be added here
];

export default function handler(request) {
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();

  const isBot = KNOWN_BOTS.some(bot => userAgent.includes(bot));

  if (isBot) {
    return new Response('Forbidden: AI crawlers are not allowed.', { status: 403 });
  }

  return fetch(request);
}
```

**Note:**
- Some bots may spoof their identity by faking their User-Agent string. You can refer to the [ContentStack Example](https://github.com/contentstack-launch-examples/launch-edge-ai-crawlers-block-example) to try that out. You can customize the `KNOWN_BOTS` list by referring to the [verified bots directory](https://radar.cloudflare.com/bots#verified-bots) or the [AI Crawler Bot Metrics GitHub Repository](https://github.com/ai-robots-txt/ai.robots.txt/blob/main/table-of-bot-metrics.md), which help you identify and update relevant AI crawler User-Agents for your use case.
- Whenever you add a User-Agent in the `KNOWN_BOTS` list, ensure you add it in lowercase.

## Deployment Instructions on Contentstack Launch
- Refer to the [Launch Edge Functions](/docs/launch/edge-functions) documentation for setup.
- Add the edge function to your project’s edge runtime entry point.
- Deploy using your Launch pipeline. The edge function will begin filtering requests before they reach your backend or frontend.

## Best Practices & Recommendations
- Regularly update the list of known AI crawler User-Agents to ensure ongoing effectiveness.
- Use a `robots.txt` file to guide compliant bots and edge functions to block non-compliant or deceptive bots.
- Review server logs and User-Agent headers periodically to refine detection and blocking rules.

## Conclusion

While the `robots.txt` file helps communicate your site's crawling preferences, runtime protections like Launch Edge Functions offer more reliable control, especially in an AI-driven environment where bot behavior is increasingly unpredictable.

## Common questions

### Do robots always follow `robots.txt`?
No. Some bots may ignore the `robots.txt` file and continue crawling your site.

### What should I use if I need strict blocking?
To strictly block AI crawlers, you can enforce the restriction at the edge using Launch Edge Functions.

### Can I block all crawlers (not just AI crawlers) for a domain?
Yes. If you want to **disallow all web crawlers**, including non-AI crawlers, for **a specific domain**, you can add the **X-Robots-Tag header** (for example, `"noindex, nofollow"`) to your responses.

### How do I keep the edge function bot list effective over time?
Regularly update the list of known AI crawler User-Agents and review server logs and User-Agent headers periodically to refine detection and blocking rules.