import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="shadow-lg border-b-4 sticky top-0 z-50" style={{borderBottomColor: 'var(--clr-primary)', background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(15px)'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <div className="flex items-center gap-3">
              <img 
                src="/images/metamakeblack.jpg" 
                alt="メタマケロゴ" 
                className="w-10 h-10 rounded-lg object-cover shadow-md group-hover:scale-105 transition-transform"
              />
              <h1 className="heading-accent text-lg font-black group-hover:scale-105 transition-transform whitespace-nowrap" style={{color: 'var(--clr-black)'}}>
                地方<span style={{color: 'var(--clr-primary)'}}>AI</span><span style={{color: 'var(--clr-accent)'}}>ブースター</span>
              </h1>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="nav-link px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105"
              style={{color: 'var(--clr-gray-dark)'}}
            >
              ホーム
            </Link>
            <Link
              to="/blog?category=manufacturing"
              className="nav-link px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105"
              style={{color: 'var(--clr-gray-dark)'}}
            >
              製造業DX
            </Link>
            <Link
              to="/blog?category=tourism"
              className="nav-link px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105"
              style={{color: 'var(--clr-gray-dark)'}}
            >
              観光業DX
            </Link>
            <Link
              to="/blog?category=agriculture"
              className="nav-link px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105"
              style={{color: 'var(--clr-gray-dark)'}}
            >
              農業DX
            </Link>
            <Link
              to="/blog"
              className="nav-link px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105"
              style={{color: 'var(--clr-gray-dark)'}}
            >
              すべて
            </Link>
            <Link
              to="/about"
              className="btn-primary text-sm px-4 py-2"
            >
              運営者
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="rounded-lg p-2 inline-flex items-center justify-center transition-all hover:scale-105"
              style={{background: 'linear-gradient(135deg, var(--clr-primary) 0%, var(--clr-primary-light) 100%)', color: 'var(--clr-white)'}}
            >
              <span className="sr-only">メニューを開く</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}