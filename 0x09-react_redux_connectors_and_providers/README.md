📦 React Redux Connectors and Providers

This project explores how to effectively use React Redux connectors and providers in a modern application.
It covers mapping state and actions to components, working with middleware like Redux Thunk, improving performance with Reselect, and debugging using Redux DevTools.

🎯 Learning Objectives

    Understand Redux connectors and how to use them.

    Learn how to pass functions to connectors:

        mapStateToProps

        mapDispatchToProps

    Map action creators (including async ones) to components using Redux Thunk.

    Set up the Redux Provider and application store.

    Improve connector performance using Reselect.

    Use Redux DevTools to debug state and actions.

✅ Task List
🔹 Store and State Management

Create a small store

Test mapStateToProps

Update mapStateToProps

Connect your action creators (mandatory)

Refactor your code

    Update your tests

🔹 Async Actions and Thunk Middleware

Implement async actions with Thunk

Connect LoginRequest to the App component (mandatory)

Connect user state to the Footer

Connect Logout action creator to the Header

Modify the uiReducer

    Modify the test suites

🔹 Redux DevTools

    Learn and use the Redux Chrome Extension for state debugging

🔹 Combine Reducers and Enhance Store

Combine store with a root reducer

Modify the app to use the combined store

    Write tests for combined store logic

🔹 Notifications Module

Create and connect a new notifications action creator

Improve and connect the notifications reducer

Clean up and update the notifications logic

    Update the test suites accordingly

🔹 Selectors and Memoization

Create course selector functions

Create a fetchCourses function

Connect the Courses component

Optimize selectors using Redux Reselect

    Update UI and test suites to reflect changes

🧠 Container vs. Component Pattern

This repo emphasizes the separation of containers (smart components connected to Redux) and presentational components (stateless and purely visual),
ensuring code is clean, testable, and scalable.
