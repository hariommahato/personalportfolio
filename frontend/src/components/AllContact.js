import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell,  TableRow, TableBody, Button, styled } from '@mui/material'
import { getContact,deleteContact} from '../service/api';
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

const AllContact = () => {
    const [contact,setContact] = useState([]);
    
    useEffect(() => {
        getAllContact();
    }, []);

    const deleteContactData = async (id) => {
        await deleteContact(id);
        getAllContact();
    }

    const getAllContact = async () => {
        let response = await getContact();
        setContact(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>message</TableCell>
                   
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {contact.map((contact,key) => (
                    <TRow key={key}>
                        <TableCell>{contact._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{contact.name}</TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>{contact.message}</TableCell>
                        {/* <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell> */}
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/admin/dashboard/editcontact/${contact._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteContactData(contact._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllContact;