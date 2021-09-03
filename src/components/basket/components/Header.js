import React from 'react';
import { Link } from 'react-router-dom';


export function Header(){
   
    return(
        <header>
            <div className="container-fluid border-dark bg-dark">
                <div className="row">
                    <div className="col-10 text-left ">
                    <a href="#" className="text-light">
                    <h1>Products</h1>
                    </a>
                    </div>
                    <div className="col-2 mt-3 ">
                    <a href="#/cart" className="ml-3 text-light">Cart</a>
                    <a href="#/signin" className="ml-3 text-light">SignIn</a>
                    </div>
                </div>
                
            </div>
            

            <div className="container-md mt-5">
               
                <div className="row mt-5">
                    <div className="col-6">
                    <div className="card" >
                    <img className="rounded-top" style={{height: "513px"}} src="https://images.unsplash.com/photo-1612396931345-bb01d8657af3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..."/>
                    
                    <div className="card-body ">
                    <h5 className="card-title text-muted">Product Name</h5>
                    <Link to="/View" className="btn btn-white">Visit</Link>
                    </div>
                   
                    </div>
                    </div>
                    <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                         <img className="rounded-top" style={{height: "170px"}} src="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                      <div className="card-body " style={{height: "30px"}}>
                        <h5 className="card-title text-muted">Product Name</h5>
                        </div>
                        <a href="#" className="btn btn-white ">Visit</a>
                        </div>
                        </div>

                    <div className="col-6">
                    <div className="card" >
                    <img className="rounded-top" style={{height: "170px"}} src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body " style={{height: "30px"}}>
                    <h5 className="card-title text-muted">Product Name</h5>
                    </div>
                    <a href="#" className="btn btn-white">Visit</a>
                    </div>
                    </div>
                        </div>
                        <div className="row mt-2">
                             

                    <div className="col-12">
                    <div className="card" >
                    <img className="rounded-top" style={{height: "290px"}} src="https://images.unsplash.com/photo-1551732998-9573f695fdbb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body  " style={{height: "30px"}}>
                    <h5 className="card-title text-muted">Product Name</h5>
                    </div>
                    <a href="#" className="btn btn-white">Visit</a>
                    </div>
                    </div>
                        </div>
                    </div>

                   

                </div>

                </div>





<div className="container mt-5">
    <div className="row">
        <div className="col-4">
        <div className="card" >
                    <img className="rounded-top" style={{height: "510px"}} src="https://images.unsplash.com/photo-1548081087-a8a3bc4ff088?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body ">
                    <h5 className="card-title text-muted">Product Name</h5>
                    <Link to="/View" className="btn btn-white">Visit</Link>
                    </div>
                   
                    </div>
        </div>

        <div className="col-4">
        <div className="card" >
                    <img className="rounded-top" style={{height: "510px"}} src="https://images.unsplash.com/photo-1554139681-1adb48e035cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body ">
                    <h5 className="card-title text-muted">Product Name</h5>
                    <Link to="/View" className="btn btn-white">Visit</Link>
                    </div>
                   
                    </div>
        </div>

        <div className="col-4">
        <div className="card" >
                    <img className="rounded-top" style={{height: "510px"}} src="https://images.unsplash.com/photo-1606489129187-1eee19a0a103?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body ">
                    <h5 className="card-title text-muted">Product Name</h5>
                    <Link to="/View" className="btn btn-white">Visit</Link>
                    </div>
                   
                    </div>
        </div>
    </div>      
</div>





            <div className="container-md mt-5">
               <div className="row mt-5">
               <div className="col-12">
                    <div className="card" >
                    <img className="rounded-top" style={{height: "510px"}} src="https://images.unsplash.com/photo-1569063386798-345908ef9a62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body ">
                    <h5 className="card-title text-muted">Product Name</h5>
                    <Link to="/View" className="btn btn-white">Visit</Link>
                    </div>
                   
                    </div>
                    </div>
                </div>
            </div>









            <div className="container-md mt-5">
               <div className="row mt-5">
               <div className="col-3">
               <div className="card border-0" >
                    <img className="rounded-circle" style={{height: "250px"}} src="https://images.unsplash.com/photo-1579009120005-df2fd9baf7e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjkyfHxhcnR3b3JrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body " style={{height: "30px"}}>
                    <h5 className="card-title text-muted text-center">Product Name</h5>
                    </div>
                    <a href="#" className="btn btn-white">Visit</a>
                    </div>
                    </div>

                    <div className="col-3">
               <div className="card border-0" >
                    <img className="rounded-circle" style={{height: "250px"}} src="https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body " style={{height: "30px"}}>
                    <h5 className="card-title text-muted text-center">Product Name</h5>
                    </div>
                    <a href="#" className="btn btn-white">Visit</a>
                    </div>
                    </div>

                    <div className="col-3">
               <div className="card border-0" >
                    <img className="rounded-circle" style={{height: "250px"}} src="https://images.unsplash.com/photo-1583243535597-5e2db3a1683e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxhcnR3b3JrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body " style={{height: "30px"}}>
                    <h5 className="card-title text-muted text-center">Product Name</h5>
                    </div>
                    <a href="#" className="btn btn-white">Visit</a>
                    </div>
                    </div>

                    <div className="col-3">
               <div className="card border-0" >
                    <img className="rounded-circle" style={{height: "250px"}} src="https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body " style={{height: "30px"}}>
                    <h5 className="card-title text-muted text-center">Product Name</h5>
                    </div>
                    <a href="#" className="btn btn-white">Visit</a>
                    </div>
                    </div>

                </div>
            </div>








                <div className="container-md mt-5">
               
                <div className="row mt-5">
                    
                    <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                         <img className="rounded-top" style={{height: "170px"}} src="https://images.unsplash.com/photo-1549834185-bd9f078a5dfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                      <div className="card-body " style={{height: "30px"}}>
                        <h5 className="card-title text-muted">Product Name</h5>
                        </div>
                        <a href="#" className="btn btn-white ">Visit</a>
                        </div>
                        </div>

                    <div className="col-6">
                    <div className="card" >
                    <img className="rounded-top" style={{height: "170px"}} src="https://images.unsplash.com/photo-1587868579905-3c9800e065da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGdyYWZmaXRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body " style={{height: "30px"}}>
                    <h5 className="card-title text-muted">Product Name</h5>
                    </div>
                    <a href="#" className="btn btn-white">Visit</a>
                    </div>
                    </div>
                        </div>
                        <div className="row mt-2">
                             

                    <div className="col-12">
                    <div className="card" >
                    <img className="rounded-top" style={{height: "290px"}} src="https://images.unsplash.com/photo-1586126763549-52fe69195fdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNrZXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body " style={{height: "30px"}}>
                    <h5 className="card-title text-muted">Product Name</h5>
                    </div>
                    <a href="#" className="btn btn-white">Visit</a>
                    </div>
                    </div>
                        </div>
                    </div>

                    <div className="col-6">
                    <div className="card" >
                    <img className="rounded-top" style={{height: "513px"}} src="https://images.unsplash.com/photo-1561496222-f3d6e6c68926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGdyYWZmaXRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                    
                    <div className="card-body ">
                    <h5 className="card-title text-muted">Product Name</h5>
                    <Link to="/View" className="btn btn-white">Visit</Link>
                    </div>
                   
                    </div>
                    </div>

                </div>

                </div>


            
        </header>
        
    );
}