import React, { useEffect, useState } from "react";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';


function AddToCart({ cart, setCart }) {
   console.log(cart);
  const [data, setData] = useState([]);
  const [totalprice, setTotalprice] = useState(0);

  useEffect(() => {
    getData();

  }, []);

  const getData = async () => {
    let response = await fetch("http://localhost:3005/medicines")
    let apiData = await response.json();

    setData(apiData)
  }

  let cartData = cart.map((v) => {
    let med = data.find((d) => d.id === v.id);
    return { ...med, ...v }

  })
  console.log(cartData);
  console.log(data, cart);

  let totalPrice = cartData.reduce((total, v) => total + v.price * v.quantity, 0);
  console.log(totalPrice);

  // let tPrice = cartData.map((v) =>{

  //  return totalprice + v.price * v.quantity; 


  // })
  // console.log(tPrice);


  // const addItemprice = (v) => {
  //   setData([...cartData, v]);
  //   setTotalprice([totalprice + v.price]);
  //   console.log(totalprice);

  // } 




  //   const handleCart = (event,id) => {
  //     event.preventDefault();
  //     const data = cart.find((v) => v.id === id);

  //     if(data){
  //       let cartData = [...cart];
  //       let index = cartData.findIndex((v) => v.id === id);
  //       cartData[index].quantity++;
  //       setCart(cartData)
  //     }else{
  //       setCart((prev) => [...prev,{id:id,quantity:1}])
  //     }
  // }

  const handleDec = (id) => {
    const addData = cart.map((v) => v.id === id);
    // console.log(addData);

    if (addData) {
      let cartData = [...cart];
      let index = cartData.findIndex((v) => v.id === id);
      cartData[index].quantity--;
      setCart(cartData)

    } else {
      setCart((prev, v) => [...prev, { quantity: v.quantity }])
    }


  }

  const handleInc = (id) => {

    const addData = cart.map((v) => v.id === id);
    console.log(addData);

    if (addData) {
      let cartData = [...cart];
      let index = cartData.findIndex((v) => v.id === id);
      cartData[index].quantity++;
      setCart(cartData)

    } else {
      setCart((prev, v) => [...prev, { quantity: v.quantity }])
    }
  }

  const handleRemove = (id) => {
    let updatedCart = cart.filter((v) => v.id !== id);
    setCart(updatedCart);
  };

  // let cartData = data.filter((f) => cart.find((v) => v === f.id))
  // console.log(cartData);

  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="addcard">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col"><h4><b>Shopping Cart</b></h4></div>
                  <div className="col align-self-center text-right text-muted"></div>
                </div>
              </div>
              {
                cartData.map((v, i) => (
                  <div className="row border-top border-bottom">
                    <div className="row main align-items-center">
                      <div className="col-2"><img src={`../assets/img/${v.image}`} alt={`Image of ${v.name}`} /></div>
                      <div className="col">
                        <div className="row text-muted">{v.name}</div>
                        <div className="row">Expiry:{v.expiry}</div>
                      </div>
                      <div className="col">
                        <button
                          className="btndec"
                          onClick={() => handleDec(v.id)}
                        >
                          -
                        </button>
                        {v.quantity}
                        <button
                          className="btninc"
                          onClick={() => handleInc(v.id)}
                        >
                          +
                        </button>
                      </div>


                      <div className="col"><CurrencyRupeeIcon />{v.price * v.quantity}</div>
                      <div className="col"><span className="close" onClick={() => handleRemove(v.id)}><DeleteIcon /></span></div>
                    </div>
                  </div>

                ))

              }
              {/* <div className="back-to-shop"><a href=" /medicines">←</a><span className="text-muted">Back to shop</span></div> */}
            </div>
            <div className="col-md-4 summary">
              <div><h5><b>Summary</b></h5></div>
              <hr />
              <form>
                <p>SHIPPING</p>
                <select><option className="text-muted">Standard-Delivery- €5.00</option></select>
                <p>GIVE CODE</p>
                <input id="code" placeholder="Enter your code" />
              </form>
              <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">{totalPrice}</div>
              </div>
              <button className="btn">CHECKOUT</button>
            </div>
          </div>
        </div>


      </div>
    </section>

  );
}

export default AddToCart;
