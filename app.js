const input = document.querySelector("input");
const searchButton = document.querySelector("#search-btn");
const clearButton = document.querySelector("#clear-btn");
const imgContainer = document.querySelector("#img-wrapper");

window.onload = () => {
    input.focus();
}
clearButton.onclick = (e) => {
    e.preventDefault();
    imgContainer.textContent = "";
    input.value = "";
    input.focus();
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const value =  input.value.trim();
  const getImages = fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
    method:"GET",
    headers:{
        Authorization: "Client-ID a-R859OJIzz0JCRHXvxcf2pIkaGKJCtomb0MPaaEOAA"
    }
  })
  .then((response)=> response.json())
    .then((data)=> {
        console.log(data);
        console.log(data.results);
        console.log(typeof data.results);
        console.log(Array.from(data.results));
        Array.from(data.results).forEach(each => {
            sendUrlToImg(each.urls.small);

        })

    })
    .catch((error)=> console.log(error));

    input.value = "";

});


const sendUrlToImg = (url)=>{
    let div = document.createElement("div");
    div.classList.add("card")
    let img = document.createElement("img");
    img.src = url;
    div.appendChild(img);
    imgContainer.appendChild(div);
}