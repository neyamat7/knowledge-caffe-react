import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarkedBlogs }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-5">
      <h2 className="text-2xl font-bold my-5">
        Bookmarked Blog: {bookmarkedBlogs.length}
      </h2>
      <div className="space-y-4">
        {bookmarkedBlogs.map((blog) => (
          <Bookmark key={blog} blog={blog}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
