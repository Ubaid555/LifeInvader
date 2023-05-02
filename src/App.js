import './App.css';
import Hero from './components/Hero/Hero';
import Programs from  './components/Programs/Programs';
import Reasons  from './components/Reasons/Reasons';
import Plans from './components/Plans/plans'
import Join from './components/Join/Join'
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonials/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
