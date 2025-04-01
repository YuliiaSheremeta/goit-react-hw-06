import { ImPhone,ImUser } from "react-icons/im";

export default function Contact({ name, number, onRemove }) {
    return (
        <div>
            <div>
                <p><ImUser/>{name}</p>
                <p><ImPhone/>{number}</p>
            </div>
            <button type="button" onClick={onRemove}>Delete</button>
        </div>
    );
 };