import './App.css';
import TodoForm from './Components/TodoForm';
import TodoItems from './Components/TodoItems';

const todos = [
  { id: 1, title: 'Record Ubiquity' , date: new Date(2021, 7, 6) , notes: 'I need to buy and install Pro Tools' },
  { id: 2, title: 'Buy AxeFx III' , date: new Date(2021, 7, 6) , notes: 'Get some good clean guitar tones' },
  { id: 2, title: 'Practice Guitar' , date: new Date(2021, 7, 6) , notes: 'Practice riffs from Aion' }
];

function App() {

  return (
    <div className="App">
      <TodoForm />
      <TodoItems items={todos} />
    </div>
  );
}

export default App;
