import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from 'react';


export default function AddItem() {

        const formRef = useRef(null);

        const handleFormSubmit = (e) => {
     
          formRef.current.reset();
        };

    return (
    <div>
      <Container className="">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="TEXT" >
            <Form.Label>Blog Name</Form.Label>
            <Form.Control type="text" name="title"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="TEXT">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="desc"   />
          </Form.Group>

          <Form.Group className="mb-3" controlId="TEXT">
            <Form.Label>Author Name</Form.Label>
            <Form.Control type="text" name="image"  />
          </Form.Group>

          <Button variant="primary"   type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );

    }