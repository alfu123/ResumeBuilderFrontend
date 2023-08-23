import React, { useState } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Form, FormGroup } from 'reactstrap'
const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: ''
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8090/api/registers', formData);
            alert('User data submitted successfully!');
        } catch (error) {
            alert('An error occurred while submitting user data.');
            console.error(error);
        }
    };
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for="firstName">
                        FirstName
                    </Label>
                    <Input
                        id="firstName"
                        name="FirstName"
                        placeholder=""
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">
                        LastName
                    </Label>
                    <Input
                        id="lastName"
                        name="lastName"
                        placeholder=""
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="userName">
                        UserName
                    </Label>
                    <Input
                        id="userName"
                        name="userName"
                        placeholder=""
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder=""
                        type="password"
                    />
                </FormGroup>
            </Form>
        </div>
    )
}

export default Signup
