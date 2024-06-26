import React, { useState } from 'react';

function AddTodo({handleOnKeyDown}) {

    return (
        <div className='container mt-3'>
            <div className="row mb-1 p-2 border rounded bg-light">
                <div className="col-md-5">
                    <input className='form-control' onKeyDown={handleOnKeyDown} type="text" placeholder="Enter Your Todo Here" />
                </div>
                {/* <p>{word}</p> */}
                <div className="col-md-4">
                    <input className='form-control' type="date" />
                </div>
                <div className="col-md-3">
                    <button type="button" className="btn btn-success w-100">Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;
