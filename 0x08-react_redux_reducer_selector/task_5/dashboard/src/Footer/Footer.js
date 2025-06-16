import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
// Assuming AppContext is exported from AppContext.js located in ../App/
// If the path is different, please adjust the import path accordingly.
import AppContext  from "../App/AppContext";

export default function Footer() {
  // Consume the context
  const { user } = useContext(AppContext);

  return (
    <>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
        {/* Display "Contact us" link if the user is logged in */}
        {user && user.isLoggedIn && (
          <p>
            <a href="#">Contact us</a>
          </p>
        )}
      </div>
    </>
  );
}
