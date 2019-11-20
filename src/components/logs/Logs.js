import React, { useEffect } from "react";
import LogItems from "./LogItems";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";
import Preloader from "../Preloader";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading === "true" || logs === null) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {logs.length === 0 ? (
          <p>No logs to show......</p>
        ) : (
          logs.map(log => <LogItems log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};
Logs.propTypes = {
  log: PropTypes.object.isRequired
};
const mapStatetoProps = state => ({
  log: state.log
});
export default connect(mapStatetoProps, { getLogs })(Logs);
