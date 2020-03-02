## DailyOS App Template

This template comes pre configured with tabs management, styled components and @dailykit/ui with structured folders.

### Installation

1. When creating a new repository, select this template to bootstrap you app.
2. Install the packages:
   -  With NPM
      `npm install`
   -  With Yarn
      `yarn`

### Project Structure

```
src
|
+-- views
|   --- Forms
|   |   +-- Role
|   |   +-- User
|   --- Listings
|   |   +-- RoleListing
|   |   +-- UserListing
|   --- Home
|   |   +-- index.jsx
```

All your forms goes inside `Forms` folder and similarly all the listing pages goes inside `Listings` folder. `Home` folder is where you can list different listing cards.

In order to add a new form, copy the existing form folder and update the `/users` path to the path you want to use and repeat the same in Listing pages as well.

For each listing/form page you'll have to create `Route` component for that path. Go into `sections/Main/index.jsx` file and add a Route component.

```js
// For Listing
<Route path="/users" exact> // Your path here
   <UsersListing /> // The page to render at that path
</Route>

// For Form
<Route path="/roles/:name"> // Your path here in place of 'roles'
   <RoleForm /> // Form page to render at that path
</Route>
```
