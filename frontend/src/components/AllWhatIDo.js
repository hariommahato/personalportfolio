import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell,  TableRow, TableBody, Button, styled } from '@mui/material'
import { getWhatIDo,deleteWhatIDo} from '../service/api';
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

const AllWhatIDo = () => {
    const [whatido,setwhatido] = useState([]);
    
    useEffect(() => {
        getAllWhatIDo();
    }, []);

    const deleteWhatIDoData = async (id) => {
        await deleteWhatIDo(id);
        getAllWhatIDo();
    }

    const getAllWhatIDo = async () => {
        let response = await getWhatIDo();
        setwhatido(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>title</TableCell>
                    <TableCell>description</TableCell>
                    {/* <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell> */}
                    {/* <TableCell></TableCell> */}
                </THead>
            </TableHead>
            <TableBody>
                {whatido.map((whatido,key) => (
                    <TRow key={key}>
                        <TableCell>{whatido._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{whatido.title}</TableCell>
                        <TableCell>{whatido.description}</TableCell>
                        {/* <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell> */}
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/admin/dashboard/editwhatido/${whatido._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteWhatIDoData(whatido._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllWhatIDo