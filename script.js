// Add your Google Drive image links here
const photoLinks = [
    "https://imgur.com/gallery/6XYhnfE",
    "https://drive.google.com/uc?id=17uD7u5zScXYaF1SnxGJnLQSk1eKUKUbW",
    "https://drive.google.com/uc?id=18YTbSsFHq16G0EeejwI53R-9GPtD5Gac",
    "https://drive.google.com/uc?id=17uD7u5zScXYaF1SnxGJnLQSk1eKUKUbW",
    "post matric/gaya tour/ma1.jpg"
    // Add more links as needed
];

document.addEventListener("DOMContentLoaded", function () {
    const photoGallery = document.getElementById("photo-gallery");

    photoLinks.forEach(link => {
        const img = document.createElement("img");
        img.src = link;
        img.alt = "Gaya Photo";
        photoGallery.appendChild(img);
    });
});
