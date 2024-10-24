import { useContext, useState } from 'react'
import axios from '../../api/axios'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../../context/AuthProvider'

function LogIn() {

  const { setAuth } = useContext(AuthContext)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [user, setUser] = useState(null); // Define state for the user
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('/', { username, password }, { withCredentials: true })
      .then(result => {
        console.log(result)

        if (result.data === 'Success') {
          const accessToken = result?.data?.accessToken

          setAuth({ username, password, accessToken })
          setUsername('')
          setPassword('')

          // set the state of the user
          setUser(result?.data)
          // store the user in localStorage
          result.testing = 1;
          localStorage.setItem('user', JSON.stringify(result.testing)); // Ensure it's stringified
          console.log(result.testing);

          navigate('/home')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <title> Log In </title>
      <div className='bg-white p-3 rounded w-25'>
        <h2> Log In </h2>

        <form onSubmit={ handleSubmit }>
          <div className="mb-3">
            <input
              type='username'
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

          <button type='submit' className='btn btn-success w-100 rounded-0'> Log In </button>
      </form>

      <p> Don't have an account? </p>
      <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Sign Up </Link>

      <p> or </p>

      <Link to='/game' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Play as a guest </Link>
    </div>
  </div>

  );
}

export default LogIn;
