import { FC } from "react";
import Post from "./Post";

const PostList: FC = () => {
  const posts = [
    {
      id: "1",
      title: "제목을 입력해주세요.제목을 입력해주세요.제목을 입력해주세요.",
      content: "내용을 입력해주세요.내용을 입력해주세요.",
      nickname: "닉네임입니다",
      date: "2024-10-05",
      like: 100000000,
    },
    {
      id: "2",
      title: "제목을 입력해주세요.",
      content:
        "내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.",
      nickname: "닉네임입니다",
      date: "2024-10-05",
      like: 10,
    },

    {
      id: "3",
      title: "제목을 입력해주세요.",
      content: "내용을 입력해주세요.내용을 입력해주세요.",
      nickname: "닉네임입니다",
      date: "2024-10-05",
      like: 10,
    },
    {
      id: "4",
      title: "제목을 입력해주세요.",
      content: "내용을 입력해주세요.내용을 입력해주세요.",
      nickname: "닉네임입니다",
      date: "2024-10-05",
      like: 10,
    },
    {
      id: "5",
      title: "제목을 입력해주세요.",
      content: "내용을 입력해주세요.내용을 입력해주세요.",
      nickname: "닉네임입니다",
      date: "2024-10-05",
      like: 10,
    },

    {
      id: "6",
      title: "제목을 입력해주세요.",
      content: "내용을 입력해주세요.내용을 입력해주세요.",
      nickname: "닉네임입니다",
      date: "2024-10-05",
      like: 10,
    },
  ];

  return (
    <ul className="flex flex-col gap-4">
      {posts.map(({ id, title, content, nickname, date, like }) => (
        <Post
          key={id}
          title={title}
          content={content}
          nickname={nickname}
          date={date}
          like={like}
        />
      ))}
    </ul>
  );
};

export default PostList;
