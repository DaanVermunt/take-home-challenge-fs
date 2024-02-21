// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import Heroes from './pages/Heroes';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Heroes />} />
      </Routes>
    </div>
  );
}

export default App;
