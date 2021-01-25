import React from "react";

function Checkout({selected, handleRemove}) {
  return (
    <div className="row no-gutters">
      <div id="accordion" className="col-sm selected-list">
        <div className="card">
          <div
            className="card-header"
            id="headingOne"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h3 className="mb-0">
              Check your Order
              <button
                className="btn btn-link"
				title="Click here to togle the collapse list"
				style={{ float: "right"}}
              >
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </button>
            </h3>
          </div>
          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div id="selected-products-div">
              <ul id="selected-products">
                {/* All selcted items are displayed here */}
				{selected.map((item)=>{
					return(
						<li key={item.id}>{item.description}-{item.id}{''}<button className="btn" onClick={()=> handleRemove(item.id)}>Remove</button></li>
					);
				})}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
