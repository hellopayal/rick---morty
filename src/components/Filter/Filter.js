import React from 'react'
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";



const Filter = ({pageNumber,updateStatus, updatePageNumber,updateGender,updateSpecies}) => {
  return (
    <div className='col-3'>
      <div className='text-center fw-bold fs-4 mb-2'>Filter</div>
      <div style={{ cursor: 'pointer' }} className='text-center text-decoration-underline  text-primary mb-4'>Clear Filters</div>

      <div className="accordion" id="accordionPanelsStayOpenExample">
        <Status updatePageNumber={updatePageNumber} updateStatus={updateStatus}/>
        <Species updatePageNumber={updatePageNumber} updateSpecies={updateSpecies}/>
        <Gender updatePageNumber={updatePageNumber} updateGender={updateGender}/>

      </div>
    </div>
  )
}

export default Filter;


