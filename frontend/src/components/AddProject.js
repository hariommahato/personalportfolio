// import React, { useState } from 'react';
// import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
// import { addProject} from '../service/api';
// import { useNavigate } from 'react-router-dom';

// const initialValue = {
//     name: '',
//     link:'',
//     image:'',
  
// }

// const Container = styled(FormGroup)`
//     width: 50%;
//     margin: 5% 0 0 25%;
//     & > div {
//         margin-top: 20px;
// `;

// const AddAdmin = () => {
//     const [project, setProject] = useState(initialValue);
//     const { name,link,image } = project;
    
    
//     let navigate = useNavigate();

//     const onValueChange = (e) => {
//         setProject({...project, [e.target.name]: e.target.value})
//     }

//     const addProjectDetail = async() => {
//         const formData=new FormData()
//         formData.append("name",project.name)
//         formData.append("link",project.link)
//         formData.append("image",project.image)
//         await addProject(formData);
//         navigate("/admin/dashboard/allproject");
//         console.log(project)
//     }

//     return (
        
//         <Container>
//             <Typography variant="h4">Add Project</Typography>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">name</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
//             </FormControl>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">link</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='link' value={link} id="my-input" />
//             </FormControl>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">image </InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='image' value={image} id="my-input" type='file' />
//             </FormControl>
//             {/* <FormControl>
//                 <InputLabel htmlFor="my-input">Username</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
//             </FormControl>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">Email</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
//             </FormControl>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">Phone</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" /> */}
//             {/* </FormControl> */}
//             <FormControl>
//                 <Button variant="contained" color="primary" onClick={() => addProjectDetail()}>Add Admin</Button>
//             </FormControl>
//         </Container>
//     )
// }

// export default AddAdmin;

import React from 'react'
import axios from 'axios'
const AddProject = () => {

    function submitForm(e) {
        e.preventDefault();
        const name = document.getElementById("name");
        const image = document.getElementById("image");
        const link = document.getElementById("link");
        const formData = new FormData();
        formData.append("name", name.value);
        formData.append("link",link.value)
        formData.append('image',image.value)
        console.log(formData)
        
        axios.post("http://localhost:3002/project/save-project", {
            body: formData,
            headers: {
              "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => console.log(res))
            .catch((err) => ("Error occured", err));
    }
  return (
    <div>
        <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="link">link</label>
        <input id="link" name="link" type="text" />

        <label htmlFor="image">Image</label>
        <input id="image" name="image" type="file" />

        <button>Send data</button>
      </form>
      
    </div>
  )
}

export default AddProject
