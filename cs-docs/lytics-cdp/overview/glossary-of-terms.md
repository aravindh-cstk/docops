---
title: "Glossary of Terms"
description: "Glossary of Terms"
url: /lytics/glossary-of-terms
uid: blted4af5b4b416800a
---

# Glossary of Terms

## Glossary of Terms

### Identity

#### Dynamic Match

Lytics employs a dynamic approach to identity resolution that seamlessly integrates both deterministic and probabilistic stitching methodologies within a unified entity graph. Deterministic Stitching serves as the solid foundation, delivering high accuracy by leveraging precise relationships between keys and identifiers across diverse data sources, thus ensuring consistent connections and effective user profile management. Probabilistic Stitching enhances identities through statistical analysis, establishing likely connections in the absence of definitive ones. This approach harnesses the strengths of both methods, delivering accuracy, adaptability, and the discovery of previously unnoticed connections.

#### Deterministic Stitching

A data linkage method used by default in the Lytics Identity Graph that relies on precise relationships between keys and identifiers from diverse data sources. This method ensures a high degree of accuracy and consistency when connecting and managing user profiles, as it follows a strict and predictable set of rules for matching and merging data. Deterministic matching is often used to create a unified and reliable view of user profiles, allowing organizations to maintain data integrity and make informed decisions based on consolidated and accurate information.

#### Probabilistic Stitching

Probabilistic stitching is a data linking technique used to optionally enhance the Lytics Identity Graph's capabilities. Unlike deterministic stitching, it relies on statistical analysis to establish likely connections between user profiles when clear, definitive relationships are missing. This method provides flexibility, making it valuable in scenarios where strict deterministic criteria are not required, such as upper funnel engagements, thus improving data insights and adaptability for organizations. Importantly, it retains the graph's core deterministic structure while incorporating probabilistic links.

#### Graph Optimization

Safeguard your identity graph by identifying and fixing excessive connections to prevent over-linking caused by inaccurate or malicious data. Keep your profiles efficient by consolidating connections for expiring identities. Graph Optimization is particularly helpful in dealing with temporary cookies and ensuring the graph's accuracy and efficiency.

#### Real-Time Evaluation

The Lytics graph continuously updates in real-time as new data is incorporated, ensuring you always have the most current perspective of your consumers.

#### Flexible Traversal

The Lytics identity graph grants access to profiles and their related data via any known identifier, a vital feature for enhancing portability and interoperability.

#### Identity Ranks

Identity ranks provide a sophisticated system for overseeing the hierarchy of identifiers. This hierarchy promotes efficient data handling/storage and aids in resolving inconsistencies or conflicts when they occur.

#### Identifier Types

Keys that link independent data sources come in diverse forms. For instance, a single consumer may possess multiple emails or cookies, while having only one UUID. To secure long-term success, your identity resolution solution must adeptly manage both scenarios.

#### Non-Destructive Merging

Non-destructive Merging guarantees the preservation of all data while merging events from multiple channels into a unified profile. This ensures the retention of an accurate, comprehensive profile that remains portable to downstream channels via the key(s) they recognize.

### Schema

#### Universal Schema

Lytics offers a universal schema for intent-based user fields and attributes, powered by C360 interests, behaviors, and intelligence. This results in AI-driven intent features automatically available on every C360 profile. It allows you to effortlessly create user cohorts through engagement clustering, including categories like frequent, binge, and highly engaged users, to enhance experiences or develop custom models.

#### Managed Schema

Pre-defined schema, crafted by Lytics Data Engineers, for hundreds of the most common engagement tools and data sources. This zero-lift entry point provides a powerful springboard to your C360 maturity. Of course, this schema can be altered and extend as needed via our no-code interface or powerful APIs.

#### Schema Copilot

Schema Copilot simplifies the process of defining a schema for custom data sources like CSV files. Once you've connected your data source, we'll use Generative AI to analyze your data and provide precise recommendations, drawing from years of experience. You can then customize these recommendations to align with your specific requirements.

#### Consent Enforcement

The Lytics Managed Schema includes a set of consent-based attributes by default, ensuring your C360 accounts for common consent levels. You can enhance this granularity to effectively enforce business rules beyond the baseline consent attributes, preventing inadvertent communication with consumers.

#### Stream Level Transformations

Utilize a powerful array of data cleansing and transformation functions to ensure that the raw data being collected maintains proper hygiene for seamless integration with your core C360 schema, enabling downstream activation.

#### Merge Operations

Clearly specify how independent data points are merged and presented on the C360 profile. Whether it's the most recent, first seen, a sum, or beyond, Lytics offers the flexibility to ensure your profiles are stitched together in the most efficient manner.

### Connectivity

#### JavaScript SDK

Harness the Lytics JavaScript SDK (JStag) to gather comprehensive first-party interactions and unlock the full potential of Lytics' Personalization Engine. This applies to both anonymous and known user scenarios, all in real-time.

#### Cloud Connect

Lytics Cloud Connect enables you to generate and store complex SQL-based segments, along with their associated attributes (columns). These are extracted directly from your warehouse's extensive transaction data without the need to expose source data or perform replication.

#### Created for Developers

Created by developers, specifically for developers, we offer a comprehensive set of APIs and SDKs for the collection, management, and distribution of all aspects of your C360.

#### Integrations

Lytics offers over 200 out-of-the-box connections, complete with our pre-built Managed Schemas. With just a few clicks, you can connect to virtually any source of your consumer data, including web, mobile, email, CRM, and more.

#### Profile Sync

Every Lytics Destination benefits from our commitment to Non-destructive Merging. Across all channels, we prioritize preserving and including essential identity links in the C360 profile. This ensures the highest match rate and portability when synchronizing with Destinations to support AI, analytics, activation, and more. Furthermore, we support hundreds of warehouses and channel tools, and the entire process occurs in real-time.

#### Catalog

The Entity Graph isn't limited to users alone; we extend this robust graph to also encompass products and content, enhancing the contextual understanding of your customers' interests. When coupled with direct integrations to the most popular CMS and eCommerce platforms, it becomes a potent tool for driving personalization and gaining valuable insights.

## Governance

### Role-Based Access Control

Guarantee that everyone with access to your C360 can only reach the tools and information required for their daily responsibilities. Enhance security and reduce the risk of unnecessary exposure to PII by implementing well-configured role-based access controls in the **Account** menu.

### PII Awareness

Lytics provides a user-friendly interface for classifying attributes that may contain Personally Identifiable Information (PII). This ensures that individuals with access to your C360 platform or associated downstream Destinations can access only the necessary consumer data to accomplish their specific tasks. Strengthen security and minimize the risk of unwarranted PII exposure by implementing robust role-based access controls in the **Account** menu.

### Single Sign-On

Lytics supports a variety of Single Sign-On (SSO) methods, such as SAML, ensuring centralized control of users and preventing unauthorized access.

### Robust Encryption

Lytics employs encryption to secure your data both at rest and in transit, ensuring constant data security.

### Key Hashing

Lytics offers a variety of hashing and encoding capabilities, such as SHA256, making it easy to hash and encode any attribute within your C360 profiles.

### Profile Sharing

Lytics' profile sharing features simplify the process of fulfilling DSAR (Data Subject Access Request) requests by providing easy access to a user's profile upon request.

### Data Deletion

Lytics' intuitive interface and user-friendly API support GDPR compliance by facilitating the removal of both raw and materialized data attributes within your C360 profiles.

### Region Control

Lytics platform is built on Google Cloud Platform (GCP), and can be deployed across any number of regions to ensure compliance with regional data privacy regulations.

### Customer Tenant

Seeking maximum control and security? Lytics can be fully deployed within your dedicated GCP (Google Cloud Platform) instance, granting you complete autonomy and oversight of your data.

### Assured Workloads

Fully supported by Lytics, Assured Workloads in Google Cloud lets you choose your data storage region and offers real-time monitoring with alerts for compliance policy violations, along with guidance on how to address them.

### Data Retention

Lytics provides the flexibility to define and manage data retention policies at both the event (raw data) and attribute level, ensuring compliance with regional data privacy regulations.

## Interests

### Affinity Engines

Lytics automates the simultaneous maintenance of user, content, product, and custom graphs, enabling the exploration of connections between user behavior and interests. This is made possible through AI-driven calculations based on Bayesian Networks, empowering Lytics to make informed predictions and uncover hidden data patterns. These insights are available on every profile, whether they are anonymous or known. Additionally, Lytics utilizes Natural Language AI to establish content taxonomies and provides adaptable management of product and content catalogs, enhancing data analysis and management capabilities.

### Affinity Attributes

Lytics surfaces affinity attributes for each configured Affinity Engine, providing a comprehensive view of each user's interests and preferences directly on each C360 profile. These attributes can be used to create segments, activate audiences, and develop custom models.

## Behaviors

### Behavioral Analytics

Lytics offers universal behavioral analytics from any behavioral data source, encompassing nine behavioral dimensions (scores) for each source. The system employs entirely self-learning scores to maintain consistency across profiles from diverse sources. Furthermore, it calculates real-time behavioral analytics for each dimension and surfaces them on every profile.

### Next Event Prediction

Lytics utilizes self-learning Bayesian Hierarchical Mixture Models to forecast customer re-engagement across multiple channels. These predictions hold significant value for analytics, personalization efforts, and the development of custom models aimed at improving customer interactions and engagement strategies.

## Intelligence

### Model Laboratory

Lytics provides support for Random Forests and Gradient Boosting Machines (GBMs), enhancing machine learning capabilities across your owned consumer data. Its user-friendly interface facilitates the creation of channel-agnostic lookalike models, enabling synchronization across various channel tools and ad networks. These models can predict customer behavior such as likelihood to convert, purchase, sign-up, or churn, offering valuable insights for business decision-making.

### Model Auto-Tune

The models in the Lytics Model Laboratory autonomously fine-tune themselves, consistently achieving the best model configuration. They offer comprehensive model diagnostics without the need for manual intervention, guaranteeing effortless performance enhancement.

### Model Retraining

Laboratory-managed models can undergo both continuous and adaptive re-training, providing additional control for optimizing accuracy and performance directly.

### Real-Time Scoring

All managed scores are assessed and refreshed in real-time. At Lytics, we guarantee that all scores remain on the profile, are consistently updated, and undergo continuous re-evaluation to ensure their accuracy and relevance.

### Computed Attributes

A Computed Attribute is a specific type of Profile Attribute created by implementing defined rules, calculations, or transformations. Within Lytics, these Computed Attributes can be generated from various types of data sources, including streaming events, materialized profiles, and your data warehouse using native SQL queries. All Computed Attributes are surfaced directly on the C360 profile and are updated in real-time whenever feasible.

### Managed Computed Attributes

Managed Computed Attributes make use of the underlying mechanism for Computed Attributes but are pre-defined and provided out of the box, delivering substantial value with zero effort. They ensure consistency and provide a robust foundation for your C360 journey.

## First-Party

### Schema Studio

Lytics Schema Studio is a user-friendly, no-code interface for mapping data, simplifying the process of storing, aggregating, cleansing, and refining profile attributes. By enriching profiles with First-Party data, you enhance custom models with crucial context. Schema Studio adeptly oversees the creation and expansion of first-party data, elevating your data-driven strategies.

## Portability

### Audience Engine

The Audience Engine is dedicated to extracting insights from C360 profiles using complex rules defined by the end-user. These rules enable the simultaneous creation of Computed Attributes and Segments, utilizing a mix of profile attributes, including first-party, behavioral, demographic, model, and affinity data, along with other existing rule sets for inclusion or exclusion. The resulting output can be activated across multiple channels, such as email, web, and mobile, to enhance engagement and further enrich the C360 profile through personalized experiences.

### Personalization Engine

Accessibility to the materialized C360 is crucial, and the Lytics Personalization Engine provides a user-friendly API for effortless real-time access to C360 profiles. This API delivers profile attributes, predictions, recommendations, and more, ensuring that you always have a comprehensive and current view when engaging with customers.

### Recommendation Engine

Real-time product and content recommendations tailored to the individual enhance the personalization narrative. Enabled by the Lytics Affinity Engine, these recommendations associate available content with a user's interests to surface the most pertinent products and content for each user. These recommendations can drive experiences across a variety of channels, such as email, web, and mobile.

### Anonymous Activation

Lytics constructs and manages profiles uniformly for both identified and anonymous users, ensuring the availability of the same set of computed and intelligence-based attributes for activation, regardless of identification level. Additionally, robust client-side connections enhance the portability of anonymous profiles, eliminating the need for strong identifiers, such as email.

### C360 Readiness Index

The C360 Readiness Index offers a key performance indicator (KPI) for gauging the completeness of your C360 profiles and their alignment with industry benchmarks. It keeps you informed about your standing and provides guidance for enhancements.

### Custom Reports

Custom Reports in Lytics offer detailed insights into distribution, overlap, and size metrics. These reports provide tailored data analysis, allowing you to precisely evaluate how different segments, audiences, or attributes are distributed, where they overlap, and their relative sizes. This information is invaluable for making data-driven decisions and optimizing your strategies.

### Distribution Analysis

Distribution Analysis is a powerful analytical tool that delves into the patterns and trends among all users who meet a consistent set of criteria. By examining their behavior, interactions, and attributes, this analysis provides valuable insights that can inform decision-making and strategy development.
