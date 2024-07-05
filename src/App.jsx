import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import { ThemeProvider } from "@material-tailwind/react";
import { Outlet } from 'react-router-dom';

function App() {
   return (
    <ThemeProvider>
    <div className="App">
      <Header />
      <Outlet/>
      <Footer />
    </div>
    </ThemeProvider>
    
  );

}


export default App;
