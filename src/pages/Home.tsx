import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen border border-red-300">
      <h1>Welcome to the home page</h1>
      <Link to={"/hook-form"}>Go To Hook Form</Link>
      <Link to={"/react-query"}>Go To React Query</Link>
    </div>
  );
}

export default Home;
