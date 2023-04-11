import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { appRoutes } from './constants/appRoutes';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {appRoutes?.map((route) => (
          <Route
            key={route?.path}
            path={route?.path}
            element={route?.element}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
