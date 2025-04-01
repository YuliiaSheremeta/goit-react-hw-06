import Contact from '../Contact/Contact';
import {deleteContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactList() {
    const dispatch = useDispatch();

    const contactItem = useSelector((state) => state.contacts.items);
    const searchFilter = useSelector((state)=>state.filters.name)
    const filteredContacts = contactItem.filter(contact => contact.name.toLowerCase().includes(searchFilter.toLowerCase()));
    
    return (
        <ul>
            {filteredContacts.map(contact => (
                <li key={contact.id}>
                    <Contact
                        name={contact.name}
                        number={contact.number}
                        onRemove={() => dispatch(deleteContact(contact.id))} />
               </li>
             ))}
        </ul>
    )
}