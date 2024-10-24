import { useState } from 'react'
import axios from '../../api/axios'
import { useNavigate, Link } from 'react-router-dom'

function SignUp() {

  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/signup', { name, username, password })
      .then(result => {
        console.log(result)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <title> Sign Up </title>
      <div className='bg-white p-3 rounded w-25'>
        <h2> Sign Up </h2>

        <form onSubmit={ handleSubmit }>
          <div className="mb-3">
            <input
              type='text'
              placeholder='character name'
              autoComplete='off'
              name='name'
              className='form-control rounded-0'
              onChange={ (e) => setName(e.target.value) }
            />
          </div>
          <div className="mb-3">
            <input
              type='text'
              placeholder='username'
              name='username'
              className='form-control rounded-0'
              onChange={ (e) => setUsername(e.target.value) }
            />
          </div>
          <div className="mb-3">
            <input
              type='password'
              placeholder='password'
              name='password'
              className='form-control rounded-0'
              onChange={ (e) => setPassword(e.target.value) }
            />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'> Sign Up </button>
      </form>

      <p> Already have an account? </p>
      <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Log In </Link>
    </div>
  </div>

  );
}

export default SignUp;
