ReactDOM.render(
<div>
    
    <BeverageList></BeverageList>
    <Header></Header>
    <h2>Hello React</h2>
    <Header></Header>
</div>,
document.getElementById('root'));

function BeverageList (){
    return (
        <div className='box'>
            <h1>Beverage List</h1>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    )
}
function Header(){
    return (
        <div className='boxH'>
            <h1>Header</h1>
            <p>Lorem ipsum is this place where you learn alot</p>
        </div>
    );
}