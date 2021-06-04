import React, { Component } from "react";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import { Snackbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

export default class Empmodal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: [],
      snackbaropen: false,
      snackbarmsg: "",
    };
  }
  componentDidMount() {
    // fetch("http://192.168.1.6/api/Department")
    fetch("http://13.233.21.154//reactcrudapi/api/Department")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ deps: result });
      });
  }

  snackbarclose = () => {
    this.setState({ snackbaropen: false });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // alert(event.target.DepartmentId.value);
    // fetch('https://localhost:44316/api/Department',
    // fetch("http://192.168.1.6/api/Employee", {
      fetch("http://13.233.21.154//reactcrudapi/api/Employee", {
      method: "post",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        EmployeeID: event.target.EmployeeID.value,
        EmployeeName: event.target.EmployeeName.value,
        Department: event.target.Department.value,
        MAilId: event.target.MAilId.value,
        Doj: event.target.Doj.value,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result);
        this.setState({ snackbaropen: true, snackbarmsg: result });
      });
  };

  render() {
    return (
      <div className="container" variant="dark">
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.snackbarclose}
          message={<span id="message-id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="Close"
              arial-label="Close"
              color="inherit"
              onClick={this.snackbarclose}
            >
              {" "}
              *
            </IconButton>,
          ]}
        />

        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Employees
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="EmployeeID">
                    <Form.Label>EmployeeID</Form.Label>
                    <Form.Control
                      type="text"
                      name="EmployeeID"
                      required
                      placeholder="EmployeeID"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="EmployeeName">
                    <Form.Label>EmployeeName</Form.Label>
                    <Form.Control
                      type="text"
                      name="EmployeeName"
                      required
                      placeholder="EmployeeName"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="Department">
                    <Form.Label>Department</Form.Label>
                    <Form.Control as="select">
                      {this.state.deps.map((dep) => (
                        <option key={dep.DepartmentId}>
                          {dep.DepartmentName}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="MAilId">
                    <Form.Label>MAilId</Form.Label>
                    <Form.Control
                      type="text"
                      name="MAilId"
                      required
                      placeholder="MAilId"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="Doj">
                    <Form.Label>Doj</Form.Label>
                    <Form.Control
                      type="date"
                      name="Doj"
                      required
                      placeholder="Doj"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Button variant="info" type="submit">
                      Add Employee
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
