import { useQuery } from "@tanstack/react-query";
import React from "react";

const POSTS = [
  { id: 1, title: "Post 1", content: "This is the 1" },
  { id: 2, title: "Post 2", content: "This is the 2" },
  { id: 3, title: "Post 3", content: "This is the 3" },
];

type IUser = {
  email: string;
  first_name: string;
};

type IData = {
  data: IUser[];
  page: number;
};

const ReactQuery = () => {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("https://reqres.in/api/users");
      return (await response.json()) as IData;
    },
  });

  if (error) {
    console.log(error);
  }

  if (isLoading) return <h1>Loading...</h1>;

  console.log(users?.data);

  return (
    <div>
      ReactQuery
      <div>
        {users?.data?.map((user) => {
          return <div className="text-white">{user.email}</div>;
        })}
      </div>
    </div>
  );
};

export default ReactQuery;
