import Styles from "./Register.module.css";
import Logo from "../../images/Logo.png";
import BikeMan from "../../images/Bikeman.jpg";
import Button from "../../components/button/button";
import PasswordIcon from "../../images/eye-open.png";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className={Styles.registerContainer}>
      <header className={Styles.logoWrapper}>
        <img src={Logo} alt="" className={Styles.logo} />
        <span className={Styles.logoText}>DMS</span>
      </header>

      <div className={Styles.registerLayout}>
        <div className={Styles.regInfo}>
          <div className={Styles.info}>
            <img src={BikeMan} alt="" className={Styles.bike} />
            <h2>Let's help you manage your riders and delivery systems.</h2>
            <p>
              Every logistics company whether it’s a multi-national branding
              corporation or a regular local deserves the basic standard
              necessities in achieving a high service delivery
            </p>
            <Button url="/register" text="Get Started" />
          </div>
        </div>
        <div className={Styles.form}>
          <form className={Styles.formWrapper}>
            <form className={Styles.formWrapper}>
              <progress className={Styles.progress} max="100" value="70">
                70
              </progress>
              <div className={Styles.formInfo}>
                <h2>Basic Information</h2>
                <p>Enter the following information below</p>
              </div>
              <div className={Styles.inputWrapper}>
                <div className={Styles.nameInput}>
                  <input type="text" placeholder="Company Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <input type="text" placeholder="Company Address" required />
                <input type="tel" placeholder="Phone Number" required />
                <input
                  type="email"
                  placeholder="Company Email Address"
                  required
                />
                <div className={Styles.passwordWrapper}>
                  <input type="password" placeholder="Password" required />
                  <img
                    className={Styles.passwordIcon}
                    src={PasswordIcon}
                    alt="password icon"
                  />
                </div>
              </div>
              <p className={Styles.termCondition}>
                By clicking "Next" you agree to our{" "}
                <Link className={Styles.link} to="#">
                  {" "}
                  Terms of Service, Privacy Policy,{" "}
                </Link>
                and to receive marketing communications from Envoy.
              </p>
              <div className={Styles.account}>
                <p>
                  Got an account?{" "}
                  <Link className={Styles.link} to="/login">
                    Sign in
                  </Link>
                </p>
                <Button url="/login" text="Register" />
              </div>
            </form>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
