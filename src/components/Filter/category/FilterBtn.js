import React from 'react'

const FilterBtn = ({ name, index, item,task,updatePageNumber }) => {
    return (
        <div>
            <style jsx>
                {`
                input[type="radio"]
                { 
                display:none;
                }

            `}
            </style>
            <div className="form-check">
                <input onClick={()=>{
                    updatePageNumber(1);
                    task(item);
                }
                }
                className="form-check-input x" type="radio" name={name} id={`${name} ${index}`} />
                <label className="btn btn-outline-primary" for={`${name} ${index}`}>
                    {item}
                </label>
            </div>
        </div>
    )
}

export default FilterBtn;