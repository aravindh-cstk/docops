---
title: "Lotame"
description: "Lotame"
url: /lytics/lotame
---

# Lotame

## Lotame

```
# Overview

Lotame’s data management platform (DMP) allows you to collect, organize, and activate data from any source to gain a holistic view of your consumers, to power efficient and effective marketing campaigns and more relevant content. Lotame's global data exchange (LDX) provides you with access to billions of third-party data points with a focus on quality.

When a user lands on a page that has both the Lytics JavaScript tag and Lotame tag, Lytics will [initiate a cookie exchange](#initiate-cookie-exchange) with Lotame in order to mutually identify a user. After Lytics and Lotame have a shared view of a user, Lytics can [export audience details to Lotame](#export-audiences-to-lotame) via a Lytics managed S3 bucket.

## Before You Begin

Contact your Lotame account manager to let them know you'll be initiating an audience export to Lytics's S3 bucket.

## Initiate cookie exchange

To activate cookie exchange you need to:

- Install Lytics JavaScript Tag.
- Install Lotame Tag.
- Contact [Lytics Support](https://support.lytics.com/) to initiate the exchange.

## Export Audiences to Lotame

<table>
  <tr>
    <td>Summary</td>
    <td></td>
  </tr>
  <tr>
    <td>Frequency</td>
    <td>batched, hourly</td>
  </tr>
  <tr>
    <td>Exports to</td>
    <td>Lotame segment membership</td>
  </tr>
  <tr>
    <td>Name</td>
    <td>Lytics audience names as Lotame segments</td>
  </tr>
  <tr>
    <td>Identifiers</td>
    <td>identified via cookie exchange</td>
  </tr>
  <tr>
    <td>Segment Exports</td>
    <td>yes</td>
  </tr>
  <tr>
    <td>Type</td>
    <td>adds and removals</td>
  </tr>
</table>

Sending audience membership to Lotame requires some coordination between Lytics and Lotame. Lotame can receive audience membership data in various services. This integration chooses to send audience membership data to a Lytics-managed SFTP server. Lotame will be able to access the SFTP folder.

## Configuration

Follow these steps to set up an export from Lytics to Lotame. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/data-sources) documentation for more information.

1. Select **Lotame** from the list of providers.
2. Select the **Export Audiences** job type from the list.
3. Select the Authorization you would like to use or create a new one.
4. Enter a  **Label** to identify this job you are creating in Lytics.
5. (Optional) Enter a **Description** for further context on your job.
6. In the **Audiences** drop-down, select the audiences that you'd like to send to Lotame. As users enter or exit the selected Lytics audiences a segment add or remove event will be sent to Lotame.
7. In the **Client folder** field, enter a short _lowercase_ name that will name the SFTP folder for this export.
8. (Optional) Click **Send Existing Users** to send users who already exist in the selected audiences. If unchecked only new users will be exported to Lotame.
9. (Optional) Click **Export only members and enters** to omit exits from the audience export. With this option selected, only enters and members will be exported.
10. Click **Start Export**.

Lytics audiences files should appear in the S3 bucket in an hour.
```
