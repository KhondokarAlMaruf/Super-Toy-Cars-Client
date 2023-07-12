import logo from "../../Images/super toy cars.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-sky-400 text-base-content">
        <div>
          <img className="w-32 rounded" src={logo} alt="" />
          <h2 className="font-bold ">
            Super Toy Cars Ltd.
            <br />
            Pabna, Dhaka , Banladesh <br />
            01750-708777
          </h2>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">facebook</a>
          <a className="link link-hover">email</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <h2></h2>
      </footer>
    </div>
  );
};

export default Footer;
