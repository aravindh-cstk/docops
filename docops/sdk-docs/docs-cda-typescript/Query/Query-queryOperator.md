---
title: "queryOperator"
description: "The queryOperator method retrieves the entries as per the given operator."
url: "https://www.contentstack.com/typescript-delivery-query-queryoperator"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## queryOperator

The queryOperator method retrieves the entries as per the given operator.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queryType | QueryOperatorEnum | Yes | — | Type of query operator to apply |
| queryObjects | Query[] | Yes | — | Query instances to apply the query to |

Returns:
Type
Query

**Example:**

```
import contentstack, { QueryOperation, QueryOperator } from '@contentstack/delivery-sdk';

const stack = contentstack.stack('apiKey', 'deliveryToken', 'environment');

// Create main query
const query = stack
  .contentType('contentType1Uid')
  .entry()
  .query();

// Create subquery 1
const subQuery1 = stack
  .contentType('contentType2Uid')
  .entry()
  .query()
  .where('price', QueryOperation.IS_LESS_THAN, 90);

// Create subquery 2
const subQuery2 = stack
  .contentType('contentType3Uid')
  .entry()
  .query()
  .where('discount', QueryOperation.INCLUDES, [20, 45]);

// Apply the query operator (AND/OR)
query.queryOperator(QueryOperator.AND, subQuery1, subQuery2);

// Execute the query
const result = await query.find();
console.log('Result:', result);
```
