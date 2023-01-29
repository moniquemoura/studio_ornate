
import axios from "axios";
import { useState } from "react"
export function Login() {
    const [credential, setCredential] = useState();
    const valueInput = e => setCredential({ ...credential, [e.target.name]: e.target.value });
    const handleSubmit = async e => {
        e.preventDefault();

        // await axios.post(`http://minhaapi.com/agendamento`, credential)
        //     .then((res) => {
        //         // Resposta do SRV quando OK
        //     })
        //     .catch((err) => {
        //         // Resposta do SRV quando ERRO
        //     })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <div className="form-row">
                    <input name='email' type='text' className="form-control" />
                    <input name='password' className="form-control" type='password' />
                </div> */}

                <div className="form-row">
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com" onChange={valueInput} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" onChange={valueInput} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}