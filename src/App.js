// import logo from './logo.svg';
import './App.css';
import Paper from './components/Paper'

function App() {
  return (
    <Paper>
      <section className="header">
        <button className="header-btn main-black-color">Add</button>
        <h1 className="header-title">Todo Lists</h1>
        <button className="header-btn main-red-color">Clear</button>
      </section>
      <section className="add">
        <div className="add-form">
          <input type="text" className="add-input"/>
          <button className="add-btn main-black-color">Enter</button>
        </div>
      </section>
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
