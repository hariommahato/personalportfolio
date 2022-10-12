import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import {  addContact } from '../service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    email:'',
    message:""
  
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddContact = () => {
    const [contact, setContact] = useState(initialValue);
    const { name,email,message} = contact;
    
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setContact({...contact, [e.target.name]: e.target.value})
    }

    const addContactDetail = async() => {
        await addContact(contact);
        navigate("/admin/dashboard/allcontact");
        console.log("hello")
    }

    return (
        <Container>
            <Typography variant="h4">Add Contact</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">message</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='message' value={message} id="my-input" />
            </FormControl>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" /> */}
            {/* </FormControl> */}
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addContactDetail()}>Add Admin</Button>
            </FormControl>
        </Container>
    )
}

export default AddContact;