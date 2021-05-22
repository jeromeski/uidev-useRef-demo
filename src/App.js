import { Fragment, useRef } from "react";
import "./styles.css";


function Form() {

  let nameRef = useRef(null);
  let emailRef = useRef(null);
  let passwordRef = useRef(null);


  const handleSubmit = () => {

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    console.log(data)
    
  }

  const handleReset = () => {

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    data.name = null;
    data.email = null;
    data.password = null;

    console.log(data)
  }

  return (
    <Fragment>

      <label>Name:<input type='text' placeholder='Name' ref={nameRef} /></label>
      <label>Email:<input type='email' placeholder='Email' ref={emailRef} /></label>
      <label>Password:<input type='password' placeholder='Password' ref={passwordRef} /></label>

      <button onClick={() => nameRef.current.focus()}>Focus Name</button>
      <button onClick={() => emailRef.current.focus()}>Focus Email</button>
      <button onClick={() => passwordRef.current.focus()}>Focus Password</button>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </Fragment>
  )
}

export default function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}


