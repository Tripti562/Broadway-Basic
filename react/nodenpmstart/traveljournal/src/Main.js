import 'bootstrap/dist/css/bootstrap.min.css';


export default function Main(props) {
    return (
      <section className="container d-flex justify-content-center align-items-center mb-4 mt-4 pt-4 pb-4">
        <div className="imgbox">
          <img src={props.image} className="hover me-4"></img>
        </div>
        <div>
          <div className="mb-2">
            {" "}
            <i className="bx bxs-map"></i> {props.countryname}{" "}
            <a href="#" className='p-2'>View on Google Maps</a>{" "}
          </div>
          <h2 className="mb-2">{props.destinyname}</h2>
          <h5 className="mb-2">{props.duration}</h5>
          <p className="mt-4">{props.detail}</p>
        </div>
      </section>
    );
  }