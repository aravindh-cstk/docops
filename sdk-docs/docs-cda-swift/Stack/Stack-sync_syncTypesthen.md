---
title: "sync(_:syncTypes:then:)"
description: "The Initial Sync request performs a complete sync of your app data. It returns all the published entries and assets of the specified stack in response. The response also contains a sync\\_token, which you get in SyncStack, since this token is used to get subsequent delta updates later."
url: "https://www.contentstack.com/swift-stack-sync-_-synctypes-then-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## sync(_:syncTypes:then:)

The Initial Sync request performs a complete sync of your app data. It returns all the published entries and assets of the specified stack in response. The response also contains a sync_token, which you get in SyncStack, since this token is used to get subsequent delta updates later.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| syncStack | SyncStack | No | — | The relevant SyncStack to perform the subsequent sync on. Defaults to a new empty instance of SyncStack. |
| syncTypes | SyncableTypes | No | — | SyncableTypes that can be sync. |
| completion |  | Yes | — | A handler which will be called on completion of the operation. |

Returns:
Type
SyncStack

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.sync { (result: Result<SyncStack, Error>) in
    switch result {
    case .success(let syncStack):

    case .failure(let error):

    }
}
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

let syncStack = SyncStack(paginationToken: paginationToken)
stack.sync(syncStack, then: { (result: Result<SyncStack, Error>) in
    switch result {
    case .success(let syncStack):

    case .failure(let error):

    }
}
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

let syncStack = SyncStack(syncToken: syncToken)
stack.sync(syncStack, then: { (result: Result<SyncStack, Error>) in
    switch result {
    case .success(let syncStack):

    case .failure(let error):

    }
}
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.sync(syncTypes: [.publishType(.assetPublished)], then: { (result: Result<SyncStack, Error>) in
    switch result {
    case .success(let syncStack):

    case .failure(let error):

    }
}
```
