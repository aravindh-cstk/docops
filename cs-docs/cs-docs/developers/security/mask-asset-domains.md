---
title: [Manage Asset Security] - Mask Asset Domains
description: Mask Asset Domains
url: https://www.contentstack.com/docs/developers/security/mask-asset-domains
product: Contentstack
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2024-11-07
filename: mask-asset-domains.md
---

# [Manage Asset Security] - Mask Asset Domains

This page explains [Manage Asset Security] - Mask Asset Domains for Contentstack. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Mask Asset Domains

Images or assets served using Contentstack contain “contentstack.io” in the URL (i.e., https://images.contentstack.io/v3/assets/blt8b...). Many of our customers prefer using their own domain instead by masking the Contentstack’s URL.

'Masking' is the process in which the end-user gets an impression as if the content is being delivered directly from the client instead of Contentstack. For masking, you can set up a proxy.

However, it is recommended not to set up a proxy, as it not only increases the overall infrastructure overheads but also slows down the performance of content delivery. Therefore, we strongly recommend using a [CDN](/docs/developers/cdn-and-caching/what-is-cdn-and-how-it-works) service such as Fastly to deliver content to the end-user quickly and efficiently.

**Note**: Images here refer to the usual images that we use in our content, or something that has as extension .png, .jpg, .jpeg, and so on. Assets refer to anything that is not images, for example, PDFs.

### How Does Masking Work

When the client's end-user sends some requests to fetch assets or images, the request is not sent to Contentstack directly. Instead, the static domain that is set up on the client side, using Fastly, routes the request to the Contentstack CDN endpoints (images.contentstack.io and assets.contentstack.io) to deliver the content.  
This routing happens at the backend (discussed below) and the end-user gets an impression as if the content is delivered through the client and not directly from Contentstack.

### Setting up the Proxy Domain

To create a proxy (images.contentstack.io and assets.contentstack.io) with a custom domain using Fastly, follow the below steps:

1. If you already have a [Fastly](https://www.fastly.com/) account, log into it. Else, follow the steps given [here](https://www.fastly.com/signup/) to create one.
2. Once you log into your account, click the **Create service** drop-down and select **CDN** as shown below: ![image12.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ca3d47d1a1246e5/672c78b4e5efba33f7e062fd/image12.png)
3. On the **Create a CDN service** page, enter the details for your CDN service in the following fields:
   1. **Service name**: Enter a suitable name for your service. You can add your domain name as your service name if you want to (recommended).
   2. **Add your own domain**: Enter your domain name inside the **Domain** field, for example, static.<your-custom-domain>.com.
   3. **Add an origin**: Add an origin inside the **Host** field. In our case, it will be ***images.contenstack.io***.
   4. **Recommended Settings**: Inside the **Recommended Settings** section, keep all the provided options enabled as shown below: ![image15.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5f61044fba52017/672c7882aecb492bc52a5936/image15.png)
4. Once you have entered the details, click **Activate**.
5. You'll be navigated to the Service configuration page (on the **Domains** section) as shown below: ![image14.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfa61a98951855498/672c788253e3c46518b3a517/image14.png)
6. You can view the domain name that you have set up on this screen, and to view the hosts, click **Hosts**, inside **Origins**, on the left navigation panel. ![image3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt26aaccd429718ed3/672c78a64f4fa358feb7987c/image3.png)
7. We will now add additional settings by editing the configuration. So, click the **Edit configuration** drop-down as shown below: ![image16.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf7673fc05c4c3731/672c7883188be3bfdcf06005/image16.gif)
8. On the screen that appears, click on **Hosts** inside **Origins** to edit it, and click the edit icon: ![image9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd71f8ef5813bab8c/672c78a7188be35eddf06009/image9.png)
9. On the **Edit this host** page, enter ***images\_contentstack\_io*** in the **Name** field.  
   Ensure the **Address** field has ***images.contentstack.io*** as the value.  
   Scroll down to the **Override host** field, and ensure it says ***images.contentstack.io***.  
   Leave all other fields to their default value and click **Update**. ![image13.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt103750c506c86c96/672c7883adf8c5790cfbe0d7/image13.gif)
10. Now, we will attach a condition in the origin of images.contentstack.io by editing the host again. To do this, click the edit icon and then the **attach a condition** link as shown below: ![image5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfa91358e2656b35f/672c78a6170171f5bceffe7e/image5.png)
11. On the **Create a new request condition** modal, enter the name (for example, images) and the following condition in the respective fields.

    ```
    req.url ~ "\.   
    (exr|apng|bmp|cgm|drle|emf|fits|g3|gif|heic|he ics|heif|heifs|ief|jls|jp2|jpg2||jpeg|jpg|jpe| jpm|jpx|jpf|ktx|png|sgi|svg|svgz|t38|tif|tiff| tfx|webp|wmf|pti|psd|azv|uvi|uvvi|uvg|uvvg|djv u|djv|\*sub|dwg|dxf|fbs|fpx|fst|mmr|rlc|ico|mdi|wdp|npx|tap|vtf|wbmp|xif|pcx|3ds|ras|cmx|fh| fhc|fh4|fh5|fh7|\*ico|jng|sid|\*bmp|\*pcx|pic| pct|pnm|pbm|pgm|ppm|rgb|tga|xbm|xpm|xwd)$"
    ```

      
    This basically implies that anything that has an extension like png, bmp, svg, and so on, consider it as an image and apply the condition accordingly.
12. Then, click the **Save and apply to images\_contenstack\_io** button as shown below: ![image10.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt76c1f1ad2a02518f/672c78b553e3c42343b3a51b/image10.gif)
13. Then, go to the bottom of the page and click **Update** for the settings to take effect.
14. We will now create another host for assets in our service. So, click the **+ Create a host** button as shown below: ![image6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc9d569be3ccbb582/672c78a64f4fa35155b79880/image6.png)
15. Then, enter ***assets.contentstack.io*** and click **Add** as shown below: ![image7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6cda896ae49ba0f9/672c78a6c09b5deaf0c4b38c/image7.png)
16. The new host gets added. We will now edit this host similar to what we did for the previous host (images.contentstack.io). So, click the edit icon of this newly created host: ![image4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt347c9814dd28610c/672c78a64b9fed2b482c14e6/image4.png)
17. On the **Edit this host** page, enter the name (**assets\_contentstack\_io**) in the **Name** field. Ensure the **Address** field has the value ***assets.contentstack.io***.  
    Scroll down to the **Override host** field at the bottom and enter **assets.contentstack.io**. Keep all other settings as is and click **Update**. ![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfcd1a1b338d91e19/672c78a6dec4ef3fd27cd430/image2.png)
18. Now, we will attach a condition in the origin of assets.contentstack.io by editing the host again. To do this, click the **Attach a condition** link on the host pages when it gets updated. ![image18.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt222c4da778eb4502/672c788288bc785e42597db7/image18.png)

    Alternatively, you can click the edit icon, and then click the **Attach a condition** link.
19. On the modal that opens, create a new condition by clicking the **Create a new request condition** button. ![image17.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta142a688a629825a/672c78824b9fed252f2c14e2/image17.png)
20. On the **Create a new request condition** modal, enter the name (for example, NOT images) and the following condition in the respective fields.

    ```
    req.url !~ "\.   
    (exr|apng|bmp|cgm|drle|emf|fits|g3|gif|heic|he ics|heif|heifs|ief|jls|jp2|jpg2||jpeg|jpg|jpe| jpm|jpx|jpf|ktx|png|sgi|svg|svgz|t38|tif|tiff| tfx|webp|wmf|pti|psd|azv|uvi|uvvi|uvg|uvvg|djv u|djv|\*sub|dwg|dxf|fbs|fpx|fst|mmr|rlc|ico|md i|wdp|npx|tap|vtf|wbmp|xif|pcx|3ds|ras|cmx|fh| fhc|fh4|fh5|fh7|\*ico|jng|sid|\*bmp|\*pcx|pic| pct|pnm|pbm|pgm|ppm|rgb|tga|xbm|xpm|xwd)$"
    ```
21. Then, click the **Save and apply to assets\_contenstack\_io** button, as shown below, and then the **Update** button for changes to take effect: ![image1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt216faecae8391c60/672c78837ca8e82fda486f64/image1.png)
22. Then, at the top of the **Hosts** page, click **Activate**. ![image11.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta014f2bc730f75f4/672c78b41d8baba9eae83d25/image11.png)

    You will get a message that the service has been activated and locked.

    ![image8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2be194592d4bb513/672c78a7e5b8c53524a8208a/image8.png)
23. If you already have a static subdomain for your images and assets, then make a DNS entry, pointing it to k.sni.fastly.net. For example:

    ```
    static.<your-custom-domain>.com  → k.sni.fastly.net
    ```

      
    Pointing your static subdomain to Fastly will help you mask images and assets from Contentstack to your domain based on the settings that we have done in Fastly.

    **Note**: If you do not have a subdomain, then there could be different ways of routing the traffic depending on the requirement. For this contact our support team at [support@contentstack.com](mailto:support@contentstack.com).
24. Lastly, update your images/assets URL in your application with your own domain URL. For example:  
    Update

    ```
    https://images.contentstack.io/v3/assets/blt2xxxyyyzzze34/blt7xxxyyyzzb4b/65a71577/istockphoto-1295274245-612x612.jpg
    ```

    to

    ```
    https://static.<your-custom-domain>.com/v3/assets/blt2xxxyyyzzze34/blt7xxxyyyzzb4b/65a71577/istockphoto-1295274245-612x612.jpg
    ```

## Common questions
### What is covered in [Manage Asset Security] - Mask Asset Domains?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Manage Asset Security] - Mask Asset Domains?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
