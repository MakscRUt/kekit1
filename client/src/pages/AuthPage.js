import React, {useEffect, useState} from 'react' 
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const AuthPage = () => {
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

const changeHandler = event =>{
    setForm({...form, [event.target.name]: event.target.value })
}

const registerHandler = async () => {
   try{
    const data = await request('/api/auth/register','POST', {...form})
    console.log('Data', data)
   } catch (e) {}
}

return (
    <div className='row'>
        <div className='col s6 offset-s3'>
            <h1> sokrati</h1>
            <div className="card blue-grey darken-1">
                 <div className="card-content white-text">
                    <span className="card-title">avtorizacia</span>
                     <div>
                         <div className="input-field">
                             <input 
                             placeholder="Vvedite email" 
                             id="email" 
                             type="text"
                             name="email"
                             className="yellow-input"
                             onChange={changeHandler} 
                             />
                                    <label htmlFor="email">Email</label>
                         </div>

                         <div className="input-field">
                             <input 
                             placeholder="Give me your password" 
                             id="password" 
                             type="password"
                             name="password"
                             className="yellow-input"
                             onChange={changeHandler} 
                             />
                                    <label htmlFor="password">password</label>
                         </div>

                     </div>
                 </div>
                <div className="card-action">
                    <button
                     className="btn yellow darken-4" style={{marginRight: 10}}
                     onClick={registerHandler}
                     disabled={loading}
                     >
                         Voity
                    </button>
                    <button
                     className="btn grey lighten-1 black-text"
                     onClick={registerHandler}
                     disabled={loading}
                     >
                         Registracia
                    </button>
                </div>
            </div>
         </div>
    </div>


)


}