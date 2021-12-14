import React, { useState } from 'react';
import { useGlobalContext } from './context';
import { Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';

export const Login = () => {

    const [value, setValue] = useState({
        username: '',
        password: ''
    });

    const {setLoginCredentials} = useGlobalContext();
    const [inputError, setInputError] = useState('');

    const handleChangeUsername = (event) => {
        setValue(()=>({
            ...value, username: event.target.value
        }));
    }

    const handleChangePassword = (event) => {
        setValue(()=>({
            ...value, password: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.username.length > 0) {
            setInputError('');
            if (value.password.length > 0) {
                setInputError('');
                setLoginCredentials(value);
            }
            else {
                setInputError('Password is not long enough');
            }
        }
        else {
            setInputError('Username is not long enough');
        }
    }

    return (
        <>
        <Form className='form' onSubmit={handleSubmit}>
            <FormGroup className='mb-3'>
                <Label>Login</Label>
                <Input type='text' placeholder='Username' id='username' value={value.username} onChange={handleChangeUsername} autoComplete='off'/>
                <Input type='password' placeholder='Password' id='password' value={value.password} onChange={handleChangePassword} autoComplete='off'/>
            </FormGroup>
            <Button variant='primary' type='submit'>
                Log In
            </Button>
            {inputError !== '' 
            ?
            <p>{inputError}</p>
            :
            ''
            }
        </Form>
        </>
    )
}
