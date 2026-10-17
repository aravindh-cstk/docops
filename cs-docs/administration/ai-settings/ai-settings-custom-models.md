---
title: "AI Settings: Custom Models (Bring Your Own Key)"
description: "Power Contentstack AI features with your own LLM provider and credentials. Use Bring Your Own Key (BYOK) to set up product- and agent-level custom models for Polaris and Custom Agent."
url: /administration/ai-settings-custom-models
uid: bltbfa67ecbc4d0dd72
---

# AI Settings: Custom Models (Bring Your Own Key)

## AI Settings: Custom Models (Bring Your Own Key)

Bring Your Own Key (BYOK) lets your organization power Polaris and Custom Agents with your own provider instead of using the Contentstack Managed LLM. You configure your provider credentials from the **Custom Models** tab in **AI Settings**, and Contentstack sends the AI requests for that product to your provider account.

**Note:** Bring Your Own Key must be enabled for your organization before you can configure a custom model. To request access, contact your Contentstack account manager.

Bring Your Own Key supports two products, **Polaris** and **Custom Agents**, and each supports its own set of providers:

-   **Polaris:** OpenAI (GPT-5.2 and above).
-   **Custom Agent:** OpenAI, Azure OpenAI, Google Vertex AI, Google Gemini, and Anthropic.

You configure each product's provider credentials from the **Custom Models** page. For Custom Agents, the provider you configure becomes the **Organization Default** model for your agents. You can also override the Organization Default model for an individual agent in its **Settings**.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   Bring Your Own Key enabled for your organization
-   Credentials from your LLM provider, such as an API key, or a service account JSON key for Google Vertex AI

## What You Will Learn

-   How to set up a product-level custom model configuration for Polaris and Custom Agent.
-   How to set up a custom model configuration for an individual agent.
-   How to switch a product between Managed by Contentstack and a custom configuration.
-   Where custom model details appear in agent settings and the **Executions** tab.

## Configuration Levels

You can configure a custom model at two levels:

-   **Product-level configuration:** A custom model configured for a product that supports Bring Your Own Key (**Polaris** or **Custom Agent**), so that product uses your provider and credentials.
-   **Agent-level configuration:** A custom model configured for an individual agent, set from the agent's settings.

By default, products use the Contentstack Managed LLM. When you configure and apply a custom model, the associated AI features run on your own provider account instead.

## Open the Custom Models Page

To manage custom models, log in to your [Contentstack account](https://www.contentstack.com/login) and follow the steps:

1.  Navigate to the **App Switcher** icon in the top-right corner and click **Administration**.
2.  From the top header, select **AI Settings**.
3.  In the left navigation, click **Custom Models**.

The **Custom Models** page lists the AI products that support Bring Your Own Key, **Polaris** and **Custom Agent**, each with its **Configuration Type** (for example, **Managed by Contentstack**), its connection **Status**, and the date it was **Last Updated**.

![Custom Models page listing Polaris and Custom Agent with Configuration Type, Status, and Last Updated](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb65bd42535d8a085/d05c77b755312cf1be702e7f/Custom_Models_Page.png)

## Set Up a Product-Level Configuration

Configure a custom model for a product that supports Bring Your Own Key (**Polaris** or **Custom Agent**). The fields you enter depend on the provider. All fields are required.

| Provider | Fields |
| --- | --- |
| OpenAI | **Model ID** (for example, gpt-4o) and **API Key** |
| Azure OpenAI | **Deployment ID** (the deployment name of your Azure OpenAI resource), **Resource Name** (the name of your Azure resource), **API Key**, and **API Version** |
| Google Vertex AI | **Model ID** (for example, gemini-2.5-pro) and **Service Account JSON Key** (paste the full Google Cloud service account JSON key) |
| Google Gemini | **Model ID** (for example, gemini-2.5-pro) and **API Key** |
| Anthropic | **Model ID** (for example, claude-sonnet-5) and **API Key** |

In **Model ID**, enter the exact model identifier your provider expects, not the model's display name.

To set up a product-level configuration, perform the following steps:

1.  On the **Custom Models** page, in the row for the product you want to configure, click the **Actions** (vertical ellipsis) icon and select **Configure**.
2.  In the **Configure LLM For \[Product\]** panel, use the **Choose Configuration** drop-down to select how the product connects:
    1.  **Custom configuration:** uses your own provider and credentials for this product.
    2.  **Managed by Contentstack:** uses the Contentstack Managed LLM.
3.  If you select **Custom configuration**, select the **Provider** under **Custom Configuration Settings**. Polaris offers OpenAI. Custom Agent offers OpenAI, Azure OpenAI, Google Vertex AI, Google Gemini, and Anthropic.
4.  Enter the fields for the provider you selected, as listed in the table above.
5.  Click **Save Configuration**.

Your credentials are stored securely and encrypted, and only the product you configure can use them.

**Note:** To stop using your own credentials for a product, reopen the panel and set **Choose Configuration** back to **Managed by Contentstack**. The product then uses the Contentstack Managed LLM again.

![Configure LLM For Custom Agent panel with Custom configuration selected, showing the Provider, Model ID, and API Key fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am97792c60fa6c46db/defec869af5e84f70ae8b2b0/Configure_LLM_Custom_Agent.png)

## Set Up a Custom Model for an Agent

You can configure a custom model for an individual agent, independent of the product configuration. When you add an API key for an agent, the **Authorize** window asks for a **Title** for the key and the provider's credentials. All fields are required.

| Provider | Credentials |
| --- | --- |
| OpenAI | **API Key** and **Organization ID** |
| Azure OpenAI | **Resource Name** (the sub-domain in https://<resource-name>.openai.azure.com), **API Key**, **Deployment Name/ID**, and **API Version** |
| Google Vertex | **Service Account Key** |
| Gemini | **API Key** |
| Anthropic | **API Key** |

To set up a custom model for an agent, perform the following steps:

1.  Open **Agent OS**, go to **Agents**, and select your agent.
2.  In the left navigation, click **Settings**.
3.  In the **AI Model** section, click **Change**.
4.  In the **Change Model Setup** panel, select **Custom Configuration**. The other option, **Organization Default**, keeps the agent on the model configured for the Custom Agent product in **AI Settings**.
5.  Enter the following details:
    1.  **Select Model Provider** (required): Select the LLM provider for this agent: OpenAI, Azure OpenAI, Google Vertex, Gemini, or Anthropic.
    2.  **Authentication Method** (required): Select an existing API key, or click **\+ Add API Key**, enter the credentials in the **Authorize** window (see the table above), and click **Authorize**.
    3.  **Select AI Model** (required): Select the model the agent should use.
6.  Click **Save**.

**Note:** If you don't set a custom model for an agent, the agent uses **Organization Default**, which follows the Custom Agent product configuration in **AI Settings**. For more about provider and model options at the agent level, refer to the [Get Started with Agents](/docs/agent-os/get-started-with-agents) documentation.

## Where Custom Model Details Appear

After you configure a custom model, Contentstack surfaces the model information in the following places:

-   **Agent settings:** The **AI Model** section displays the provider and model, labeled **Organization Custom Model** or **Custom Configuration**, along with text indicating that this is your organization's own provider and key. When the agent uses the Contentstack Managed LLM, the section shows **Contentstack Managed** and doesn't expose the underlying model.
-   **Executions:** In the agent's **Executions** tab, open a run and, in its **Execution Steps**, the **Metrics** section displays the **Total Tokens** used, the **AI Provider**, and the **Model** when a run uses a custom model. When a run uses the Contentstack Managed LLM, these custom model details are not shown.

**Note:** When Polaris runs on a custom model, the Polaris panel does not display which model it is using. Agents display the model details in the agent settings and execution logs.

## If Bring Your Own Key Is Not Enabled

If your organization doesn't have Bring Your Own Key enabled, **AI Settings** doesn't show the **Custom Models** tab. In an agent's **Change Model Setup** panel, selecting **Custom Configuration** displays the following message:

_Bring Your Own Key (BYOK) is not enabled for your organization. Please contact the Contentstack support team._

To enable Bring Your Own Key for your organization, contact your Contentstack account manager.

## Additional Resources

-   To enable or disable AI features per product, refer to the [AI Configuration : Global AI Settings](/docs/administration/ai-settings) documentation.
-   To configure the AI model for an agent, refer to the [Get Started with Agents](/docs/agent-os/get-started-with-agents) documentation.
-   To learn more about Polaris, refer to the [Get Started with Polaris](/docs/agent-os/get-started-with-polaris) documentation.
