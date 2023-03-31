import logo from './images/logo.svg';
import dashboard from './images/illustration-dashboard.png';
import './App.scss';

function App() {
  return (
    <article className='ping-card'>
      <img src={logo} alt=''/>
      <h1>We are launching <span>soon!</span></h1>
      <p>Subscribe and get notified</p>
      <section className='ping-card-form'>
        <form noValidate>
          <input className='pcd' type='email' name='email' placeholder='Your Email Address...'></input>
          <button className='pcd' type='submit'>Notify Me</button>
        </form>
      </section>
      <section className='ping-card-dashboard'>
        <img src={dashboard} alt=''/>
      </section>
      <footer className='ping-card-copyright'>
        <section className='icons'>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-square-twitter"></i>
          <i class="fa-brands fa-square-instagram"></i>
        </section>
        <p><sup>&copy;</sup>Copyright Ping. All rights reserved.</p>
      </footer>
    </article>
  );
}

export default App;
