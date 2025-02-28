import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import PostDetail from './components/PostDetails'
import UpdatePost from './components/UpdatePost'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<PostList/>}/>
        <Route/>
        <Route/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
