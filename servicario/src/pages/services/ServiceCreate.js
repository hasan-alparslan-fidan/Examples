import React, { useState } from "react";

import { Navigate } from "react-router-dom";
//services
import { createService } from "actions/index.js";

//allowing only auth users access this page
import withAuthorization from "components/hoc/withAuthorization";

const ServiceCreate = (props) => {

  const [redirect , setRedirect] = useState(false)

  const [serviceForm, setServiceForm] = useState({
    category: "mathematics",
    title: "",
    description: "",
    image: "",
    price: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceForm({ ...serviceForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    createService(serviceForm, props.auth.user.uid)
      .then(() => setRedirect(true) )
      .catch((err) => alert("SOME ERROR : ", err));
  };

  if(redirect){
   return <Navigate to = "/"/>
  }

  return (
    <div className="create-page">
      <div className="container">
        <div className="form-container">
          <h1 className="title">Create Service</h1>
          <form>
            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <div className="select">
                  <select name="category" onChange={handleChange}>
                    <option value="mathematics">mathematics</option>
                    <option value="programming">programming</option>
                    <option value="painting">painting</option>
                    <option value="singing">singing</option>
                    <option value="english">english</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  onChange={handleChange}
                  className="input"
                  name="title"
                  type="text"
                  placeholder="Text input"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  onChange={handleChange}
                  name="description"
                  className="textarea"
                  placeholder="Textarea"
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Image Url</label>
              <div className="control">
                <input
                  onChange={handleChange}
                  className="input"
                  name="image"
                  type="text"
                  placeholder="Text input"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Price per Hour</label>
              <div className="control">
                <input
                  onChange={handleChange}
                  className="input"
                  name="price"
                  type="text"
                  placeholder="Text input"
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="button is-link"
                >
                  Create
                </button>
              </div>
              <div className="control">
                <button className="button is-text">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

//with auth allows us to access "auth state" and its components
// and only authed personel can access here
export default withAuthorization(ServiceCreate);
