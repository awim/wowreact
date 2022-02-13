import './assets/css/App.css';
import { FC } from 'react';
import { CvModule } from './modules/CvModule';
// import { default as awim } from './contexts/awim-profile.json';


const App: FC = () => {
  return (
    <div className="App">
          <CvModule />
    </div>          
  );
}

export default App;
