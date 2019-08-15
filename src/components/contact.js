import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import Alert from 'react-bootstrap/Alert';

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            contact: {
                fullname: '',
                email: '',
                message: ''
            },
            base: {
                fullname: '',
                email: '',
                message: ''
            },
            showForm: true,
            successMessage: false,
            failMessage: false
        }
        this.responseMessage = '';

    }

    handleChange = (event) => {
        const value = event.target.value;
        const id = event.target.id;
        this.setState({
            contact: {...this.state.contact,
                [id]:value
            },
            base: {...this.state.base,
                [id]:value
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Axios.post('https://stan-resume-backend.herokuapp.com/contact', this.state.contact)
        .then((response)=>{
            const data = response.data;
            if(data.status){
                this.responseMessage = data.message;
                this.setState({showForm: false, successMessage: true});
            }else{
                this.responseMessage = data.message;
                this.setState({failMessage: true});
                setTimeout(()=>{this.setState({contact:this.state.base})}, 3000);
            }
        })
        .catch((error)=>{console.log(error)})
    }
   
    render() {
        
        return (
            <div className='form'>
            {this.state.successMessage && (<Alert variant="success">
                    <span>{this.responseMessage}</span>
            </Alert>)}

            {this.state.failMessage && (<Alert variant="danger">
                    <span>{this.responseMessage}</span>
            </Alert>)}
            
            {this.state.showForm && (<div><h4>CONTACT ME</h4>         
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="fullname">
            <Form.Control type="text" onChange={this.handleChange} placeholder="Your Full Name" />
            </Form.Group>
            <Form.Group controlId="email">
            <Form.Control type="email" onChange={this.handleChange} placeholder="Your Email" />
            </Form.Group>
            <Form.Group controlId="message">
            <Form.Control as="textarea" rows="3" onChange={this.handleChange} placeholder="Your Message" />
            </Form.Group>
            <Button variant="primary" type='submit'>Send</Button>
            </Form></div>)}
            </div>
        )
    }
}
