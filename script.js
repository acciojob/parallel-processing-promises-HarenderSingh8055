//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
   {
    url: "https://picsum.photos/id/237/200/300",
    alt: "Image 1",
  },
  {
    url: "https://picsum.photos/id/238/200/300",
    alt: "Image 2",
  },
  {
    url: "https://picsum.photos/id/239/200/300",
    alt: "Image 3",
  }
];
btn.addEventListener("click",downloadImages(images));



function downloadImages(images){
	const allPromises = images.map((image)=>{
		return new Promise((resolve,reject)=>{
            const img = new Image();
            img.src = `${image.url}`;
            img.alt = `${image.alt}`;
        
            img.onload = ()=>{
                resolve(img);
            }
        
            img.onerror = ()=>{
                reject(`Failed to load image's URL: ${image.url}`);
            };
        });;
	});

	Promise.all(allPromises).then((imgUrl)=>{
		output.innerHTML = null;
		imgUrl.forEach((img)=>{
			output.appendChild(img);
		})
	}).catch((error)=>{
		console.error(error);
	});
};