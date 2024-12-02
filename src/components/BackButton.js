import { useNavigate } from "react-router-dom";
import "../styles/backButton.css";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="back-button">
      Back
    </button>
  );
};

export default BackButton;
