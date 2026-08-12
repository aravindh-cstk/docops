---
title: "[iOS] - Use SSL Pinning with iOS SDK"
description: Use SSL Pinning with iOS SDK
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/ios/use-ssl-pinning-with-ios-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - ios-developers
version: unknown
last_updated: 2026-03-25
---

# [iOS] - Use SSL Pinning with iOS SDK

This page explains how to implement SSL Pinning in the Contentstack iOS SDK using Swift or Objective-C by creating a delegate that conforms to `CSURLSessionDelegate`, attaching it to a `Config` object, and initializing a Stack instance with that configuration.

## Use SSL Pinning with iOS SDK

**SSL **(Secure Sockets Layer)** Pinning **is a security technique that involves incorporating the public key or a server's certificate into the client's code.

This technique ensures that the client only connects to the server that matches the pinned certificate or public key, which prevents Man-in-the-Middle (MITM) attacks. Even if an attacker can intercept the SSL traffic, they cannot modify it because they do not have access to the server's private key.

## Create Class Extending the CSURLSessionDelegate Protocol

### Objective-C

Perform the following steps to create a class extending the CSURLSessionDelegate protocol for Objective-C:

- Create a CustomSessionPinning.h file and add the following code:

```
#import

@interface CustomSessionPinning:  NSObject {

}
@end
```

- Create the CustomSessionPinning.m file and add the following code to implement the functions for the CSURLSessionDelegate protocol as below:

```
@implementation CustomSessionPinning
- (void)URLSession:(NSURLSession * _Nonnull)session didReceiveChallenge:(NSURLAuthenticationChallenge * _Nonnull)challenge completionHandler:(void (^ _Nonnull)(NSURLSessionAuthChallengeDisposition, NSURLCredential * _Nullable))completionHandler {
    // You can use following default pinning for server trust or implement SSL pinning here and call the completion handler

     NSURLSessionAuthChallengeDisposition disposition = NSURLSessionAuthChallengePerformDefaultHandling;
    __block NSURLCredential *credential = nil;

    if ([challenge.protectionSpace.authenticationMethod isEqualToString:NSURLAuthenticationMethodServerTrust]) {
        disposition = NSURLSessionAuthChallengeUseCredential;
        credential = [NSURLCredential credentialForTrust:challenge.protectionSpace.serverTrust];
    } else {
        disposition = NSURLSessionAuthChallengePerformDefaultHandling;
    }

    if (completionHandler) {
        completionHandler(disposition, credential);
    }
}
- (void)URLSession:(NSURLSession * _Nonnull)session task:(NSURLSessionTask * _Nonnull)task didReceiveChallenge:(NSURLAuthenticationChallenge * _Nonnull)challenge completionHandler:(void (^ _Nonnull)(NSURLSessionAuthChallengeDisposition, NSURLCredential * _Nullable))completionHandler {
// You can use following default pinning for server trust or implement SSL pinning here and call the completion handler
    NSURLSessionAuthChallengeDisposition disposition = NSURLSessionAuthChallengePerformDefaultHandling;
    __block NSURLCredential *credential = nil;

    if ([challenge.protectionSpace.authenticationMethod isEqualToString:NSURLAuthenticationMethodServerTrust]) {
        disposition = NSURLSessionAuthChallengeUseCredential;
        credential = [NSURLCredential credentialForTrust:challenge.protectionSpace.serverTrust];
    } else {
        disposition = NSURLSessionAuthChallengePerformDefaultHandling;
    }

    if (completionHandler) {
        completionHandler(disposition, credential);
    }
}
```

Let’s understand the terminologies used in this section:

- **CSURLSessionDelegate**: Default constructor that initializes a new instance of a class.
- **CustomSessionPinning.h**: This header file enables you to customize the session pinning functionality, which can include configuring pinning policies, specifying custom certificates or public keys for server identity validation, and implementing advanced features like certificate or public key pinning.
- **CustomSessionPinning.m**: This source code file accompanies the CustomSessionPinning.h header file. It contains the actual implementation code for the custom session pinning functionality provided by the SDK. It also contains any necessary configuration or initialization code that sets up the pinning functionality. You need to customize the code in this file to meet your specific needs.

## Swift

Perform the following steps to create a class extending the CSURLSessionDelegate protocol for Swift:

- Create a `CustomeSessionPinning.swift` file

To implement SSL pinning, create a new Swift file named `CustomSessionPinning.swift` and add the following code:

```
import Contentstack

class CustomSessionPinning: NSObject, CSURLSessionDelegate {

    func urlSession(_ session: URLSession, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping @Sendable (URLSession.AuthChallengeDisposition, URLCredential?) -> Void) {
        handleSSLPinning(for: challenge, completionHandler: completionHandler)
    }

    func urlSession(_ session: URLSession, task: URLSessionTask, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping @Sendable (URLSession.AuthChallengeDisposition, URLCredential?) -> Void) {
        handleSSLPinning(for: challenge, completionHandler: completionHandler)
    }

    private func handleSSLPinning(for challenge: URLAuthenticationChallenge, completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void) {
        guard let serverTrust = challenge.protectionSpace.serverTrust,
              let certificate = SecTrustGetCertificateAtIndex(serverTrust, 0),
              let localCertPath = Bundle.main.path(forResource: "YOUR_CERTIFICATE_NAME", ofType: "cer"),
              let localCertData = try? Data(contentsOf: URL(fileURLWithPath: localCertPath)) else {
            completionHandler(.cancelAuthenticationChallenge, nil)
            return
        }

        let serverCertificateData = SecCertificateCopyData(certificate) as Data

        if serverCertificateData == localCertData {
            let credential = URLCredential(trust: serverTrust)
            completionHandler(.useCredential, credential)
        } else {
            completionHandler(.cancelAuthenticationChallenge, nil)
        }
    }
}
```

## Create a Config Object and Add Delegate for CSURLSessionDelegate

The Config class is useful for providing configurations related to the stack. It also contains the configuration settings related to the SSL connection and the pinning process. You can initialize the Config object and add the delegate for CSURLSessionDelegate as shown below:

- Swift
- ObjC

```
let config = Config()
config.delegate = CustomSessionPinning()
```

```
Config config = [[Config alloc] init];
config.delegate = [[CustomSessionPinning alloc] init];
```

## Initialize the Stack Instance with Config Object

Initializing the Stack instance with a Config object allows you to customize the behavior of the Stack instance and fine-tune its functionality based on your specific needs. You can specify the options such as server host, region, branch, version and other settings that affect how the SDK interacts with the server and processes requests and responses.

You can add the following code to initialize the Stack instance with the Config object as shown below:

- Swift
- ObjC

```
let stack = Contentstack.stack(
    withAPIKey: "API_KEY",
    accessToken: "DELIVERY_TOKEN",
    environmentName: "ENVIRONMENT",
    config: config
)
```

```
Stack stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT" config:config];
```

## Common questions

### Do I need to implement SSL pinning logic, or can I use the default handling shown in the Objective-C example?
You can use following default pinning for server trust or implement SSL pinning here and call the completion handler.

### Where do I attach my `CSURLSessionDelegate` implementation?
You can initialize the Config object and add the delegate for CSURLSessionDelegate as shown below:
`config.delegate = CustomSessionPinning()`

### What certificate file does the Swift example expect?
It uses `Bundle.main.path(forResource: "YOUR_CERTIFICATE_NAME", ofType: "cer")`.

### How do I ensure the Stack uses my SSL pinning configuration?
Initialize the Stack instance with the Config object by passing `config: config` (Swift) or `config:config` (ObjC).