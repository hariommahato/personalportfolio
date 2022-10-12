import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell,  TableRow, TableBody, Button, styled } from '@mui/material'
import { getProject,deleteProject} from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllProject = () => {
    const [project,setProject] = useState([]);
    
    useEffect(() => {
        getAllProject();
    }, []);

    const deleteProjectData = async (id) => {
        await deleteProject(id);
        getAllProject();
    }

    const getAllProject = async () => {
        let response = await getProject();
        setProject(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>link</TableCell>
                    <TableCell>image</TableCell>
                    {/* <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell> */}
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {project.map((about,key) => (
                    <TRow key={key}>
                        <TableCell>{about._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{project.name}</TableCell>
                        <TableCell>{project.link}</TableCell>
                        {/* <TableCell> <img src= `${project.image}` alt="photo"/> </TableCell> */}
                        {/* <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell> */}
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/admin/dashboard/editproject/${project._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteProjectData(project._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllProject;