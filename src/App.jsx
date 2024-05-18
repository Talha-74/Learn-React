import Button from "./Button";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import Map from "./Components/Map";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import Hello from "./Hello";

function App() {
  let HealthyFood = ['Sabzi', 'Mutton', 'Fish', 'Milk', 'Fruits'];
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
        <AddTodo />
        <div className="text-align-left">
          <TodoItem1 todoItems={todoItems} />
          {/* <TodoItem2 /> */}
        </div>
      </div>
   <Map items={HealthyFood} />
    </div>
  );
}
export default App;