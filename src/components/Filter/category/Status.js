import React from 'react'
import FilterBtn from './FilterBtn'

const Status = ({updateStatus, updatePageNumber}) => {
    let status = ["Alive", "Dead", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Status
                </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {status.map((item, index) =>
                    (<FilterBtn 
                        task={updateStatus} 
                        updatePageNumber={updatePageNumber}
                         key ={index} name="status" 
                         index={index} item={item}/>

                    ))}
                </div>
            </div>
        </div>
        )
}

export default Status;