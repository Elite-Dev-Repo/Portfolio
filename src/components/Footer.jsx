const Footer = () => {
  return (
    <footer>
      <div className="w-screen bg-primary">
        <p className="text-center flex items-center justify-center py-[2em] border-t-tertiary/40 text-tertiary border-t ">
          © {new Date().getFullYear()} Elite Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
