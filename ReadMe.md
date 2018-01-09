Here is the link to `express` documentation because you are going to need to heavily reference it to do this workshop.

http://expressjs.com/en/4x/api.html

## Step 1: Setup

### For this workshop you'll need a program called Postman to test your api routes.

You can find a link to download Postman here: https://www.getpostman.com/

### How to use Postman:

After installing and opening Postman, you'll notice a search bar and a drop down tab to the left of it. With the search bar we can select where and what route we will send a request to e.g. `localhost:8000/api/tweets`. With the drop down tab you can select what type of request you want to make to that api route. If you select the POST request, beneath the seach bar, you will find a series of tabs that read Authorization, Headers, Body, ..., and etc, probably in that order. Select the 'Body' tab, the 'raw' checkbox, and change 'Text' to 'JSON (application/json) in the dropdown. Now enter in a json object to send in the body with the post request.

## Step 2: Add Body-Parsing and Logging Middleware into app.js

Recommended reading: https://www.npmjs.com/package/body-parser and https://www.npmjs.com/package/volleyball.

### Run `npm install -s volleyball` and `npm install -s body-parser`

### Attach `volleyball` as our logging middleware to the `app` object in `app.js` with `app.use()`.

Once this is working, you'll be able to see request and response messages print out in your console.

### Attach `body-parser` middleware onto your app object using `app.use()` and passing in the body-parser object.

## Step 3: Creating the Tweet and User Routes

### Make all application routes go through /api/ with `app.use()`.

Before continuing, it would be a good idea to take a look at what is going on in `tweetStorage.js` and `userStorage.js` and the exported functions we are providing you. One thing to take critical note of, however, is that we are using server-side storage to act as our database, since you have not been taught that yet. Therefore, this storage exists in runtime memory and will RESET every time your server restarts (so don't panic when you successfully added something but then it somehow disappears later). Server-side storage is then obviously an extremely poor way of handling storage since we would want our users and tweets to persist, but there are some use cases for it. 

### Create `user.js` in the routes directory.

#### Create user routes for:
1. Getting all users. e.g. `GET /api/users`
2. Getting a user by name in the request parameters. e.g. `GET /api/users/jason`
3. Creating a user with POST. e.g. `POST /api/users`

Let's try adding a request query to 1. to filter the types of users we want. Let's have a `minSalary` and a `maxAge` to our query parameters: `/api/users/?minSalary=5&maxAge=30`

Make sure that the route works even if a query is not provided or only partial query is provided (e.g. only `minSalary`).

### Create `tweet.js` in the routes directory.

#### Create tweet routes for:
1. Getting all tweets. e.g. `GET /api/tweets`
2. Creating a tweet with POST. e.g. `POST /api/tweets`

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
