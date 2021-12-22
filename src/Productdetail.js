import React, { Component } from "react";
import { Container, Row, Col, Table, Card, Button } from "react-bootstrap";
import {Increment, Decrement} from './action/index';
import {connect} from 'react-redux'

const mapStateToProps=(props)=>{
    return{
        inc:props.increment,
        dec:props.decrement,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=>dispatch(Increment()),
        decrement:()=>dispatch(Decrement())
    }
}

export default class Productdetail extends Component {
  state = { detail: null };
  componentDidMount() {
    const productid = this.props.match.params.id;
    fetch("https://fakestoreapi.com/products/" + productid).then((response) => {
      response.json().then((response) => {
        console.warn(response);
        this.setState({ detail: response });
        console.log(this.props.match.params.id);
      });
    });
  }
  render() {
    return (
      <div>
        <div>
          {this.state.detail ? (
            <div>
              <Container>
                <Row xs={3}>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={this.state.detail.image} />
                      <Card.Body style={{ color: "black" }}>
                        <Card.Title>
                          <h3>{this.state.detail.title}</h3>
                        </Card.Title>
                        <Card.Text>
                          <h4>Price: {this.state.detail.price}</h4>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "55rem" }}>
                      <Card.Body>
                        <Card.Title><h3>Description: {this.state.detail.description}</h3></Card.Title>
                        <Card.Text>
                          <h5>Category: {this.state.detail.category}</h5>
                        </Card.Text>
                        <Card.Text>
                          <h5>Rating: {this.state.detail.rating.rate}</h5>
                            <h5>Number of people gave Rating: {this.state.detail.rating.count}</h5>
                        </Card.Text>
                        <input className="amount" type="text" value={this.props.inc} ></input>
                        <Button variant="dark" onclick={()=>this.props.increment()}>Add Item</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
