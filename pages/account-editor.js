import {useState} from "react";

export default function Editor () {
    const [disabled, setDisabled] = useState('disabled')
    const [btnName, setBtnName] = useState('Edit')
    
    const handleClick = (dis) => {
        console.log(disabled)
        if (dis === 'disabled') {
            setDisabled("");
            setBtnName('Save')
        }else{
            setDisabled('disabled')
            setBtnName('Edit')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
           <label htmlFor="email">Mail:</label>
           <input type="email" name="email" disabled={disabled}/>

           <label htmlFor="phone">Phone:</label>
           <input type="text" name="phone" id="phone" disabled={disabled}/>
           
           <label htmlFor="fName">Firstname:</label>
           <input type="text" name="fName" id="fName" disabled={disabled}/>

           <label htmlFor="lName">Lastname:</label>
           <input type="text" name="lName" id="lName" disabled={disabled}/>

           <label htmlFor="bday">Birthday:</label>
           <input type="date" name="bday" id="bday" disabled={disabled}/>
           
           <button onClick={() => handleClick(disabled)}>{btnName}</button>

            <button>Delete my account</button>
        </form>
        </div>
    )
    
}