import { useEffect, useState } from "react";
import Select from "react-select";
import {  timestamp } from "../../firebase/config";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

//styles
import "./Create.css";

const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

//create doc
export default function Create() {
  const navigator = useNavigate();
  const { addDocument, response } = useFirestore("projects");
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);

  //field form values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);
  const { user } = useAuthContext();

  //when document changes, this changes the state again (etc when some user changes any document)

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  // //test
  // useEffect(() => {
  //   if (response.success) {
  //     navigator("/");
  //   }
  // }, [response.success, navigator]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //check selected category exist
    if (!category) {
      setFormError("Please select a project category");
      return;
    }
    //check if assigned to user
    if (assignedUsers.length < 1) {
      setFormError("Please assign a project to at least 1 user");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: user.uid,
      };
    });

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp,
      comments: [],
      createdBy: createdBy,
      assignedUsersList,
    };

    await addDocument(project);
    navigator("/");
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name :</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </label>
        <label>
          <span>Project details :</span>
          <textarea
            required
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span>Set due date :</span>
          <input
            required
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          ></input>
        </label>

        <label>
          <span>Project category :</span>

          <Select
            options={categories}
            onChange={(option) => {
              setCategory(option);
            }}
          />
        </label>
        <label>
          <span>Assign to :</span>

          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti
          />
        </label>
        <button className="btn">Add a project</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
