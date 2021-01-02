import React from 'react';
import './SearchPage.css';
import Button from '@material-ui/core/Button';
import SearchResult from './SearchResult';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>

      <SearchResult
        img={img1}
        location='Private room in center of London'
        title='Stay at this spacious Edwardian House'
        description='1 guest · 1 room · 1 bed · 1.5 shared bathroom · WiFi · kitchen · Free parking · Washing Machine'
        star={4.73}
        price='$45 / hight'
        total='$117 / total' />

      <SearchResult
        img={img2}
        location='Private room in center of London'
        title='Stay at this spacious Edwardian House'
        description='1 guest · 1 room · 1 bed · 1.5 shared bathroom · WiFi · kitchen · Free parking · Washing Machine'
        star={4.20}
        price='$30 / hight'
        total='$55 / total' />

      <SearchResult
        img={img3}
        location='Private room in center of London'
        title='Stay at this spacious Edwardian House'
        description='1 guest · 1 room · 1 bed · 1.5 shared bathroom · WiFi · kitchen · Free parking · Washing Machine'
        star={'5.0'}
        price='$90 / hight'
        total='$140 / total' />

    </div>
  );
}

export default SearchPage;
