# ionic-starter-eventmaps

![ionic-starter-eventmaps](https://cloud.githubusercontent.com/assets/2264672/9698084/bf4d7c4e-53a7-11e5-8fc2-c8b87db876c9.png)

This is an addon starter template based on my [ionic-starter-requirejs template](https://github.com/KillerCodeMonkey/ionic-starter-requirejs) for the [Ionic Framework](http://ionicframework.com/). It is a base event app with the usage of Google Maps (custom directive).

## How to use this template

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project.

Or use the files from ionic market:
[Go](http://market.ionic.io/starters/event-app-and-maps)

It is a clean project without external dependencies!

## Configuring the project

1. go to the \www\app\controllers\ folder and open up the results.js with your favorite editor
2. Edit the following line to include your Google API key:

```javascript
$scope.apiKey = 'YOUR_API_KEY_HERE';
```

## Trying out the app

1. Issue ionic serve in your shell to try out the app in your regular local browser
2. Issue ionic run android / ios in your shell to try out the app in a real device

## Example data

Finding something in the demo content:
Type in 'Berlin', 'Ber', 'Sports' or 'Düsseldorf'

## Content

- Handling possible backend-requests in services -> add your backend easy and fast!
- mockdata
- simulate backend connections with promises and timeouts -> you can check possible loading spinners and so on
- simple and only a little bit scss styling
- usage of ionRefresher, infiniteScroll, ionSpinner, Popups, Modals -> if you are new in ionic you can see all this in action
- Custom little Google Maps directive to show map and markers (linked markers) -> no external library
- open native maps app via detail page
- open dialer for tel contact on detail page
- open mail app for email contact on detail page
- open browser for website on detail page
- random images :)

## Impressions

<img src="https://cloud.githubusercontent.com/assets/2264672/9698097/4bc21248-53a8-11e5-8020-19d0aa672eda.png" height="400">
<img src="https://cloud.githubusercontent.com/assets/2264672/9698096/4bbf74d4-53a8-11e5-8a66-e22af1ad4b9e.png" height="400">
<img src="https://cloud.githubusercontent.com/assets/2264672/9698098/4bc2dc00-53a8-11e5-8cbe-c1572679920c.png" height="400">
<img src="https://cloud.githubusercontent.com/assets/2264672/9698100/4bc6246e-53a8-11e5-8c2f-610c65e880e9.png" height="400">
<img src="https://cloud.githubusercontent.com/assets/2264672/9698101/4bc7cb3e-53a8-11e5-8743-a3ca5c053695.png" height="400">
<img src="https://cloud.githubusercontent.com/assets/2264672/9698099/4bc4a8b4-53a8-11e5-840e-e5ccfcda6672.png" height="400">
<img src="https://cloud.githubusercontent.com/assets/2264672/9698102/4bd8ec02-53a8-11e5-844b-0b199222718f.png" height="400">


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/KillerCodeMonkey/ionic-starter-eventmaps/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

