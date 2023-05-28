import Avatar from "../../components/Avatar";

import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";


export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
const {navigate} = useNavigate();


  const handleClick = (e) => {
    deleteDocument(project.id).then();
    //TO : DO
    // navigate("/dashboard")
  };

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.title}</h2>
        <p>By : {project.createdBy.displayName}</p>
        <p className="due-date">
          Project due by : TEMP TIME {/**project.dueDate */}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to : </h4>
        {project.assignedUsersList.map((user) => (
          <div key={user.id}>
            <Avatar src={user.photoURL} />
          </div>
        ))}
      </div>
      {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          {" "}
          Mark as Complete{" "}
        </button>
      )}
    </div>
  );
}
