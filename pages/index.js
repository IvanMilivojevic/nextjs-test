import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
  static getInitialProps() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ appName: "Super App" });
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>The Main Page of {this.props.appName}</h1>
        <p>
          Go to <Link href="/auth">Auth</Link>
        </p>
        <button onClick={() => Router.push("/auth")} type="button">
          Go to Auth
        </button>
      </div>
    );
  }
}

export default IndexPage;
