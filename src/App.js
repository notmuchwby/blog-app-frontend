import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import AuthorizatitonPage from './components/auth/AuthorizationPage';
import WelcomePage from './components/welcome/WelcomePage';
import HomePage from './components/home-page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/signin' element={<AuthorizatitonPage/>}/>
          <Route path='/welcome' element={<WelcomePage/>}/>
          <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
