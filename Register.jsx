// import { useState } from "react"
// import { useLocation } from "react-router-dom"

// function Register()
// {
//     const [id,setid]=useState(0)
//     const location=useLocation()



//    console.log(location.state.id);
//     return(
//         <div>
//          <h1>Register</h1>
//          {location.state.id && (
//          <p>{location.state.id}</p>
//          ) 
//         }
//          </div>
//     )
// }

// export default Register
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { register } from '../services/admin'


function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')

  // get the navigation hook
  const navigate = useNavigate()

  const onRegister = () => {
    if (firstName.length == 0) {
      toast.error('please enter first name')
    } else if (lastName.length == 0) {
      toast.error('please enter last name')
    } else if (email.length == 0) {
      toast.error('please enter email')
    } else if (password.length == 0) {
      toast.error('please enter password')
    } else if (confirmPassword.length == 0) {
      toast.error('please confirm the password')
    } else if (password != confirmPassword) {
      toast.error('password does not match')
    } else if (address.length == 0) {
      toast.error('please enter address')
    }else {
        // call post /admin/register api
        const result = register(firstName, lastName, email, password, address)
        // if (result['status'] == 'success') {
        //   toast.success('Successfully registered a new user')
        //   navigate('/login')
        // } else {
        //   toast.error(result['error'])
        // }
        if(result){
          navigate('/login')
        }
      }
  }

  return (
    <div>
      <h2 className='page-header'>Register</h2>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Address</label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <div>
                Already have an account ? <Link to='/login'>Login here</Link>
              </div>
              <button onClick={onRegister} className='btn btn-success mt-2'>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default Register
