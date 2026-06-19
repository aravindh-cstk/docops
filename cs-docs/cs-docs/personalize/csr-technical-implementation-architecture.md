---
title: "[Personalize] - Client Side Rendering (CSR) Technical Implementation Architecture"
description: Architectural overview of Client-Side Rendering (CSR) for Personalize, focusing on how personalization can be done in the browser.
url: https://www.contentstack.com/docs/personalize/csr-technical-implementation-architecture
product: Personalize
doc_type: architecture
audience:
  - developers
  - architects
version: v1
last_updated: 2026-03-26
---

# [Personalize] - Client Side Rendering (CSR) Technical Implementation Architecture

This page provides an architectural overview of the Client-Side Rendering (CSR) approach for Personalize, intended for developers and architects implementing browser-based personalization flows where rendering and API interactions happen in the client.

## Client Side Rendering (CSR) Technical Implementation Architecture

**Client Side Rendering (CSR)** refers to a web architecture where rendering of the webpage is handled entirely in the browser. In this model, after receiving a basic HTML shell from the server, JavaScript is used to fetch and display the dynamic content.

This allows for a faster, more responsive user experience once the page is loaded, but may result in slower initial load times as all rendering happens client-side.

The CSR flow depicted here highlights how user-specific content is delivered and processed through APIs after events and attributes are passed from the browser.

## Introduction

This document provides an architectural overview of the Client-Side Rendering (CSR) for Personalize, focusing on how personalization can be done in the browser.

Unlike other architectures, caching is not possible as the content is fetched, and rendered in the visitor’s browser. The goal of this setup is to ensure personalized content delivery even in situations where a backend is not available and caching cannot be leveraged.

The Personalize CSR Architecture presents an efficient solution for delivering personalized experiences without server-side rendering and caching. While it presents challenges related to latency and network dependency, the flexibility of real-time processing ensures a dynamic, personalized experience for each user.

This architecture is ideal for businesses that need to maintain high levels of personalization but cannot implement caching at the client level.

## Key Components

This architecture involves four key components: Browser, Customer Client Code (front-end code), Personalize Edge API, and CMS Delivery API. The following breakdown covers the role and responsibilities of each component.

- **Browser**: The browser acts as the point of interaction for users. The code running in the browser is also responsible for calling the Personalize and Content Delivery APIs to retrieve active variants and their respective content It also collects events and attributes based on user behavior and preferences. These can include location, device type, or other contextual data. This data is sent to the next component, Customer Client Code, to initiate the personalization process.
- **Your Client Code**: This component represents the client-side codebase, which processes the events/attributes from the browser and interacts with the backend APIs for personalization. Unlike in server-side scenarios, caching here is noted as "not really possible".This means every request will need to dynamically reach out to the backend, resulting in real-time content fetching and processing. Your Client Code acts as the intermediary between the browser and backend APIs, managing requests and data flow.
- **Personalize Edge API**: The Personalize Edge API handles the processing of the user’s events and attributes. It evaluates the incoming data to determine the most appropriate User’s Variants. These variants provide the user with a tailored experience and are selected dynamically based on their interactions.Once processed, the selected User’s Variants are returned to your Client Code to manage the content request.
- **CMS Delivery API**: The CMS Delivery API is responsible for delivering the personalized content that is to be served to the user.It fetches and returns the required content based on the user’s variant, ensuring that the content is up-to-date and relevant to the user. The personalized content is sent back to the Client Code, which then delivers it to the user's browser for display.

## Benefits of this Architecture

Similar to other architectures, the CSR architecture also offers certain benefits as listed below:

- **Real-Time Personalization**: This architecture ensures that every interaction is processed in real-time, making the user’s experience highly dynamic and adaptable.
- **Flexible Personalization Rules**: The Personalize Edge API allows for flexibility in defining how user variants are selected based on a wide range of inputs (events/attributes).
- **Guaranteed Fresh Content**: With the CMS Delivery API, personalized content is fetched dynamically on each request, ensuring that users are always seeing the most up-to-date information.

## Flow of the Diagram

The data flow in this architecture involves real-time interactions between the browser and backend components, due to the impossibility of caching on the client side. Here’s how the system works step-by-step:

- **Browser**: The user interacts with the browser, which captures events/attributes. These attributes could be user-specific data such as device type, location, session duration, or other behavioral aspects.
- **Your Client Code**: The client code running in the browser is responsible for requesting the Personalize Edge API for the visitor’s active variants and then fetching the correct entry variants based on Personalize’s response. It is then also responsible for triggering impressions and events based on what the visitor sees and the activities they perform.
- **Personalize Edge API**: The Personalize Edge API processes the incoming data and selects the most relevant User’s Variants. These variants dictate how the user’s personalized experience will be tailored. The Personalize Edge API returns the selected variant to your Client Code for further processing.
- **CMS Delivery API**: At the same time, the CMS Delivery API is responsible for fetching the specific personalized content based on the user’s variant. This could be a personalized image, text, or any other type of content. The content is returned to your Client Code, ready for delivery.
- **Final Delivery**: Your Client Code now has both the User’s Variants from the Personalize Edge API and the Personalized Content from the CMS Delivery API. The personalized content is combined with the user’s variant and sent back to the browser, completing the personalized user experience.

## Data Flow and Real-Time Personalization

- In this setup, the lack of caching capability due to everything happening in the visitor’s browser significantly impacts the flow of data. Here’s how the architecture adapts to this:>
- **Event Collection**: The browser collects real-time events and attributes from user activity and sends this information to the Personalize Edge API.
- **API Interaction**: Your Client Code dynamically interacts with the Personalize Edge API and CMS Delivery API for every request since caching is not viable.
- **Personalized Content**: Once the Personalize Edge API selects the user’s variant, the CMS Delivery API fetches the corresponding personalized content.
- **User Delivery**: Finally, the personalized content is sent back to the browser, where the user sees dynamically tailored experiences.

## Challenges

While this architecture is highly adaptable, it presents certain challenges due to the inability to cache at the browser level:

- **Increased Latency**: Since caching is not possible, every user interaction requires real-time API calls, which may increase latency compared to a caching-enabled architecture. This results in loading screens and flickers on the web page, hampering user experience.
- **Network Dependency**: Due to the absence of caching, the overall performance is more dependent on network speed and server response times.

## Technical Considerations

- **Asynchronous Processing**: Ensure that all API requests are handled asynchronously to minimize user-facing delays.
- **Error Handling**: Implement robust error-handling mechanisms to address potential failures during API calls, especially when delivering personalized content.

## Common questions

### Can caching be used in this CSR architecture?
Caching is not possible as the content is fetched, and rendered in the visitor’s browser.

### Which components are involved in the CSR architecture?
This architecture involves four key components: Browser, Customer Client Code (front-end code), Personalize Edge API, and CMS Delivery API.

### What is responsible for selecting the user’s variants?
The Personalize Edge API handles the processing of the user’s events and attributes and selects the most relevant User’s Variants.

### What are the main challenges with CSR personalization?
Increased Latency and Network Dependency are highlighted as challenges due to the inability to cache at the browser level.