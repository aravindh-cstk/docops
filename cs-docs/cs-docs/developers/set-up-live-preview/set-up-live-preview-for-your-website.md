---
title: Set Up Live Preview for your Website
description: Set up Live Preview for your Website
url: https://www.contentstack.com/docs/headless-cms/set-up-live-preview-for-your-website
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# Set Up Live Preview for your Website

This page explains how to set up Live Preview for your website based on your rendering approach (GraphQL, REST, Gatsby, or SSG). It is intended for developers integrating Contentstack Live Preview into web-based applications and should be used when choosing the correct setup guide for your site’s architecture.

Set Up Live Preview for your Website

Live Preview allows content managers to **see real-time updates** to their content before publishing. It ensures a seamless content editing experience by enabling draft previews across multiple digital channels.

**Note: **Live Preview currently supports only web-based applications. Support for mobile applications will be available in the future.

Live Preview seamlessly connects your Contentstack entry editor with your website, allowing **instant** previews of content updates. The setup varies based on the rendering technique your website uses.

**Additional Resource**: You can also [open Live Preview in a new browser tab](/docs/developers/set-up-live-preview/open-live-preview-in-a-new-tab) for an iframe-free experience.

## GraphQL-based Live Preview
For websites using **GraphQL APIs** to fetch and display content dynamically.

### Client-Side Rendering (CSR) with GraphQL
In **Client-side Rendering (CSR)**, content is fetched dynamically using JavaScript in the browser. The page structure loads first, and the content is rendered asynchronously, reducing server load.

It is best to use CSR with GraphQL for:
- **Instant updates: **View content changes in real-time without reloading the page.
- **Reduced server load:** No need to regenerate the entire page when content updates.
- **Headless frontends:** Works seamlessly with frontend frameworks like React, Vue.js, or Angular.

Best suited for **Single Page Applications** (SPAs) built with **React**, **Vue.js**, **Angular**, or other **JavaScript frameworks**.

To learn how to configure Live Preview for CSR with GraphQL, refer to the [setup guide](https://www.contentstack.com/docs/developers/set-up-live-preview/set-up-live-preview-with-graphql-for-client-side-rendering/).

### Server-Side Rendering (SSR) with GraphQL
In **Server-side Rendering (SSR)**, pages are pre-rendered on the server before being sent to the browser. This improves SEO, performance, and initial load speed, as search engines and users receive fully rendered content on the first request.

It is best to use SSR with GraphQL for:
- **Pre-generated pages:** Load pages faster compared to CSR.
- **Improved SEO: **Search engines can index content more effectively.
- **Optimized performance: **Reduces client-side processing load.

Best suited for **SEO-focused websites**, **Next.js applications**, and **performance-first projects**.

To learn how to configure Live Preview for SSR with GraphQL, refer to the [setup guide](https://www.contentstack.com/docs/developers/set-up-live-preview/set-up-live-preview-with-graphql-for-server-side-rendering/).

## Gatsby-powered Sites
Gatsby is a **React-based static site generator (SSG)** that pre-builds pages for faster performance. Since Gatsby sites do not update content dynamically, Live Preview runs in **Client-side Rendering (CSR)** mode, allowing real-time content previews without rebuilding the site.

It is best to use Live Preview with Gatsby for:
- **High-performance static sites: **Pre-rendered pages ensure fast loading speeds.
- **Dynamic content previews:** CSR mode allows real-time content updates before publishing.
- **Seamless JAMstack integration:** Works well with headless CMS architectures.

Best suited for **blogs**, **documentation**, and **marketing pages**.

To learn how to configure Live Preview for Gatsby, follow the [setup guide](https://www.contentstack.com/docs/developers/set-up-live-preview/set-up-live-preview-for-gatsby-powered-sites).

## REST-based Live Preview
**REST-Based Live Preview** allows websites that use REST APIs to fetch and display content dynamically to see real-time content updates before publishing.

### Client-Side Rendering (CSR) with REST
In **Client-side Rendering (CSR)**, content is fetched dynamically through JavaScript calls to REST APIs and injected into the page without requiring a full reload.

It is best to use CSR with REST for:
- **Real-time updates:** Content refreshes dynamically without a full-page reload.
- **Efficient content fetching**: The browser pulls only the necessary data instead of rendering entire pages.
- **Scalability:** Suitable for JavaScript-heavy frontends powered by React, Vue.js, or Angular.

Best suited for **REST API-driven SPAs** and **dynamic websites** using **React**, **Vue.js**, or **Angular**.

To learn how to configure Live Preview for CSR with REST, refer to the [setup guide](https://www.contentstack.com/docs/developers/set-up-live-preview/set-up-live-preview-with-rest-for-client-side-rendering/).

### Server-Side Rendering (SSR) with REST
In Server-side Rendering (SSR), pages are pre-rendered on the server before being sent to the client, improving SEO and load times. Live Preview ensures that real-time updates are reflected without delay.

It is best to use SSR with REST for:
- **Better SEO & performance: **Pre-rendered pages load faster and rank better in search engines.
- **Enhanced user experience: **Faster page loads improve accessibility and engagement.
- **Ideal for structured content:** Ideal for blogs, news websites, and sites with frequently updated content.

Best suited for **SEO-focused websites**, **Next.js/Nuxt.js apps**, **performance-first sites**.

To learn how to configure Live Preview for SSR with REST, refer to the [setup guide](https://www.contentstack.com/docs/developers/set-up-live-preview/set-up-live-preview-with-rest-for-server-side-rendering/).

## Static Site Generator (SSG)
**Static Site Generators (SSGs)** generate HTML pages during the build process, which optimizes website performance and minimizes load times. Since SSG-based websites do not dynamically up date content, **Live Preview operates in Client-side Rendering (CSR) mode**, allowing content teams to see changes before deployment. This ensures accurate content validation without triggering a full rebuild.

It is best to use Live Preview with SSG for:
- **Lightning-fast websites: **Pre-rendered HTML ensures quick load times.
- **Live previews in CSR mode:** Even though content is static, Live Preview fetches updates dynamically.
- **Optimized for JAMstack:** Works seamlessly with headless CMS setups.

Best suited for **blogs**, **documentation sites**, and **marketing landing pages**.

To learn how to configure Live Preview for SSG, refer to the [setup guide](https://www.contentstack.com/docs/developers/set-up-live-preview/set-up-live-preview-for-static-site-generator-ssg/).

Live Preview is easy to implement and works across various tech stacks. Choose a setup that fits your needs and start previewing content instantly.

## Common questions

**Q: Does Live Preview support mobile applications?**  
A: **Note: **Live Preview currently supports only web-based applications. Support for mobile applications will be available in the future.

**Q: Can I use Live Preview without an iframe?**  
A: **Additional Resource**: You can also [open Live Preview in a new browser tab](/docs/developers/set-up-live-preview/open-live-preview-in-a-new-tab) for an iframe-free experience.

**Q: Which setup guide should I use for a GraphQL site?**  
A: Choose **Client-Side Rendering (CSR) with GraphQL** or **Server-Side Rendering (SSR) with GraphQL** based on your rendering technique and follow the linked setup guide in the relevant section.

**Q: Why does Live Preview run in CSR mode for Gatsby and SSG sites?**  
A: Since Gatsby and SSG-based websites do not update content dynamically, Live Preview operates in **Client-side Rendering (CSR) mode**, allowing real-time content previews without rebuilding the site.