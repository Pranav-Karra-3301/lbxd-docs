import Link from 'next/link';
import { FiGithub, FiUser, FiFilm } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="w-full bg-zinc-900 border-b-2 border-green-500 py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-wide text-green-500">
          lbxd
        </h1>
        <p className="text-xl text-amber-400 mt-2 mb-6">Letterboxd in your terminal</p>
        
        <nav className="mt-6">
          <ul className="flex flex-wrap justify-center gap-6">
            <li>
              <Link href="#install" className="text-blue-400 hover:text-amber-400 transition-colors">
                Install
              </Link>
            </li>
            <li>
              <Link href="#usage" className="text-blue-400 hover:text-amber-400 transition-colors">
                Usage
              </Link>
            </li>
            <li>
              <Link href="#llm" className="text-blue-400 hover:text-amber-400 transition-colors">
                LLM Context
              </Link>
            </li>
            <li>
              <a 
                href="https://letterboxd.com/pranavkarra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <FiFilm size={14} />
                <span>Letterboxd</span>
              </a>
            </li>
            <li>
              <a 
                href="https://pranavkarra.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <FiUser size={14} />
                <span>Developer</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/Pranav-Karra-3301/lbxd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <FiGithub size={14} />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
