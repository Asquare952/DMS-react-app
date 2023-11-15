import Styles from "./button.module.css"
import { Link } from "react-router-dom";
const Button = ({url, text}) => {
  return (
    <Link to={url}>
      <button className={Styles.btn}>{text}</button>
    </Link>
  );
}
 
export default Button;