import React, { useEffect, useState } from "react";
import kbc from '../assets/images/maldive.jpg'
import swal from 'sweetalert2';
const Login = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        console.log(name)
    },[name]);

    const loginHandler = () => {
        if (name === '') {
            swal.fire({
                icon                  : 'error',
                titleText             : 'Error!',
                text                  : "Please enter the name",
                buttonsStyling        : false,
                confirmButtonClass    : 'btn btn-brand',
            });
        }
    }

    const questions = [
        {
            id: 1,
            question : 'Which type of JavaScript language is',
            options: [
                {id: 1, answer: 'Object-Oriented'},
                {id: 2, answer: 'High-level'},
                {id: 3, answer: 'Object-Based'},
            ],
            rightAnswerId: 1
        },
        {
            id: 2,
            question : 'When interpreter encounters an empty statements, what it will do:',
            options: [
                {id: 1, answer: 'Throws an error'},
                {id: 2, answer: 'Ignores the statements'},
                {id: 3, answer: 'Shows a warning'},
            ],
            rightAnswerId: 2
        },
        {
            id: 3,
            question : 'Which is not valid data type in Javascript ',
            options: [
                {id: 1, answer: 'Undefinded'},
                {id: 2, answer: 'Boolean'},
                {id: 3, answer: 'float'},
            ],
            rightAnswerId: 3
        },{
            id: 4,
            question : 'Which tag is used to write the javascript code',
            options: [
                {id: 1, answer: '<sp>'},
                {id: 2, answer: ' <javascript>'},
                {id: 3, answer: ' <script>'},
            ],
            rightAnswerId: 3
        },{
            id: 5,
            question : 'Purpose of designing the Javascript',
            options: [
                {id: 1, answer: 'To Perform Server Side Scripting Opertion'},
                {id: 2, answer: ' To add interactivity to HTML Pages'},
                {id: 3, answer: 'To Style HTML Pages'},
                {id: 4, answer: 'All of the above'},
            ],
            rightAnswerId: 2
        },

    ]

    return (
        <React.Fragment>
            <div className="banner" style={{ backgroundImage: `url(${ kbc })`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="row blog">
                        <div className="col-md-4 offset-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Login</h5>
                                    <div className="card-text mt-3">
                                        <form id="myform">
                                            <div className="form-group">
                                                <input className="form-control" id="username" placeholder="Enter Name" onChange={(event) => setName(event.target.value)}/>
                                            </div>
                                            <div className="mt-3">
                                                <button type="button" className="btn btn-primary btn-block" id="submit" onClick={loginHandler}>Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login