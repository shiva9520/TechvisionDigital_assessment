import { useLocation, Link, Navigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  const location = useLocation();
  const state = location.state;

  if (!state) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Payment Successful!</h1>
        <p className="text-slate-600 mb-8">
          Thank you for purchasing <span className="font-semibold text-slate-900">{state.productName}</span>. 
          Your order ID is <span className="font-mono text-slate-800 bg-slate-100 px-2 py-1 rounded text-sm">{state.orderId}</span>.
        </p>
        <Link 
          to="/"
          className="inline-block w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
