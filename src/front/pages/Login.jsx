import { useState } from "react"
import { useNavigate } from "react-router-dom";


export const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (email, password) => {
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL

            if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

            const response = await fetch(`${backendUrl}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const data = await response.json()
            console.log(!data.token)
            if (!data.token) {
                return undefined;
            }
            localStorage.setItem('token', data.token)
            return data;
        } catch {
            throw new Error("Error in login")
        }
    }

    const handleOnSubmit = async (evt) => {
        evt.preventDefault();

        const response = await handleLogin(email, password);

        if (response) {
            navigate('/user-data')
        } else {
            setError('Error login')
        }
    }


    return (
        <section className="container d-flex flex-column justify-content-center">
            {
                error ?
                    <div className="alert alert-danger">
                        {error}
                    </div> :
                    null
            }
            <h1>
                Login
            </h1>
            <form className="w-25" onSubmit={handleOnSubmit}>
                <fieldset className="d-flex flex-column">
                    <label>
                        Email
                    </label>
                    <input
                        type='email'
                        name="email"
                        value={email}
                        placeholder="email"
                        required
                        onChange={(evt) => setEmail(evt.target.value)}
                    />
                    <label>
                        Password
                    </label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        placeholder="email"
                        required
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                    <button type="submit" className="btn btn-success mt-2">
                        Enviar
                    </button>
                </fieldset>

            </form>
        </section>

    )
}