import { User } from '../data/data';

function UserTable({ users }: { users: User[] }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.isActive ? 'Active' : 'Not active'}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default UserTable;
