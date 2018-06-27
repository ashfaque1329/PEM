import React from "react";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const requireAuthentication = WrappedComponent => {
  return props => {
    <div>
      <WrappedComponent {...props} />
    </div>;
  };
};

const AuthInfo = requireAuthentication(Info);
