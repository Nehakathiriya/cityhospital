import React from 'react';
import { useParams } from 'react-router-dom';

function DepartmentDetails(props) {
    let {id} = useParams()
    console.log(id);
    return (
        <div>
            
        </div>
    );
}

export default DepartmentDetails;