import React from "react";
import withAuthorization from "components/hoc/withAuthorization";

const Secret = (props) => {
  return <h1>I am secret page</h1>;
};
export default withAuthorization(Secret);
