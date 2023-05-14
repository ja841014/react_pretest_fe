import { useState } from "react"
import api from "../api"
import AddClientRequest from "../Models/AddClientRequest";

export const NewClient = (props: any) => {

    const [name, setName] = useState('')

    function submitNewClient() {

        const newClient = new AddClientRequest(name);

        api.addClient({data: newClient})
        .then((res) => {
            props.addClient();
        })
        .catch((err) => {
            console.error(err.message)
        })
    }

    return(
        <div className='card'>
                <div className='card-header'>
                    Add a new client
                </div>
                <div className='card-body'>
                    <form method='POST'>
                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Name</label>
                                <input type="text" className='form-control' name='title' required 
                                    onChange={e => setName(e.target.value)} value={name} />
                            </div>
                        </div>
                        
                        <div>
                            <button type='button' className='btn btn-primary mt-3' onClick={submitNewClient}>
                                Add client
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    )
}