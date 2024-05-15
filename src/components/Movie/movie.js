import './movie.css';
import ModalMovie from '../ModalMovie/modalMovie.js';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Movie(props) {
    const [showMore, setShowMore] = useState(false);
    const [cardHeight, setCardHeight] = useState('580px');

    const toggleShowMore = () => {
        setShowMore(!showMore);
        setCardHeight(showMore ? '580px' : '700px');
    };

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <Row className="g-3" >
            <Col style={{ margin: '15px' }}>

                <Card style={{ width: '400px', padding: '5px', backgroundColor: '#DA725C', height: cardHeight }} key={props.id}>


                    <div style={{ marginBottom: '2px', marginTop: '10px' }}>
                        <center>
                            <Card.Title style={{  fontSize: '25px', color: '#9F000F' }}>  {props.name} </Card.Title>
                        </center>
                    </div>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.imgPath}`} style={{ height: '250px', width: '350px', margin: '20px' }} />
                    <Card.Body>

                        <Card.Text style={{color:'black'}}>
                            {props.release_date}   
                            <br />
                            
                            {showMore ? props.overview : props.overview.substring(0, 160) }
                            <br />
                            <span
                                className="text"
                                onClick={toggleShowMore}
                                style={{
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    /* Additional styles for hover effect */
                                }}
                            >
                                {showMore ? "Show less" : "Show more"}
                            </span>
                            <br/>
                            <Button className="btn" style={{backgroundColor:'#C24641',marginLeft:'150px'}} onClick={handleShow}>❤️️</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <ModalMovie handleClose={handleClose} showModal={showModal} name={props.name} imgPath={`https://image.tmdb.org/t/p/w500${props.imgPath}`} release_date={props.release_date || props.first_air_date} overview={props.overview} original_title={props.original_title} />
            </Col>
        </Row>
    );
}

export default Movie;
