import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MyWishlist({ favorites, setFavorites }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(favorites);
    getData();
  }, []);

  const getData = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let apiData = await response.json();

    console.log(apiData);
    setData(apiData);
  };

  const handleFav = (id) => {

    if (!favorites.includes(id)) {
      setFavorites((prev) => [...prev, id]);
    } else {
      let fData = favorites.filter((v) => v !== id);

      console.log(fData);

      setFavorites(fData);


    }

  }


  let wData = data.filter((f) => favorites.find((v) => v === f.id));
  console.log(wData);



  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="section-title">
          <h2>wishlist</h2>
          <p>
            Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.
            Suspendisse sem risus, molestie vitae arcu et, tincidunt viverra
            erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam
            ut sem ex. Duis viverra ipsum lacus, ut pharetra arcu sagittis nec.
            Phasellus a eleifend elit.
          </p>

        </div>


        <div className="row">
          {wData.map((v, i) => (
            <div className="col-lg-6 border">

              <IconButton onClick={() => handleFav(v.id)} aria-label="delete" size="small">
                {favorites.includes(v.id) ? <FavoriteIcon /> : <FavoriteBorderIcon fontSize="inherit" />}
                {/* <FavoriteIcon /> */}
              </IconButton>

              <div className="pic text-center">
                <img src={v.image} className="img-doctor" alt />
              </div>
              <div className="member d-flex align-items-start">
                <div className="member-info">

                  <h4>{v.title}</h4>
                  <span>{v.category}</span>
                  <p>{v.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyWishlist; 