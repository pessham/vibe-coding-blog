import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function LocationDebug() {
  const location = useLocation();
  console.log('Current location:', location);
  return null;
}
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';

function App() {
  return (
    <Router basename="/viblog">
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <LocationDebug />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--clr-bg-1) 0%, var(--clr-bg-2) 100%)'}}>
                <div className="text-center vibe-card p-12">
                  <div className="text-6xl mb-6">🔍</div>
                  <h1 className="text-4xl font-bold mb-4 vibe-highlight">404</h1>
                  <p className="text-xl mb-8" style={{color: 'var(--clr-gray)'}}>
                    お探しのページが見つかりませんでした。
                  </p>
                  <a
                    href="/"
                    className="btn-primary"
                  >
                    ホームに戻る
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;