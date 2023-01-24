import {router} from './routes/route';
import './assets/css/style.css';

const init = () => {
    router(window.location.hash);
  
    window.addEventListener("hashchange", () => {
      router(window.location.hash);
    });
  };
  
  window.addEventListener("load", init); 