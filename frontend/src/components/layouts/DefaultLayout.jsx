import Navbar from './Navbar';
import React from 'react';

function DefaultLayout({ children }) {
   return (
      <React.Fragment>
         <Navbar />
         <main>{children}</main>
      </React.Fragment>
   );
}
export default DefaultLayout;
