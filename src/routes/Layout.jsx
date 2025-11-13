import { Outlet, Link } from "react-router";

function Layout() {
   return (
      <div className="nav-outlet">
         <nav>
            <Link className="nav-link" to="/">
               Home
            </Link>
            <Link className="nav-link" to="/create-bean">
               Create a Bean!
            </Link>
            <Link className="nav-link" to="/bean-gallery">
               Beans Gallery
            </Link>
         </nav>
         <main>
            <Outlet />
         </main>
      </div>
   )
}

export default Layout;