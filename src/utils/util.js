export const addIdTagToPhotos = photos => {
  let id = 1;
  return photos.map(photo => {
    return {
      ...photo,
      id: id++
    };
  });
};

export const generateNewPhotoId = () => {
  // get all photos from localstorage
  const localState = JSON.parse(localStorage.getItem("localState"));
  const photos = localState ? localState.photos : [];
  let id = new Date().getTime();
  photos.forEach(photo => {
    if (photo.id === id) {
      id++;
    }
  });

  return id;
};
