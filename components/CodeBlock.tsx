import { useState, useRef } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface CodeBlockProps {
  code: string;
  language?: string;
  label?: string;
}

const CodeBlock = ({ code, language = 'bash', label }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    if (!codeRef.current) return;
    
    const text = code;
    navigator.clipboard.writeText(text);
    
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative p-4 my-2 rounded-md bg-black bg-opacity-40 overflow-x-auto">
      {label && <div className="text-sm text-amber-500 mb-2">{label}</div>}
      <pre ref={codeRef} className="text-sm font-mono">{code}</pre>
      <button
        onClick={handleCopy}
        className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-md transition-all ${
          copied 
            ? 'bg-amber-500 text-black' 
            : 'bg-white bg-opacity-10 hover:bg-green-500 hover:text-black'
        }`}
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <>
            <FiCheck className="inline-block mr-1" size={12} />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <FiCopy className="inline-block mr-1" size={12} />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
