import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Post from "./Post";
import { fetchPosts } from "../../utils/api";

const PostList: FC = () => {
  const { category, sort } = useParams();

  const { data: posts } = useQuery({
    queryFn: () => fetchPosts(category, sort),
    queryKey: ["posts", category, sort],
    initialData: [],
  });

  return (
    <ul className="flex flex-col gap-4">
      {posts?.map(({ id, title, content, nickname, updated_at, likes }) => (
        <Post
          key={id}
          id={id}
          title={title}
          content={content}
          nickname={nickname || ""}
          date={updated_at || ""}
          likes={likes || 0}
        />
      ))}
    </ul>
  );
};

export default PostList;
