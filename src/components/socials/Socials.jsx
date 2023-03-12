import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Socials = () => {
  return (
    <span data-testid="socials" className="socials">
      <Instagram className="social-icon" />
      <LinkedIn className="social-icon" />
      <GitHub className="social-icon" />
    </span>
  );
};

export default Socials;
