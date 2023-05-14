
import './App.css';
import { NewClient } from './layouts/NewClient';
import { Points } from './layouts/Points';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Points/>
    </div>
  );
}
