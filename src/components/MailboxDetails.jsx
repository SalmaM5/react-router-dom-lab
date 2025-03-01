import { Link, useParams } from 'react-router-dom'

const MailboxDetails = (props) =>{

const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
);


console.log(' Mailbox Details :', selectedBox);

if (!selectedBox) {
    return (
      <div>
        <h2>Mailbox Not Found!</h2>
        <Link to="/mailboxes">Back to Mailbox List</Link>
      </div>
    );
  }

return(

  <>
  
     <h1>MailBox {selectedBox._id}</h1>
     <h2>Details</h2>
     <p> box holder : {selectedBox.boxholder}</p>
     <p>Box Size: {selectedBox.boxSize} </p>
  
  
  
  </>



)



}

export default MailboxDetails