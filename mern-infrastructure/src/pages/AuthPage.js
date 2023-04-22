// import components
import SignUpForm from "../components/SignUpForm";
import LogInForm from "../components/LoginForm";

function AuthPage({setUser}) {
  return (
    <div>
      <h1>Auth Page</h1>
      
      <SignUpForm setUser={setUser}/>

      <LogInForm />
    </div>
  );
}

export default AuthPage;
