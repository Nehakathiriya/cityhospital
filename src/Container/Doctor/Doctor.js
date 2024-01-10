import React, { useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button, IconButton } from "@mui/material";
 
function Doctor({favorites , setFavorites }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [category, setCategory] = useState([]);
  const [select, setSelect] = useState(" ");
  const [wishlist, setWishlist] = useState([]);
  

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let apiData = await response.json();

    console.log(apiData);

    let uniqueArr = [];
    apiData.forEach((a) => {
      if (!uniqueArr.includes(a.category)) {
        uniqueArr.push(a.category);
      }
    });
    setCategory(uniqueArr);
    setData(apiData);
  };

  const handleSearchSort = () => {
    let filteredData = data.filter(
      (v) =>
        v.title.toLowerCase().includes(search) ||
        v.category.toLowerCase().includes(search)
    );

    if (select !== " ") {
      filteredData = filteredData.filter((v) => v.category === select);
    }

    filteredData = filteredData.sort((a, b) => {
      if (sort === 'nameAsc') {
        return a.title.localeCompare(b.title);
      } else if (sort === 'nameDesc') {
        return b.title.localeCompare(a.title);
      }
    });

    return filteredData;
  };

  const handleFav = (id) => {

    if (!favorites.includes(id)) {
      setFavorites((prev) => [...prev, id]);
      // setWishlist((prev) => [...prev, id]);
    } else {
      let fData = favorites.filter((v) => v !== id);

      console.log(fData);

      setFavorites(fData);

      // let wData = wishlist.filter((v) => v !== id);
      // setWishlist(wData);
    }

  }
  const finalData = handleSearchSort();

  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="section-title">
          <h2>Doctors</h2>
          <p>
            Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.
            Suspendisse sem risus, molestie vitae arcu et, tincidunt viverra
            erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam
            ut sem ex. Duis viverra ipsum lacus, ut pharetra arcu sagittis nec.
            Phasellus a eleifend elit.
          </p>

          <input
            type="search"
            onChange={(event) => setSearch(event.target.value)}
          />

          <select name="sort" onChange={(event) => setSort(event.target.value)}>
            <option value="0">--Select--</option>
            <option value="az">A to Z</option>
            <option value="za">Z to A</option>
          </select>
        </div>
        {
          category.map((v) => (
            <button style={{
              backgroundColor: select === v ? '#166ab5' : '#FF6337'
            }} onClick={() => setSelect(v)}>{v}</button>
          ))
        }

        <div className="row">
          {finalData.map((v, i) => (
            <div className="col-lg-6 border">
              <IconButton onClick={() => handleFav(v.id)} aria-label="delete" size="small">
                {favorites.includes(v.id) ? <FavoriteIcon /> : <FavoriteBorderIcon fontSize="inherit" />}
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

export default Doctor;


























// let localData = JSON.parse(localStorage.getItem("doctors"));
// if (localData) {
//   setData(localData);
// }

// const handleSearchSort = () => {


//   let fData = data.filter(
//     (v) =>
//       v.doctorName.toLowerCase().includes(search) ||
//       v.degree.toLowerCase().includes(search) ||
//       v.desc.toLowerCase().includes(search)
//   );

//   fData = fData.sort((a, b) => {
//     if (sort === 'nameAsc') {
//       return a.doctorName.localeCompare(b.doctorName);
//     } else if (sort === 'nameDesc') {
//       return b.doctorName.localeCompare (a.doctorName);
//     }
//   })

//   console.log(fData);
//   return fData;

// };
//  const finalData = handleSearchSort();

{/* <div className="row">
          {finalData.map((v, i) => (
            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src="../assets/img/doctors/doctors-1.jpg" className="img-doctor" alt />
                </div>
                <div className="member-info">
                  <h4>{v.doctorName}</h4>
                  <span>{v.degree}</span>
                  <p>{v.desc}</p>
                  <div className="social">
                    <a href><i className="ri-twitter-fill" /></a>
                    <a href><i className="ri-facebook-fill" /></a>
                    <a href><i className="ri-instagram-fill" /></a>
                    <a href>{" "}<i className="ri-linkedin-box-fill" />{" "}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

