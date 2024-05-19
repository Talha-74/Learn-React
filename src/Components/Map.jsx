import { Button } from "bootstrap";

function Map({items}) {
  return (
    <>
          {/* <div className="container w-50 border mt-5"> */}
              <span className="text-center"><h1>Healthy food</h1></span>
              <ul className="list-group mb-3">
                  {/* Ternay operator */}
                  {items.length === 0 ? <li className="list-group-item text-danger">No Healthy Food</li> : null}
                  {/* Logical operator */}
                  {/* {HealthyFood.length === 0 && <li className="list-group-item text-danger">No Healthy Food</li>} */}
        {items.map(item => <li key={item} className="list-group-item d-flex justify-content-between align-items-center">
          {item}
          <button className="btn btn-primary btn-sm ms-auto">Buy</button>
        </li>
                  
                  )}
              </ul>
          {/* </div> */}
    </>
  )
}
export default Map;