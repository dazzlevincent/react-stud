import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewStudent = () => {
    const [data,changeData]=useState(
        [
            {"name":"helna","Admission no":101,"Roll No":13},
            {"name":"helna","Admission no":101,"Roll No":13},
            {"name":"helna","Admission no":101,"Roll No":13},
            {"name":"helna","Admission no":101,"Roll No":13},
            {"name":"helna","Admission no":101,"Roll No":13}
        ]

    )
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                

 
                


                <div className="row">
                   {data.map(
                    (value,index)=>{return  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-6">
                        <div className="card">
                        <img src="https://cdn-icons-png.freepik.com/512/3106/3106921.png" class="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      
                        </div>
                        </div>
    
                       
                       
                       
                      </div>}
                   )}
                </div>


            </div>
        </div>
        
        
        
        </div>
  )
}

export default ViewStudent