import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {  getProject, updateProject} from '../service/api';

const initialValue = {
    name:"",
    link:"",
    image:"",
   
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditProject = () => {
    const [project, setProject] = useState(initialValue);
    const { name,link,image} = project;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadProjectDetails();
    }, []);

    const loadProjectDetails = async() => {
        const response = await getProject(id);
        setProject(response.data);
    }

    const editProjectDetail = async() => {
        const response = await updateProject(id, project);
        navigate('/admin/dashboard/allproject');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setProject({...project, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Project</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Link</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='link' value={link} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">image</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='image' value={link} id="my-input" aria-describedby="my-helper-text"  type='file'/>
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
                <Button variant="contained" color="primary" onClick={() => editProjectDetail()}>Edit Project</Button>
            </FormControl>
        </Container>
    )
}

export default EditProject;