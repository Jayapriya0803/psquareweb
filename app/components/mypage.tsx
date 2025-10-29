import { Link } from "react-router";
const Mypage = () => {
    return (
       <div>
       <header className='text-center py-20 px-4 bg-green-700 text-white transition-colors duration-300'>
            <h2 className='text-4xl font-bold mb-4'>
                Welcome to P Square Enterprises
            </h2>
            <p className='text-lg text gray-300 max-w-2xl mx-auto mb-6'>Manufacturer of Cotton Knitted Hand gloves
            </p>
            <div className='flex justify-center gap-4'>
                <Link to='/products' className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-white-700 transition">View Products</Link>
            </div>
        </header>
       <footer className="text-center bg-green-900 text-white transition-colors duration-300">
        <p>No.60 Mahalakshmi nagar, Cauvery nagar east, Mathakottai road, Thanjavur – 613005,TamilNadu, India.</p>
        <p>Contacts - +91 9840912665, 8056692839. E-mail : write2psquare@gmail.com. Website : www.psquareenterprises.com.</p>
      </footer>
      </div>
      );
}
 
export default Mypage;
<>
</>