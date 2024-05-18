function TodoItem2() {
    let todoName = 'Buy Milk';
    let todoDate = '12/05/2024';
    return (
        <div className='container mt-3 mb-2'>
            <div className="row">
                <div className="col-6">
                    {todoName}
                </div>
                <div className="col-3">
                    {todoDate}
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-danger w-100">Delete</button>
                </div>
            </div>
        </div>
    );
}
export default TodoItem2;