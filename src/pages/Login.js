import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const onClickHome = () => {
        navigate('/')
    }
    return (
        <div className='box_space'>
            <h2>Login</h2>
            <div className='row col-md-4 mx-auto mt-4'>
                <form>
                    <div className=' form-group'>
                        <input name='name' type='text' placeholder='Enter name' className='form-control' />
                    </div>
                    <br />
                    <div className=' form-group'>
                        <input name='email' type='email' placeholder='Enter email' className='form-control' />
                    </div>
                    <br />
                    <div className=' form-group'>
                        <input name='password' type='password' placeholder='Enter password' className='form-control' />
                    </div>
                    <br />
                    <div className=' form-group'>
                        <input type='submit' className='form-control btn btn-primary' onClick={onClickHome} />
                    </div>
                    <br />
                </form>
            </div>
        </div>
    )
}

export default Login
