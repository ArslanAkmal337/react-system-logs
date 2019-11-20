import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import {
  deleteLog,
  setCurrent,
  clearCurrent,
  updateLog
} from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItems = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "Log Deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-model"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">
            ID#<b>{log.id}</b>
          </span>
          last updated by
          <span className="black-text">
            <b>{log.tech}</b>
          </span>
          on
          <Moment format="MMMM Do YYYY,  h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};
LogItems.propTypes = {
  log: PropTypes.object.isRequired
};
export default connect(null, { deleteLog, setCurrent })(LogItems);
