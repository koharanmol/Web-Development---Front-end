/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import axios from "axios";
import MainContainer from "./MainContainer";
import moment from "moment";

export default class Employees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: []
    };
  }
  componentDidMount() {
    axios
      .get("https://teams-api-lean.herokuapp.com/employees")
      .then(res => this.setState({ employees: res.data }));
  }
  render() {
    return (
      <MainContainer sidebar="Employees">
        <h1 className="page-header">Employees</h1>
        <div className="row">
          <div className="container-fluid">
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <th>Name & Position</th>
                  <th>Address</th>
                  <th>Phone Num.</th>
                  <th>Hire Date</th>
                  <th>Salary Bonus</th>
                </tr>
                {this.state.employees.map(employee => (
                  <tr key={employee._id}>
                    <td>{`${employee.FirstName} ${employee.LastName} - ${employee.Position.PositionName}`}</td>
                    <td>{`${employee.AddressStreet} ${employee.AddressCity} ${employee.AddressState} ${employee.AddressZip}`}</td>
                    <td>{`${employee.PhoneNum} ext: ${employee.Extension}`}</td>
                    <td>{moment(employee.HireDate).format("LL")}</td>
                    <td>{`$${employee.SalaryBonus}`}</td>
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
