---
title: "Personalize Limitations"
description: "Explore the limitations of Personalize, including customizations via support and API rate limit restrictions."
url: /personalize/limitations
---

# Personalize Limitations

## Personalize Limitations

-   The default number of Personalize Projects allowed per organization is **3**. By Contentstack permissions, they can be extended till **100** per organization.
-   The default number of Experiences allowed per project is **100**. By Contentstack permissions, they can be extended till **1000** per project.
-   The default number of Audiences allowed per project is **100**. By Contentstack permissions, they can be extended till **1000** per project.
-   The default number of Rules allowed per audience is **50**. By Contentstack permissions, they can be extended till **100** per audience.
-   The default number of Custom Attributes allowed per project is **100**. By Contentstack permissions, they can be extended till **1000** per project.
-   The default number of Events allowed per project is **100**. By Contentstack permissions, they can be extended till **1000** per project.
-   The default number of Variants allowed per experience is **20**. By Contentstack permissions, they can be extended till **50** per experience.
-   There are certain API rate limits:  
    
    | **API Request** | **Rate Limit** |
    | --- | --- |
    | 
    Personalize Management Read (GET) and Write (POST/PUT/DELETE) requests
    
     | 
    
    10 requests per second per organization
    
     |
    | 
    
    Personalize Edge Read (GET) and Write (POST/PUT/PATCH/DELETE) requests
    
     | 
    
    No rate limit. The Edge API is intended to match your scale.
    
     |
    

**Note:** To increase any of the default limits, please contact our [support team](mailto:support@contentstack.com).
