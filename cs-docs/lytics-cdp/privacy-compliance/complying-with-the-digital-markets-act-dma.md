---
title: "Complying with the Digital Markets Act (DMA)"
description: "Starting in early 2024, Lytics has updated connections with certain providers to help you comply with the Digital Markets Act's EU user consent policies."
url: /lytics/complying-with-the-digital-markets-act-dma
uid: bltaccc6f7dc71567db
---

# Complying with the Digital Markets Act (DMA)

## Complying with the Digital Markets Act (DMA)

Starting in early 2024, Lytics has updated connections with certain providers to help you comply with the Digital Markets Act's EU user consent policies.

### Google Ads Customer Match

When setting up an export to Google Ads Customer Match, there are two dropdowns where you can set the given consent for the audience being exported: **Ad User Data Consent** and **Personalization Data Consent**.

For **Ad User Data Consent**, there are three separate options. Setting to **Granted** notifies Google Ads that everyone in the audience has provided consent to send user data to Google for advertising purposes.

![379abb5-Screenshot_2024-03-13_at_1.46.27_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3c0add63608b96bd/ce395871fe15f46554ad074e/379abb5-Screenshot_2024-03-13_at_1.46.27_PM.png)

For **Personalization Consent** there are the same three options. Setting to **Granted** notifies Google Ads that everyone in the audience has provided consent for personalized advertising.

![72f4170-Screenshot_2024-03-13_at_1.48.01_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8d9978ba0324d785/4fd67e6fde31326b99005c11/72f4170-Screenshot_2024-03-13_at_1.48.01_PM.png)

For more about these two fields and how they are interpreted by Google Ads, visit their [FAQs](https://support.google.com/google-ads/answer/14310715?sjid=16156382499482431539-NC).

Find the complete docs on the setting up a Google Ads Customer Match export [here](/docs/lytics/google-ads-overview#export-audiences-customer-match).

### Google DV360

When setting up an audience export to Google DV360, you must check the **User Consent Confirmed** checkbox to confirm that you have collected all required consent for the exported audience.

![30a5d33-Screenshot_2024-03-13_at_4.25.11_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2189c08a6ad7da31/094fd23c627a8adb6f5da412/30a5d33-Screenshot_2024-03-13_at_4.25.11_PM.png)

If you have an ongoing audience export to Google DV360, those that haven't confirmed that user consent was granted will go into a failed state. For these jobs, if in fact you have confirmed consent, then you can edit the job, check the **User Consent Confirmed** checkbox and hit Complete. Once saved, you can select to retry the job and the export will update DV360 list with the consent confirmation, fulfilling the user consent requirements.

Learn more about Google's User Consent policy [here](https://www.google.com/about/company/user-consent-policy/).

Find the complete docs on setting up a Google DV360 audience export [here](/docs/lytics/google-marketing-overview#google-dv360-export-audiences).

### Amazon DSP

Amazon DSP takes a different approach than Google in helping you comply with DMA requirements. When setting up export of cookies or emails to Amazon DSP, you will be asked to select all the countries where the user info was collected in the **Country Codes** input.

![7a822ef-Screenshot_2024-03-13_at_3.56.29_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am869255449261a2b2/e1299ec7ca042d2309b2140f/7a822ef-Screenshot_2024-03-13_at_3.56.29_PM.png)

Amazon DSP uses the source countries of your audience to prevent DMA requirements from being applied to out-of-scope countries such as UK, IN, US, JP etc.

Amazon will treat any audience without a country code as in-scope for DMA. Please note that if no country codes are selected, your export is likely to report a 0% match rate.

If you have an ongoing audience export to Amazon DSP, you can edit the job in Lytics, select the country codes that apply, and hit Complete. Lytics will then update the audience definition in Amazon DSP.

Find the complete docs on setting up an Amazon DSP audience export [here](/docs/lytics/amazon-dsp-overview#amazon-dsp-sync-cookiesemail).

### LinkedIn

LinkedIn made changes for members in the EEA and Switzerland to comply with the new requirements imposed by the DMA. This may affect targetable audience sizes in LinkedIn, however in Lytics, there are no changes to the workflow of exporting users to LinkedIn.

Learn more about how the DMA affects LinkedIn Marketing Services [here](https://www.linkedin.com/help/lms/answer/a6233305?trk=eml-mktg-cust-202403-global-march-api-newsletter\&mcid=7170542602079989761\&src=e-eml).

To learn more about sending audiences to LinkedIn visit our docs [here](/docs/lytics/linkedin).
