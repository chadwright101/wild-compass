import DesktopHeader from "./desktop/desktop-header";
import MobileHeader from "./mobile/mobile-header";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full bg-grey border-b border-white">
      <MobileHeader cssClasses=" tablet:hidden" />
      <DesktopHeader cssClasses="hidden tablet:flex" />
    </header>
  );
};

export default Header;
