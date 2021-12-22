import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Productdetail from "./Productdetail";
import Cart from './Cart';
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

function App() {
  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Fake Store</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#Cart"><Link to="/Cart" style={{ textDecoration: "none", color: "white" }}>Cart</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/detail/:id"
          render={(props) => <Productdetail {...props} />}></Route>
          <Route exact path="/Cart">
          <Cart/>
        </Route>
      </Router>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
