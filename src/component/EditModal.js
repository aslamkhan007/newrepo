import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class EditModal extends React.Component {
  constructor(props) {
    super(props);
  }

  //#region handleSubmit

  handleSubmit = (event) => {
    event.preventDefault();
    //alert('kjjsd');
    // fetch('https://localhost:44316/api/Department',
    fetch("http://192.168.1.6/api/Department", {
      method: "put",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        DepartmentId: event.target.DepartmentId.value,
        DepartmentName: event.target.DepartmentName.value,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result);
      });
  };

  //#endregion

  myfunction = () => {
    // alert("hi");
    this.props.onHide();
    //alert(this.props.show);

    // this.setState({show : false})
    // alert(this.props.show);
  };

  render() {
    return (
      <div className="container">
        <Modal
         {...this.props}
          size="lg"
          aria
          labelaedby="contained-modal-title-vcenter"
          centered
          show={this.props.show}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Department
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlI="DepartmentId">
                    <Form.Label>DepartmentId</Form.Label>
                    <Form.Control
                      type="text"
                      name="DepartmentId"
                      required
                      disabled
                      defaultValue={this.props.depid}
                      placeholder="DepartmentId"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlI="DepartmentName">
                    <Form.Label>DepartmentName</Form.Label>
                    <Form.Control
                      type="text"
                      name="DepartmentName"
                      required
                      defaultValue={this.props.depname}
                      placeholder="DepartmentName"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Button variant="info" type="submit">
                      update Department
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            {/*  <Button variant="danger" onClick={this.props.onHide}> */}
            <Button variant="danger" onClick={this.myfunction}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
