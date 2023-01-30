import {useContext, useState} from "react"
import {AuthProvider, Context} from "../../context/UserContext";

export function Login() {
    const [credential, setCredential] = useState();
    const valueInput = e => setCredential({...credential, [e.target.name]: e.target.value});
    const {signIn} = useContext(Context);
    const handleSubmit = async e => {
        e.preventDefault();
        signIn();
        // await axios.post(`http://minhaapi.com/agendamento`, credential)
        //     .then((res) => {
        //         // Resposta do SRV quando OK
        //     })
        //     .catch((err) => {
        //         // Resposta do SRV quando ERRO
        //     })
    }
    return (
        <AuthProvider>
            <div className='container' style={{color: 'white'}}>
                <form onSubmit={handleSubmit} className='login'>
                    {/* <div className="form-row">
                    <input name='email' type='text' className="form-control" />
                    <input name='password' className="form-control" type='password' />
                </div> */}

                    <div className="form-row">
                        <div className="mb-3 row">
                            <label className="col-sm-2 login col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" readonly className="form-control-plaintext" id="staticEmail"
                                       value="email@example.com" onChange={valueInput}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword"
                                       onChange={valueInput}/>
                            </div>
                        </div>
                    </div>
                    <div className='my-4 text-end'>
                        <button className="btn btn-lg " type='submit' style={{
                            color: 'black',
                            background: 'yellow'
                        }}>Entrar
                        </button>
                    </div>
                </form>
            </div>
        </AuthProvider>
    )
}