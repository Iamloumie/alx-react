import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";

function App(isLoggedIn) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <main>
          {isLoggedIn ? <CourseList /> : <Login />}
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
