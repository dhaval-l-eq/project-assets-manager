import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button"


function Navbar() {
   const linkClasses = ({ isActive }) =>
      [
         isActive ? 'text-primary' : 'text-white',
         'hover:text-primary-100 transition duration-200',
      ].join(' ');

   return (
      <header className="flex items-center justify-between py-7 px-10 bg-dark-100">
         <nav>
            <ul className="flex items-center space-x-5">
               <li>
                  <NavLink className={linkClasses} to="/">
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink className={linkClasses} to="/important">
                     Important
                  </NavLink>
               </li>
               <li>
                  <NavLink className={linkClasses} to="/add">
                     Add Project
                  </NavLink>
               </li>
            </ul>
         </nav>

         <div className="flex">
            <Button>Logout</Button>
         </div>
      </header>
   );
}
export default Navbar;
