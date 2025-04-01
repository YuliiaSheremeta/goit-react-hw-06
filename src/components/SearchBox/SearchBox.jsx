import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { useId } from 'react';


export default function SearchBox() {
    
    const dispatch = useDispatch();

    const searchFilter = useSelector((state) => state.filters.name);
    const contacts = useSelector((state) => state.contacts.items);
    const filterId = useId();

    const handleFilterSearch = (event) => {
        const query = event.target.value.toLowerCase();
        dispatch(changeFilter(query));
}

    //const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchFilter.toLowerCase()));


    return (
        <div>
            <label htmlFor={filterId}> Search</label>
            <input type="text" value={searchFilter} id={filterId} onChange={handleFilterSearch}/>
        </div>
      
    )
}