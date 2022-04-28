import {useState} from "react";
import styles from '../styles/form.module.css'

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
        <div className={styles.wrapper}>
            <h1>Edit your account</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="email">Mail:</label>
                <input className={styles.input} type="email" name="email" disabled={disabled}/>

                <label htmlFor="phone">Phone:</label>
                <input className={styles.input} type="text" name="phone" id="phone" disabled={disabled}/>
                
                <label htmlFor="fName">Firstname:</label>
                <input className={styles.input} type="text" name="fName" id="fName" disabled={disabled}/>

                <label htmlFor="lName">Lastname:</label>
                <input className={styles.input} type="text" name="lName" id="lName" disabled={disabled}/>

                <label htmlFor="bday">Birthday:</label>
                <input className={styles.input} type="date" name="bday" id="bday" disabled={disabled}/>

                <div className={styles.btn_wrapper}>
                    <button className={styles.btn} onClick={() => handleClick(disabled)}>{btnName}</button>
                    <button className={styles.btn}>Delete my account</button>
                </div>
            </form>
        </div>
    )
    
}