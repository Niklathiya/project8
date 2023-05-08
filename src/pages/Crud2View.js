import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


const Crud2View = () => {
    const navigate = useNavigate();
    const [getdata, setgetdata] = useState([]);

    useEffect(() => {
        setgetdata(JSON.parse(localStorage.getItem('user')) || []);
    }, [])

    const deleteHandler = (id) => {
        const fil = JSON.parse(localStorage.getItem('user'))
        const del = fil.filter((i) => i.id !== id);
        localStorage.setItem('user', JSON.stringify(del));
        setgetdata(del)
    }

    const onClickBack = () => {
        navigate('/Crud2')
    }
    return (
        <>
            <div className='box_space'>
                <div className='d-flex justify-content-center'>
                    <table>
                        <thead>
                            <tr>
                                <th className='border border-dark tbl_space'>Id</th>
                                <th className='border border-dark tbl_space'>Medicine Name</th>
                                <th className='border border-dark tbl_space'>Medicine Price</th>
                                <th className='border border-dark tbl_space'>Medicine Quantity</th>
                                <th className='border border-dark tbl_space'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getdata.map((i) => {
                                return (
                                    <tr key={Math.random()}>
                                        <td className='border border-success'>{i.id}</td>
                                        <td className='border border-success'>{i.name}</td>
                                        <td className='border border-success'>{i.price}</td>
                                        <td className='border border-success'>{i.quantity}</td>
                                        <td className='border border-success'>
                                            <button onClick={() => { if (window.confirm("Are you delete Data ?")) { deleteHandler(i.id) } }} className='btn btn-danger me-2'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <button className='btn btn-info mt-3' onClick={onClickBack}>Add more</button>
            </div>
        </>
    )
}

export default Crud2View
