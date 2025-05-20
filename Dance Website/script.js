/* === script.js === */
document.getElementById("auditionForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Application submitted successfully!");
  });

  const images = [
    "https://www.theodysseyonline.com/media-library/image.jpg?id=55940998&width=980&quality=85",
    "https://dancevictoria.com/wp-content/uploads/2017/02/DV_Performances_2017_Aspen_1stFlash_4_RosalieOConnor_A.jpg",
    "https://static01.nyt.com/images/2018/04/20/arts/20list-dance/20list-dance-superJumbo.jpg?quality=75&auto=webp",
    "https://www.appgecet.co.in/wp-content/uploads/2023/10/modern-dance-vs-ballet-exploring-the-differences-in-movement-and-expression-1.jpg"
  ];
  
  let currentIndex = 0;
  const slideshowImage = document.getElementById("slideshow-image");
  
  function showSlide(index) {
    slideshowImage.src = images[index];
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);