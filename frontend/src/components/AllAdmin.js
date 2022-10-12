import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell,  TableRow, TableBody, Button, styled } from '@mui/material'
import { getAdmin,deleteAdmin} from '../service/api';
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

const AllAdmin = () => {
    const [admin,setAdmin] = useState([]);
    
    useEffect(() => {
        getAllAdmin();
    }, []);

    const deleteAdminData = async (id) => {
        await deleteAdmin(id);
        getAllAdmin();
    }

    const getAllAdmin = async () => {
        let response = await getAdmin();
        setAdmin(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>username</TableCell>
                    <TableCell>password</TableCell>
                    {/* <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell> */}
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {admin.map((about,key) => (
                    <TRow key={key}>
                        <TableCell>{about._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{about.username}</TableCell>
                        <TableCell>{about.password}</TableCell>
                        {/* <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell> */}
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/admin/dashboard/editabout/${about._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteAdminData(about._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllAdmin