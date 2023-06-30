import { useState } from "react";
import './style.css';
import { signIn } from "../../services/auth";

const AuthorizatitonPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        signIn(login, password)
            .then((response) => {
                console.log(response)
            })
            .catch(e => console.log(e))


        setLogin('');
        setPassword('');
    }
    
    return (
        <> 
            Log into your account 

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enter your login: </label>
                    <input value={login} type="text" onChange={e => setLogin(e.target.value)}/>
                </div>

                <div>
                    <label>Enter your password: </label>
                    <input value={password} type="text" onChange={e => setPassword(e.target.value)}></input>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )

}   

export default AuthorizatitonPage