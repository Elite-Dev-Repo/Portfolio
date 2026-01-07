const Footer = () => {
  return (
    <footer>
      <div className="w-screen bg-primary">
        <p className="text-center flex items-center justify-center py-[2em] text-[#fff7] border-t border-t-[#ffffff7a]">
          © {new Date().getFullYear()} Elite Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
