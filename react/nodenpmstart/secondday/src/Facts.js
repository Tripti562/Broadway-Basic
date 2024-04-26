export default function Facts(props) {
    const status = props.status;
    if (status === " ") {
        return (
    
            <div className="col-sm-4 mb-4">
              <div className="imgbox">
                <img src={props.img}></img>
                
              </div>
        
              <p className="reviewname">
                {" "}
                <i className="bx bxs-star"></i>
                {props.rating}({props.totalreview}) - {props.countryname}
              </p>
              <p className="describe">{props.name}</p>
              <span className="bottom">
                {" "}
                <span className="fw-bold ">From ${props.price} </span>/ person
              </span>
            </div>
          );
    }
    else{
        return (
    
            <div className="col-sm-4">
              <div className="imgbox">
                <img src={props.img}></img>
                <div className="card-status">
                  <span>{props.status}</span>
                </div>
              </div>
        
              <p className="reviewname">
                {" "}
                <i className="bx bxs-star"></i>
                {props.rating}({props.totalreview}) - {props.countryname}
              </p>
              <p className="describe">{props.name}</p>
              <span className="bottom">
                {" "}
                <span className="fw-bold ">From ${props.price} </span>/ person
              </span>
            </div>
          );
    }
  
}