import shasaaLogo from "../assets/shasaa_logo.png";

const Logo = ({ height = 56 }) => {
  return (
    <img
      src={shasaaLogo}
      alt="SHASAA Logo"
      style={{
        height: `${height}px`,
        width: "auto",
        objectFit: "contain",
        display: "block"
      }}
    />
  );
};

export default Logo;
