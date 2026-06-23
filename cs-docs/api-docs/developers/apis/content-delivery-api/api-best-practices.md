---
title: "CDA | API Best Practices"
description: Apply Content Delivery API best practices for reliable requests, caching, pagination, references, and efficient content retrieval.
url: https://www.contentstack.com/docs/developers/apis/content-delivery-api/api-best-practices
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CDA | API Best Practices



## Best Practices for GET API calls

When trying out Contentstack [Get Entry](#single-entry) or [Get All Entries](#all-entries) API requests, Contentstack recommends certain optimization measures that will help you achieve fair limits on your API usage.

Here are some important points that you need to consider:

- Limit Response Payload: GET calls usually return a lot of unwanted parameters. If the APIs are used excessively, the default API response not only increases infrastructure load but also starts impacting the performance of your app. It's important to validate data and filter out anything that shouldn't be there.Ideally, the best practice is to limit your response payload to 5 MB.
- Keep the total number of “includes” and “level depth” to the minimum: When retrieving data, always make sure you decide logically what you need to extract and avoid retrieving unnecessarily large data.It is recommended to keep the number of includes (when referencing other entries) and the depth levels as low as possible. The best practice is to restrict your total include to not exceed 10. However it depends on the user’s requirement (and their final response payload size, which should be restricted to the ideal response size mentioned above).
- Make use of projection queries: To restrict the size returned in your response payload, make sure to use projection queries such as only, except, etc. These projection queries allow you to retrieve/exclude specific field data for each entry.
- Make use of pagination: If you think that your response payload can be overwhelming, you can use skip and limit parameters to paginate your response.
- Use “Lazy loading”: This factor totally depends on the user and also on the framework that they use. If the website data is pulled in from multiple content types, lazy loading is a good approach that will let them load the important sections of their website first before loading the others.

#### Exceptional Use Case

So what do you do if you might hit the limits even after following the above precautionary measures?

In this scenario, you can make use of**filtering or pagination**. What does this mean? Let’s look at the steps involved:

1. First, you can divide your includes into multiple calls, say you need to add 10 includes. You can split them into groups of, maybe, two.
2. You can append projection queries such as only, except, etc. to these batches to retrieve restricted response.
3. [Optional, but recommended] Now, if you feel your response can be overwhelming, you can use skip and limit parameters to paginate your response.
4. Finally, you can merge the results of all the batches together to get your final response.



## API Usage Recommendations

In order to attain and maintain optimum performance and ensure that infrastructure resources are used in an efficient manner, Contentstack recommends certain best practices.

By following the recommendations discussed in this guide, you can maintain reasonable API usage while making calls or querying for data by minimizing the number of includes in your call.

#### Optimize Your Code

Optimize your code to **eliminate any redundancies or duplicates from the includes, unwanted includes, or references** from our code.

We may get faster responses, however, it can result in retrieving stuff in the response that we don't really need. Before making a call, check for queries in the code that will fetch data items that aren’t used in your application, check whether the fetched data is being put back with no changes made to them, and so on. Also, you can avoid making queries unique by putting in a random number or timestamp.

#### Cache Frequently-used Data

Once you have optimized your code, cache data items that you use more frequently. Your cache management system can be programmed to help you **retrieve most frequently used data through the cache** instead of the server.

For example, in a user management application where you update various user details such as user groups, titles, and so on. In such a case, you can think of keeping these details on the application side rather than retrieving them through calls every time the user opens the form.

#### Opt for Data Caching When Needed

If you possess content pieces that do not change often, they can be cached in your app's cache management system to avoid fetching them every now and then.

For example, if your app is customer facing and there is an FAQ section in your app, you can prefer keeping answers to these FAQs on the application cache rather than fetching it every time where there is a requirement.

#### Use Contentstack Webhooks for Tracking Changes

Contentstack [webhooks](https://www.contentstack.com/docs/developers/set-up-webhooks/about-webhooks) can be used to keep track of changes. You can set webhooks when any changes are made to content or code and then react as required. 

The webhook notifications allow App to fetch details as desired instead of waiting for the app's API instance to check for job status periodically and then fetch the data. Webhooks can help you in such situations by notifying you as and when the job gets completed.

This **reduces the number of includes** in the call that may otherwise be high if the checking period has considerable time in between.

#### Implement Lazy Loading

Lazy loading, or "On-demand loading," is an online content optimization technique for web apps and websites. It involves loading the most important section of the page first followed by the remaining sections, instead of loading and rendering the complete page in one go. This totally depends on the user requirement.

This approach can be useful in reducing the number of includes involved in making a call and rendering the content to the user. This is not only cost-effective but also resource effective as well.

#### Avoid Retrieving Multiple Levels in Referencing

[Referencing](https://www.contentstack.com/docs/developers/create-content-types/reference) is a powerful Contentstack feature that allows you to create references. However, if not needed, we encourage you to avoid fetching unnecessary references in the response.

The number of includes in case of referencing is one thing, but the depth of a single include is also more resource costly than a shallower include. So you should always decide logically when retrieving data in a single call and avoid retrieving them unnecessarily for optimum resource utilization.

#### Use Modular Blocks

When making use of multiple content type references, and fetching the schema of all these content types can be exhausting. This also increases the number of includes in a call.

This case can be handled efficiently by using [Modular Blocks](https://www.contentstack.com/docs/developers/create-content-types/modular-blocks). They can be used with other modules to construct a complete webpage. You can create multiple blocks (let's say, B1, B2, B3, and so on with each block with a different schema) within a modular block while creating a content type.

While creating an entry in this content type, you can add data to any of the blocks (B1, B2, B3) and keep other blocks empty. And now when you make a call, you don't have to include the referenced content types in your call. This is another way of minimizing the includes in your call or queries.
