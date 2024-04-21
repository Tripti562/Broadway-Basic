ReactDOM.render(
  <React.Fragment>
    <Header />
    <Hero_Section />
    <OnlineEx />
    
    <div className="container">
      <div className="row">
        <Card
          img="images/first.png"
          rating={5.0}
          totalreview={6}
          countryname="USA"
          name="Life lessons with Katie Zaferes"
          price={136}
          status="SOLD OUT"
        />
        <Card
          img="images/second.png"
          rating={5.0}
          totalreview={30}
          countryname="USA"
          name="Learn wedding photography
"
          price={125}
          status="ONLINE"
        />
        <Card
          img="images/third.png"
          rating={4.8}
          totalreview={2}
          countryname="USA"
          name="Group Mountain Biking"
          price={50}
          status=' '
        />
      </div>
    </div>
  </React.Fragment>,
  document.getElementById("root")
);

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow py-4 px-4 mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="images/logo.png"></img>
        </a>
      </div>
    </nav>
  );
}
function Hero_Section() {
  return (
    <section className="container d-flex  justify-content-center">
      <img src="images/Hero-img.png"></img>
    </section>
  );
}

function OnlineEx() {
  return (
    <section className="container">
      <h2 className="fw-bold fs-1">Online Experiences</h2>
      <p className="width">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
function Card(props) {
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
