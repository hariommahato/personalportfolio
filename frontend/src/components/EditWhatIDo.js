import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {  getWhatIDo,updateWhatIDo } from '../service/api';

const initialValue = {
   title:"",
   description:'',
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditWhatIDo = () => {
    const [whatido, setWhatIDo] = useState(initialValue);
    const { title,description} = whatido;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadWhatIDoDetail();
    }, []);

    const loadWhatIDoDetail = async() => {
        const response = await getWhatIDo(id);
        setWhatIDo(response.data);
    }

    const editWhatIDoDetail = async() => {
        const response = await updateWhatIDo(id, whatido);
        
        navigate('/admin/dashboard/allwhatido');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setWhatIDo({...whatido, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" aria-describedby="my-helper-text" />
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
                <Button variant="contained" color="primary" onClick={() => editWhatIDoDetail()}>Edit skill</Button>
            </FormControl>
        </Container>
    )
}

export default EditWhatIDo;