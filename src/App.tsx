import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './pages/article-list';
import ArticleDetail from './pages/article-detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
