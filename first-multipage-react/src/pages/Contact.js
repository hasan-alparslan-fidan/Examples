import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Contact, HEY {name}</h2>
      <p>
        contact lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
        lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
        lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
        lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
        lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
        lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
        lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
        lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
        lorem100 lorem100 lorem100
      </p>
    </div>
  );
}
