function createPost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ postId: 1, postContent: 'Sample Post' });
    }, 1000);
  });
}

function deletePost(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Post ${postId} deleted`);
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date());
    }, 1000);
  });
}

function getColdDrinks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Cold drinks received');
    }, 1000);
  });
}

createPost()
  .then((post) => {
    console.log(post);
    return updateLastUserActivityTime();
  })
  .then((lastActivityTime) => {
    console.log(lastActivityTime);
    return deletePost(1);
  })
  .then((result) => {
    console.log(result);
    return getColdDrinks();
  })
  .then((drinks) => {
    console.log(drinks);
    console.log('Remaining posts: []');
  })
  .catch((error) => {
    console.error(error);
  });

async function main() {
  try {
    const post = await createPost();
    console.log(post);

    const lastActivityTime = await updateLastUserActivityTime();
    console.log(lastActivityTime);

    const result = await deletePost(1);
    console.log(result);

    const drinks = await getColdDrinks();
    console.log(drinks);

    console.log('Remaining posts: []');
  } catch (error) {
    console.error(error);
  }
}

main();
