const Footer = () => {
  return (
    <footer>
      <div className="w-screen bg-primary">
        <p className="text-center flex items-center justify-center py-[2em] border-t-[#000000] text-[#000] border-t ">
          © {new Date().getFullYear()} Elite Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
