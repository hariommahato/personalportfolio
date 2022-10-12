import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {  getContact, updateContact } from '../service/api';

const initialValue = {
   name:"",
   email:"",
   message:"",   
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditContact = () => {
    const [contact, setContact] = useState(initialValue);
    const { name,email,message} = contact;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadContactDetails();
    }, []);

    const loadContactDetails = async() => {
        const response = await getContact(id);
        setContact(response.data);
    }

    const editContactDetail = async() => {
        const response = await updateContact(id, contact);
        
        navigate('/admin/dashboard/allcontact');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setContact({...contact, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Contacts</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">messgae</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='message' value={message} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl> */}
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editContactDetail()}>Edit Contact</Button>
            </FormControl>
        </Container>
    )
}

export default EditContact;