import React from 'react';

interface PostCardProps {
  user: string;
  content: string;
  likes: number;
}

const PostCard: React.FC<PostCardProps> = ({ user, content, likes }) => {
  return (
    <div className="post-card">
      <h3>{user}</h3>
      <p>{content}</p>
      <button>❤️ {likes}</button>
    </div>
  );
};

export default PostCard;
