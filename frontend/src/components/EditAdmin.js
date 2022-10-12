import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {  getAdmin, updateAdmin } from '../service/api';

const initialValue = {
    username: '',
    password:'',
   
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditAdmin = () => {
    const [admin, setAdmin] = useState(initialValue);
    const { username,password} = admin;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadAdminDetails();
    }, []);

    const loadAdminDetails = async() => {
        const response = await getAdmin(id);
        setAdmin(response.data);
    }

    const editAdminDetail = async() => {
        const response = await updateAdmin(id, admin);
        
        navigate('/admin/dashboard/alladmin');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setAdmin({...admin, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input" aria-describedby="my-helper-text" />
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
                <Button variant="contained" color="primary" onClick={() => editAdminDetail()}>Edit Admin</Button>
            </FormControl>
        </Container>
    )
}

export default EditAdmin;