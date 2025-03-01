import { useState } from 'react'
import NavBar from './components/NavBar';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import { Route, Routes } from 'react-router-dom'
import './App.css'

const mailboxExample = {
  _id: 1,
  boxSize: 'Small',
  boxholder: 'Alex',
};

const App = () => {
const [mailboxes,setMailBox] = useState([mailboxExample]);

  const addBox = (formData) => {
  formData._id = mailboxes.length + 1
  setMailBox([...mailboxes, formData])
  }
  return(
  <>
  <NavBar />
   <Routes >
    <Route path={'/'} element={<main><h1>Post Office</h1></main>} />
     <Route path={'/mailboxes'} element={<MailboxList mailboxes={mailboxes} />} /> 
     <Route path={'/new-mailbox'} element ={<MailboxForm addBox={addBox} />} />
    <Route path={'/mailboxes/:mailboxId'} element={<MailboxDetails mailboxes={mailboxes} />} /> 



   </Routes>
  </>
)

};

export default App;