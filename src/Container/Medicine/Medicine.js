import React, { useEffect, useState } from "react";
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMedicine, getMedicines } from "../../redux/action/medicine.action";
import { handleDataCart } from "../../redux/slice/addToCart.slice";

function Medicine() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    const dispatch = useDispatch();

    const medicines = useSelector(state => state.medicines);
    console.log(medicines.medicines);

    const cart = useSelector(state => state.cart);
    console.log(cart);
    

    useEffect(() => {
        dispatch(getMedicines());

    }, []);

const getData = async () => {
      let response = await fetch("http://localhost:3004/medicines")
      let apiData = await response.json();

      setData(apiData)
  }
    console.log(data);

const handleCart = (event,id) => {
    event.preventDefault();
    dispatch(handleDataCart(id));
  

    // const data = cart.find((v) => v.id === id);

    // if(data){
    //   let cartData = [...cart];
    //   let index = cartData.findIndex((v) => v.id === id);
    //   cartData[index].quantity++;
    //   setCart(cartData)
    // }else{
    //   setCart((prev) => [...prev,{id:id,quantity:1}])
    // }
}

    
const handleSearchSort = () => {
        let fData = data.filter(
            (v) =>
                v.name.toLowerCase().includes(search.toLowerCase()) ||
                v.price.toString().includes(search) ||
                v.desc.toLowerCase().includes(search.toLowerCase()) ||
                v.expiry.toString().includes(search)
              
        );

        fData = fData.sort((a, b) => {
            if (sort === 'nameAsc') {
                return a.name > b.name ? 1 : -1;
            } else if (sort === 'nameDesc') {
                return b.name > a.name ? 1 : -1;
            } else if (sort === 'priceAsc') {
                return a.price > b.price ? 1 : -1;
            } else if (sort === 'priceDesc') {
                return b.price > a.price ? 1 : -1;
            }
        });
        console.log(fData);
        return fData;
    };

    const finalData = handleSearchSort();

    return (
        <>
            <div className="search_bar">
                <input
                    type="Search"
                    onChange={(event) => setSearch(event.target.value)}
                />
                <select onChange={(event) => setSort(event.target.value)}>
                    <option value="0">---Select---</option>
                    <option value="nameAsc">Name A to Z</option>
                    <option value="nameDesc">Name Z to A</option>
                    <option value="priceAsc">Low Price to High Price</option>
                    <option value="priceDesc">High Price to Low Price</option>
                </select>
            </div>
            <Container className="bg-light border">
            <div className="maindiv">
                {medicines.medicines.map((v, i) => (
                    <div>
                        <Link to={`/medicine/${v.id}`}>
                            <Card className="card">
                                <CardBody>
                                    { <img src={`../assets/img/${v.image}`} alt={`Image of ${v.name}`} />}
                                    <CardTitle tag="h4">
                                        <span>Name:</span>
                                        {v.name}
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                                        <span>Price:</span> {v.price}

                                    </CardSubtitle>
                                    <CardText className="span">
                                        <span>Expiry:</span>
                                        {v.expiry}
                                    </CardText>

                                    <Button onClick={(event) => handleCart(event ,v.id)} className='add-to-cart'>
                                        Add to cart
                                    </Button>
                                </CardBody>
                            </Card>
                        </Link>


                    </div>
                ))}
            </div>

        </Container>


        </>
    );
}

export default Medicine;


























































































































// import React, { useEffect, useState } from "react";

// import { Container } from "reactstrap";
// import {
//     Card,
//     CardImg,
//     CardTitle,
//     CardSubtitle,
//     CardText,
//     Button,
//     CardBody,
//     CardBodyProps,
// } from "reactstrap";
// import { Link } from "react-router-dom";
// import MedicineDetails from "./MedicineDetails";
// // import { Route } from "react-router-dom";


// const data = [
//     {
//         id: 1,
//         name: "Naproxen",
//         price: 85,
//         expiry: 2023,
//         Image: "napro.jpg",
//         desc: "Naproxen, sold under the brand name Aleve among others, is a nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever.",
//     },
//     {
//         id: 2,
//         name: "Jakafi",
//         price: 85,
//         expiry: 2023,
//         Image: "jakafi.webp",
//         desc: "Ruxolitinib, sold under the brand name Jakafi among others, is a medication used for the treatment of intermediate or high-risk myelofibrosis, a type of myeloproliferative neoplasm that affects the bone.",
//     },
//     {
//         id: 3,
//         name: "Hydrea",
//         price: 85,
//         expiry: 2023,
//         Image: "hydrea.png",
//         desc: "Hydrea (hydroxyurea) is an antineoplastic (anti-cancer) agent used to treat melanoma, resistant chronic myelocytic leukemia, and recurrent, metastatic, or inoperable carcinoma of the ovary and primary squamous cell (epidermoid) carcinomas of the head and neck.",
//     },
//     {
//         id: 4,
//         name: "Hiprex",
//         price: 85,
//         expiry: 2023,
//         Image: "hyprex.jpeg",
//         desc: "Hexamethylenetetramine, also known as methenamine, hexamine, or urotropin, is a heterocyclic organic compound with the formula (CH₂)₆N₄. This white crystalline compound is highly soluble in water and polar organic solvents. It has a cage-like structure similar to adamantane",
//     },
//     {
//         id: 5,
//         name: "Meftal",
//         price: 85,
//         expiry: 2023,
//         Image: "mef.webp",
//         desc: "Meftal Spas tablet is an antispasmodic medicine. It contains a combination of dicyclomine and mefenamic acid. This medicine is used for relieving pain and spasm in the abdomen and during or before menses (periods).",
//     },
//     {
//         id: 6,
//         name: "Wegovy",
//         price: 85,
//         expiry: 2023,
//         Image: "wegov.webp",
//         desc: "WEGOVY® (semaglutide) injection 2.4 mg is an injectable prescription medicine that may help adults and children aged ≥12 years with obesity (BMI ≥30 for adults, BMI ≥ 95th percentile for age and sex for children), or some adults with excess weight (BMI ≥27) (overweight) who also have weight-related medical problems to help them lose weight and keep it off. Wegovy® should be used with a reduced calorie meal plan and increased physical activity",
//     },
//     {
//         id: 7,
//         name: "Aripiprazole",
//         price: 85,
//         expiry: 2023,
//         Image: "asprito.jpg",
//         desc: "Aripiprazole is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole is known as an antipsychotic drug (atypical type).",
//     },
//     {
//         id: 8,
//         name: "Orlistat",
//         price: 85,
//         expiry: 2023,
//         Image: "orlistat.jpg",
//         desc: "Orlistat, sold under the brand name Xenical among others, is a medication used to treat obesity. Its primary function is preventing the absorption of fats from the human diet by acting as a lipase inhibitor, thereby reducing caloric intake.",
//     },
// ];

// function Medicine(props) {
//     const [data, setData] = useState([]);
//     const [search, setSearch] = useState("");
//     const [sort, setSort] = useState("");

//     useEffect(() => {
//         getData();
//         // let localData = JSON.parse(localStorage.getItem("medicines"));
//         // if (localData) {
//         //     setData(localData);
            
//         // }
//     }, []);

//     const getData = async () => {
//         let response = await fetch("http://localhost:3004/data");
//         let apiData = await response.json();
    
//         console.log(apiData);
    
                
//         setData(apiData);
//       };
      
    

//     const handleSearchSort = () => {
//         let fData = data.filter(
//             (v) =>
//                 v.name.toLowerCase().includes(search.toLowerCase()) ||
//                 v.price.toString().includes(search) ||
//                 v.desc.toLowerCase().includes(search.toLowerCase()) ||
//                 v.expiry.toString().includes(search)
//         );

//         fData = fData.sort((a, b) => {
//             if (sort === 'nameAsc') {
//                 return a.name > b.name ? 1 : -1;
//             } else if (sort === 'nameDesc') {
//                 return b.name > a.name ? 1 : -1;
//             } else if (sort === 'priceAsc') {
//                 return a.price > b.price ? 1 : -1;
//             } else if (sort === 'priceDesc') {
//                 return b.price > a.price ? 1 : -1;
//             }
//         })
//         console.log(fData);
//         return fData;
//     };

//     const finalData = handleSearchSort();

//     return (
//         <>
//             <div className="search_bar">
//                 <input
//                     type="Search"
//                     onChange={(event) => setSearch(event.target.value)}
//                 />
//                 <select onChange={(event) => setSort(event.target.value)}>
//                     <option value="0">---Select---</option>
//                     <option value="nameAsc">Name A to Z</option>
//                     <option value="nameDesc">Name Z to A</option>
//                     <option value="priceAsc">Low Price to High Price</option>
//                     <option value="priceDesc">High Price to Low Price</option>
//                 </select>
//             </div>
//             <Container className="bg-light border">

//                 <div className="maindiv">
//                     {data.map((v, i) => {
//                         return (
//                             <Link to={`/medicine/${v.id}`}>
//                                 <Card className="card">
//                                     <CardBody>
//                                         <img src={`../assets/img/${v.Image}`} alt={`Image of ${v.name}`} />
//                                         <CardTitle tag="h4">
//                                             <span>Name:</span>
//                                             {v.name}
//                                         </CardTitle>
//                                         <CardSubtitle className="mb-2 text-muted" tag="h5">
//                                             <span>Price:</span> {v.price}
//                                         </CardSubtitle>
//                                         <CardText className="span">
//                                             <span>Expiry:</span>
//                                             {v.expiry}
//                                         </CardText>
//                                     </CardBody>
//                                 </Card>
//                             </Link>
//                         );
//                     })}
//                 </div>

//             </Container>
//         </>
//     );
// }

// export default Medicine;
