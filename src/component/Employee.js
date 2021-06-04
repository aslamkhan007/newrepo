import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import Empmodal from "./EmployeeModal";
import { EditModal } from "./EmployeeEdit";
export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: [],
      empmodalshow: false,
      empeditmodalshow: false,
    };
  }

  componentDidMount() {
    this.refreshList();
  }
  // componentDidUpdate() {
  //   this.refreshList();
  // }

  //   refreshList() {
  //     fetch("http://localhost:3000/employee")
  //       .then(res => res.json())
  //       .then((result) => {
  //         this.setState({ deps: result });
  //       })
  //   }
  refreshList() {
    // fetch ("https://localhost:44316/api/Department")
    // fetch("http://192.168.1.6/api/Employee")
    fetch("http://13.233.21.154//reactcrudapi/api/Employee")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ deps: result });
        console.log(result);
      });
  }

  async deleteemp(empid) {
    if (window.confirm("are you sure")) {
      // await fetch("http://192.168.1.6/api/Employee/" + empid, {
        await fetch("http://13.233.21.154//reactcrudapi/api/Employee/" + empid, {
        method: "delete",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
        },
      });
    }
  }

  empmodalclose = () => {
    this.setState({ empmodalshow: false });
  };

  empeditmodalclose = () => {
    this.setState({ empeditmodalshow: false });
  };
  render() {
    const { deps, empid, empname, dept, mail, empdoj } = this.state;
    return (
      <div>
        <h2>Empployee Data</h2>
        <Table className="mt-4" variant="dark" striped bordered hower size="sm">
          <thead>
            <tr>
              <th>EmployeeID</th>
              <th>EmployeeName</th>
              <th>Department</th>
              <th>MailID</th>
              <th>Doj</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
            {deps.map((emp) => {
              return (
                <tr key={emp.EmployeeID}>
                  <td>{emp.EmployeeID}</td>
                  <td>{emp.EmployeeName}</td>
                  <td>{emp.Department}</td>
                  <td>{emp.MAilId}</td>
                  <td>{emp.Doj}</td>
                  <td>
                    <ButtonToolbar>
                      <Button
                        className="m-2"
                        onClick={() => {
                          this.setState({
                            empeditmodalshow: true,
                            empid: emp.EmployeeID,
                            empname: emp.EmployeeName,
                            dept: emp.Department,
                            mail: emp.MAilId,
                            empdoj: emp.Doj,
                          });
                        }}
                      >
                        Edit
                      </Button>

                      <Button
                        className="m-2"
                        variant="danger"
                        onClick={() => this.deleteemp(emp.EmployeeID)}
                      >
                        Delete
                      </Button>
                      <EditModal
                        show={this.state.empeditmodalshow}
                        onHide={this.empeditmodalclose}
                        empid={empid}
                        empname={empname}
                        dept={dept}
                        mail={mail}
                        empdoj={empdoj}
                      ></EditModal>
                    </ButtonToolbar>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button onClick={() => this.setState({ empmodalshow: true })}>
            {" "}
            Add Employee
          </Button>
        </ButtonToolbar>
        <Empmodal
          show={this.state.empmodalshow}
          onHide={this.empmodalclose}
        ></Empmodal>
      </div>
    );
  }
}
