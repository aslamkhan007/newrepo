import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { Snackbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
export class AddModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbaropen: false,
      snackbarmsg: "",
    };
  }

  snackbarclose = () => {
    //alert("hi");
    this.setState({ snackbaropen: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // alert(event.target.DepartmentId.value);
    // fetch('https://localhost:44316/api/Department',
    // fetch("http://192.168.1.6/api/Department", {
      fetch("http://13.233.21.154//reactcrudapi/api/Department", {
      method: "post",
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
        //  alert(result);
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
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Department
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="DepartmentId">
                    <Form.Label>DepartmentId</Form.Label>
                    <Form.Control
                      type="text"
                      name="DepartmentId"
                      required
                      placeholder="DepartmentId"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="DepartmentName">
                    <Form.Label>DepartmentName</Form.Label>
                    <Form.Control
                      type="text"
                      name="DepartmentName"
                      required
                      placeholder="DepartmentName"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Button variant="info" type="submit">
                      Add Department
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
