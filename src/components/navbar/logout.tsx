import { useDispatch } from 'react-redux';
import { logout } from "@/lib/slice/userSlice"; // Adjust path according to your project structure
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"; // Adjust path or import statement based on your UI library or custom component

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear local storage or any other persistent storage used for auth tokens
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Dispatch the logout Redux action
    dispatch(logout());

    // Redirect to login page or any other appropriate route after logout
    navigate('/login');
  };

  return (
    <>
      <Button onClick={handleLogout}>Logout</Button> {/* Example button, adjust to match your UI */}
    </>
  );
}
