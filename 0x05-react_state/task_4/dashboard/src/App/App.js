import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications"; // Corrected import name
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
// AppContext and defaultUser are imported (user is aliased to defaultUser)
import { AppProvider, user as defaultUser } from "./AppContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Bind methods
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this); // Bind new method

    // Initial courses list
    this.listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    // Initialize state
    this.state = {
      displayDrawer: false,
      user: defaultUser, // Use the imported defaultUser for initial state
      // logOut function is now part of the App component methods, not passed directly into state initially
      // listNotifications is now part of the state
      listNotifications: [
        { id: 1, value: "New course available", type: "default" },
        { id: 2, value: "New resume available", type: "urgent" },
        { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
      ],
    };
  }

  // Login method
  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  // Logout method
  logOut() {
    this.setState({
      user: defaultUser, // Reset user to default (logged out) state
    });
  }

  // Method to display the drawer
  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true,
    });
  }

  // Method to hide the drawer
  handleHideDrawer() {
    this.setState({
      displayDrawer: false,
    });
  }

  // Method to handle keydown for logout shortcut
  handleKeyDown(e) {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out"); // Note: alert() is used as per original code. Consider a modal for better UX.
      this.logOut();
    }
  }

  // Lifecycle method: add event listener when component mounts
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  // Lifecycle method: remove event listener when component unmounts
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  // New method to mark a notification as read
  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  }

  render() {
    // Destructure state and props for easier use in render
    const { displayDrawer, user, listNotifications } = this.state;

    // Prepare context value
    const contextValue = {
      user: user,
      logOut: this.logOut, // Pass the logOut method from the component instance
    };

    return (
      // Provide context to children components
      <AppProvider value={contextValue}>
        <React.Fragment>
          {/* Notifications component now receives listNotifications from state and markNotificationAsRead method */}
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            markNotificationAsRead={this.markNotificationAsRead} // Pass the new function
          />
          <div className={css(bodyStyles.App)}>
            <Header />
            {/* Conditional rendering based on login status */}
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Some random text for news from the school.</p>
            </BodySection>
            <div className={css(footerStyles.footer)}>
              <Footer />
            </div>
          </div>
        </React.Fragment>
      </AppProvider>
    );
  }
}

// Aphrodite styles
const bodyStyles = StyleSheet.create({
  App: {
    position: "relative",
    minHeight: "100vh",
    fontFamily: "'Galano Grotesque Alt', sans-serif", // Example font
  },
});

const footerStyles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "3px solid #E11D3F",
    padding: "1rem 0", // Adjusted padding
    width: "100%", // Ensure footer spans width
    fontStyle: "italic",
    position: "absolute", // If you want it at the bottom always
    bottom: 0, // If you want it at the bottom always
    left: 0, // If you want it at the bottom always
  },
});

export default App;
