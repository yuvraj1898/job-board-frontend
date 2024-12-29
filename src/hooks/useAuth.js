import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAuth = () => {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsValid(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:3001/api/auth/validate", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsValid(response.data.valid);
      } catch (error) {
        setIsValid(false);
      }
    };

    validateToken();
  }, []);

  return isValid;
};


export default useAuth;
