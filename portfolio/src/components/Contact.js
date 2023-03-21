import React from "react";
import './Contact.css';

export default function Contact() {
    return (
        <div>
            <div className="container-fluid cont">
                <h3>Contact Me</h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Name"></ input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Content</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Content"></ input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="container-fluid cont">
                <h3>Reach out to me at: </h3>
                <p>Email: mjh10@live.com</p>
                <p>Phone: 210-238-8488</p>
            </div>
        </div>
    );
}