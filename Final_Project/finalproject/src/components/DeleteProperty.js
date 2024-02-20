import React, { useState } from "react";

const DeleteProperty = ({ propertyId })=>{

    const [isDeleting, setIsDelting] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [deleteError, setDeleteError] = useState(null);

    const handleDelete = async () =>{

        const confirmDelete = window.confirm('Are you sure you want to delete this property?');
        if(!confirmDelete)
        return;

        setIsDelting(true);

        try{
            const response = await axios.delete('http://localhost:8080/deleteproperty/{propertyId}')
            if(response.status === 200){
                setDeleteSuccess(true);

            } 
            else
            {
                setDeleteError('Failed to delet property');
            }
        }
        catch(error){
            setDeleteError('An error occured while deleting the property');
        }
        setIsDelting(false);
    };

    return(
        <div>
            {deleteSuccess && <p>Property deleted successfully!</p>}
            {deleteError && <p>{deleteError}</p>}
            {!isDeleting && !deleteSuccess && (
            <button onClick={handleDelete}>Delete Property</button>
            )}
            {isDeleting && <p>Deleting property...</p>}
        </div>
    );
};

export default DeleteProperty;