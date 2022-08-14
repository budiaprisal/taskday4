let dataBlog = [];
function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  let java = document.getElementById("java").checked;
  let react = document.getElementById("react").checked;

  if (java) {
    javas = document.getElementById("java").value;
  } else {
    java = "";
  }
  if (react) {
    react = document.getElementById("react").value;
  } else {
    react = "";
  }

  console.log(javas);
  console.log(react);

  // untuk membuat url gambar, agar tampil
  image = URL.createObjectURL(image[0]);

  let blog = {
    title,
    content,
    image,
    author: "",
    postAt: new Date(),
    java,
    react,
  };

  dataBlog.push(blog);
  // console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  console.log(dataBlog);

  for (let index = 0; index < dataBlog.length; index++) {
    // console.log(dataBlog[index]);
    document.getElementById("contents").innerHTML += `
        <div class="testimoni">
            <div class="testimoni-img">
                <img src="${dataBlog[index].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank"
                    >${dataBlog[index].title}</a
                    >
                </h1>
                <div class="detail-blog-content">
                    ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}
                </div>
                <p>
                    ${dataBlog[index].content}
                </p>
                <i class="fa-brands fanode-js-${dataBlog[index].javascript}"></i>
                <i class="fa-brands fa-${dataBlog[index].nodejs}"></i>
                <div style="text-align: right; margin-top: 15px">
                    <span style="font-size: 12px; color:grey">${getDistanceTime(dataBlog[index].postAt)}</span>
                </div>
            </div>
        </div>
        `;
  }
}

function getFullTime(time) {
  let month = ["Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"];

  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();

  let hours = time.getHours();
  let minutes = time.getMinutes();

  // console.log(date);
  // console.log(month[monthIndex]);
  // console.log(year);

  // console.log(hours);
  // console.log(minutes);

  if (hours < 10) {
    hours = "0" + hours;
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // 12 Agustus 2022 09.04
  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;
  // console.log(fullTime);
  return fullTime;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost;
  console.log(distance);

  let milisecond = 1000; // 1 detik 1000 milisecond
  let secondInHours = 3600; // 1 jam sama dengan 3600 detik
  let hoursInDay = 24; // 1 hari 24 jam

  let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay));
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSeconds = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
    return `${distanceDay} day ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} hours ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minutes ago`;
  } else {
    return `${distanceSeconds} seconds ago`;
  }
}
