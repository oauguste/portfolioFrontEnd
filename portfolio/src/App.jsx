import { AuthProvider } from "./Authprovider";
import NavBar from "./component/NavBar";

function App() {
  return (
    <AuthProvider>
      <div className="flex justify-center antialiased leading-relaxed bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900">
        <div className="max-w-screen-xl min-h-screen px-6 py-12 max-auto md:px-12 md:py-20 lg:px-24 lg:py-0">
          <NavBar />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
