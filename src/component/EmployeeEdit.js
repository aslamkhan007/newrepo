import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class EditModal extends React.Component {
  constructor(props) {
    super(props);
  }

  
  handleSubmit = (event) => {
    event.preventDefault();
    //alert('kjjsd');
    // fetch('https://localhost:44316/api/Department',
    // fetch("http://192.168.1.6/api/Employee", {
      fetch("http://13.233.21.154//reactcrudapi/api/Employee", {
      method: "put",
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
      });
  };


  render() {
    return (
      <div className="container">
       <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Employee
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
                      disabled
                      defaultValue={this.props.empid}
                      placeholder="EmployeeID"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="EmployeeName">
                    <Form.Label>EmployeeName</Form.Label>
                    <Form.Control
                      type="text"
                      name="EmployeeName"
                      required
                      defaultValue={this.props.empname}
                      placeholder="EmployeeName"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="Department">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      type="text"
                      name="Department"
                      required
                      defaultValue={this.props.dept}
                      placeholder="Department"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="MAilId">
                    <Form.Label>MAilId</Form.Label>
                    <Form.Control
                      type="text"
                      name="MAilId"
                      required
                      defaultValue={this.props.mail}
                      placeholder="MAilId"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="Doj">
                    <Form.Label>Doj</Form.Label>
                    <Form.Control
                      type="text"
                      name="Doj"
                      required
                      defaultValue={this.props.empdoj}
                      placeholder="Doj"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Button variant="info" type="submit">
                      updae Employee
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
