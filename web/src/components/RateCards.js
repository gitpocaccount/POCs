import React from 'react'
import RateCardElement from './RateCardElement' 


function RateCards({
  key,
   ratecardData
}) {

  return (
    <div className="wrapper__bookings">
      
      <div >        
              <RateCardElement
              key={key}
              ratecardsData={ratecardData}
              />
          : (<p>Contact office for any additional details</p>) 
        
      </div>
    </div>
  )
}

export default RateCards