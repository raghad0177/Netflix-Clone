import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Import Axios

function ModalMovie(props) {
    const inputRef = useRef(null);

    const handleSaveChanges = async () => {

        const data = {
            title: props.name,
            original_title: props.name,
            release_date: props.release_date,
            poster_path: props.imgPath,
            overview: props.overview,
            commints: inputRef.current.value
        };


        const basicUrl = 'https://movies-library-l5nh.onrender.com/addMovie';
        try {
            const response = await axios.post(basicUrl, data);
            console.log(response.data); // Log the response data

            // Close the modal after successful addition
            props.handleClose();
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    return (
        <>
            <Modal show={props.showModal} onHide={props.handleClose}>
                <Modal.Header closeButton style={{backgroundColor: '#BE857A'}}>
                    <Modal.Title >Add To Favourite List</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#DC8B7A' }} >
                    <Form>
                        <center>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{props.name}</Form.Label>
                            <img src={`https://image.tmdb.org/t/p/w500${props.imgPath}`} style={{ height: '250px', width: '350px', margin: '20px' }} alt="Movie Poster" />
                        </Form.Group>
                        </center>
                        <Form.Group controlId="exampleForm.ControlTextarea2">
                            <Form.Label>Add Your Comment</Form.Label>
                            <Form.Control ref={inputRef} as="textarea" rows={2} style={{backgroundColor: '#DA725C'}}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor: '#BE857A'}}>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>         
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalMovie;

