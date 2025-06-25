async function fetchUnsplashImages(keyword, perPage = 10) {
  const clientId = '812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a';
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(keyword)}&per_page=${perPage}&client_id=${clientId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    // Extract urls of regular size images
    const imageUrls = data.results.map(photo => photo.urls.regular);
    return imageUrls;
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    return [];
  }
}

export { fetchUnsplashImages };