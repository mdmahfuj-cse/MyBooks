import { IoBookmark, IoBookmarksOutline, IoTimeOutline } from "react-icons/io5";

const Blog = ({
  blog,
  handleBookMark,
  handleMarkAsRead,
  isRead,
  isBookmarked,
}) => {
  return (
    <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="grid h-full grid-cols-1 md:grid-cols-[140px_1fr]">
        <figure className="bg-slate-100 p-3">
          <img
            className="h-40 w-full rounded-xl object-cover md:h-full"
            src={blog.cover}
            alt={blog.title}
          />
        </figure>
        <div className="flex flex-col p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src={blog.author_img}
                alt={blog.author}
              />
              <h3>{blog.author}</h3>
            </div>
            <button
              onClick={() => handleBookMark(blog)}
              disabled={isRead}
              aria-label={isBookmarked ? "Bookmarked" : "Bookmark this book"}
              className={`rounded-full p-2 text-xl transition ${isBookmarked ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"} disabled:cursor-not-allowed disabled:opacity-50`}
            >
              {isBookmarked ? <IoBookmark /> : <IoBookmarksOutline />}
            </button>
          </div>
          <h2 className="mt-4 text-lg font-bold leading-6 text-slate-800">
            {blog.title}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {blog.hashtags.map((has) => (
              <span
                key={has}
                className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
              >
                #{has}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <span className="flex items-center gap-1 text-sm font-medium text-slate-500">
              <IoTimeOutline /> {blog.reading_time} min read
            </span>
            <button
              onClick={() => handleMarkAsRead(blog.reading_time, blog.id)}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-emerald-600"
              disabled={isRead}
            >
              {isRead ? "Read" : "Mark as Read"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blog;
