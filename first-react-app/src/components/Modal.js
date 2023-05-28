import "./Modal.css";
import ReactDOM from "react-dom";

export default function Modal({ children, isSalesModal }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#ff4500" : "#555",
          textAlign: "center",
        }}
      >
        {/* <h2>10% off coupon code !!</h2> */}
        {/* <p>use the code bla bla</p> */}

        {children}
     
     
      </div>
    </div>,
    document.body
  );
}
