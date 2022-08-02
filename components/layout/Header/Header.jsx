import Link from "next/link";
import { v4 as uuid } from "uuid";
import { menuData } from "../../../data/menuData";

function Header() {
  return (
    <header className="header bg">
      <div className="header__inner container">
        <nav className="header__menu">
          {menuData.map((menuItem) => {
            return (
              <Link href={menuItem.link} key={uuid()}>
                <a className="header__menuItem">{menuItem.name}</a>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
