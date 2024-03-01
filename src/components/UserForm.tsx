import { BaseProps } from '../types';
import { FormEvent } from 'react';
import { User } from '../data/data';

type UserFormProps = BaseProps & {
    onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
    const handleSubmitUser = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const obj = Object.fromEntries(formData);
        console.log(obj);

        //Read form inputs and submit the form to the parent
        const newUser: User = {
            name: obj.name as string,
            email: obj.email as string,
            isActive: obj.isActive === 'on',
        };
        onSubmitUser(newUser);
    };

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={handleSubmitUser}>
                First Name: <input name="name" />
                Email: <input name="email" />
                Active: <input type="checkbox" name="isActive" />
                <button type="submit">Add User</button>
            </form>
        </>
    );
}
