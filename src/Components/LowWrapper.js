import React from "react"
import { CardData } from ".//Data"

const LowWrapper = () => {
    return (
        <div className="low-wrapper">     
            {CardData.map(item => {
                return (
                    <div key={item.id} className="low-wrapper-card">
                        <div className="low-wrapper-card-image">
                            <img src={item.previewImage} alt=""></img>
                        </div>

                        <div className="low-wrapper-card-content">
                            <h4>{item.number}</h4>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>  
                        </div>              
                    </div>
                )
            })}
        </div>
    )
}
export default LowWrapper