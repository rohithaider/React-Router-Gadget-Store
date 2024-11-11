import { Helmet } from "react-helmet-async";


const HelpPage = () => {
  return (
    <div className="p-6 bg-gray-100">
      <Helmet>
        <title>Policy</title>
        <link rel="icon" type="image/png" href="/public/assets/favicon-16x16.png" />
      </Helmet>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Help Center</h1>

        <div className="space-y-6">
          {/* Accordion for Frequently Asked Questions */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button">How do I add an item to my cart?</button>
                </h2>
                <div className="accordion-body">
                  <p className="text-sm text-gray-600">To add an item to your cart, simply navigate to the product page and click on the "Add to Cart" button. You can view your cart at any time by clicking the cart icon at the top of the page.</p>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button">Can I modify or cancel my order?</button>
                </h2>
                <div className="accordion-body">
                  <p className="text-sm text-gray-600">Once an order is placed, you can only modify or cancel it if it has not been shipped yet. Please contact customer support immediately if you need to make changes.</p>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button">How do I check the status of my order?</button>
                </h2>
                <div className="accordion-body">
                  <p className="text-sm text-gray-600">To check your order status, go to the "Dashboard" page, where you'll find information on recent orders, their status, and tracking information if available.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion for Shipping and Returns */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Shipping and Returns</h2>
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button">How long will it take for my order to arrive?</button>
                </h2>
                <div className="accordion-body">
                  <p className="text-sm text-gray-600">Shipping times depend on your location and the shipping method chosen during checkout. Typically, orders will arrive within 5-7 business days.</p>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button">What is the return policy?</button>
                </h2>
                <div className="accordion-body">
                  <p className="text-sm text-gray-600">We offer a 30-day return policy for most products. If you're not satisfied with your purchase, you can initiate a return from your account page under "Order History." For more information, check our full return policy page.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion for Customer Support */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button">How can I contact customer support?</button>
                </h2>
                <div className="accordion-body">
                  <p className="text-sm text-gray-600">If you have any other questions or need further assistance, please contact our customer support team via the "Contact Us" page or email us at support@example.com. We're here to help!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
