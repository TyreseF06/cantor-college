import './global.css';
import Navbar from "./Components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
        <header>
          <Navbar />
        </header>
        {children}
        </div>
        <div className="details">
          <div className='left-text'>
            <h2>How to find us:</h2>
            <h3>Cantor College
              <br></br>
              Main street
              <br></br>
              Sheffield<br></br>
              SC4 2BB
              </h3>
          </div>
          <div className='right-text'>
            <h2>Contact Us:</h2>
            <h3>Tel:(01321) 2340 235
              <br></br>
              Fax: (01321) 2340 236
              <br></br>
              Email: info@cantorcollege.ac.uk
            </h3>
          </div>
        </div>
        <footer>
           <p>&copy; Copyright {new Date().getFullYear()} Cantor College</p>
        </footer>
      </body>
    </html>
  );
}