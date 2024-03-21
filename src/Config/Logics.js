export const isPostLikedByUser = (post, userId) => {
  for (let item of post.likedByUsers) {
    if (item.id === userId) return true;
  }
  return false;
};

export const isCommentLikedByUser = (comment, userId) => {
  for (let item of comment.likedByUsers) {
    if (item.id === userId) return true;
  }
  return false;
};

export const isSavedPost = (user, postId) => {
  for (let item of user.savedPost) {
    if (item.id === postId) return true;
  }
  return false;
};

export const isFollowing = (reqUser, user2) => {
  if (reqUser && user2) {
    for (let item of user2.follower) {
      if (reqUser.id === item.id) return true;
    }
  }
  return false;
};

export const isReqUser = (userId1, userId2) => {
  if (userId1 && userId2) return userId1 === userId2;
};

export const timeDiffierence = (timestamp) => {
  const date = new Date(timestamp);
  const diff = Date.now() - date.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 0) {
    return weeks + " tuần trước";
  } else if (days > 0) {
    return days + " ngày trước";
  } else if (hours > 0) {
    return hours + " giờ trước";
  } else if (minutes > 0) {
    return minutes + " phút trước";
  } else if (seconds > 0) {
    return seconds + " giây trước";
  }
};

function getTimeInHours(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  return hours;
}

export const hasStory = (users) => {
  const temp = users?.reduce((acc, item) => {
    if (item.stories?.length > 0) {
      const time = getTimeInHours(
        item.stories[item.stories?.length - 1].timestamps
      );
      if (time < 24) {
        acc.push(item);
      }
    }
    return acc;
  }, []);

  return temp;
};
