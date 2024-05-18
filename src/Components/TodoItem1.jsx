import React from 'react';

function TodoItem1({ todoItems }) {
    return (
        <div className='container mt-2'>
            {todoItems.map((item) => (
                <div className="row mb-2 p-2 border rounded bg-light" key={item.id}>
                    <div className="col-6 d-flex align-items-center">
                        {item.name}
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        {item.date}
                    </div>
                    <div className="col-3">
                        <button type="button" className="btn btn-danger w-100">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoItem1;
