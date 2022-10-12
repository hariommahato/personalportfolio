import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addAbout } from '../service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    text: '',
  
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddAbout = () => {
    const [about, setAbout] = useState(initialValue);
    const { text } = about;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setAbout({...about, [e.target.name]: e.target.value})
    }

    const addAboutDetail = async() => {
        await addAbout(text);
        navigate("/admin/dashboard/allabout");
    }

    return (
        <Container>
            <Typography variant="h4">Add About</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='text' value={text} id="my-input" />
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
                <Button variant="contained" color="primary" onClick={() => addAboutDetail()}>Add About</Button>
            </FormControl>
        </Container>
    )
}

export default AddAbout;