import React from 'react';
import { Link } from 'react-router-dom';

export function View(){
    return(
        <div className="container mb-5 mt-5 border border-dark" >
        <div className="bg-dark m-4">
            <h2 className="p-2 text-light text-center" >Depth of Point</h2>
        </div>
        <div class="row g-0 bg-light position-relative ">
            <div class="col-md mb-md-0 p-md-4">
                <div className="border border-dark">
                    <img src="https://images.unsplash.com/photo-1612396931345-bb01d8657af3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="w-100" alt="..." />
                </div>
            </div>
        </div>
        <div class="row g-0 bg-light position-relative ">
            <div class="col-md p-4 ps-md-0 border-left">
                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div class="col">
                        <div class="p-3 border bg-light"> 
                            <h4>Depth of Point</h4>
                            Painting by <i>Rishab Chaudhari</i>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="border-bottom">
                    <b>Dimensions : </b>77 cm x 53 cm
                    <br />
                    <b>Location : </b>Ngp (since 2021)
                    <br />
                    <b>Created : </b>1503
                    <br />
                    <b>Medium : </b>Oil Paint
                </div>
                
                
                <div class="card text-white text-dark mb-3 mt-4" >
                    <div class="card-header between">
                        <b>Art Price : </b>
                        124000 &#x20B9;
                    </div>
                     
                </div>
                <div class="card-header text-center">
                         <Link to="/Basket" className="btn btn-primary">Add to cart</Link> 
                        {/* <button type="reset" class="btn btn-primary"> <i class="fas fa-cart-plus text-light"></i>  Add to cart</button> */}
                </div> 
            </div>
        </div>
    </div>
    );
}