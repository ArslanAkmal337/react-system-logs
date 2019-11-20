import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";

const AddlogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "") {
      M.toast({ html: "Please enter a message " });
    } else if (tech === "") {
      M.toast({ html: "Please Enter A Tech" });
    } else {
      const newLog = {
        message,
        attention,
        tech
      };
      addLog(newLog);
      M.toast({ html: `Log added by${tech}` });
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };

  return (
    <div
      id="add-log-modal"
      className="modal"
      style={{ width: "75%", height: "75%" }}
    >
      <div className="modal-content">
        <h4>Enter System log </h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></input>
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option vlaue="Arslan">Arslan</option>
              <option vlaue="Ali">Ali</option>
              <option vlaue="Bilal">Bilal</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                ></input>
                <span>Need Attention</span>
              </label>
            </p>
          </div>
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
  );
};
export default connect(null, { addLog })(AddlogModal);
