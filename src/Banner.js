import React, { useState } from 'react';
import './banner.css';
import { Button } from '@material-ui/core';
import Search from './Search';
import { useHistory } from 'react-router-dom';

function Banner() {

  const toggleHideSearch = () => {
    // if (window.innerWidth <= 775) setSearch(false);
    // else setButton(true);
  };

  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className="banner__search">
        {showSearch && <Search />}

        <Button
          onClick={() => history.push('/search')}
          variant='outlined'
          className='banner__searchButton airbnb'>
          Search Airbnb
        </Button>

        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant='outlined'
          className='banner__searchButton calendar'>
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>

      </div>
      <div className='banner__info'>
        <h1>Get out and stretch imagination</h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus.
        </h5>
        <Button
          onClick={() => history.push('/search')}
          variant="outlined"
          color="primary">Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
