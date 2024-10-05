type PostType = {
  id: string;
  title: string;
  content: string;
  nickname?: string;
  category: string;
  comment_count?: string;
  likes: number;
  created_at?: string;
  updated_at?: string;
};

export default PostType;
