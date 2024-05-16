import React from 'react'


function RateCardElement({
    rateCardData
  
}) {  

    return (
        <div className="wrapper__bookings">
          <div className="booking__user-info">
            
            <h2>Rate Cards</h2>
          </div>
          <div >
            console.log({rateCardData})
            { !!rateCardData ?
              (
                Object.keys(rateCardData).map(key =>
                  <RateCardElement
                    key={key}
                    RateCardData={rateCardData}                   
                  />)
               ) : (<p>These are the rate cards</p>)
            }
          </div>
        </div>
    )
}

export default RateCardElement