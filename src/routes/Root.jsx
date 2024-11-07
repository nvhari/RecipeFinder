import {Link,Outlet} from 'react-router-dom'

const Root = ()=>{

    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        
        </>
    )
}

export default Root