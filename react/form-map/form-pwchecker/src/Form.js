export default function Form(){
    return(
        <div className="container d-flex justify-content-center align-items-center">
            <form className="white p-4 m-4">
                
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword2" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label classNameName="form-check-label" for="exampleCheck1">I want to join the newsletter</label>
            </div>
            <button type="submit" className="btn  purple">Sign up</button>
        </form>
        {/* <div>s</div> */}
        </div>
        
    );
}