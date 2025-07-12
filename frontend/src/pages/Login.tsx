import LoginBox from "../components/Loginbox";

export default function Login() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-slate-600 font-mono">
        <LoginBox />
        <div className="flex flex-col justify-align text-center"></div>
      </div>
    </div>
  );
}
