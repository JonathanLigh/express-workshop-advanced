

## Step 1: Setup

### For this workshop you'll need a program called Postman to test your api routes.

You can find a link to download Postman here: https://www.getpostman.com/

### How to use Postman:

After installing and opening Postman, you'll notice a search bar and a drop down tab to the left of it. With the search bar we can select where and what route we will send a request to e.g. `localhost:8000/api/tweets`. With the drop down tab you can select what type of request you want to make to that api route. If you select the POST request, beneath the seach bar, you will find a series of tabs that read Authorization, Headers, Body, ..., and etc, probably in that order. Select the 'Body' tab and the 'raw' checkbox and enter in a json object of keys and values to send with the post request.

## Step 2: Add Body-Parsing and Logging Middleware into app.js

Recommended reading: https://www.npmjs.com/package/body-parser and https://www.npmjs.com/package/volleyball.

### Run `npm install -s volleyball` and `npm install -s body-parser`

### Attach logging middleware using volleyball to the app object in app.js.

Once this is working, you'll be able to see request and response messages print out in your console.

### Attach body-parsing middleware onto your app object using app.use() and passing in the body-parser object.

## Step 3: Creating the Tweet and User Routes

### Make all application routes go through /api/ with `app.use()`.

### Create user.js in the routes directory.

#### Create user routes for:
1. Getting all users.
2. Getting a user by name.
3. Creating a user with POST.

### Create tweet.js in the routes directory.

#### Create tweet routes for:
1. Getting all tweets.
2. Creating a tweet with POST.

## Step 4: Error catching

After verifying your routes works as intended, you'll want to make sure they can handle all other errors eloquently without causing a hard crash through error catching functions.

### Add error catching functions to all your api routes.

### Add a "catch all" error catching middleware at the end of your middleware that sends back a 500 status.

## Step 5: Basic Authorization

### Add a file auth.js that exports a auth checking function

Essentially, have that function check if a password provided in the request matches with some "secret" passphrase.

### Use that function in the `/api/tweets/` POST route so only requests to that route with the correct password can post new tweets.

## Step 6: Extra Challenge

### Add PUT and DELETE routes for both tweets and users.

You'll have to update the tweetStorage.js and userStorage.js files with extra functionality. Good Luck!
