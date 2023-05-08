import React, { useState } from "react";
function Crud1() {
    const [name, setname] = useState("")
    const [data, setdata] = useState([])
    const [show, setshow] = useState(false)
    const [editindex, seteditindex] = useState()

    const onClickHandleSave = () => {
        if (name.length !== 0) {
            setdata(newdata => [...newdata, name])
            setname("")
        }
    }

    const onClickHandleDelete = (index) => {
        data.splice(index, 1)
        setdata([...data])
    }

    const onClickHandleEdit = (i) => {
        setname(data[i])
        setshow(true)
        seteditindex(i)
    }
    const onClickHandleUpdate = () => {
        data.splice(editindex, 1, name)
        setdata([...data])
        setshow(false)
        setname("")
    }

    return (
        <div className="box_space">
            <div className="mb-5">
                <h1>Crud with state</h1>
                <input value={name} onChange={(e) => setname(e.target.value)} className="form-control w-25 mx-auto" />
                {!show ? <button onClick={onClickHandleSave} className="btn btn-primary mt-2">Add</button> :
                    <button onClick={onClickHandleUpdate} className="btn btn-primary mt-2">Update</button>}
            </div>

            {
                data.map((val, i) =>
                    <div className="d-flex justify-content-center">
                        <h1 className="me-3 align-top">{val}</h1>
                        <div>
                            <button className="edit btn btn-warning me-2" onClick={() => onClickHandleEdit(i)} >Edit</button>
                            <button className="delete btn btn-danger me-2" onClick={() => onClickHandleDelete(i)}>Delete</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
export default Crud1;