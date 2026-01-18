const NavbarMenu = ({ menu }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm mb-5">
      <div className="navbar-start">
      </div>
      <div className="navbar-center hidden lg:flex">
        <h1><a href='/'>Web Demo</a></h1>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default NavbarMenu;
