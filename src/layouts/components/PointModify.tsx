import { useState } from "react";
import api from "../../api";

export const PointModify = (props:any) => {
    const [point, setPoint] = useState<number>(0);
    
    const handleClose = () => {
        props.closeModal();
    };

    function submit() {

        api.modifypoint({data:{id: props.id, point: point}})
        .then((res) => {
            
        })
        .catch((err) => {
            console.error(err.message)
        })
    }

    return(
        <div className="modal" style={{ display: 'block' }}>
            <div className="modal-content">
                <h2>Enter Points</h2>
                <form>
                <label>
                    Point:
                    <input className='form-control' type="number" onChange={e => setPoint(Number(e.target.value)) } value={point} />
                </label>
                <div className="button-group">
                    <button type="submit" onClick={submit}>Submit</button>
                    <button onClick={handleClose}>Close</button>
                </div>
                </form>
            </div>
        </div>
    )
}