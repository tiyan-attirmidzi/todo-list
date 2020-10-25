// import logo from './logo.svg';
import './App.css';
import Paper from './components/Paper';
import Header from './components/Header';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <Paper>
      <Header/>
      <TodoForm/>
      <section className="todos">
        <div className="todo">
          <span className="todo-text">Test</span>
        </div>
        <div className="todo">
          <span className="todo-text">Test</span>
        </div>
        <div className="todo">
          <span className="todo-text">Test</span>
        </div>
        <div className="todo">
          <span className="todo-text">Test</span>
        </div>
        <div className="todo">
          <span className="todo-text">Test</span>
        </div>
        <div className="todo">
          <span className="todo-text">Test</span>
        </div>
        <div className="todo">
          <span className="todo-text">Test</span>
        </div>
        <div className="todo">
          <span className="todo-text">Test</span>
        </div>
        <div className="todo">
          <span className="todo-text">Test</span>
        </div>
        <div className="todo">
          <span className="todo-text">Test</span>
        </div>
      </section>
    </Paper>
  );
}

export default App;
