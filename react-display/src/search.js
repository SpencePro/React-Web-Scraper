import React, { useState } from 'react';
import { useGlobalContext } from './context';
import { Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { FormText } from 'reactstrap';
import { Button } from 'reactstrap';

export const Search = () => {

    const [value, setValue] = useState({
        url: ''
    });
    const {setSearchTerm} = useGlobalContext();

    const handleChange = (event) => {
        setValue(()=>({
            ...value, url: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.url.length > 0) {
            setSearchTerm(value.url);
        }
    }

    return (
        <>
        <Form className='form' onSubmit={handleSubmit}>
            <FormGroup className='mb-3'>
                <Label>Search for Product Details from Crate & Barrel</Label>
                <Input type='text' placeholder='Enter Product Page URL' value={value.url} onChange={handleChange} autoComplete='off'/>
                <FormText className='text-muted'>
                Please make sure the domain is for Crate & Barrel; other URLs will not work
                </FormText>
            </FormGroup>
            <Button variant='primary' type='submit'>
                Search
            </Button>
        </Form>
        </>
    )
}

