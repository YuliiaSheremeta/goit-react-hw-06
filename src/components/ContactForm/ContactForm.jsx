import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { useId} from 'react';
import { nanoid } from 'nanoid'
import {addContact} from '../../redux/contactsSlice'
import { useDispatch } from 'react-redux';

const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Must be min 3 chars').max(50).required('This field is required!'),
       number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Format must be XXX-XX-XX').required('This field is required!')
        
    });

export default function ContactForm() {
    const dispatch = useDispatch();
    
    const idName = useId();
    const idNumber = useId();

    return (
        <Formik
        initialValues={{
        name: '',
        number: ''
        }}
            
        validationSchema={ContactSchema}
        
            onSubmit={(values, { resetForm }) => {
                dispatch(addContact({ id: nanoid(), ...values }));
                resetForm();
            }}>
            <Form>
                <div >
                    <label  htmlFor={idName} >Name</label>
                    <Field  type='text' name='name' id={idName} />
                    <ErrorMessage  name='name' component='div'/>
                </div>
                <div >
                    <label  htmlFor={idNumber}>Number</label>
                    <Field   type='text' name='number' id={idNumber} />
                    <ErrorMessage  name='number' component='div'/>
                    </div>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    );
    
};