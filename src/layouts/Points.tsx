import { useEffect, useState } from "react"
import api from "../api"
import Client from "../Models/Client";
import { Point } from "./components/Point";
import { NewClient } from "./NewClient";

export const Points = () => {

    const [clients, setClients] = useState<Client[]>([]);
    const [submit, setSubmit] = useState<boolean>(false)

    useEffect(() => {
        api.getAllClient()
        .then((res) => {
            const loadClients: Client[] = [];
            console.log(res.data.users);
            const responsedata = res.data.users;

            for(const key in responsedata) {
                loadClients.push({
                    id: responsedata[key].id,
                    name: responsedata[key].name,
                    point: responsedata[key].point,
                })
            }

            setClients(loadClients)
        })
        .catch((err) => {
            console.error(err.message);
            throw new Error(err.message);
        })
    }, [submit])

    function addClient() {
        setSubmit(!submit)
    }


    return (
        <div>
            <div className='container'>
                <div>
                    <div className='row mt-5'>
                    {
                        clients.map(client => (
                            <Point key = {client.id} client = {client} />
                        ))
                    }
                    </div>
                </div>
            </div>
            <NewClient addClient={addClient} />
        </div>
    )
}