import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddlogModal = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const onSubmit = () => {
    if (firstname === "") {
      M.toast({ html: "Please enter a First Name" });
    } else if (lastname === "") {
      M.toast({ html: "PLease enter a Last Name" });
    } else {
      console.log("Tech added");
      setFirstname("");
      setLastname("");
    }
  };

  return (
    <div
      id="tech-modal"
      className="modal"
      style={{ width: "75%", height: "75%" }}
    >
      <div className="modal-content">
        <h4>Enter Technician </h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
            ></input>
            <label htmlFor="message" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
            ></input>
            <label htmlFor="message" className="active">
              Last Name
            </label>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="waves-effect waves-light btn "
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};
export default AddlogModal;
