---
title: "Java Sample App"
description: "Sample Apps made for Java with Contentstack"
url: /developers/sdks/content-delivery-sdk/java/java-sample-app
uid: blt136ff07381e6be3c
---

# Java Sample App

## Java Sample App

This demo Java terminal app works using Contentstack’s [Java SDK](/docs/developers/sdks/content-delivery-sdk/java/about-java-delivery-sdk/). It uses Contentstack to store and deliver the content of the news app. 

## Quickstart

To help you get started, we have provided a [Java code snippet](https://github.com/contentstack/contentstack-java-news-web-app-example) that shows how to generate queries and fetch entries from Contentstack.

## Prerequisites

-   A text editor or an IDE, for example, [IntelliJ IDEA](https://spring.io/guides/gs/intellij-idea/)
-   [JDK 1.8](https://www.oracle.com/java/technologies/downloads/) or later
-   [Gradle 4+](https://gradle.org/install/) or [Maven 3.2+](https://maven.apache.org/download.cgi)
-   [Contentstack Account](https://app.contentstack.com/#!/login)

## Steps for Execution

1.  [Creating a Java Project](#creating-a-java-project)
2.  [Create a Stack](#create-a-stack)
3.  [Add a Publishing Environment](#add-a-publishing-environment)
4.  [Import Content Type](#import-content-type)
5.  [Add Content](#add-content)
6.  [Download the Code and Configure the App](#download-the-code-and-configure-the-app)
7.  [Run the Application](#run-the-application)

1.  ## Creating a Java Project

    1.  Create a new project under **File > New > Project > Java** and provide a name for your application, {applicationName}. ![Java_Sample_App_-_New_Project.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt53f75d079bedb6fe/6311e427b31aea583acf44b8/Java_Sample_App_-_New_Project.png)
    2.  Next, open the project in a code editor or an IDE of your choice, for example, IntelliJ, and open the pom.xml file. You will see the dependency section. You need to add one more dependency in the file as shown below:

        ```
        <dependencies>
           <dependency>
               <groupId>com.contentstack.sdk</groupId>
               <artifactId>java</artifactId>
               <version>{latest}</version>
           </dependency>
        </dependencies>
        ```

        ![Java_Sample_App_-_File.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt839b5f0836b32252/6311e42752174f0e0e970f28/Java_Sample_App_-_File.png)
    3.  Save the file and then follow the instructions given in the "[Run the Application](#run-the-application)" section below:![Java_Sample_App_-_Run_JavaNews.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt21240f71044802be/6311e427ff41d90f53a57122/Java_Sample_App_-_Run_JavaNews.png)

    You can skip setting up the project (as mentioned above) and [create the web app quickly](https://start.spring.io/), with a sample app with the required details for quick integration.
2.  ## Create a Stack

    Log in to your Contentstack account, and [create a new stack](/docs/headless-cms/create-a-new-stack). This stack will hold all the data specific to your website.

3.  ## Add a Publishing Environment

    To add an [environment](/docs/headless-cms/about-environments) in Contentstack:

    1.  Navigate to **Settings** and then **Environment**.
    2.  Click the **\+ New Environment** tab.
    3.  Provide a suitable name for your environment; say ‘staging’.
    4.  Specify the base URL (e.g., ‘http://YourDomainName.com’), and select the language (e.g., English - United States).
    5.  Then, click **Save**.
4.  ## Import Content Type

    A [content type](/docs/headless-cms/create-a-content-type) is like the structure or blueprint of a page or a section of your web or mobile property. For this app, we need one content type named News. We need this content type to add the content for our app.

    For quick integration, we have already created the content type. [Download the content type](https://github.com/contentstack/contentstack-java-news-web-app-example/blob/master/asset/news.zip) and [import it to your stack](/docs/headless-cms/import-a-content-type). You can also [create your own content type](/docs/headless-cms/create-a-content-type) if required. Now that your content type is ready, let’s add some content to your app.

5.  ## Add Content

    [Create](/docs/headless-cms/create-an-entry) and [publish](/docs/headless-cms/publish-an-entry) entries for the News content type you just downloaded and imported, as discussed in the above step.

    Now that we have created the sample data, it’s time to configure the presentation layer.

6.  ## Download the Code and Configure the App

    [Download](https://github.com/contentstack/contentstack-java-news-web-app-example) and unzip the source repository for this guide, or clone the repository by using the following command:

    ```
    git clone https://github.com/contentstack/contentstack-java-news-web-app-example.git
    ```

    Once the project has been downloaded, move inside the project directory (cd into contentstack-java-news-web-app-example root directory).

    Then open the MainApp.java file which is inside the \\contentstack-java-news-web-app-example\\src\\main\\java\\io\\contentstack\\webapp folder and update your stack credentials ([Stack API key](/docs/headless-cms/view-stack-details), [Delivery Token](/docs/headless-cms/about-delivery-tokens), and [Environment](/docs/headless-cms/about-environments) name) as follows:

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

    **Note:** The credentials are loaded from the local environment .env file. You need to generate those yourself.

7.  ## Run the Application

    To run the application, open the downloaded code in any IDE of your choice. For this project, we have used IntelliJ IDE. Once you open the application in IntelliJ, it looks like this:

    ![Java_Sample_App_-_Run_Main_App.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc1df4b4166e9f691/6311e4277066f57e88f6ce3d/Java_Sample_App_-_Run_Main_App.png)

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

    ![Java_Sample_App_-_At_port_8080.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt43720db805d3919a/6311e427e3d6117d48a75628/Java_Sample_App_-_At_port_8080.png)

    **Additional Resource:** You can also use the [Contentstack Java SDK](/docs/developers/sdks/content-delivery-sdk/java/about-java-delivery-sdk/) to build a news app.


## More resources

-   [View and Download Java Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-java)
