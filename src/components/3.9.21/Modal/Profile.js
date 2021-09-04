import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2>Login</h2>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div modal-body >
                            <div className="container my-5">
                                <div className="row ">
                                    <div className="col-4 border">
                                        <div className="conatiner py-5">
                                            <h4>Overview</h4>
                                            <hr />
                                            <h5>ORDERS</h5>
                                            <h5 className="text-secondary pl-3 pt-2"> <a href="">Order & returns</a></h5>
                                            <hr />
                                            <h5>CREDITS</h5>
                                            <h5 className="text-secondary pl-3 pt-2"> <a href="">Coupons</a></h5>
                                            <h5 className="text-secondary pl-3 pt-2"> <a href="">Coupons</a></h5>
                                            <h5 className="text-secondary pl-3 pt-2"> <a href="">Coupons</a></h5>
                                            <hr />
                                            <h5>ORDERS</h5>
                                            <h5 className="text-secondary pl-3 pt-2"> <a href="">Order & returns</a></h5>
                                            <hr />
                                            <hr />
                                            <h5>CREDITS</h5>
                                            <h5 className="text-secondary pl-3 pt-2"> <a href="">Coupons</a></h5>
                                            <h5 className="text-secondary pl-3 pt-2"> <a href="">Coupons</a></h5>        
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="card">
                                            <div className="container img ">
                                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Card image cap"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Profile</h5>
                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" placeholder="Enter email"/>
                                            </div>
                                            
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Cras justo odio</li>
                                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                                <li className="list-group-item">Vestibulum at eros</li>
                                            </ul>
                                            <div className="card-body">
                                                

                                                <a href="" className="btn btn-primary btn-lg">Edit Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
