import { useState } from 'react'
import styles from '../styles/form.module.css'


export default function Register() {
  const [details, setDetails] = useState({name: "", email: "", password: "", phone: ""})
  const [message, setMessage] = useState("")

    const registerHandler = async (e) => {
      e.preventDefault()

      const registerUser = {
          name: details.name,
          phone: details.phone,
          email: details.email,
          password: details.password
      }

      fetch('/api/register', {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(registerUser),
      })
      .then((res) => {
          return res.json()
      })
      .then((data) => {
          console.log(data)
          setMessage(data.message)
      })
  }

  return (
    <div className={styles.wrapper}>
        <form onSubmit={registerHandler} className={styles.form}>
            <h1>Registrera</h1>
            <p> {message} </p> {/* error or success message for the user */}
            
        
                <label htmlFor='name'>Namn:</label>
                <input className={styles.input} type="text" name="name" id="name" required onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}/>
            

        
                <label htmlFor='phone'>Mobil:</label>
                <input className={styles.input} type="text" phone="phone" id="phone" required onChange={e =>setDetails({...details, phone: e.target.value})} value={details.phone}/>
            

        
                <label htmlFor='email'>Epost:</label>
                <input className={styles.input} type="text" email="email" id="email" required onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
            

        
                <label htmlFor='password'>Lössenord:</label>
                <input className={styles.input} type="password" password="password" id="password" required onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
            
            <div className={styles.btn_wrapper}>
                <input type="submit" value="REGISTER" className={styles.btn}/>
            </div>
        </form>
    </div>
  )
}
