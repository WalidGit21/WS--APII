import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card bg="info" style={{ width: "18rem" }} className="mb-2">
        <Card.Header>{user.id}</Card.Header>
        <Card.Body>
          <Card.Title>{user.name} </Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.address.street}</Card.Text>
          <Card.Text>{user.address.suite}</Card.Text>
          <Card.Text>{user.address.zipcode}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;