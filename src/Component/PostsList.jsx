import React, { useContext } from 'react';
import { BlogContext } from './BlogContext';
import PostItem from './PostItem';

const PostsList = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div className="p-4">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
