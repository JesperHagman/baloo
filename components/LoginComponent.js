import React, { useState} from 'react'
import Link from "next/link"; 
import styles from "../styles/form.module.css"

const LoginComponent = ({ pathName }) => {

  const [details, setDetails] = useState({ email: "", password: ""})
  const [error, setError] = useState("")
   
  const handleLogin = async (e) => {
    e.preventDefault();
  
    const user = {
      email: details.email,
      password: details.password
    }

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then((data) => {
      if (data.loggedIn) {
        const userData = data.userData
        localStorage.setItem("userID" , userData)
        router.push({
          pathname: pathName //redirecting to profile page if details match
        });
      } else {
        setError(data.message)
      }
    })
  }

    return ( 
      <div className={styles.wrapper}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h1>Logga in</h1>
        <p> {error} </p> {/* message for the user if details does not match */}

        <label htmlFor='email'>Epost:</label>
        <input className={styles.input} type="text" email="email" id="email" required onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
      

      
        <label htmlFor='password'>Lösenord:</label>
        <input className={styles.input} type="password" password="password" id="password" required onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
      
        <div className={styles.btn_wrapper}>
          <input className={styles.btn} type="submit" value="LOGGA IN"/>
          <button className={styles.btn}>
          <Link href="/register" >
              <a> REGISTRERA </a>
          </Link>
          </button>
        </div>
        
      </form>
      </div>
    )
  }   
export default LoginComponent;