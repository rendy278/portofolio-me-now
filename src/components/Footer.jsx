const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 border-t border-gray-400  dark:border-white dark:text-white">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} RenDev All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
