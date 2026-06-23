---
title: "[Java Delivery] - Java Sample App"
description: Java Sample App
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/java/java-sample-app
product: Contentstack
doc_type: sample-app
audience:
  - developers
  - java-developers
version: unknown
last_updated: 2026-03-26
---

# [Java Delivery] - Java Sample App

This page explains how to set up and run a demo Java terminal app that uses Contentstack’s Java SDK to fetch and deliver content. It is intended for developers who want a working reference implementation and need step-by-step instructions to configure stack credentials and run the app locally.

## Java Sample App

This demo Java terminal app works using Contentstack’s [Java SDK](../java.md). It uses Contentstack to store and deliver the content of the news app.

## Quickstart
To help you get started, we have provided a [Java code snippet](https://github.com/contentstack/contentstack-java-news-web-app-example.git) that shows how to generate queries and fetch entries from Contentstack.

## Prerequisites
- A text editor or an IDE, for example, [IntelliJ IDEA](https://spring.io/guides/gs/intellij-idea/)
- [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or later
- [Gradle 4+](http://www.gradle.org/downloads) or [Maven 3.2+](https://maven.apache.org/download.cgi)
- [Contentstack Account](https://app.contentstack.com/#!/login)

## Steps for Execution
- [Creating a Java Project](#creating-a-java-project)
- [Create a Stack](#create-a-stack)
- [Add a Publishing Environment](#add-a-publishing-environment)
- [Import Content Type](#import-content-type)
- [Add Content](#add-content)
- [Download the Code and Configure the App](#download-the-code-and-configure-the-app)
- [Run the Application](#run-the-application)

## Creating a Java Project
Create a new project under **File > New > Project > Java** and provide a name for your application, `{applicationName}`.
- Next, open the project in a code editor or an IDE of your choice, for example, IntelliJ, and open the `pom.xml` file. You will see the dependency section. You need to add one more dependency in the file as shown below:
```

       com.contentstack.sdk
       java
       {latest}

```
- Save the file and then follow the instructions given in the "[Run the Application](#run-the-application)" section below:

You can skip setting up the project (as mentioned above) and [create the web app quickly](https://start.spring.io/), with a sample app with the required details for quick integration.

## Create a Stack
Log in to your Contentstack account, and [create a new stack](../../../set-up-stack/create-a-new-stack.md). This stack will hold all the data specific to your website.

## Add a Publishing Environment
To add an [environment](/docs/developers/set-up-environments) in Contentstack:

Navigate to **Settings** and then **Environment**.
- Click the **+ New Environment** tab.
- Provide a suitable name for your environment; say ‘staging’.
- Specify the base URL (e.g., ‘`http://YourDomainName.com`’), and select the language (e.g., English - United States).
- Then, click **Save**.

## Import Content Type
A [content type](/docs/developers/create-content-types) is like the structure or blueprint of a page or a section of your web or mobile property. For this app, we need one content type named News. We need this content type to add the content for our app.

For quick integration, we have already created the content type. [Download the content type](https://github.com/contentstack/contentstack-java-news-web-app-example/blob/master/asset/news.zip) and [import it to your stack](../../../create-content-types/import-a-content-type.md). You can also [create your own content type](../../../create-content-types/create-a-content-type.md) if required. Now that your content type is ready, let’s add some content to your app.

## Add Content
[Create](../../../../content-managers/author-content/create-an-entry.md) and [publish](../../../../content-managers/author-content/publish-an-entry.md) entries for the News content type you just downloaded and imported, as discussed in the above step.

Now that we have created the sample data, it’s time to configure the presentation layer.

## Download the Code and Configure the App
[Download](https://github.com/contentstack/contentstack-java-news-web-app-example.git) and unzip the source repository for this guide, or clone the repository by using the following command:

```
git clone https://github.com/contentstack/contentstack-java-news-web-app-example.git
```
Once the project has been downloaded, move inside the project directory (cd into `contentstack-java-news-web-app-example root directory`).

Then open the MainApp.java file which is inside the \contentstack-java-news-web-app-example\src\main\java\io\contentstack\webapp folder and update your stack credentials ([Stack API key](../../../set-up-stack/view-stack-details.md), [Delivery Token](../../../create-tokens/about-delivery-tokens.md), and [Environment](../../../set-up-environments/about-environments.md) name) as follows:

```
public static void main(String[] args) throws Exception {
   Stack stack = Contentstack.stack("btl23..........", "cs27..........", "env");
   ContentType contentType = stack.contentType("products");
   Query query = contentType.query();
   query.find(new QueryResultsCallBack() {
   @Override
   public void onCompletion(ResponseType responseType,
                           QueryResult queryresult,Error error) {
       System.out.println(queryresult.getResultObjects());
    }
  });

```
**Note: **The credentials are loaded from the local environment .env file. You need to generate those yourself.

## Run the Application
To run the application, open the downloaded code in any IDE of your choice. For this project, we have used IntelliJ IDE. Once you open the application in IntelliJ, it looks like this:

Right-click the interface (as shown above), and click **Run MainApp.main()**. The application runs and notifies that the application can be viewed at port number 8080.

Alternatively, you can execute the following command from the command prompt of the IDE. To do this, go to the root directory of the application and run the following command:

If you have selected Gradle while setting up the project:

```
./gradlew bootRun
```
If you are using Maven, run the following command:

```
./mvnw spring-boot:run
```
Now run the service with curl (in a separate command prompt window), by executing the following command:

```
$ curl localhost:8080
```
You will see the application running at port 8080 as shown below:

**Additional Resource**: You can also use the [Contentstack Java SDK](../java.md) to build a news app. Read our [Build a news app using Contentstack and Contentstack Java SDK](../../../sample-apps/build-a-news-app-for-java-using-contentstack-and-contentstack-java-sdk.md) guide for more details.

## More resources
- [View and Download Java Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-java)

## Common questions

### Where do I get the Stack API key, Delivery Token, and Environment name?
Use the linked docs in the “Download the Code and Configure the App” section: [Stack API key](../../../set-up-stack/view-stack-details.md), [Delivery Token](../../../create-tokens/about-delivery-tokens.md), and [Environment](../../../set-up-environments/about-environments.md).

### Can I use Gradle or Maven to run the app?
Yes. The page includes commands for both: `./gradlew bootRun` (Gradle) and `./mvnw spring-boot:run` (Maven).

### What port does the application run on?
The page states the application can be viewed at port number 8080, and the curl example uses `localhost:8080`.

### Do I need to create the content type myself?
No. The page provides a downloadable content type zip and instructions to import it, and also notes you can create your own content type if required.