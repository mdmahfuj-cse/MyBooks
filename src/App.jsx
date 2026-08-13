import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingcount, setReadingCount] = useState(0);
  const [readBlogIds, setReadBlogIds] = useState([]);

  const handleBookMark = (blog) => {
    setBookmarked((currentBookmarks) => {
      const isAlreadyBookmarked = currentBookmarks.some(
        (marked) => marked.id === blog.id
      );

      return isAlreadyBookmarked ? currentBookmarks : [...currentBookmarks, blog];
    });
  };

  const handleMarkAsRead = (time, id) => {
    // A read book must not stay in the bookmarks panel.
    handleRemoveFromBookmark(id);

    if (readBlogIds.includes(id)) return;

    setReadingCount((currentTime) => currentTime + time);
    setReadBlogIds((currentReadIds) => [...currentReadIds, id]);
  };

  const handleRemoveFromBookmark = (id) => {
    setBookmarked((currentBookmarks) =>
      currentBookmarks.filter((mark) => mark.id !== id)
    );
  };

  return (
    <>
      <Navbar />

      <main className="main-container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <section className="left-container">
          <Blogs
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
            readBlogIds={readBlogIds}
            bookmarkedIds={bookmarked.map((book) => book.id)}
          />
        </section>

        <aside className="right-container space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-2xl bg-indigo-600 p-6 text-white shadow-lg shadow-indigo-200">
            <p className="text-sm font-medium text-indigo-100">Reading time</p>
            <p className="mt-1 text-4xl font-bold">{readingcount} <span className="text-lg font-medium">min</span></p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">Bookmarks</h2>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-bold text-indigo-700">
                {bookmarked.length}
              </span>
            </div>
            {bookmarked.length === 0 ? (
              <p className="mt-5 text-sm leading-6 text-slate-500">No saved books yet. Click the bookmark icon on a book to save it here.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {bookmarked.map((marked) => (
                  <li key={marked.id} className="border-b border-slate-100 pb-3 text-sm font-medium leading-5 text-slate-700 last:border-0 last:pb-0">
                    {marked.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
