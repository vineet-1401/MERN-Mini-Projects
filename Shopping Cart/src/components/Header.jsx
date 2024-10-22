import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaCartArrowDown } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';
import { CartState } from '../context/Context';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiFillDelete } from "react-icons/ai";

function Header() {
    const { state: { cart }, dispatch } = CartState();
    // let newCart = [...new Set(cart.map(item=>item))];
    // console.log(newCart);
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className='navbar'>
            <Container>
                <Navbar.Brand href="/">Shopify</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='mx-2' href="/">Home</Nav.Link>

                    </Nav>
                    <Nav>
                        <Dropdown className='me-5 my-1 ' >
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FaCartArrowDown fontSize='35px' />
                                <Badge bg="green" style={{ fontSize: "15px" }} >{cart.length}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='w-max max-h-96 overflow-y-scroll z-40' >
                                {
                                    (cart.length > 0) ?
                                        (
                                            <>

                                            <ListGroup >
                                                {cart.map((val, index) => {
                                                    
                                                    return (
                                                        <ListGroup.Item className='d-flex justify-content-between align-items-start mb-3' key={index}>
                                                            <div>
                                                                <img className='w-16 h-12' src={val.image[0]}></img>
                                                            </div>
                                                            <div className="mx-2 me-auto">
                                                                <div className="fw-bold">{val.title}</div>
                                                                $ {val.price}
                                                            </div>
                                                            {/* <Badge className='mx-2' bg="primary" pill>
                                                        {val.qty}
                                                    </Badge> */}
                                                            <AiFillDelete className='ms-5' fontSize={40} color='red' onClick={() => {
                                                                dispatch({ type: "REMOVE_FROM_CART", payload: val })
                                                            }} />
                                                        </ListGroup.Item>
                                                    )
                                                })}
                                            </ListGroup>
                                            </>

                                        )
                                        :
                                        (
                                            <Dropdown.Item href="#">No Item in Cart</Dropdown.Item>
                                        )
                                }
                                <Dropdown.Item href="/cart" ><Button className='rounded-0 w-100' variant="success">Go to Cart</Button></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form className="d-flex">
                            <Button variant="success">Search</Button>            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="rounded-0"
                                aria-label="Search"
                            />
                        </Form>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;