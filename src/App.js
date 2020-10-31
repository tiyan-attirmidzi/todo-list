// import logo from './logo.svg';
import './App.css';
import TodoList from './pages/TodoList';
import { ThemeProvider } from "emotion-theming";

const theme = {
  color: {
    primary: {
      black: "#2d2d2d",
      red: "#e06262"
    }
  }
}

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
