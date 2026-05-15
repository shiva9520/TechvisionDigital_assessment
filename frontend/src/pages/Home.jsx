import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { API_URL } from '../config';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <section className="bg-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Launch Your Career with <span className="text-primary-600">FresherKit</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Premium starter kits, resume reviews, and mock interviews designed specifically for freshers looking to land their first tech job.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#products" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center gap-2">
                View Kits <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-slate-50">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-slate-600">All our kits and services are vetted by industry professionals.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-50">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
              <p className="text-slate-600">100% secure checkout powered by Razorpay standard checkout.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-50">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Instant Delivery</h3>
              <p className="text-slate-600">Digital services are scheduled instantly after successful payment.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Offerings</h2>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                      <span className="font-bold text-primary-600">₹{product.price}</span>
                    </div>
                    <p className="text-slate-600 mb-6 min-h-[48px]">{product.description}</p>
                    <Link 
                      to={`/checkout/${product.id}`}
                      state={{ product }}
                      className="block w-full text-center bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
