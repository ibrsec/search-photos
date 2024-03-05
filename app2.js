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

//with async await
searchButton.addEventListener("click", async(e) => {
  e.preventDefault();
  const value =  input.value.trim();
  imgContainer.textContent = "";
const getImagesJson = await(await fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
    method:"GET",
    headers:{
        Authorization: "Client-ID a-R859OJIzz0JCRHXvxcf2pIkaGKJCtomb0MPaaEOAA"
    }
  })).json();

console.log(getImagesJson);

Array.from(getImagesJson.results).forEach(each => {
    sendUrlToImg(each.urls.small);

})

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