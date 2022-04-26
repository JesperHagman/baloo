import { useState } from 'react'


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
    <form onSubmit={registerHandler}>
        <div>
            <h2>Registrera</h2>
            <p> {message} </p> {/* error or success message for the user */}
            
            <div>
                <label htmlFor='name'>Namn:</label>
                <input type="text" name="name" id="name" required onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>

            <div>
                <label htmlFor='phone'>Mobil:</label>
                <input type="text" phone="phone" id="phone" required onChange={e =>setDetails({...details, phone: e.target.value})} value={details.phone}/>
            </div>

            <div>
                <label htmlFor='email'>Epost:</label>
                <input type="text" email="email" id="email" required onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>

            <div>
                <label htmlFor='password'>Lössenord:</label>
                <input type="password" password="password" id="password" required onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>

            <input type="submit" value="REGISTER"/>
        </div>
    </form>
  )
}
