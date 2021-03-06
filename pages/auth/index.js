import React from "react";

import User from "../../components/User";

const authIndexPage = (props) => (
  <div>
    <h1>The Auth Index Page - {props.appName}</h1>
    <User name="Max" age={28} />
  </div>
);

authIndexPage.getInitialProps = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ appName: "Super App (Auth)" });
    }, 0);
  });
  return promise;
};

export default authIndexPage;
