import React, { Component } from 'react'

export default class Damo1 extends Component {
    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Login</button>
                <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="modal-title">Login</h2>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body ">
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
                            </div>
                            <div class="modal-footer">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
