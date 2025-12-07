import Header from "../components/Header";
import RegisterPage from "../pages/RegisterPage";

function RegisterLayout() {
  
  return (
    <div className="w-screen relative bg-base-300 min-h-screen pb-[30vh]">
      <Header />
      <RegisterPage />
    </div>
  );
}

export default RegisterLayout;
