import { Suspense } from "react";
import Blogs from "./components/blogs/Blogs";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const blogsContent = fetch("blogs.json").then((res) => res.json());

  return (
    <>
      <Navbar></Navbar>
      <Suspense
        fallback={
          <div className="text-center mt-6">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <Blogs blogsContent={blogsContent}></Blogs>
      </Suspense>
    </>
  );
};

export default App;
