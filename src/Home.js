import React, { Component } from 'react';
import {Row, Col, Card, Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Productdetail from './Productdetail';

class Home extends Component {
    state={user:null}
    componentDidMount(){
        fetch("https://fakestoreapi.com/products").then((response)=>{
            response.json().then((response)=>{
                console.warn(response)
                this.setState({user:response})
            })
        })
    }
    render() {
        return (
            <div>
                <div className='glassview'>
                    <center><h1 style={{color:"whitesmoke", width:"80%"}}>Your Fake Shopping Place</h1><br/>
                    <div style={{maxWidth:"60%", marginBottom:"30px"}}><h3 style={{color:"white", fontSize:"18px" }}>Welcome to the Fake Shop website. Here you can get Excellent Quality Product at cheaper price.
</h3></div></center>
                    </div>
                <div>
                        {
                        this.state.user?
                        <Container>
                        <Row className="justify-content-md-center">
                            {
                        this.state.user.map((item)=>(
                            <Col xs lg="3">
                                <Card style={{ width: '20rem' }}>
                            <Link to={"/detail/"+item.id}>
                                <Card.Img variant="top" src={item.image} />
                                </Link>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                <h4>Price:{item.price}</h4>
                                </Card.Text>    
                                <Link to={"/detail/"+item.id}><Button>View detail</Button></Link>
                            </Card.Body>
                            </Card><br/>
                            </Col>))}
                        </Row>
                        </Container>:
                        null
                       }
                    </div>
            </div>
        );
    }
}

export default Home;