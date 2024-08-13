import axios from 'axios';
 import { config } from './config';


export async function login(email, pwd) {
    const body = { email, pwd }
    try {
      const response = await axios.post('http://localhost:8080/users/signin', body)
      return response.data
    } catch (ex) {
      console.log(`exception: `, ex)
    }

    return null

}

// export async function register(firstName, lastName, email, password, address) {
//   const body = { firstName, lastName, email, password, address }

//   try {
//     // post body  
//     // send the post request
//     const response = await axios.post('http://localhost:8080/users/signup', body)

//     // return the json body from response object
//     return response.data
//   } catch (ex) {
//     console.log(`exception: `, ex)
//   }

//   return null
// }

// export async function Savestation(code, name) {
//   const body = {code, name }
//   try {
//     const response = await axios.post('http://localhost:8080/station/add', body)
//     return response.data
//   } catch (ex) {
//     console.log(`exception: `, ex)
//   }

  

// }