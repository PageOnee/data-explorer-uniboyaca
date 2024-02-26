import { LoginForm } from "../../../components/forms/login/LoginForm";
import { Toaster } from "react-hot-toast";
import "./Login.css";

export const Login = () => {
  return (
    <main className="login-page">
      <Toaster position="top-right" reverseOrder={false} />
      <LoginForm></LoginForm>
    </main>
  );
};
