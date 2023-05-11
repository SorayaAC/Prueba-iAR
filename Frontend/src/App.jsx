import { useState } from 'react';
import Exercise1 from './components/exercise1';
import db from './services/db.json';

function App() {
  const [data, setData] = useState(db);

  return (
    <>
      <Exercise1 data={data} />
    </>
  );
}

export default App;
