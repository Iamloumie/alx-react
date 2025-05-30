import React from "react"; // Changed from 'Component' to 'React.PureComponent' implicitly by using React.PureComponent
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";

// Changed to PureComponent for performance optimization
class Notifications extends React.PureComponent {
  // constructor and markAsRead binding are removed as markAsRead is now a prop
  // shouldComponentUpdate is removed as PureComponent handles shallow prop/state comparison

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead, // Use the prop passed from App
    } = this.props;

    const menuPStyle = css(
      displayDrawer ? styles.menuItemPNoShow : styles.menuItemPShow
    );

    return (
      <>
        <div
          className={css(styles.menuItem, styles.hoverAnimation)} // Added hover animation class
          id="menuItem"
          onClick={handleDisplayDrawer}
          data-testid="menuItem" // Added for testing
        >
          <p className={menuPStyle}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div
            className={css(styles.notifications, styles.borderAnimation)} // Added border animation class
            id="Notifications"
            data-testid="notifications" // Added for testing
          >
            <button
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                right: 20,
                top: 10, // Adjusted for better positioning
                cursor: "pointer", // Added for better UX
              }}
              aria-label="close"
              onClick={handleHideDrawer}
              id="closeNotifications"
            >
              <img
                src={closeIcon}
                alt="close-icon"
                className={css(styles.notificationsButtonImage)}
              />
            </button>
            {listNotifications.length > 0 && ( // Only show "Here is the list..." if there are notifications
              <p className={css(styles.notificationsP)}>
                Here is the list of notifications
              </p>
            )}
            <ul className={css(styles.notificationsUL)}>
              {listNotifications.length === 0 ? ( // Corrected condition check
                <NotificationItem
                  type="default" // Provide a type for default message
                  value="No new notification for now"
                  // markAsRead is not needed for this item, or pass a no-op
                />
              ) : (
                listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={markNotificationAsRead} // Pass the function from props
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

// Default props
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => { // Default for the new prop
    console.log("markNotificationAsRead default function called");
  },
};

// Prop types
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func, // Prop type for the new function
};

// Aphrodite styles
const cssVars = {
  mainColor: "#E11D3F", // Corrected color code
  secondaryColor: "#00003C", // Example secondary color
  hoverBgColor: "#fff8f8",
  animationDuration: "0.5s",
  animationTimingFunction: "ease-in-out",
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const translateYKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "75%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
};

const borderKeyframes = {
  "0%": {
    borderColor: cssVars.mainColor, // Use variable
  },
  "50%": {
    borderColor: "cyan", // Example intermediate color
  },
  "100%": {
    borderColor: cssVars.secondaryColor, // Use variable
  },
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: "right", // Align text to the right
    backgroundColor: cssVars.hoverBgColor, // Use variable
    float: "right", // Keep float for layout
    padding: "5px 10px", // Add some padding
    marginRight: "10px", // Add margin
    cursor: "pointer", // Ensure cursor changes on hover
    ':hover': { // Combined hover effects
      animationName: [opacityKeyframes, translateYKeyframes],
      animationDuration: `1s, ${cssVars.animationDuration}`, // Use variable
      animationIterationCount: '3, 3', // Animate both 3 times
    }
  },
  hoverAnimation: { // Separated for clarity if needed, though combined above
    // This class can be used if you want to apply hover animations conditionally
  },
  menuItemPNoShow: {
    display: "none",
  },
  menuItemPShow: {
    // Styles for when <p> is shown, if any specific needed
  },
  notifications: {
    border: "2px dashed", // Default border style
    borderColor: cssVars.mainColor, // Initial border color
    padding: "1rem", // Use rem for padding
    position: "absolute", // For better positioning relative to App
    right: "10px",
    top: "45px", // Adjust as needed
    width: "300px", // Fixed width or max-width
    backgroundColor: "white", // Ensure background is opaque
    zIndex: 100, // Ensure it's above other content
    [screenSize.small]: {
      position: "fixed", // Fixed position on small screens
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      zIndex: 1000, // Higher z-index for full screen
      padding: 0, // Reset padding
      border: "none", // Reset border
      overflowY: "auto", // Allow scrolling if content overflows
      fontSize: "20px",
    },
  },
  borderAnimation: { // Apply border animation
    animationName: [borderKeyframes],
    animationDuration: "2s", // Slower animation for border
    animationIterationCount: "infinite", // Loop indefinitely
    animationDirection: "alternate", // Alternate direction
  },
  notificationsButtonImage: {
    width: "12px", // Slightly larger for easier clicking
    height: "12px",
  },
  notificationsP: {
    margin: "0 0 0.5rem 0", // Adjust margins
    fontSize: "0.9rem",
  },
  notificationsUL: {
    paddingLeft: "1rem", // Indent list items slightly
    listStyleType: "disc", // Default list style
    [screenSize.small]: {
      padding: "1rem", // Add padding on small screens for UL items
    },
  },
});

export default Notifications;
