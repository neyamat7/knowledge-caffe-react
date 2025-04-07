import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import Profile from "../profile/Profile";
import { useState } from "react";

const BlogCard = ({ allBlogs, blog, onReadTime, onBookmark }) => {
  const {
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;

  const [markAsRead, setMarkAsRead] = useState(false);

  const [bookmarked, setBookmarked] = useState(false);

  function toggleMardAsRead() {
    setMarkAsRead(!markAsRead);
  }

  function toggleBookmark() {
    setBookmarked(!bookmarked);
    // markAsRead ? setMarkAsRead(false) && onReadTime(-reading_time) : null;
    if (markAsRead) {
      setMarkAsRead(false);
      onReadTime(-reading_time);
    }
  }

  function checkBookMark() {
    bookmarked ? setBookmarked(false) : null;
  }

  return (
    <div
      className={`space-y-4 mb-10 pb-10 border-b border-gray-400 ${
        allBlogs.indexOf(blog) === allBlogs.length - 1 ? "border-none" : ""
      }`}
    >
      <div>
        <img className="w-full rounded-lg" src={cover} alt="" />
      </div>

      <div className="flex justify-between">
        {/* profile and name */}
        <div className="flex gap-3 items-center">
          <Profile url={author_img}></Profile>
          <div>
            <h2>{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        {/* bookmark */}
        <div className="flex gap-2 items-center text-gray-500">
          <span>{reading_time} min read</span>
          <span
            onClick={() => {
              onBookmark(title);
              toggleBookmark();
            }}
            className="cursor-pointer"
          >
            {bookmarked ? (
              <FaBookmark></FaBookmark>
            ) : (
              <FaRegBookmark></FaRegBookmark>
            )}
          </span>
        </div>
      </div>

      <h1 className="text-4xl font-semibold">{title}</h1>

      <div>
        {hashtags.map((tag) => (
          <span key={tag} className="mr-2 text-gray-500">
            #{tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => {
          {
            !markAsRead
              ? onReadTime(reading_time, title, checkBookMark)
              : onReadTime(-reading_time);
          }
          toggleMardAsRead();
        }}
        className={`${
          markAsRead ? "text-red-500" : "text-blue-950"
        } underline cursor-pointer`}
      >
        {markAsRead ? "Marked as read" : "Mark as read"}
      </button>
    </div>
  );
};

export default BlogCard;


