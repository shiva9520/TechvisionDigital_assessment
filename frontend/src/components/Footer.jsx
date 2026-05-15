const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} FresherKit. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with MERN stack for the assessment.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
