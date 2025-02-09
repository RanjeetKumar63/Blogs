import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-y-1 items-center justify-center ">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
