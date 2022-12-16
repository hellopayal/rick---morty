import React from 'react'
import FilterBtn from './FilterBtn'

const Gender = ({ updateGender, updatePageNumber }) => {
    let genders = ["female", "male", "genderless", "unknown"];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Gender
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {genders.map((item, index) => (
                        <FilterBtn 
                        task={updateGender} 
                        updatePageNumber={updatePageNumber}
                         key={index} name="gender" 
                         index={index} item={item} />

                    ))}


                </div>
            </div>
        </div>

    )
}

export default Gender