import { useState } from "react";
import { PointModify } from "./PointModify";

export const Point = (props: any) => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    function openModal() {
        setIsModalOpen(true)
    }
    function closeModal() {
        setIsModalOpen(false)
    }

    return (
        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
            <div className='row g-0'>
                <div className='col-md-2'>
                </div>
                <div className='col-md-6'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            Name: {props.client.name}
                        </h5>
                        <h4>
                            ID: {props.client.id}
                        </h4>
                        <p className='card-text'>
                            Point: {props.client.point}
                        </p>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <button className='btn btn-primary' onClick={openModal}>
                        Modify Point
                    </button>
                </div>
                {
                    isModalOpen && (<PointModify id={props.client.id} closeModal={closeModal}/>)
                }
            </div>
        </div>
    )
}