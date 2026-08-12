---
title: "Use SSL Pinning with Swift SDK"
description: "Enhance security in your Swift app by implementing SSL pinning with the Contentstack SDK."
url: /developers/sdks/content-delivery-sdk/ios/use-ssl-pinning-with-swift-sdk
---

# Use SSL Pinning with Swift SDK

## Use SSL Pinning with Swift SDK

Secure Sockets Layer (SSL) Pinning is a security technique that involves incorporating a public key or a server's certificate into the client's code.

This technique ensures that the client only connects to the server that matches the pinned certificate or public key, which prevents Man-in-the-Middle (MITM) attacks. Even if an attacker can intercept the SSL traffic, they cannot modify it because they do not have access to the server's private key.

## Prerequisites

-   Install and configure the [Contentstack Swift SDK](/docs/developers/sdks/content-delivery-sdk/swift/reference)
-   Ensure you have a valid .cer certificate file for cdn.contentstack.io or your custom domain

## Steps to Enable SSL Pinning

To enable SSL pinning into your project, perform the following steps:

### -   Add Certificate to your Project

Download the SSL certificate for your domain using a browser or the openssl command-line tool. Save the file as cdn.contentstack.io.cer.

To incorporate this certificate into your Xcode project, perform the steps below:

1.  Open your Swift project in Xcode.
2.  Drag the .cer certificate file into your project’s file navigator.
3.  Confirm the certificate is properly associated with your app target.

### -   Create a Custom URL Session Delegate

Create a custom delegate class that conforms to CSURLSessionDelegate and handles certificate validation:

```
import Foundation
import ContentstackSwift

class CustomSessionPinning: NSObject, CSURLSessionDelegate {


    func urlSession(_ session: URLSession,
                    didReceive challenge: URLAuthenticationChallenge,
                    completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void) {


        guard challenge.protectionSpace.authenticationMethod == NSURLAuthenticationMethodServerTrust,
              let serverTrust = challenge.protectionSpace.serverTrust else {
            completionHandler(.cancelAuthenticationChallenge, nil)
            return
        }

        guard let certPath = Bundle.main.path(forResource: "cdn.contentstack.io", ofType: "cer"),
              let localCertData = try? Data(contentsOf: URL(fileURLWithPath: certPath)),
              let localCert = SecCertificateCreateWithData(nil, localCertData as CFData) else {
            completionHandler(.cancelAuthenticationChallenge, nil)
            return
        }

        guard let serverCert = SecTrustCopyCertificateChain(serverTrust) as? [SecCertificate],
              let serverCertData = SecCertificateCopyData(serverCert[0]) as Data? else {
            completionHandler(.cancelAuthenticationChallenge, nil)
            return
        }

        if serverCertData == localCertData {
            completionHandler(.useCredential, URLCredential(trust: serverTrust))
        } else {
            completionHandler(.cancelAuthenticationChallenge, nil)
        }
    }
}
```

### -   Configure the SDK with Your Custom Delegate

To enable SSL pinning in your app, assign your custom URL session delegate to a ContentstackConfig object. This setup ensures all connections are validated against the pinned certificate

```
var config = ContentstackConfig()
config.urlSessionDelegate = CustomSessionPinning()
```

### -   Initialize the Stack Instance with the Config Object

Complete your SSL pinning setup by initializing the Contentstack stack with your custom configuration. This ensures secure communication based on your specified domain and environment.

Use the following code to initialize the Stack instance with the configured ContentstackConfig object:

```
let stack = Contentstack.stack(
apiKey: "API_KEY",
deliveryToken: "DELIVERY_TOKEN",
environment: "ENVIRONMENT",
config: config )
```

You have successfully implemented SSL pinning with the Contentstack Swift SDK. This ensures robust security, significantly reducing the risk of attacks and protecting the integrity of your application's data.
