https://fullstack-js-heroku-psql-dn-d-frontend.vercel.app/

This is the frontend part of my DnD-like project and the main reason that I did this project was to learn more about full stack apps and its parts, like DBs, sessions, auth proccesses and the back-to-front-to-back end conversation.

I've deployed it to Vercel and I am pretty happy with it, super easy and quick!

  - Frontend: ReactJS with Hooks
  - Backend: NodeJS/Express
  - Database: Heroku Postgres
  - Hosted at: Vercel and Heroku
  - Password encryption: bcrypt, no access tokens, logged in status is kept in the Context API
  - Login: user/password and Google
  - Responsive: yes
  - Accessibility: 

Don't mind the design! I know it is missing dark theme, reduced motion rules etc..., design was not the focus here.

I didn´t use custom hooks as I want to study a little more about on how to structure my code.

I wrote a couple of very basics tests using react test library and jest just to get the overall way of implementation.

No PWA as well since it wasn't my main concern here.

Implemented a basic Google login using the npm package react-google-login.

I chose not to implement a login token exchange in this project to keep things a bit more simple as I will read more on the subject and implement it on another project along with OAuth 2.0. 

The auth here proccess is a simple comparison using bcrypt, password + salt = hash and then test with hash and password = true or false.



I'm about to finish this project and start a new one, problably a online education plataform for university courses like specializations and masters and all. I will be using AWS, OAuth, login sessions, JWT, custom Hooks, Context API, maybe react-query, caching and the focus will be on getting better at Javascript and at structuring my React code. 

Feel free to fork it and PR, and I hope you enjoy this project as much as I did.

Thank you very much!



-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
