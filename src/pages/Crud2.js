import React from 'react'
import { useNavigate } from "react-router-dom";

const Crud2 = () => {
    const navigate = useNavigate();

    const onSubmitForm = (event) => {
        event.preventDefault();
        const data = {
            id: new Date().getTime(),
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value
        }

        if (localStorage.getItem('user')) {
            const set = JSON.parse(localStorage.getItem('user'))
            set.push(data)
            localStorage.setItem('user', JSON.stringify(set));
        }
        else {
            localStorage.setItem('user', JSON.stringify([data]));
        }
        navigate('/Crud2View')
    }
    return (
        <>
            <div className='box_space'>
                <h2>Crud with local Storage</h2>
                <div className='row col-md-4 mx-auto mt-4'>
                    <form onSubmit={onSubmitForm}>
                        <div className=' form-group'>
                            <input name='name' type='text' placeholder='Enter name' className='form-control' />
                        </div>
                        <br />
                        <div className=' form-group'>
                            <input name='price' type='number' placeholder='Enter price' className='form-control' />
                        </div>
                        <br />
                        <div className=' form-group'>
                            <input name='quantity' type='number' placeholder='Enter Quantity' className='form-control' />
                        </div>
                        <br />
                        <div className=' form-group'>
                            <input type='submit' className='form-control btn btn-primary' />
                        </div>
                        <br />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Crud2
