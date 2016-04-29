---
layout: post
title: Go Tripod Go Serverless With React Native and Amazon Web Services
published: true
---

This post was original published [on my blog](https://colinramsay.co.uk/2016/04/29/go-serverless.html).

Amazon's cloud offering, AWS, provides a wealth of resources for developers and infrastructure engineers. In this article, I'll show how [Amazon Cognito](aws.amazon.com/cognito/) can be used to record user preferences and data without having to set up a server or database. I'll build a small React Native application which allows a user to log in with Facebook and save some data to the cloud for later retrieval.

## Facebook Login

Prerequisites:

- Install npm and CocoaPods if you don't have them already
- Install [React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)
- Create a new Facebook iOS app in the [developer centre](https://developers.facebook.com/apps/)

Let's start by creating our React Native project and entering the project directory:

```
react-native init FacebookAwsReactNative
cd FacebookAwsReactNative
```

Let's install the [Facebook React Native SDK](https://github.com/facebook/react-native-fbsdk) via npm, that'll give us a nice login button for free:

```
npm install --save react-native-fbsdkcore react-native-fbsdklogin
```

We need to install some native code to make this work, so let's do that with CocoaPods. First we create a Podfile:

```
cd ios
pod init
```

Edit the file which was just created at FacebookAwsReactNative/ios/Podfile and add the following:

```
source 'https://github.com/CocoaPods/Specs.git'
pod 'React', :subspecs => ['Core', 'RCTImage', 'RCTNetwork', 'RCTText', 'RCTWebSocket'], :path => '../node_modules/react-native'
pod 'react-native-fbsdkcore', :path => '../node_modules/react-native-fbsdkcore'
pod 'react-native-fbsdklogin', :path => '../node_modules/react-native-fbsdklogin'
pod 'react-native-fbsdkshare', :path => '../node_modules/react-native-fbsdkshare'
```

You *may* need to perform some other steps here, as per the [Facebook documentation](https://github.com/facebook/react-native-fbsdk#option-using-cocoapods). Go and have a read of that section just in case. Let's install the pods and then we'll have to faff around in Xcode for a bit.

```
pod install
open FacebookAwsReactNative.xcworkspace
```

Notice that we now use the xcworkspace file rather than the xcodeproj file; this is required for CocoaPods to do its thing.

## Xcode Is Quite Horrible Really

Expand the FacebookAwsReactNative > Libraries folder and select all of the items in there and delete the references to them. This is because we've opted to use CocoaPods for React Native (see the `pod 'React'` line we added to the Podfile) so the items in Libraries are duplicates.

Let's move on to configuring the Facebook SDK. Open up info.plist using Open As > Source Code, and add the follow inside the root `<dict>` node:


```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>fb{your-app-id}</string>
    </array>
  </dict>
</array>
<key>FacebookAppID</key>
<string>{your-app-id}</string>
<key>FacebookDisplayName</key>
<string>{your-app-name}</string>
```

Next, open AppDelegate.m and add a new import:

```objc
#import <FBSDKCoreKit/FBSDKCoreKit.h>
```

Connect our AppDelegate to the FBSDKApplicationDelegate by adding the following to `didFinishLaunchingWithOptions`:

```objc
[[FBSDKApplicationDelegate sharedInstance] application:application
    didFinishLaunchingWithOptions:launchOptions];
```

And finally, add a method to allow us to navigate back to our app from Facebook:

```objc
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  return [[FBSDKApplicationDelegate sharedInstance] application:application
    openURL:url
    sourceApplication:sourceApplication
    annotation:annotation
  ];
}
```

Wonderful. Run the project and get your simulator running because we're now ready to add our login button.

## Push The Button

We need to import the button component, and at the same time we'll import another class that we'll use later. Add the following:

```jsx
import { FBSDKAccessToken } from 'react-native-fbsdkcore';
import { FBSDKLoginButton } from 'react-native-fbsdklogin';
```

Delete all of the default stuff inside the `<View>` component and replace it with the button code:

```jsx
<FBSDKLoginButton
    onLoginFinished={this.onLoginFinished}
    onLogoutFinished={this.onLogoutFinished=}
    readPermissions={[]}
    publishPermissions={['publish_actions']}/>
```

We now need to add `onLoginFinished` and `onLogoutFinished` methods to our FacebookAwsReactNative class.

```jsx
onLogoutFinished() {
    alert('Logged out.');
}
```

Simple!

```jsx
onLoginFinished(error, result) {
    if (error) {
        alert('Error logging in.');
    } else {
        if (result.isCancelled) {
            alert('Login cancelled.');
        } else {
            alert('Login success!');
        }
    }
}
```

Less simple, but pretty self-explanatory. At this point, you should be able to run the app and login via Facebook, with the various alert messages firing as appropriate.

But we want to take one more step; we want to be able to link this login to persistent data stored on Amazon Cognito. This needs two steps: firstly to get a unique token to identify the Facebook login, and secondly, to sync local data up to Cognito. Fortunately this becomes super-easy thanks to the Amazon SDK and the [React Native Cognito](https://github.com/morcmarc/react-native-cognito) project.

First, we need to get an access token from Facebook to use as a link between FB and Cognito. `FBSDKAccessToken.getCurrentAccessToken` takes a single callback argument which is passed the token we need. We then need to install (follow the [instructions](https://github.com/morcmarc/react-native-cognito)) and import React Native Cognito. Add this along with your other import statements:

```jsx
import Cognito from 'react-native-cognito';
```

Next, we initialise the credentials for Cognito and sync up some data!

```jsx
FBSDKAccessToken.getCurrentAccessToken((token) => {
    if (token) {
        Cognito.initCredentialsProvider(
            awsIdentityPoolId,
            token.tokenString,
            awsRegion);

        Cognito.syncData('testDataset', 'key', 'value', (err) => {
            // success!
        });
    }
});
```

You'll need to have created a Federated Identity Pool and set up Facebook as an Authentication Provider. Populated the `awsIdentityPoolId` and `awsRegion` variables accordingly and the above code can be run at any point after a successful login.

Visit the Identity Pool in the AWS Console and you'll see a dataset called "testDataset" with a single key/value entry.

This has been a whistlestop tour on moving to a serverless setup with Facebook logins and Amazon Cognito. The full code [can be found on GitHub](https://github.com/colinramsay/react-native-cognito-example).
