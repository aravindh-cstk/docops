---
title: "Query Operations"
description: "Following are the available Query Operations: Operations Description Example .equals() Performs an exact match. .equals(\"test\\_term\") .includes() Checks if the value exists in the array. .includes(\\[\"term1\", \"term2\"\\]) .below() Matches terms below (excluding) the specified value. .below(\"parent\\_term\") .eqBelow() Matches terms below (including) the specified value. .eqBelow(\"parent\\_term\") .above() Matches terms above (excluding) the specified value. .above(\"child\\_term\") .eqAbove() Matches terms above (including) the specified value. .eqAbove(\"child\\_term\") .or() Combines queries using OR logic .operator(.or(\\[query1, query2\\])) .and() Combines queries using AND logic .operator(.and(\\[query1, query2\\]))"
url: "https://www.contentstack.com/swift-taxonomy-query-operations"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Query Operations

Following are the available Query Operations:

| **Operations** | **Description** | **Example** |
|---|---|---|
| **.equals()** | Performs an exact match. | .equals("test_term") |
| **.includes()** | Checks if the value exists in the array. | .includes(["term1", "term2"]) |
| **.below()** | Matches terms below (excluding) the specified value. | .below("parent_term") |
| **.eqBelow()** | Matches terms below (including) the specified value. | .eqBelow("parent_term") |
| **.above()** | Matches terms above (excluding) the specified value. | .above("child_term") |
| **.eqAbove()** | Matches terms above (including) the specified value. | .eqAbove("child_term") |
| **.or()** | Combines queries using OR logic | .operator(.or([query1, query2])) |
| **.and()** | Combines queries using AND logic | .operator(.and([query1, query2])) |
