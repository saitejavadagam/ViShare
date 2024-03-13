
function Video({ thumbnailSrc, title, username, profileSrc, views }) {
    return `
      <div class="video">
        <img src="${thumbnailSrc}" alt="Video Thumbnail" class="video-thumbnail">
        <div class="video-info">
          <h2 class="video-title">${title}</h2>
          <p class="video-details"><span class="profile-logo"></span> ${username} | <i class="fa fa-eye"></i>: ${views}</p>
        </div>
      </div>
    `;
  }
  const videoContainer = document.getElementsByClassName("video-container");

  async function renderVideos(url) {
    const response = await fetch(url);
    const videos = await response.json();
    console.log(videos)

    const videoHTML = videos.map(video=> Video(video) ).join('');
    console.log(videoHTML);
    videoContainer.innerHTML = videoHTML;
  }

renderVideos("http://192.168.1.2:5500/html/ttproject/videos.json")

 
  