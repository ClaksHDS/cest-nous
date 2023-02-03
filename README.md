# E-shop project of an existing website for the distillery C'est Nous

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies & Additional libraries

- React _v 18.2.0_
- React Router _v 6.6.2_
- Bootstrap _v 5.2.3_
- Axios _v 1.2.3_
- Dotenv _v 16.0.3_
- Styled Components _v 5.3.6_
- Stripe _v 11.8.0_
- React Icons _v 4.7.1_
- Airtable Node _v 0.1.20_

## Features and associated technologies

- **Serverless functions** : to fetch all products and single-product
- **Data base** : to create a base and table for the products with **Airtable**
- **Auth0** : to secure authentication
- **Stripe** : not fully installed but used to proceed to payment
- **FormSpree** : to set up the newsletter form
- **Bootstrap** : to create the sliders
- **View options** : for the products, the user can view the products with a list view or a grid view option
- **Filters options** : for the products, the user can filter the products by "categories" or "brand", and user a search input to search a product by name. The user can also load the product depending on the price (from lowest to highest) or the alphabetical order (from "a" to "z", and from "z" to "a").
- **Navigation** : when scrolling through the page, a button appears to allow the user to scroll to the top of the page and access the navigation bar (either a sidebar on mobile, or a standard navigation bar on desktop).
- **Payment** : the payment page only appears in the navigation bar once the use is authenticated on the website
- **Authentication** : the user can login and logout from the website using Auth0 (via his/her gmail, github, facebook, or created account). One a user logout, the basket is automatically emptied. If not login, once a user refresh or close the app, her/his basket is saved.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `netlify dev`

Runs the app in the production mode.\
Open [[http://localhost:8888](http://localhost:8888)] to view it in your browser

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
