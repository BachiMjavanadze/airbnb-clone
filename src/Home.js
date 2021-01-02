import React from 'react';
import Banner from './Banner';
import Card from './Card';
import './Home.css';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';


function Home() {
  return (
    <div className='home'>
      <Banner />

      <div className='home__section'>
        <Card
          src={img1}
          title='Entire homes'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.' />

        <Card
          src={img2}
          title='Unique stays'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.' />

        <Card
          src={img3}
          title='Online Experiances'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.' />

        <Card
          src={img4}
          title='Online Experiances'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.' />

        <Card
          src={img5}
          title='Online Experiances'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.' />

        <Card
          src={img6}
          title='Online Experiances'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.' />

        <Card
          src={img7}
          title='Online Experiances'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.' />

        <Card
          src={img1}
          title='Online Experiances'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.' />

        <Card
          src={img3}
          title='Unique stays'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.' />

        <Card
          src={img4}
          title='Online Experiances'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.' />

      </div>



      {/* <div className='home__section'>
        <Card
          src="https://cdn.styleblueprint.com/wp-content/uploads/2015/12/SB-ATL-ZookHome-9-e1538165814448.jpg"
          title='1 Bedroom appartment'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.'
          price='$70/night' />

        <Card
          src="https://cdn.styleblueprint.com/wp-content/uploads/2015/12/SB-ATL-ZookHome-9-e1538165814448.jpg"
          title='Penthouse in London'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.'
          price='$350/night' />

        <Card
          src="https://cdn.styleblueprint.com/wp-content/uploads/2015/12/SB-ATL-ZookHome-9-e1538165814448.jpg"
          title='Bedroom appartment'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.'
          price='$150/night' />
      </div> */}



    </div>
  );
}

export default Home;
