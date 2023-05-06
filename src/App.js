import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './signup';
import LogIn from './login'
import Main from './Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
