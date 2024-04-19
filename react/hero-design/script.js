ReactDOM.render(
    <div>
        <Header></Header>
        <Body></Body>
    </div>,
    document.getElementById('root'));
    
    function Body (){
        return (
            <div className='box'>
                {/* <img src='reactjs-icon 2.png'></img> */}
                Fun facts about React
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprose apps, including mobile apps</li>

                </ul>
            </div>
        )
    }
    function Header(){
        return (
            <nav>
               <a href='#'><img src='images/logo.png'></img></a> 
                <ul>
                    <a href='#'><li>React Course - Project</li></a>
                    
                </ul>
            </nav>
        );
    }