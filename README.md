# 🚀 Installing the APP
```
git clone git@github.com:freddieduffield/tray-registration-form.git
cd tray-registration-form
npm i
```

# 💨 Running the ap

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

# 🥞 Tech Stack

_TypeScript, React, Redux, React Router, Formik, ~~Tailwind CSS~~, Jest, React Testing Library_

I have chosen to use some open source libraries to help speed up development time and to limit myself to my understanding of the scope of the task, i.e. have nice tabbed form ui with validation which handles data. I don't want to get carried away on the intricacies of anyone task but offer a complete solution.

- Scaffold the app with _[create react app](https://create-react-app.dev/docs/getting-started/#selecting-a-template)_ using the TypeScript template.

- For navigating tabs _[react router](https://reactrouter.com/web/guides/quick-start)_

- Pulling some help from _[formik](https://formik.org/docs/guides/validation)_ for validation and _[tailwind css](https://tailwindcss.com/docs/guides/create-react-app)_ for styling.

- Testing approach will come in the form of integration style test using _react testing library_ and unit tests to cover the redux state.

- Hosting the code on _git hub_ and using _[AWS amplify](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/?e=gs2020&p=build-a-react-app-intro)_ to host a version for your pleasure.

# ✅ Todo

- [x] Initial Setup
  - [x] create react app
  - [x] install redux (remember types)
  - [x] install react router
  - [x] install formik
  - [x] install tailwind
  - [x] setup git hooks
- [x] setup redux
  - [x] types (typescript)
  - [x] action types (redux)
  - [x] action creators / tests
  - [x] reducer / tests
  - [x] store
- [] create form components and functionality
  - [x] UserForm
  - [x] PrivacyForm
  - [x] validation
    - [x] email
    - [x] password (length > 9 / 1 number / least 1 upper / lowercase)
  - [] Make forms reusable
  - [x] submit and done screen
- [x] create tabs component and functionality
  - [x] Tabs component
  - [x] Tab component
- [x] Divide form into pages using tabs component
- [] write integration test
- [x] add styling
- [x] refactor and tidy up
- [] Deploy to AWS

# 📈 Data (inputs, output etc)

### initial state

```js
{
  name: '',
  role: '',
  email:'',
  password: '',
  recieveTrayUpdates: false,
  recieveOtherProductsCommunication: false,  
}
```

### Expected output

```js
{
  'name': 'Freddie',
  'role': 'Software Engineer',
  'email':'freddie@gmail.com',
  'password': 'password',
  'recieveTrayUpdates': true,
  'recieveOtherProductsCommunication': true,
}
```
## Questions  
● **How you would change the configuration of a certain page**

_My approach is to create base components i.e those contained in the `Form` & `Tabs` directory that contain no business logic. They will for the building blocks for specific screens. The configuration of a page can modified at the specific component level e.g `UserForm`_

● **How you would add new pages**

_Using `react-router` makes adding new page a process of adding a new `Tab` link component and the new page component into the router `switch` statement in the `App` component_

● **How you would implement going back a page**

_Again `react-router` comes in handy here as each page a designated path in the URL. You can nativgate backward using the browser back button_  


## Reflections

### 😀 what went well

* Got the project up and running with little issues 
* Wrote some tests for the redux state   
* Build a functioning form GUI which `console.log`s the form data.
* Switching quickly to use basic CSS on realising Tailwind.css would take too much time to get up to speed with.

### 😬 what didn't go well

* Using libraries I am unfamiliar with, i.e tailwind and formik. Both of these "time saving measures" probably took up more time than I would have liked.
* Not testing the application thoroughly enough.  
* the styling is a bit basic and could have been better organised

### ♻ what I would do if I had more time or a chance to start over
* Keep it simple for the start and not use any libraries that are new to me. Some times my curiosity gets the better of me 🤓
* Write an integration test of the whole application using `react-testing-library`. This test would go through each form and fill each field using `fireEvent`.
* time-box each section to ensure not neglecting something at the end e.g. tests (or even better TDD!)
* Improve typing with `typescript`, e.g the `User` type could be more flexible?!. I am still relatively new to `typescript` learning better ways of doing on a daily basis.
* Make the components more reusable and extensible by writing the form code natively without `Formik`.
* Lock the done tab until the form has been filled 




