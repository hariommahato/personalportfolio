import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {  getAbout, updateAbout } from '../service/api';

const initialValue = {
    text: '',
   
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditAbout = () => {
    const [about, setAbout] = useState(initialValue);
    const { text} = about;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadAboutDetails();
    }, []);

    const loadAboutDetails = async() => {
        const response = await getAbout(id);
        setAbout(response.data);
    }

    const editAboutDetail = async() => {
        const response = await updateAbout(id, about);
        navigate('/admin/dashboard/allabout');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setAbout({...about, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">text</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='text' value={text} id="my-input" aria-describedby="my-helper-text" />
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
                <Button variant="contained" color="primary" onClick={() => editAboutDetail()}>Edit About</Button>
            </FormControl>
        </Container>
    )
}

export default EditAbout;