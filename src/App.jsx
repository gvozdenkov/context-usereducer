import './App.css';
import { List } from './components/List';
import { IngredientContextProvider } from './contexts/IngredientContext';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Context + useRducer + custom Fetch</h1>
      </header>
      <main>
        <IngredientContextProvider>
          <List />
        </IngredientContextProvider>
      </main>
    </div>
  );
}

export default App;
