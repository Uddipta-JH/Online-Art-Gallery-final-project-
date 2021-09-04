import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div >
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Login
                </button>
                <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog " role="document">
                        <div class="modal-content rounded">
                            <div class="modal-header">
                                <h2>Login</h2>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            
                            <div class="modal-body">
                                <form>
                                    <div class="form-outline mb-4">
                                        <input type="email" id="form1Example1" class="form-control" />
                                        <label class="form-label" for="form1Example1">Email address</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="form1Example2" class="form-control" />
                                        <label class="form-label" for="form1Example2">Password</label>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col d-flex justify-content-center">
                                        <div class="form-check">
                                            <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="form1Example3"
                                            checked
                                            />
                                            <label class="form-check-label" for="form1Example3"> Remember me </label>
                                        </div>
                                        </div>

                                        <div class="col">
                                        <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                                </form>
                            </div>
                            <div class="modal-body">
                                <div class="text-center">
                                        <p>Not a member? <a href="#!">Register</a></p>
                                    </div>
                                </div>
                            </div>   
                    </div>
                </div>
            </div>
        )
    }
}
