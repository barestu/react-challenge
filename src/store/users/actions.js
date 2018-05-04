import { 
  USER_REGISTER,
  USER_REGISTER
 } from './action.type'

 export const userRegister = () => {
   return (dispatch) => {
    window.$user.post('/register')
    .then(response => console.log('register success', response))
    .catch(err => console.log(err))
   }
 }