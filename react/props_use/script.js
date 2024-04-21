ReactDOM.render(
    <div>
      <Card name='Ram' email='ram@gmail.com' phone='9834763897'></Card>
    <Card name='Sita' email='sita@gmail.com' phone='9834856227'></Card>
    <Card name='Radhe' email='radhe@gmail.com' phone='9785126347'></Card>
    </div>,
    document.getElementById('root'));
    

function Card(props){
    console.log(props);
    return(
        <div className='card'>
            <b>Name:</b> {props.name}
            <br/>
            Email: {props.email}
            <br/>

            Phone: {props.phone}
        </div>
    );
}
