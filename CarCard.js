import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import "./CarCard.css";
import carZC from '../carZC.png'

class CarCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Card className="Card">
          <CardImg className ="card-img-top" src={carZC} alt="Card image cap" />
          <CardBody className="Card-body">
            <CardTitle className="card-Title">{this.props.person.name}</CardTitle>
            <CardSubtitle className="card-Subtitle">{this.props.person.company}</CardSubtitle>
            <CardText className="card-Text">{this.props.person.description}</CardText>
            <Button>Delete</Button>
          </CardBody>  
        </Card>
      </div>
    )
  }
}

export default CarCard;