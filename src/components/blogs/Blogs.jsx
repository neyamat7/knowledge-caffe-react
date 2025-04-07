import { use, useState } from "react";
import BlogCard from "./BlogCard";
import SpentTime from "./spentTime/SpentTime";
import Bookmarks from "./bookmarks/Bookmarks";

const Blogs = ({ blogsContent }) => {
  const allBlogs = use(blogsContent);
  const [readTime, setReadTime] = useState(0);
  const [bookmarkedBlogs, setBookmarkedBlog] = useState([]);

  // read time handler
  function handleReadTime(time, title, checkBookMark) {
    setReadTime(readTime + time);
    if (bookmarkedBlogs.includes(title)) {
      const newBookmarks = bookmarkedBlogs.filter(
        (blogTitle) => blogTitle !== title
      );
      setBookmarkedBlog(newBookmarks);
      checkBookMark();
    }
  }

  // bookmark handler
  function handleBookmark(title) {
    if (bookmarkedBlogs.includes(title)) {
      const newBookmarks = bookmarkedBlogs.filter(
        (blogTitle) => blogTitle !== title
      );
      setBookmarkedBlog(newBookmarks);
    } else {
      setBookmarkedBlog([...bookmarkedBlogs, title]);
    }
  }
  return (
    <div className=" mt-6 px-5 max-w-screen-xl mx-auto flex flex-col-reverse sm:flex-row gap-3 relative">
      <div className="sm:basis-8/12 blogs h-fit overflow-y-auto">
        {allBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            allBlogs={allBlogs}
            onReadTime={handleReadTime}
            onBookmark={handleBookmark}
          ></BlogCard>
        ))}
      </div>
      {/* bookmarks */}
      <div className="sm:basis-4/12 sm:sticky top-5 h-fit">
        <div className="mb-6">
          <SpentTime readTime={readTime}></SpentTime>
        </div>

        <Bookmarks bookmarkedBlogs={bookmarkedBlogs}></Bookmarks>
      </div>
    </div>
  );
};

export default Blogs;
