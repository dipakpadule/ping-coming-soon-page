import logo from './images/logo.svg';
import dashboard from './images/illustration-dashboard.png';
import './App.scss';
import { useState, useEffect} from 'react';


function App() {
  const initialData = {fname:"", lname:"", email:"", password:""}; //initial values for form fields
  const [formData, setFormData] = useState(initialData);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleFormData = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormError(formValidation(formData));
    setIsSubmit(true);
  };

  useEffect(()=>{
    if(Object.keys(formError).length === 0 && isSubmit){
      console.log(formData);
    }
  },[formData, formError, isSubmit]);

  const formValidation = (data)=>{
    const error = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if(!data.email){
      error.email = "email cannot be empty !";
    }else if(!regex.test(data.email)){
      error.email = "not a valid email !";
    }
    return error;
  };

  return (
    <article className='ping-card'>
      <img src={logo} alt=''/>
      <h1>We are launching <span>soon!</span></h1>
      <p>Subscribe and get notified</p>
      <section className='ping-card-form'>
        <form onSubmit={handleSubmit} noValidate>
          <input className='pcd pcdd' type='email' id='email' name='email' placeholder='Your Email Address...' value={formData.email} onChange={handleFormData}></input>
          <p>{formError.email}</p>
          <button className='pcd pcdb' type='submit'>Notify Me</button>
        </form>
      </section>
      <section className='ping-card-dashboard'>
        <img src={dashboard} alt=''/>
      </section>
      <footer className='ping-card-copyright'>
        <section className='icons'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-square-instagram"></i>
        </section>
        <p><sup>&copy;</sup>Copyright Ping. All rights reserved.</p>
      </footer>
    </article>
  );
}

export default App;
