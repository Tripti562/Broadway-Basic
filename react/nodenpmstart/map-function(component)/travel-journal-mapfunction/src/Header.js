// Importing individual icons
// import { BiHome, BiUser, BiSearch } from 'boxicons';

// Importing entire library (all icons)
import * as boxicons from 'boxicons';


export default function Header(props) {
    const status = props.status;
    if (status === " ") {
      return (
        <nav className="navbar navbar-expand-lg bg-danger py-2 px-2">
          <div className="container d-flex justify-content-center align-items-center">
            <a className="navbar-brand " href="#">
              <div className="box d-flex justify-content-center align-items-center ">
              {/* <BiHome /> */}
              {<box-icon name='world' className='box' ></box-icon>}
                {/* <i className="bx bx-world pe-2 fs-2"></i> */}
                <span className="">my travel journal.</span>
              </div>
            </a>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg bg-danger py-2 px-2">
          <div className="container d-flex justify-content-center align-items-center">
            <a className="navbar-brand " href="#">
              <div className="box d-flex justify-content-center align-items-center ">
                <small className="m-0">
                  Coded with ❤️ by Emanuele Del Monte.
                </small>
              </div>
            </a>
          </div>
        </nav>
      );
    }
  }