import { useState } from "react";
import Button from "./Button";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";
import Map from "./Components/Map";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import Hello from "./Hello";

function App() {
  const [HealthyFood, setHealthyFood] = useState(['Sabzi', 'Mutton', 'Fish', 'Milk', 'Fruits']);
  const OnKeyDown = (e) => {
    if (e.key === 'Enter') {
      let newItem = e.target.value;
      e.target.value = '';
      setHealthyFood([...HealthyFood, newItem]);
    }
  }
  const todoItems = [
    {
      id: 1,
      name: 'Buy Coffee',
      date: '12/05/2024'
    },
    {
      id: 2,
      name: 'Buy Milk',
      date: '12/05/2024'
    },
    {
      id: 3,
      name: 'Buy Tea',
      date: '12/05/2024'
    },
    {
      id: 4,
      name: 'Buy Sugar',
      date: '12/05/2024'
    },
    {
      id: 5,
      name: 'Buy Salt',
      date: '12/05/2024'
    }
  ];
  return (
    <div>
      <AppName />
      <div className='container w-50 border'>
        
        <div className="text-align-left">
          <TodoItem1 todoItems={todoItems}
          handleClick= {() => console.log('button is clicked.') }
          />
          {/* <TodoItem2 /> */}
        </div>
      </div>
      <div className='container w-50 border'>
      <AddTodo handleOnKeyDown={OnKeyDown} />
      <Map items={HealthyFood} />
      </div>

      <div className="container w-25 border border-info b-light mt-3 rounded-2">
        <Display />
        <ButtonsContainer />
      </div>
    </div>
  );
}
export default App;