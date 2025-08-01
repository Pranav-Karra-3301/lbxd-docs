import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 text-center text-gray-400">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pranav Karra &mdash;{' '}
          <a
            href="https://letterboxd.com/pranavkarra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-amber-400 transition-colors"
          >
            Letterboxd
          </a>{' '}
          &middot;{' '}
          <a
            href="https://pranavkarra.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-amber-400 transition-colors"
          >
            pranavkarra.me
          </a>
        </p>
        <p className="text-xs mt-2">
          Built with Next.js and styled after{' '}
          <a
            href="https://letterboxd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 underline"
          >
            Letterboxd
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
