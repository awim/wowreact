import './assets/css/App.css';
import { FC } from 'react';
import CvModulePage from './pages/CvModulePage';
// import { default as awim } from './contexts/awim-profile.json';


const App: FC = () => {
  return (
    <div className="App">
          <CvModulePage />
    </div>          
  );
}

export default App;
