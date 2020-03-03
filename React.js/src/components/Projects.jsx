/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import axios from "axios";
import MainContainer from "./MainContainer";
import moment from "moment";

export default class Projects extends Component {
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
      <MainContainer sidebar="Projects">
        <h1 className="page-header">Projects</h1>
        <div className="row">
          <div className="container-fluid">
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
                {this.state.projects.map(project => (
                  <tr key={project._id}>
                    <td>{project.ProjectName}</td>
                    <td>{project.ProjectDescription}</td>
                    <td>{moment(project.ProjectStartDate).format("LL")}</td>
                    <td>
                      {project.ProjectEndDate == null
                        ? "n/a"
                        : moment(project.ProjectEndDate).format("LL")
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MainContainer>
    );
  }
}
