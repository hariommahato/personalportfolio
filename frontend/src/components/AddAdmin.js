import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addAdmin } from '../service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    username: '',
    password:'',
  
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddAdmin = () => {
    const [admin, setAdmin] = useState(initialValue);
    const { username,password } = admin;
    
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setAdmin({...admin, [e.target.name]: e.target.value})
    }

    const addAdminDetail = async() => {
        await addAdmin(admin);
        navigate("/admin/dashboard/alladmin");
        console.log("hello")
    }

    return (
        <Container>
            <Typography variant="h4">Add Admin</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input" />
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
                <Button variant="contained" color="primary" onClick={() => addAdminDetail()}>Add Admin</Button>
            </FormControl>
        </Container>
    )
}

export default AddAdmin;