//styles
import "./ProjectList.css";

import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length === 0 && <p>No projects yet !</p>}
      {projects.map((project) => (
        <div key={project.id}>
          <Link to={`/projects/${project.id}`} key={project.id}>
            <h4>Project name :{project.name}</h4>
            {/* <p>Due by : {project.dueDate}</p> */}
            <p>Due by : {"TEMP TEXT : TOMORROW"}</p>
            {console.log("Date : ", project.dueDate)}
            <div className="assigned-to">
              <ul>
                {project.assignedUsersList.map((user) => (
                  <li key={user.photoURL}>
                    <Avatar src={user.photoURL} />
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
