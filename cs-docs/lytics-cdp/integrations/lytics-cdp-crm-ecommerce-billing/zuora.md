---
title: "Zuora"
description: "Zuora provides cloud-based software on a subscription basis that helps companies launch, manage, and transform into a subscription business. Enrich your…"
url: /lytics/zuora
uid: blt2dd5429c77ccf5fa
---

# Zuora

## Zuora

## Zuora: Import Users & Subscription Activity

Zuora provides cloud-based software on a subscription basis that helps companies launch, manage, and transform into a subscription business. Enrich your user profiles in Lytics with user profile and subscription data from Zuora.

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Integration Details

-   **Implementation Type**: [Server-side](/docs/lytics/integrated-marketing-tools#server-side-implementations)
-   **Implementation Technique**: [REST API](/docs/lytics/integrated-marketing-tools#apis)
-   **Frequency**: [Batch](/docs/lytics/integrated-marketing-tools#batch)
-   **Resulting data**: [User profiles](/docs/lytics/integrated-marketing-tools#user-profiles) [raw event data](/docs/lytics/integrated-marketing-tools#raw-event-data)

Steps/Pattern:

1.  Once a Zuora import job has been started, Lytics pulls contact and subscription information from the [Zuora Data Query](https://developer.zuora.com/v1-api-reference/api/operation/POST_DataQueryJob/) endpoint.
2.  If continuous import is selected, the job will run every four hours checking for contact and subscription updates since the last run.

### Fields

The following fields are included in the default mapping of the zuora\_contacts stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| Account.Id | zuora\\\_account\\\_id | Zuora: Account ID | string |
| Account.Name | zuora\\\_account\\\_name | Zuora: Account Name | string |
| BillToContact.Address1 | zuora\\\_bill\\\_address | Zuora: Bill Contact: Address | string |
| BillToContact.Address2 | zuora\\\_bill\\\_address\\\_2 | Zuora: Bill Contact: Address 2 | string |
| BillToContact.City | zuora\\\_bill\\\_city | Zuora: Bill Contact: City | string |
| BillToContact.Country | zuora\\\_bill\\\_country | Zuora: Bill Contact: Country | string |
| BillToContact.FirstName | zuora\\\_bill\\\_first\\\_name | Zuora: Bill Contact: First Name | string |
| BillToContact.LastName | zuora\\\_bill\\\_last\\\_name | Zuora: Bill Contact: Last Name | string |
| BillToContact.PostalCode | zuora\\\_bill\\\_postal\\\_code | Zuora: Bill Contact: Zip | string |
| BillToContact.State | zuora\\\_bill\\\_state | Zuora: Bill Contact: State | string |
| BillToContact.WorkPhone | zuora\\\_bill\\\_work\\\_phone | Zuora: Bill Contact: Work Phone | string |
| SoldToContact.Address1 | zuora\\\_sold\\\_address | Zuora: Sold Contact: Address | string |
| SoldToContact.Address2 | zuora\\\_sold\\\_address\\\_2 | Zuora: Sold Contact: Address 2 | string |
| SoldToContact.City | zuora\\\_sold\\\_city | Zuora: Sold Contact: City | string |
| SoldToContact.Country | zuora\\\_sold\\\_country | Zuora: Sold Contact: Country | string |
| SoldToContact.FirstName | zuora\\\_sold\\\_first\\\_name | Zuora: Sold Contact: First Name | string |
| SoldToContact.LastName | zuora\\\_sold\\\_last\\\_name | Zuora: Sold Contact: Last Name | string |
| SoldToContact.PostalCode | zuora\\\_sold\\\_postal\\\_code | Zuora: Sold Contact: Zip | string |
| SoldToContact.State | zuora\\\_sold\\\_state | Zuora: Sold Contact: State | string |
| SoldToContact.WorkPhone | zuora\\\_sold\\\_work\\\_phone | Zuora: Sold Contact: Work Phone | string |
| email(oneof(SoldToContact.WorkEmail, SoldToContact.PersonalEmail, BillToContact.WorkEmail, BillToContact.PersonalEmail)) | email unique id |  | string |
| emaildomain(oneof(SoldToContact.WorkEmail, SoldToContact.PersonalEmail, BillToContact.WorkEmail, BillToContact.PersonalEmail)) | email\\\_domain |  | string |
| hash.sha256(email(oneof(SoldToContact.WorkEmail, SoldToContact.PersonalEmail, BillToContact.WorkEmail, BillToContact.PersonalEmail))) | email\\\_sha256 |  | string |
| oneof(SoldToContact.Address1, BillToContact.Address1) | address1 |  | string |
| oneof(SoldToContact.Address2, BillToContact.Address2) | address2 |  | string |
| oneof(SoldToContact.City, BillToContact.City) | city |  | string |
| oneof(SoldToContact.PostalCode, BillToContact.PostalCode) | postal\\\_code |  | string |
| oneof(SoldToContact.State, BillToContact.State) | region |  | string |

The following fields are included in the default mapping of the zuora\_activity stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| Invoice.Amount | zuora\\\_last\\\_invoice\\\_amount | Zuora: Last Invoice Amount | number |
| Invoice.InvoiceNumber | zuora\\\_last\\\_invoice\\\_number | Zuora: Last Invoice Number | string |
| Invoice.PaymentAmount | zuora\\\_last\\\_invoice\\\_payment\\\_amount | Zuora: Last Invoice Payment Amount | number |
| Product.Description | zuora\\\_product\\\_description | Zuora: Description | string |
| Product.Name | zuora\\\_product\\\_name | Zuora: Product Name | string |
| email(BillToContact.WorkEmail) | email unique id |  | string |
| emaildomain(BillToContact.WorkEmail) | email\\\_domain |  | string |
| hash.sha256(email(BillToContact.WorkEmail)) | email\\\_sha256 |  | string |
| map(ProductRatePlan.Name, Subscription.AutoRenew) | zuora\\\_subscription\\\_autorenew | Zuora: Subscription AutoRenew | map\\\[string\]string |
| map(ProductRatePlan.Name, Subscription.CancelledDate) | zuora\\\_subscription\\\_cancelleddate | Zuora: Subscription CancelledDate | map\\\[string\]time |
| map(ProductRatePlan.Name, Subscription.CurrentTermPeriodType) | zuora\\\_subscription\\\_currenttermperiodtype | Zuora: Subscription CurrentTermPeriodType | map\\\[string\]string |
| map(ProductRatePlan.Name, Subscription.InitialTermPeriodType) | zuora\\\_subscription\\\_initialtermperiodtype | Zuora: Subscription InitialTermPeriodType | map\\\[string\]string |
| map(ProductRatePlan.Name, Subscription.RenewalTermPeriodType) | zuora\\\_subscription\\\_renewaltermperiodtype | Zuora: Subscription RenewalTermPeriodType | map\\\[string\]string |
| map(ProductRatePlan.Name, Subscription.Status) | zuora\\\_subscription\\\_status | Zuora: Subscription Status | map\\\[string\]string |
| map(ProductRatePlan.Name, Subscription.SubscriptionEndDate) | zuora\\\_subscription\\\_end\\\_date | Zuora: Subscription End Date | map\\\[string\]time |
| map(ProductRatePlan.Name, Subscription.SubscriptionStartDate) | zuora\\\_subscription\\\_start\\\_date | Zuora: Subscription Start Date | map\\\[string\]time |
| map(ProductRatePlan.Name, Subscription.TermType) | zuora\\\_subscription\\\_termtype | Zuora: Subscription TermType | map\\\[string\]string |
| map(ProductRatePlan.Name, Subscription.Version) | zuora\\\_subscription\\\_version | Zuora: Subscription Version | map\\\[string\]string |
| max(todate(Invoice.InvoiceDate)) | zuora\\\_last\\\_invoice\\\_date | Zuora: Last Invoice | date |
| set(Product.Id) | product\\\_ids | Product IDs | \\\[\]string |
| set(Subscription.Name) | zuora\\\_subscriptions | Zuora: Subscriptions | \\\[\]string |
| sum(Invoice.Amount) | zuora\\\_last\\\_invoice\\\_total\\\_amount | Zuora: Total Invoice Amount | number |
| sum(Invoice.PaymentAmount) | zuora\\\_last\\\_invoice\\\_total\\\_payment\\\_amount | Zuora: Total Invoice Payment Amount | number |

### Configuration

Follow these steps to set up and configure an import job for Zuora in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Zuora** from the list of providers.
2.  Select the import **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/documentation/product/integrations/zuora/authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  (optional) Select the **Keep Updated** checkbox, to import list every day.
7.  Click the **Complete** button to start the job.
