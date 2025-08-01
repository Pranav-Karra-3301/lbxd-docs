import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CodeBlock from '../components/CodeBlock';
import Head from 'next/head';
import { FiDownload, FiTerminal, FiCopy, FiCode, FiSettings, FiSearch, FiDatabase, FiUpload } from 'react-icons/fi';

export default function Home() {
  const [showFullLLM, setShowFullLLM] = useState(false);
  
  const brewCode = `brew tap pranav-karra-3301/lbxd
brew install lbxd`;

  const sourceCode = `git clone https://github.com/Pranav-Karra-3301/lbxd.git
cd lbxd
cargo install --path .
pip3 install letterboxdpy`;

  const quickStartCode = `lbxd
lbxd browse username
lbxd username`;

  const commandsCode = `# Interactive Browsing
lbxd browse username

# Recent Activity
lbxd recent username
lbxd recent username --limit 10
lbxd recent username --rated
lbxd recent username --reviewed
lbxd recent username --date 2024-01-15

# Search
lbxd search username "blade runner"
lbxd movie "dune 2021"

# Data Export
lbxd export username --format json --output data.json
lbxd export username --format markdown --output report.md

# Configuration
lbxd config show
lbxd config set-user myusername
lbxd config whoami`;

  const llmText = `lbxd
Rust License: MIT GitHub release

lbxd is a beautiful command-line tool written in Rust that brings Letterboxd to your terminal. View any user's activity, browse collections interactively, and explore movie data with rich terminal displays.

Features:
- Interactive TUI: Browse movie collections
- Recent Activity: View movies, ratings, reviews
- Search: Find titles in user activity
- Movie Database: Search TMDB
- Export: JSON/Markdown
- Config: Persistent settings
- Caching: Offline access
- Beautiful Display: ASCII art, colors
- Fast: Rust performance

Installation:
- Rust 1.88+, Python 3, modern terminal
- Homebrew: brew tap pranav-karra-3301/lbxd && brew install lbxd
- Source: git clone https://github.com/Pranav-Karra-3301/lbxd.git && cd lbxd && cargo install --path . && pip3 install letterboxdpy

Usage:
lbxd
lbxd browse username
lbxd recent username
lbxd search username "movie"
lbxd export username --format json --output data.json
lbxd config show

See full docs at: https://github.com/Pranav-Karra-3301/lbxd

MIT License. Developer: Pranav Karra (pranavkarra.me, letterboxd.com/pranavkarra)`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow px-4 py-8">
          <div className="max-w-4xl mx-auto bg-zinc-800 rounded-lg shadow-xl p-6 md:p-8">
            
            {/* ASCII Art */}
            <div className="flex justify-center mb-6">
              <pre className="text-green-500 text-xs sm:text-sm overflow-x-auto w-full text-center">
{`    ██╗     ██████╗ ██╗  ██╗██████╗ 
    ██║     ██╔══██╗╚██╗██╔╝██╔══██╗
    ██║     ██████╔╝ ╚███╔╝ ██║  ██║
    ██║     ██╔══██╗ ██╔██╗ ██║  ██║
    ███████╗██████╔╝██╔╝ ██╗██████╔╝
    ╚══════╝╚═════╝ ╚═╝  ╚═╝╚═════╝ 
        Letterboxd in your terminal`}
              </pre>
            </div>
            
            {/* Features Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-green-500 flex items-center gap-2">
                <FiTerminal /> Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400"></span>
                  <span><strong>Interactive TUI:</strong> Browse movie collections with a beautiful terminal interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400"></span>
                  <span><strong>Recent Activity:</strong> View any user's movies, ratings, and reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400"></span>
                  <span><strong>Search:</strong> Find specific titles in user activity history</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400"></span>
                  <span><strong>Movie Database:</strong> Search TMDB for detailed movie information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400"></span>
                  <span><strong>Export:</strong> Export user data to JSON or Markdown formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400"></span>
                  <span><strong>Configuration:</strong> Persistent settings and user preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400"></span>
                  <span><strong>Caching:</strong> Offline access with intelligent data caching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400"></span>
                  <span><strong>Beautiful Display:</strong> Rich terminal output with ASCII art</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400"></span>
                  <span><strong>Fast:</strong> Built in Rust for maximum performance and reliability</span>
                </li>
              </ul>
            </section>
            
            {/* Installation Section */}
            <section id="install" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-green-500 flex items-center gap-2">
                <FiDownload /> Installation
              </h2>
              
              <div className="mb-4 mt-4">
                <h3 className="font-semibold text-xl mb-2">Prerequisites</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Rust: Version 1.88.0 or later</li>
                  <li>Python 3: For Letterboxd data integration</li>
                  <li>Terminal: UTF-8 and ANSI color support recommended</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold text-xl mb-2">Homebrew (Recommended)</h3>
                <CodeBlock code={brewCode} label="macOS and Linux" />
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold text-xl mb-2">From Source</h3>
                <CodeBlock code={sourceCode} label="From Source" />
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-2">Dependencies</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Python 3 with <code className="bg-black bg-opacity-20 px-1.5 py-0.5 rounded">letterboxdpy</code> package</li>
                  <li><code className="bg-black bg-opacity-20 px-1.5 py-0.5 rounded">curl</code> for network requests</li>
                  <li>A modern terminal with Unicode support</li>
                </ul>
              </div>
            </section>
            
            {/* Usage Section */}
            <section id="usage" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-green-500 flex items-center gap-2">
                <FiCode /> Usage
              </h2>
              
              <div className="mb-6 mt-4">
                <h3 className="font-semibold text-xl mb-2">Quick Start</h3>
                <CodeBlock code={quickStartCode} />
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-2">Commands</h3>
                <CodeBlock code={commandsCode} />
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-2">Output Example</h3>
                <div className="code-block">
                  <pre className="text-sm font-mono">
{`username Activity

  Blade Runner 2049 (2017)
  ★★★★★ (5.0/5)
  Liked
  A stunning sequel that honors the original while expanding the universe...
  January 15, 2024

  Dune (2021)
  ★★★★☆ (4.5/5)
  Villeneuve's adaptation is visually breathtaking...
  January 14, 2024`}
                  </pre>
                </div>
              </div>
            </section>
            
            {/* LLM Context Section */}
            <section id="llm" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-green-500 flex items-center gap-2">
                <FiDatabase /> LLM Context
              </h2>
              <p className="my-4">
                Copy and paste this into any LLM or coding tool for full context about lbxd:
              </p>
              
              <div className="relative">
                <CodeBlock code={llmText} />
                
                <div className="mt-4 text-center">
                  <a 
                    href="/llm.txt" 
                    download
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-amber-400 text-zinc-900 font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    <FiDownload /> Download llm.txt
                  </a>
                </div>
              </div>
            </section>
            
            {/* Contributing Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-green-500 flex items-center gap-2">
                <FiUpload /> Contributing
              </h2>
              <p className="my-4">
                Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.
              </p>
              
              <ol className="list-decimal list-inside space-y-1">
                <li>Fork the repository</li>
                <li>Create your feature branch (<code className="bg-black bg-opacity-20 px-1.5 py-0.5 rounded">git checkout -b feature/amazing-feature</code>)</li>
                <li>Commit your changes (<code className="bg-black bg-opacity-20 px-1.5 py-0.5 rounded">git commit -m 'Add amazing feature'</code>)</li>
                <li>Push to the branch (<code className="bg-black bg-opacity-20 px-1.5 py-0.5 rounded">git push origin feature/amazing-feature</code>)</li>
                <li>Open a Pull Request</li>
              </ol>
            </section>
            
            {/* License Section */}
            <section>
              <h2 className="text-2xl font-bold text-green-500 flex items-center gap-2">
                <FiSettings /> License
              </h2>
              <p className="my-4">
                This project is licensed under the MIT License - see the LICENSE file for details.
              </p>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
