import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar, Spinner } from "react-bootstrap";
import { AddModel } from "./AddModel";
import { EditModal } from "./EditModal";

export class Department extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: [],
      addModalshow: false,
      showPro: true,
      editmodalshow: false,
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    // fetch ("https://localhost:44316/api/Department")
    // fetch("http://192.168.1.6/api/Department")
    fetch("http://13.233.21.154//reactcrudapi/api/Department")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ deps: result, showPro: false });
      });
  }

  // componentDidUpdate() {
  //   this.refreshList();
  // }

  deleteDep(depid) {
    if (window.confirm("are you sure?")) {
      //alert("http://192.168.1.6/api/Department/" + depid);
      // fetch("http://192.168.1.6/api/Department/" + depid, {
        fetch("http://13.233.21.154//reactcrudapi/api/Department/" + depid, {
        method: "delete",
        header: {
          Accept: "application/json",
          "content-Type": "application/json",
        },
      });
    }
  }
  addModalClose = () => this.setState({ addModalshow: false });
  editModalClose = () => this.setState({ editmodalshow: false });
  render() {
    const { deps, depid, depname } = this.state;

    return (
      <div>
        {this.state.showPro ? (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="lg"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        ) : null}

        <Table className="mt-4" variant="dark" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>DepartmentID</th>
              <th>DepartmentName</th>
              <th> Option</th>
            </tr>
          </thead>
          <tbody>
            {
              // deps?
              deps.map((dep) => (
                <tr key={dep.DepartmentId}>
                  <td>{dep.DepartmentId}</td>
                  <td>{dep.DepartmentName}</td>
                  <td>
                    <ButtonToolbar>
                      <Button
                        className="mr-2"
                        variant="info"
                        onClick={() => {
                          this.setState({
                            editmodalshow: true,
                            depid: dep.DepartmentId,
                            depname: dep.DepartmentName,
                          });
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        className="m-2"
                        onClick={() => this.deleteDep(dep.DepartmentId)}
                        variant="danger"
                      >
                        delete
                      </Button>
                      <EditModal
                        show={this.state.editmodalshow}
                        onHide={this.editModalClose}
                        depid={depid}
                        depname={depname}
                      ></EditModal>
                    </ButtonToolbar>
                  </td>
                </tr>
              ))
              // : <tr><td>no data</td></tr>
            }
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button onClick={() => this.setState({ addModalshow: true })}>
            Add Department
          </Button>
        </ButtonToolbar>
        <AddModel
          show={this.state.addModalshow}
          onHide={this.addModalClose}
        ></AddModel>
      </div>
    );
  }
}
