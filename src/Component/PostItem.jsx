const PostItem = ({ post }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p>{post.excerpt}</p>
      </div>
    );
  };
  
  export default PostItem;
