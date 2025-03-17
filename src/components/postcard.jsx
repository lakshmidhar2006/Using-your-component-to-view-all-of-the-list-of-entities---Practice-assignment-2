import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ data }) => {
  return (
    <div>
      {data.map((post) => (
        <div key={post.id} style={styles.card}>
          <img src={post.profileImage} alt="Profile" style={styles.profilePic} />
          <div style={styles.content}>
            <h3>{post.username}</h3>
            <p>{post.content}</p>
            <LikeButton isLiked={post.isLiked} />
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  profilePic: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  content: {
    flex: 1,
  },
};

export default PostCard;
