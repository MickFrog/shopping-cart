import './App.css';
import veggiesImg from './assets/veggiesHome.jpg'

function App() {
  return (
    <div className="contentBg App">
      <div className='homePic'>
        <img id="veggiesImg" src={veggiesImg} alt='Spinach_image' />
      </div>

      <div className='home-text'>
        <div className='quality-produce'>BEST QUALITY PRODUCE DELIVERED TO YOU!</div>
        <div>Empowering healthy lives through convenient access to fresh, sustainable groceries.</div>
        <div>Join our organic community and experience the goodness of nature delivered to your doorstep</div>
          
        <button className='shopBtn'>Shop Now</button>
      </div>
    </div>
  );
}

export default App;
