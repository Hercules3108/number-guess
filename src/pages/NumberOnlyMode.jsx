import React from "react";
import { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import StaticBody from "../components/StaticBody";
import store from "../store";
import MainField from "../components/MainField";
import PrivacyPolicy from "../components/PrivacyPolicy";

const NumberOnlyMode = (props) => {
  console.log(store.getState().darkMode, "darkMode?");
  return (
    <div className={"App " + (store.getState().darkMode ? "darkMode " : "")}>
      {window.location.pathname === "/privacy-policy" ? (
        <PrivacyPolicy />
      ) : (
        <div>
          <Header challengeLink={props.challengeLink} />
          <MainField challengeLink={props.challengeLink} />
          <StaticBody />
        </div>
      )}
    </div>
  );
};

export default NumberOnlyMode;
