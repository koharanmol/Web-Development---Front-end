import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";

export default class ProjectsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get("https://teams-api-lean.herokuapp.com/projects")
      .then(res => this.setState({ projects: res.data }));
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Projects</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {this.state.projects.map(project => (
                  <tr key={project._id}>
                    <td>{project.ProjectName}</td>
                    <td>{this.getActiveDays(project.ProjectStartDate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/projects" className="btn btn-primary form-control">
            View All Project Data
          </Link>
        </div>
      </div>
    );
  }
  getActiveDays(startDate) {
    let currentDate = moment();
    return currentDate.diff(moment(startDate), "days");
  }
}
