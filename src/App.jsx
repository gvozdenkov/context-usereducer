import './App.css';
import { useGet } from './hooks/useFetch/useFetch';

function App() {
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const url2 = 'https://dummyjson.com/products';
  const { data, error, isLoading } = useGet(url);
  console.log({ data, error, isLoading });

  return (
    <div className="App">
      <header>
        <h1>Context + useRducer + custom Hooks</h1>
      </header>
      <main></main>
    </div>
  );
}

export default App;
