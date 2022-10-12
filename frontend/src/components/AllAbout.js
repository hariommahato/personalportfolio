import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell,  TableRow, TableBody, Button, styled } from '@mui/material'
import { getAbout,deleteAbout } from '../service/api';
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

const AllAbout = () => {
    const [about,setAbout] = useState([]);
    
    useEffect(() => {
        getAllAbout();
    }, []);

    const deleteAboutData = async (id) => {
        await deleteAbout(id);
        getAllAbout();
    }

    const getAllAbout = async () => {
        let response = await getAbout();
        setAbout(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>text</TableCell>
                    {/* <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell> */}
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {about.map((about,key) => (
                    <TRow key={key}>
                        <TableCell>{about._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{about.text}</TableCell>
                        {/* <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell> */}
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/admin/dashboard/editabout/${about._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteAboutData(about._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllAbout