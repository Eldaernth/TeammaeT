import React, { useState } from 'react';
import Axios from "axios";
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';

function UsersPage() {

    const [users, setUsers] = useState([
        {
            id: 0,
            name: "nama1",
            email: "dsadas",
            password: "asdfasf"
        },
        {
            id: 1,
            name: "nama2",
            email: "dsadas",
            password: "asdfasf"
        }
    ])

    Axios.get('http://localhost:8080/user')
        .then((ret) => {
            setUsers(ret.data);
        })

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
