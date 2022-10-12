import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addWhatIDo } from '../service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
   title:"",
   description:""
  
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddWhatIDo = () => {
    const [whatido, setWhatIDo] = useState(initialValue);
    const { title,description } = whatido;
    
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setWhatIDo({...whatido, [e.target.name]: e.target.value})
    }

    const addWhatIDoDetail = async() => {
        await addWhatIDo(whatido);
        navigate("/admin/dashboard/allwhatido");
        console.log("hello")
    }

    return (
        <Container>
            <Typography variant="h4">Add Skill</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" />
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
                <Button variant="contained" color="primary" onClick={() => addWhatIDoDetail()}>Add Skill</Button>
            </FormControl>
        </Container>
    )
}

export default AddWhatIDo;