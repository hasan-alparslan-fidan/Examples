import "./Title.css";

export default function Title(props) {
  return (
    <div>
      {/* <h1 className="title">Mario kingdom event</h1> */}
      <h1 className="title-block">{props.title}</h1>
      <br />
      {/* <h2 className="subtitle">All the latest events in mario kingdom</h2> */}
      <h2 className="subtitle">{props.subtitle}</h2>
    </div>
  );
}
