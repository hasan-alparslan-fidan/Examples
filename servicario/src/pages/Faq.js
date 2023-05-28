import React from "react";
import withAuthorization from "components/hoc/withAuthorization";

const Faq = () => <h1>I am a faq page</h1>;

export default withAuthorization(Faq);
