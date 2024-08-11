let url =
  "https://api.unsplash.com/photos?page=1&client_id=VvQ9bcpszbGIETSrfIPVLLe64pw_8i2fkQQOCXJ3vLo&per_page=200";
  let main = document.querySelector(".row");

async function unsplash() {
  try {
    let data = await fetch(url);
    let result = await data.json();
    for (let i = 0; i < result.length; i++) {
      let createDiv = document.createElement("div");
      createDiv.classList.add("col-md-6");
      createDiv.classList.add("col-lg-4");
      createDiv.classList.add("col-sm-12");
      createDiv.innerHTML = `
                               <div class="card-deck">
                                 <div class="card h-100">
                                    <div class="card-header">
                                         <H3>Name: ${result[i].user.name}</H3>
                                    </div>
                                    <div class="card-body">
                                             <img class="img card-img-top" src="${result[i].urls.thumb}">
                                 </div>
                               </div>
            `;
      main.append(createDiv);
    }
  } catch (err) {
    console.log(err);
  }
}
unsplash();