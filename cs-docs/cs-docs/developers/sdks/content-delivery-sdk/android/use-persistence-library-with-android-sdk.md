---
title: "[Android] - Use Persistence Library With Android SDK"
description: Contentstack’s Realm Persistence Library for Android SDK helps you save the app data on the device that it is being accessed on.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/android/use-persistence-library-with-android-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - android-developers
version: unknown
last_updated: 2026-03-26
---

# [Android] - Use Persistence Library With Android SDK

This page explains how to use Contentstack’s Realm Persistence Library with the Contentstack Android SDK to store and sync content locally on-device (including offline use). It is intended for Android developers integrating Contentstack content delivery with Realm-based persistence and should be used when setting up local storage, mapping content types to Realm models, and initiating sync.

## Use Persistence Library With Android SDK

Contentstack’s Realm Persistence Library for [Android SDK](/docs/developers/android/about-android-sdk) helps you save the app data on the device that it is being accessed on. This enables your app to serve data offline, i.e., even when it’s not connected to the internet.

This Persistent Library contains methods that are required to map data fields of your [content types](/docs/developers/create-content-types/about-content-types) and Realm for data storage.

Let’s look at how to use this library for your Contentstack-powered Android apps.

**Note**: If you have just started with Android SDK and Contenstack, we recommend reading more about [Realm](https://realm.io/docs/objc/latest/) and [Contentstack docs](https://www.contentstack.com/docs/) before proceeding with the following steps.

## Prerequisites
- [Android Studio](https://developer.android.com/studio/)
- [JDK version 8](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
- [Contentstack’s Android SDK](/docs/developers/android)

## Installation and usage
To sync data from Contentstack to Realm we need to first set up Realm and then [download](https://github.com/contentstack/contentstack-android-persistence/tree/master/app/src/main/java/com/contentstack) the wrapper folder. Let's go through the installation processes in detail.

### Set up Realm
To set up Realm in your application, perform the following steps:
- To add the Realm library to your project, first, add the classpath dependency to your project-level `build.gradle` file. You need to install Realm as a Gradle plugin as follows:

```
dependencies {
  classpath "io.realm:realm-gradle-plugin:5.4.0"
}
```

For the latest gradle file, refer to the [Realm document](https://realm.io/docs/java/latest).
- Apply the realm-android plugin to the top of the application level `build.gradle` file:
```
apply plugin: 'realm-android'
```
- Create a table for your content type. The class should be annotated with `@ClassClass(name = ‘provide_content_type_uid’)` and extend `RealmObject`.
- Create a table field like regular realm field name it as per your requirement. Mention about the field of the table `@RealmField(name=’field_id’)`.
- Unique ID (uid) is compulsory in every table. Mention it as follows:
```
@PrimaryKey()
@RealmField(name=’uid’)
private String uid;
```
- Simply drag the file at `SyncManager` module in your project package.

### Install Contentstack Android SDK and SyncManager
As you are now done setting up the Realm SDK, let's look into the Contentstack SDK setup.
- Download and set up the [Contentstack Android SDK](/docs/developers/android/about-android-sdk).
- [Download](https://github.com/contentstack/contentstack-android-persistence/tree/master/app/src/main/java/com/contentstack) the sync wrapper files and unzip it. This folder contains the following four files:
`RealmStore.java`
- `SyncManager.java`
- `SyncPersistable.java`
- `SyncStore.java`

Add this folder to your project.

## Map data
To start mapping of data, first, you need to [create a content type](/docs/developers/create-content-types/create-a-content-type) schema (in Contentstack) as per your app design and [create entries](/docs/content-managers/working-with-entries/create-an-entry). For your convenience, we have already created the necessary content types. [Download](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blt22c7854cf498d3bb/5ea04c6a6a64bf2a22a111ff/schema.zip) them and import them to your app’s stack in Contentstack.

Next, create entries for the imported content types. In order to sync this data with Realm, we need to add data mappings. The three important items to be mapped in our Synchronization process are as follows:
- Sync token/Pagination token
- Entries
- Assets

Let’s look at how each of the above can be mapped.

### Sync token mapping
To save sync token and pagination token, you need the `SyncStore` table which will manage the storage and retrieval of updated sync token and pagination token.

```
if (stackResponse.getPaginationToken()!=null){
    persistsToken(stackStack.getPaginationToken());
}else{
    persistsToken(stackStack.getSyncToken());
}

```

### Entry mapping
To begin with, let’s consider an example of our Conference app. Let’s say we have two content types: `Session` and `Speaker`. And, the ‘Session’ content type has a reference field that refers to multiple entries of the Speaker content type. Let’s see how to implement this example.

Create a table class named `Session` extending `RealmObject`, and add following code to implement `EntityFields` as shown below:

```
// @RealmClass accepts ("name= "content_type_uid"")
@RealmClass(name = "session")
public class Session extends RealmObject {
    ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** *
    // Mandatory fields
    @PrimaryKey
    @RealmField(name = "uid")
    private String uid; **
    ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** *
    //Note: the annotation name will be content_type's field id
    @RealmField(name = "title")
    //user defined fields may be anything of user liking.
    private String mTitle;
    @RealmField(name = "is_popular")
    private String mIsPopular;
    @RealmField(name = "type")
    private String mType;
    @RealmField(name = "session_id")
    private String mId;
    @RealmField(name = "tags")
    private String mTags;
    @RealmField(name = "locale")
    private String mLocale;
    @RealmField(name = "speakers")
    private RealmList  speaker;
    @RealmField(name = "track")
    private String mTrack;
    @RealmField(name = "start_time")
    private String mStartTime;
    @RealmField(name = "end_time")
    private String mEndTime;
    @RealmField(name = "room")
    private Room mRoom;
    ...Generated getters and setters...
}

```

You also need to implement the fieldMapping function which returns the mapping of attributes and entry fields in Contentstack.

Similarly, we can add other entity and mapping for each entity.

### Asset mapping
To map Assets, create a table for assets named SysAssets and extend RealmObject. Add the following code to implement AssetProtocol.

```
@RealmClass(name = "sys_assets")
public class SysAssets extends RealmObject {
    ** ** ** ** ** ** ** ** ** ** ** ** **
    // Mandatory fields
    @PrimaryKey
    @RealmField(name = "uid")
    private String uid; **
    ** ** ** ** ** ** ** ** ** ** ** ** **
    // Note: the annotation name will be content_type's field id
    @RealmField(name = "created_at")
    //user defined fields may be anything of user liking.
    private String created_at;
    @RealmField(name = "updated_at")
    private String updated_at;
    @RealmField(name = "created_by")
    private String created_by;
    @RealmField(name = "updated_by")
    private String updated_by;
    @RealmField(name = "content_type")
    private String content_type;
    @RealmField(name = "file_size")
    private String file_size;
    @RealmField(name = "tags")
    private String tags;
    @RealmField(name = "filename")
    private String filename;
    @RealmField(name = "url")
    private String url;
    @RealmField(name = "is_dir")
    private String is_dir;
    @RealmField(name = "parent_uid")
    private String parent_uid;
    @RealmField(name = "_version")
    private String version;
    @RealmField(name = "title")
    private String title;
    @RealmField(name = "publish_details")
    private String publish_details;
    ...Generated getters and setters...
}

```

Now, our final step is to initiate SyncManager and begin with the Sync process.

## Initiate SyncManager and Sync
Finally, after setting up the content mapping, initiate SyncManager. It takes Stack instance and Helper class instance as follows:

```
//Get stack instance as follows
Stack stack = Contentstack.stack(context, "api_key", "access_token", "environment");
//Get realm instance as follows
Realm realmInstance = Realm.getDefaultInstance();
//Get realmStore instance by passing realmInstance to its constructor as follows
RealmStore realmStore = new RealmStore(realmInstance);
SyncManager syncManager = new SyncManager(realmStore, stack);
syncManager.stackRequest();
```

## More resources
- [View and Download Android SDK repository on GitHub](https://github.com/contentstack/contentstack-android)

## Common questions

### What does the Realm Persistence Library enable in an Android app?
It helps you save the app data on the device that it is being accessed on so your app can serve data offline.

### What are the three important items to be mapped in the synchronization process?
- Sync token/Pagination token  
- Entries  
- Assets  

### What do I need to download for SyncManager support?
You need to [download](https://github.com/contentstack/contentstack-android-persistence/tree/master/app/src/main/java/com/contentstack) the sync wrapper files: `RealmStore.java`, `SyncManager.java`, `SyncPersistable.java`, and `SyncStore.java`.

### How do you initiate the sync process?
Create `Stack`, `Realm`, and `RealmStore` instances, then create `SyncManager` and call `syncManager.stackRequest();`.

Filename: android-use-persistence-library-with-android-sdk.md