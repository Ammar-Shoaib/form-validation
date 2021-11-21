import { useRef, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput'

function App() {

  //* You can either use useState, useRef or FormData for inputs storing.

  const [values, setValues] = useState({
    username:'',
    email:'',
    birthday:'',
    password:'',
    confirmPassword:'',
  })

  const inputs = [
    {
      id:1,
      name:'username',
      type:'text',
      placeholder:'username',
      label:'Username',
      errorMessage:"Username should be 3-16 characters and shouldn't use any special characters.",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id:2,
      name:'email',
      type:'email',
      placeholder:'email',
      label:'Email',
      errorMessage:'It should be a valid email address.',
      required:true
    },
    {
      id:3,
      name:'birthday',
      type:'date',
      placeholder:'birthday',
      label:'Birthday',
    },
    {
      id:4,
      name:'password',
      type:'password',
      placeholder:'password',
      label:'Password',
      errorMessage:'Password should be 8-20 characters and it should include atleast 1 letter, 1 number and 1 special character.',
      pattern:'^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      required:true
    },
    {
      id:5,
      name:'confirmPassword',
      type:'password',
      placeholder:'confirmPassword',
      label:'Confirm Password',
      errorMessage:"Passwords don't match",
      pattern:values.password,
      required:true
    },
  ]

  const handleSubmit = e => {
    e.preventDefault()
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
  }

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]:value })
  }
console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map(input => (
          <FormInput 
            key={input.id} 
            name={input.name} 
            placeholder={input.placeholder} 
            type={input.type} 
            label={input.label}
            handleChange={handleChange}
            errorMessage={input.errorMessage}
            value={values[input.name]}
            pattern={input.pattern}
            required
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
