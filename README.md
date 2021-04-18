# 🥞 Tech Stack

_TypeScript, React, Redux, React Router, Formik, Tailwind CSS, Jest, React Testing Library_

I have chosen to use some open source libraries to help speed up development time and to limit myself to my understanding of the scope of the task, i.e. have nice tabbed form ui with validation which handles data. I don't want to get carried away on the intricacies of anyone task but offer a complete solution. 

* Scaffold the app with _[create react app](https://create-react-app.dev/docs/getting-started/#selecting-a-template)_ using the TypeScript template.

* For navigating tabs _[react router](https://reactrouter.com/web/guides/quick-start)_

* Pulling some help from _[formik](https://formik.org/docs/guides/validation)_ for validation and _[tailwind css](https://tailwindcss.com/docs/guides/create-react-app)_ for styling.

* Testing approach will come in the form of integration style test using _react testing library_ and unit tests to cover the redux state.

* Hosting the code on _git hub_ and using _[AWS amplify](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/?e=gs2020&p=build-a-react-app-intro)_ to host a version for your pleasure. 


# ✅ Todo

- [x] Initial Setup 
    - [x] create react app
    - [x] install redux (remember types)
    - [x] install react router
    - [x] install formik
    - [x] install tailwind
    - [x] setup git hooks  
- [] setup redux
    - [x] types (typescript)  
    - [x] action types (redux)
    - [x] action creators / tests
    - [x] reducer / tests
    - [x] store 
- [] create form components and functionality 
    - [] Form
    - [] FormField component (reusable)
    - [] validation
        - [] email
        - [] password (length > 9 / 1 number / least 1 upper / lowercase)
    - [] submit and done screen    
- [] create tabs component and functionality 
    - [] Tabs component
    - [] Tab component 
- [] Divide form into pages using tabs component
- [] write integration test
- [] add styling
- [] refactor and tidy up
- [] Deploy to AWS
 
# 📈 Data (inputs, output etc)
### initial state           
```js
{
    user: {
        name: '',
        role: '',
        email:'',
        password: '',
        recieveTrayUpdates: false,
        recieveOtherProductsCommunication: false,
    }
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
### copy
```
Receive updates about Tray.io product by email

Recieve communciation by email for other products created by the Tray.io team

Please verify your email address, you should have recieved an email from us already!
```

# Running the app

_Requires Node.js 12.13.0 or higher. (for tailwind)_

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



