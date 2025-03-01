import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MailboxForm = (props)=>{

const navigate = useNavigate()

const initialState = {
    boxSize:'',
    boxholder:'',
}

const [formData, setFormData] = useState(initialState)

const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    props.addBox(formData)
    setFormData(initialState)
    navigate('/mailboxes')
}

return(


 <>
   <h1>New MailBox</h1>

 <form onSubmit={handleSubmit}>

    <label htmlFor=""> Enter A Boxholder</label>
    <input type="text"
    onChange={handleChange}
    value={formData.boxholder}
    name='boxholder'
    />
 
   <label htmlFor=""> Select A box Size</label>
     <select onChange={handleChange} name='boxSize'>
     <option value={formData.boxSize}>Small</option>
     <option value={formData.boxSize}>Medium</option>
     <option value={formData.boxSize}>Large</option>
     </select>
   

   <button type="submit">Sumbit</button>
 </form>
 
 </>

)

}

export default MailboxForm