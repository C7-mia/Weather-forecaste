import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-indigo-800 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Weather Dashboard</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </nav>
    </header>
  );
          }
