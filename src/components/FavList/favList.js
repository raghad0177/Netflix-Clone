import React, { useEffect, useState, useRef } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button, Alert } from "react-bootstrap";

function FavList() {
    const [showMore, setShowMore] = useState(false);
    const [cardHeight, setCardHeight] = useState('620px');
    const [netflixList, setNetflixList] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const inputRef = useRef(null);
   
    useEffect(() => {
        const fetchNetflixList = async () => {
            try {
                const response = await fetch(`https://movies-library-l5nh.onrender.com/getMovies`);
                const data = await response.json();
                setNetflixList(data);
            } catch (error) {
                console.error("Error fetching Netflix list:", error);
            }
        };

        fetchNetflixList();   
    }, []);

    const toggleShowMore = () => {
        setShowMore(!showMore);
        setCardHeight(showMore ? '620px' : '700px');
    };

    const deleteMovie = async (id) => {
        try {
            await fetch(`https://movies-library-l5nh.onrender.com/delete/${id}`, {
                method: "DELETE",
            });
            setNetflixList(prevList => prevList.filter(movie => movie.id !== id));
        } catch (error) {
            console.error("Error deleting movie:", error);
        }
    }

    const updateMovie = async (id) => {
        try {
            const updatedComment = inputRef.current.value;
            const updatedMovieIndex = netflixList.findIndex(movie => movie.id === id);
            const updatedMovie = {
                ...netflixList[updatedMovieIndex],
                commints: updatedComment
            };
            await fetch(`https://movies-library-l5nh.onrender.com/edit/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedMovie)
            });
            const updatedList = [...netflixList];
            updatedList[updatedMovieIndex] = updatedMovie;
            setNetflixList(updatedList);
            setShowAlert(false);
            inputRef.current.value = '';
        } catch (error) {
            console.error("Error updating movie:", error);
        }
    }



    return (
        <div className="tour-container">
            {netflixList.map(props => (
                <Row className="g-3" key={props.id}>
                    <Col style={{ margin: '15px' }}>
                        <Card style={{ width: '400px', padding: '5px', backgroundColor: '#DA725C', height: cardHeight }}>
                            <div style={{ marginBottom: '2px', marginTop: '10px' }}>
                                <center>
                                    <Card.Title style={{  fontSize: '25px', color: '#9F000F' }}>{props.name || props.title}</Card.Title>
                                </center>
                            </div>
                            <Card.Img variant="top" src={props.poster_path} style={{ height: '250px', width: '350px', margin: '20px' }} />
                            <Card.Body>
                                <Card.Text style={{ color: 'black' }}>
                                    {props.release_date}
                                    <br />
                                    <p> Your Comment is : {props.commints} </p>

                                    {props.overview && (showMore ? props.overview : props.overview.substring(0, 160))}
                                    <br />
                                    <span
                                        className="text"
                                        onClick={toggleShowMore}
                                        style={{
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                        }}
                                    >
                                        {showMore ? "Show less" : "Show more"}
                                    </span>
                                    <br />
                                    <br />
                                    <Button intent="danger" style={{ backgroundColor: '#C24641', marginLeft: '90px' }} onClick={() => deleteMovie(props.id)}>
                                        Delete
                                    </Button>

                                    <Button intent="danger" style={{ backgroundColor: '#C24641', marginLeft: '10px' }} onClick={() => setShowAlert(true)}> Update </Button>

                                    <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible style={{
                                        position: 'fixed',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 9999 
                                    }}>
                                        <Alert.Heading>Update Your Comment</Alert.Heading>
                                        <br />
                                        <input ref={inputRef}></input>
                                        <br />
                                        <br/>
                                        <Button intent="danger" style={{ backgroundColor: '#C24641', marginLeft: '10px' }} onClick={() => updateMovie(props.id)}> Update </Button>

                                    </Alert>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            ))}
        </div>
    );
}

export default FavList;
