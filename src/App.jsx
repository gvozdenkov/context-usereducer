import './App.css';
import { List } from './components/List';
import { Loading } from './components/Loading';
import { useFetch } from './hooks/useFetch/useFetch';

function App() {
  const { data, error, isLoading } = useFetch({ endpoint: 'ingredients' });

  return (
    <div className="App">
      <header>
        <h1>Context + useRducer + custom Hooks</h1>
      </header>
      <main>{isLoading ? <Loading /> : <List items={data.data} />}</main>
    </div>
  );
}

export default App;
