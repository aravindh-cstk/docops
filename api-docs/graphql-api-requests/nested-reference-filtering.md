---
title: "Nested Reference Filtering"
description: /stacks/apiKey/explore
url: /nested-reference-filtering
product: Contentstack
doc_type: api-request
created_at: 2025-03-10T08:58:46.197Z
updated_at: 2025-03-10T08:58:46.197Z
---

# Nested Reference Filtering

<p>Nested reference filtering allows you to filter referenced entries within a reference field, returning relevant entries matching specific criteria. This feature does not affect the parent or child documents, making it easier to retrieve only the necessary data.</p><p class="note"><strong>Note</strong>: This is a plan-based feature, reach out to our <a href="mailto:support@contentstack.com" target="_blank">support</a> team to enable this feature for your organization.</p><p>Consider a <strong>Product </strong>content type with a reference field named <strong>Categories</strong>, which refers to entries from another content type named <strong>Category</strong>.</p><p>You can use nested reference filtering to retrieve specific referenced entries based on certain conditions, such as:</p><ul><li>Fetch all <strong>Product</strong> entries where the referenced <strong>Category</strong> entries title matches Electronics.</li><li>Further refine the referenced <strong>Category</strong> entries to include only those where the <strong>cost</strong> is <strong>$20 and above</strong>.<strong ><br bold="[object Object]"/></strong></li></ul><pre>{<br />    all_product(<br />        where: {<br />            reference: {<br />                categories: {<br />                    section: "Electronics"<br />                }<br />            }<br />        }<br />    ) {<br />        items {<br />            title<br />            categoriesConnection(<br />              where: { <br />                cost_gte: 20<br />              }<br />            ) {<br />                edges {<br />                    node {<br />                        ... on Category {<br />                           title<br />				section<br />				cost<br />                                description<br />                        }<br />                    }<br />                }<br />            }<br />        }<br />    }<br />}<br /></pre><p class="note"><strong>Note</strong>: Nested reference filtering does not support <strong>File</strong>, <strong>Reference</strong>, or <strong>JSON RTE</strong> fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

