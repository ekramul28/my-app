
import { useState } from 'react'
import './App.css'
import Bookmark from './components/Bookmarked/Bookmark'
import Cover from './components/Cover/Cover'
import Header from './components/Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [evenTime, setEvenTime] = useState(0);

  const handelAddToBookMark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);

  }
  const evenTimeAdd = (time, id) => {
    const newEvenTime = (evenTime + time);
    setEvenTime(newEvenTime);
    const remove = bookmark.filter(book => book.id !== id);
    setBookmark(remove)
  }
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='flex gap-5'>
        <Cover handelAddToBookMark={handelAddToBookMark} evenTimeAdd={evenTimeAdd}></Cover>
        <Bookmark bookmark={bookmark} evenTime={evenTime}  ></Bookmark>
      </div>
    </div>
  )
}

export default App