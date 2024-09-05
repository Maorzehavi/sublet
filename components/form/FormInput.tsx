import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';

type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
};


function FormInput(props: FormInputProps) {
    return (
        <div className='mb-2'>
            <Label htmlFor={props.name} className='capitalize'>{props.label || props.name}</Label>
            <Input type={props.type}
                id={props.name}
                name={props.name}
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
                required/>
        </div>
    )
}

export default FormInput