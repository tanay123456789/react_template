import React from "react"

import Card from "./Card"


const CardSection = () => {
    return(
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
        <div className="row">     
            <div
              className="col-4">
              <Card title="Tanay Dwivedi" 
              buttonText="My assignment" 
              text="Some quick example text to build on the card title and make up
                 the bulk of the card's content."/>
                
              </div>
            
            <div className="col-4">
            <Card title="GTA" 
              buttonText="My assignment2" 
              text="I love react"/>
            </div>
            <div className="col-4">
            <Card title="Assasins Creed" 
              buttonText="My assignment3" 
              text="I love javascript"/>
            </div>
        </div>
        </div>
    </section>
    )
}

export default CardSection;