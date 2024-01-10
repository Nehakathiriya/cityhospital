import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';

const data = [
    {
        id: 1,
        name: "Naproxen",
        price: 85,
        expiry: 2023,
        Image: "napro.jpg",
        desc: "Naproxen, sold under the brand name Aleve among others, is a nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever.",
    },
    {
        id: 2,
        name: "Jakafi",
        price: 85,
        expiry: 2023,
        Image: "jakafi.webp",
        desc: "Ruxolitinib, sold under the brand name Jakafi among others, is a medication used for the treatment of intermediate or high-risk myelofibrosis, a type of myeloproliferative neoplasm that affects the bone.",
    },
    {
        id: 3,
        name: "Hydrea",
        price: 85,
        expiry: 2023,
        Image: "hydrea.png",
        desc: "Hydrea (hydroxyurea) is an antineoplastic (anti-cancer) agent used to treat melanoma, resistant chronic myelocytic leukemia, and recurrent, metastatic, or inoperable carcinoma of the ovary and primary squamous cell (epidermoid) carcinomas of the head and neck.",
    },
    {
        id: 4,
        name: "Hiprex",
        price: 85,
        expiry: 2023,
        Image: "hyprex.jpeg",
        desc: "Hexamethylenetetramine, also known as methenamine, hexamine, or urotropin, is a heterocyclic organic compound with the formula (CH₂)₆N₄. This white crystalline compound is highly soluble in water and polar organic solvents. It has a cage-like structure similar to adamantane",
    },
    {
        id: 5,
        name: "Meftal",
        price: 85,
        expiry: 2023,
        Image: "mef.webp",
        desc: "Meftal Spas tablet is an antispasmodic medicine. It contains a combination of dicyclomine and mefenamic acid. This medicine is used for relieving pain and spasm in the abdomen and during or before menses (periods).",
    },
    {
        id: 6,
        name: "Wegovy",
        price: 85,
        expiry: 2023,
        Image: "wegov.webp",
        desc: "WEGOVY® (semaglutide) injection 2.4 mg is an injectable prescription medicine that may help adults and children aged ≥12 years with obesity (BMI ≥30 for adults, BMI ≥ 95th percentile for age and sex for children), or some adults with excess weight (BMI ≥27) (overweight) who also have weight-related medical problems to help them lose weight and keep it off. Wegovy® should be used with a reduced calorie meal plan and increased physical activity",
    },
    {
        id: 7,
        name: "Aripiprazole",
        price: 85,
        expiry: 2023,
        Image: "asprito.jpg",
        desc: "Aripiprazole is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole is known as an antipsychotic drug (atypical type).",
    },
    {
        id: 8,
        name: "Orlistat",
        price: 85,
        expiry: 2023,
        Image: "orlistat.jpg",
        desc: "Orlistat, sold under the brand name Xenical among others, is a medication used to treat obesity. Its primary function is preventing the absorption of fats from the human diet by acting as a lipase inhibitor, thereby reducing caloric intake.",
    },
];



function MedicineDetails(props) {
    let { id } = useParams();

    console.log(id);

    const selectMedicine = data.filter((medicine) => medicine.id == id);
    console.log(selectMedicine);

    return (
        <Container>

            <div className="medicine-details-container">
                {selectMedicine.map((v, i) => (
                    <div className="medicine-card">
                        <h2 className="medicine-name"  >{v.name}</h2>
                        <p className='medicine-price'>Price: ${v.price}</p>
                        <p className='medicine-expiry'>Expiry: {v.expiry}</p>
                        <p className='medicine-desc'>Description: {v.desc}</p>
                        <img src={`../assets/img/${v.Image}`} alt={`Image of ${v.name}`} />
                    </div>
                ))}
            </div>



        </Container>

    );
}

export default MedicineDetails;