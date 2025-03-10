import { Link } from 'react-router-dom'

const MailboxList = (props) =>{

 return (

  <>
   <h1>MailBox List</h1>
   <ul>
                {props.mailboxes.map((mailbox) => (
                    <li key={mailbox._id}>
                        <Link to={`/mailboxes/${mailbox._id}`}> MailBox {mailbox._id}</Link>
                    </li>
                ))}
            </ul>
  
  
  
  
  </>


 )

}

export default MailboxList