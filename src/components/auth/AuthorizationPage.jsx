import { useState } from "react";
import './style.css';
import { signIn } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const AuthorizatitonPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();

        signIn(login, password)
            .then((response) => {
                localStorage.setItem('token', response.token);
                console.log(response.token);
                navigate('/home');
            })
            .catch(e => {
                setErrorMessage('There was an error while trying to sign in!')
                console.log(e)
            })


        setLogin('');
        setPassword('');
    }
    
    return (
        <div className='auth-page'> 
            <div className='left-side-container'>
                <div className='left-side'>
                     <h2>
                         Log into your account
                     </h2>
            
                     <form onSubmit={handleSubmit}>
                         <div className='login-container'>
                             <label>Enter your login: </label>
                             <input value={login} type="text" onChange={e => setLogin(e.target.value)}/>
                         </div>
            
                         <div className='password-container'>
                             <label>Enter your password: </label>
                             <input value={password} type="text" onChange={e => setPassword(e.target.value)}></input>
                         </div>
            
                         <div>
                             <button type="submit">Submit</button>
                         </div>
                     </form>
            
                     {errorMessage && 
                     <div>
                         {errorMessage}
                     </div>}
                </div>
            </div>


           <div className='right-side-container'>
                <div className='right-side'>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Odio incidunt inventore cumque, sequi velit ipsa natus minima consequuntur magni,
                        nihil hic beatae ad reiciendis facere quaerat voluptatibus.
                        Omnis, inventore eos.
                    </div>
                </div>
           </div>
        </div>
    )

}   

export default AuthorizatitonPage