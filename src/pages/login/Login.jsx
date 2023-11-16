import Styles from "./Login.module.css"
import Logo from "../../images/Logo.png";
import BikeMan from "../../images/Delivery Service With Man On Scooter 1.png";
import Button from "../../components/button/button";
import PasswordIcon from "../../images/eye-open.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <header className={Styles.logoWrapper}>
        <img src={Logo} alt="" className={Styles.logo} />
        <h3 className={Styles.logoText}>DMS</h3>
      </header>

      <div className={Styles.mainLayout}>
        <div className={Styles.leftContainer}>
          <div className={Styles.leftInfo}>
            <img src={BikeMan} alt="" className={Styles.bike} />
            <h3>Let's help you manage your riders and delivery systems.</h3>
            <p>
              Every logistics company whether it’s a multi-national branding
              corporation or a regular local deserves the basic standard
              necessities in achieving a high service delivery
            </p>
            <Button url="/register" text="Get Started" />
          </div>
        </div>
        {/* Form */}
        <div className={Styles.rightContainer}>
          <div className={Styles.formContainer}>
            <progress className={Styles.progress} max="100" value="70">
              70
            </progress>
            <div className={Styles.formInfo}>
              <h2>Basic Information</h2>
              <p>Enter the following information below</p>
            </div>
            <div className={Styles.formWrapper}>
              <form>
                
                
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
              </form>
              <div className={Styles.termsAndCondition}>
                <p>
                  By clicking "Next" you agree to our{" "}
                  <Link className={Styles.link} to="#">
                    {" "}
                    Terms of Service, Privacy Policy,{" "}
                  </Link>
                  and to receive marketing communications from Envoy.
                </p>
              </div>
              <div className={Styles.account}>
                <p>
                  Got an account?{" "}
                  <Link className={Styles.link} to="/login">
                    Register
                  </Link>
                </p>
                <Button url="/dashboard" text="Login" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
