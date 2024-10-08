import Link from "next/link";
import styles from "./NavbarItem.module.scss";
type Props = {
  active: boolean;
  pathname: string;
  title: string;
  onClose?: () => void;
};
const NavbarItem = (props: Props) => {
  return (
    <li>
      <Link
        href={props.pathname}
        onClick={props.onClose}
        className={`${styles.defaultLink} ${props.active ? styles.active : ""}`}
      >
        {props.title}
      </Link>
    </li>
  );
};
export default NavbarItem;
