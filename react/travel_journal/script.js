ReactDOM.render(
  <React.Fragment>
    <Header status=" "></Header>
    <Main
      image="images/first.jpg"
      countryname="JAPAN"
      destinyname="Mount Fuji"
      duration="12 Jan, 2021 - 24 Jan, 2021"
      detail="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    ></Main>
    <Border></Border>
    <Main
      image="images/second.jpg"
      countryname="AUSTRALIA"
      destinyname="Sydney Opera House
    "
      duration="27 May, 2021 - 8 Jun, 2021"
      detail="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
    ></Main>
    <Border></Border>
    <Main
      image="images/third.jpg"
      countryname="NORWAY"
      destinyname="Geirangerfjord"
      duration="01 Oct, 2021 - 18 Nov, 2021"
      detail="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
    ></Main>
    <Header></Header>
  </React.Fragment>,
  document.getElementById("root")
);

function Header(props) {
  const status = props.status;
  if (status === " ") {
    return (
      <nav className="navbar navbar-expand-lg bg-danger py-2 px-2">
        <div className="container d-flex justify-content-center align-items-center">
          <a className="navbar-brand " href="#">
            <div className="box d-flex justify-content-center align-items-center ">
              <i className="bx bx-world pe-2 fs-2"></i>
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
function Main(props) {
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
function Border() {
  return <div className="container border mb-4"></div>;
}
