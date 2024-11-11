

const Footer = () => {
  return (
    <footer className="bg-white mt-6 py-10">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-2">Gadget Heaven</h2>
        <p className="text-gray-600 mb-6 border-b-2">Leading the way in cutting-edge technology and innovation.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold">Services</h3>
            <ul>
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
