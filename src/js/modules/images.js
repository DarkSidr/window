const images = () => {
  const imgPopup = document.createElement("div");
  const workSection = document.querySelector(".works");
  const bigImage = document.createElement("img");

  imgPopup.classList.add("popup_img");
  workSection.appendChild(imgPopup);

  bigImage.style.display = "block";
  bigImage.style.maxWidth = "80%";
  bigImage.style.maxHeight = "80%";
  bigImage.style.margin = "0";

  imgPopup.style.display = "none";
  imgPopup.appendChild(bigImage);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;
    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
      document.body.style.overflow = "hidden";
    }
    if (target && target.matches("div.popup_img")) {
      imgPopup.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default images;
