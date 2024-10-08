import B from'./Home.jsx';
import './App.css'
import C from './DropDown1.jsx';
import Yi1 from '../photos/yi1.png';
import Yi2 from '../photos/yi2.png';
import Yi3 from '../photos/yi3.png';
import Yi4 from '../photos/image.png';

function Home() {
   
  return (
    <>
   
    
    {/* <B/> */}
    
<section className="home-pg">
<span className="yuva-info">Learn-Bond-Grow</span>
<span className="yuva-info-p">Harnessing India's Massive Youth Power</span>

<img src="https://youngindians.net/wp-content/uploads/2023/04/yuva-logo.png" className='yuva-logo'></img>


    </section>
    
    <div className="imgs-yi">
    <img src={Yi3} alt="" className='yil0go3'/>
    <img src={Yi1} alt="" className='yil0go1'/>
    <img src={Yi2} alt="" className='yil0go2'/>

    </div>
    

    <section className="about-us">
    <div className="abt-us">
      <h1 className='main-logo sub-logo '>About us</h1>
      <div>
      <p>YUVA VIIT, an active student club of Young Indians (Yi) Visakhapatnam, is dedicated to harnessing the energy and passion of college students. Recognizing that youth is a powerful catalyst for India's growth, YUVA provides a dynamic platform for students to engage in leadership projects and initiatives that shape their skills and perspectives. 
Through hands-on experiences, mentorship, and collaboration, YUVA empowers students to take the lead in addressing pressing social and economic issues. By encouraging innovative thinking and community engagement, YUVA is committed to nurturing the next generation of influential leaders who will drive India’s development forward. <br />
Join YUVA to be part of this transformative journey and help shape a brighter future for India!</p>
      </div></div>

<br />
<br />
   <div className="exe-eve">
      <span className="exe-eve-div">
        <h1 className='main-logo sub-logo eve-exe-logo'>Participate and Win..</h1>
      <span className="exe-info">
        At YUVA, we aim to positively impact the environment while fostering tech innovation. Our activities range from environmental projects to tech events like hackathons, bringing together individuals passionate about change. Join us in making a difference, whether for a greener planet or through collaborative tech challenges. Showcase your talent, win exciting prizes, and be part of meaningful change!
      <ul className="yuva-eves" typeof='disc' >
        <li>Environmental Activies</li>
        <li>Wide-range Workshops</li>
        <li>Hackathons & many more</li>
      </ul> </span>
      </span>
      <span className="exe-eve-div2">
      <img src={Yi4} alt="" />
      </span>
    </div>
     
    </section>
   </>
  );
}

export default Home
