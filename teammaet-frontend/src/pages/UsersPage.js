import React, {useContext, useEffect} from 'react';
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom';
import {UserContext} from "../context/UserContext";

function UsersPage() {

    const {users,userMethods} = useContext(UserContext);

    useEffect(() => {
        userMethods.getUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>

            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map((row) =>
                    <tr>
                        <td>
                            <Link to={`user/${row.id}`}>
                                {row.name}
                            </Link></td>
                        <td>{row.email}</td>
                    </tr>)
                }
                </tbody>
            </Table>
        </div>
    )
}

export default UsersPage
