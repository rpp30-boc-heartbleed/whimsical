<!-----------------------------PROJECT LOGO ------------------------>
<div align="center">
<img src="client/assets/icons/Logo.png" alt="Bagel Logo">
</div>

<h1 align="center"> Quick Bagel </h1>

<p align="center">
"This guy <i>keeps</i> forgetting my bagels."
- <b>Tom from Myspace </b>
</p>

<p align="center">
<b>Quick Bagel</b> is a mobile application for you to streamline errands and pay good deeds forward!
</p>

<!--------------------- PROJECT SHIELDS ---------------------------->
<div align='center'>
<a href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt">
<img alt="NPM" src="https://img.shields.io/npm/l/nodemon?style=for-the-badge">
</a>
</div>


## 📑 Table of Contents
<!------------------------ TABLE OF CONTENTS ----------------------->
* [Installation](#installation)
    - [Getting Started](#getting-started)
* [Tech Stack](#tech-stack)
* [How it Works](#how-it-works)
    - [User Stories](#user-stories)
    - [Demo](#demo)
* [Features](#features)
* [Resources](#resources)

<!--------------------END OF TABLE OF CONTENTS---------------------->

## About the App
<!-- Add any additional content here pertaining to timeline, personal goals, etc-->

This application will allow the community to save time while running errands for one another.
<!--
* What problem does it solve? Who uses it?
* Why was it built?
* User Inputs and Outputs
-->

## Installation

1. Fork and clone the repo:
```
$ git clone https://github.com/rpp30-boc-heartbleed/whimsical.git
```
2. Install NPM packages from both the root and client directories:
```
$ npm install
```

### Getting Started

1. Start the server from the root directory and confirm connection to database:
```
$ npm start
```
2. Start the the application from the client directory:
```
$ expo start
```

3. To test, in the client directory run:
```
$ npm test
```
<p align="right">(<a href="#top">back to top</a>)</p>


<!---------------------- TECH STACK/LIBRARIES----------------------->
## Tech Stack

<!-- May include logos if desired -->

### Frontend
* <a href='https://reactnative.dev/'>React Native</a>
* <a href='https://recoiljs.org/'>Recoil</a>
* <a href='https://docs.expo.dev/'>Expo</a>


### Backend

* <a href='https://expressjs.com/'>Express</a>
* <a href="https://nodejs.org/en/">Node.js</a>
* <a href="https://nodejs.org/en/">socket.io</a>


### Database
* <a href='https://www.mongodb.com/'>MongoDB</a>
* <a href='https://firebase.google.com/'>Firebase</a>

<p align="right">(<a href="#top">back to top</a>)</p>


<!--------------------------APP INFO & DEMO ------------------------>
## How it Works

<!--
* What happens behind the scenes when the user interacts with it?
* OR What are all the places the data travels?  What happens to that data?
-->

### User Stories

<!-- What were the user stores / what was MVP (mention Minimal Viable Product) -->

<!-- Should provide visuals and writeups on user stories but will leave link as placeholder for now-->
📖   <a href="https://docs.google.com/spreadsheets/d/1heVGbScj-MP8areUMJkZk7aNSUPD_GR8Hwmd6uMnrQ8/edit#gid=484004821">Acceptance Criteria
</a>

### Testing
* [Jest](https://jestjs.io/)
* [React Native Testing Library](https://github.com/callstack/react-native-testing-library)


## Demo

<br>

<p align='center'>
    <img src="https://github.com/rpp30-boc-heartbleed/whimsical/blob/dev/trial2.gif" width="300" height="600">
  </p>
  
  <br>
  
1. Login and registration information (email and password) is authenticated utilizing the Firebase API. 
<pre>
If registering, the user's account information (less their password), is saved in MongoDB while their email and password are saved in Firebase.
</pre>

<br>

2. Once authenticated, the user is taken to the Dashboard, which is populated by errand posts saved in MongoDB. 
  <pre>
  This list of errands is retrieved from MongoDB upon loading the app and saved in the Recoil global state.
  </pre>

<br>

<div align='center'>
</div>

3. On each respective post, the user can click the chat button, which enables them to chat with the errand runner utilizing socket.io. 


<div align='center'>
<img src="https://user-images.githubusercontent.com/56424589/149733765-3e2b6af4-e937-48f5-b77a-0595edf3e956.gif" width="300" height="600">&nbsp;&nbsp;
 <img src="https://user-images.githubusercontent.com/56424589/149737236-6d1ef9d8-3b6f-4c66-bb4c-fa5e3c48f1a1.gif" width="300" height="600">
</div>

<br>
<br>

4. The user can also click on the errand tracker which utilizes Google Maps to display a map of the errand runner's location and tracks their progress running the posted errand.

<br>


5. To post an errand to the Dashboard, the user can click on the 'add errand' button in the navbar and fill out a form. 
<pre>
The data is then saved in MongoDB and added to the Dashboard errand list.
</pre>

<br>
<br>

<div align='center'>
<img src="https://user-images.githubusercontent.com/56424589/149731039-4743cb3b-87b2-4160-b6fe-a54ad841fdd2.gif" width="300" height="600">&nbsp;&nbsp;
  
</div>

<br>
<br>

6. The user can update their profile by clicking on the User Profile button in the navbar. 
<pre>
They can update their profile information in MongoDB, as well as update their email and password in Firebase.
</pre>


<br>


7. Lastly, the user can then return to the Dashboard via a link in the navbar and signout via Firebase. They will then return to the Login screen.
<!--
* Optionally include a diagram
* How does the tech stack come together?
-->

<p align="right">(<a href="#top">back to top</a>)</p>

<!------------- TECHNICAL & UNEXPECTED CHALLENGES ------------------>
## 🎯 Challenges
<!--
* Why, what was the plan to overcome those challenges?
* What did you learn?
-->
We anticipated that there would be some differences between using React Native as distinguished from React, and gave ourselves time to review documentation and become familiar with React Native's syntax and structure. Howver, we learned that the difference goes beyond just the React and React Native frameworks because the Expo platform we used to build the code presented challenges beyond just writing with React Native.
<!--For unexpected Challenges:
* Why was it a challenge?
* What did you learn?
-->
We learned that many dependencies and APIs have different configurations to be used with android versus iOS, so we had to do extra research, experimentation, and modification in order to use these dependencies and APIs with a single configuration for Expo to build for both android and iOS at the same time.

🌊 <b>Technical Challenges</b>

Configuring Firebase SDK to work with Expo without converting the app.json file to a config.js file per the documentation as this would interfere with other aspects of the app worked on by teammates.

🔨 <b> Actions Taken </b>

Utilized the babel.config.js to declare a path for environmental variables to be used by Firebase and created an independent firebase config file.

💡 <b> Results Observed </b>

Able to authenticate users logging in or registering on React Native with Expo app without breaking configurations set up for other APIs.

<p align="right">(<a href="#top">back to top</a>)</p>


<!----------------------- RESEARCH & WORKFLOW ---------------------->
## 📘 Research

<!-- Workflow and Key lessons from your team - specifically those related to: Agile, CI/CD, testing, working with external stakeholders, ticketing, and user stories. -->
Everyone needs to be on the same page as to what features will be included and how the app will flow to ensure full integration of components and that client needs are met. 
* This may require far more time and communication than a standard daily standup, especially in the beginning, but is well worth the investment of extra time to minimize unnecessary pivots and expensive refactoring during the building process.
* Discussing the user story as a narrative and as a diagram was extremely helpful to clarify what features to include, how they related to each other, and who would be responsible for them respectively.
<!--
* Your git workflow, style guides, commit guides, etc
* What did you learn from the process
* What were key takeaways from stand ups, code reviews, etc
* Writing tests
* Link to your project board, discuss completed tickets
-->

📂 <a href="https://trello.com/b/yvrqtpK9/rpp30-boc-heartbleed"> Project Board
</a>

<p align="right">(<a href="#top">back to top</a>)</p>

<!------------- OPTIMIZATIONS, REFACTORINGS, & FEATURES ------------>
## Features

<!-- Any non-MVP tickets (optional)
Code refactorings
Performance Optimizations
Additional features
etc -->

<!-- Notes from your Sprint Retro
What additional features do you plan to add, how do you plan to implement those features?
* Future refactoring?
* Additional dev ops considerations?
* UI/UX additions? -->

<!-- Examples: websockets (socket.io) -->
- [x] Login & Registration with Authentication
- [x] Chat Functionality
- [x] Active Errand List
- [x] Errand Tracker
- [x] User Profile
- [ ] Real Time GeoLocation
- [ ] Errand Completion Feedback Form


<!---------------------------CONTRIBUTORS -------------------------->
## 🎉 Team

[![Ryan Avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/64623933?v=4&h=60&w=60&fit=cover&mask=circle&maxage=7d)](https://github.com/ryhorowitz)
[![Justin Avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55521671?v=4&h=60&w=60&fit=cover&mask=circle&maxage=7d)](https://github.com/shabbyblue16)
[![Ojeiku Avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/77039479?v=4&h=60&w=60&fit=cover&mask=circle&maxage=7d)](https://github.com/OjeikuA)
[![Aaron Avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/73043618?v=4&h=60&w=60&fit=cover&mask=circle&maxage=7d)](https://github.com/aaronfife)
[![Surekha Avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/71471412?v=4&h=60&w=60&fit=cover&mask=circle&maxage=7d)](https://github.com/surekhaw)
[![Louisa Avatar](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/56424589?v=4&h=60&w=60&fit=cover&mask=circle&maxage=7d)](https://github.com/Laweeza)


<!----------------- OPTIONAL RESOURCES SECTION --------------------->
## Resources
* [Recoil](https://recoiljs.org/docs/introduction/installation)
* [React Native](https://reactnative.dev/docs/getting-started)
* [Expo](https://docs.expo.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>
