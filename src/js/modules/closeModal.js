const closeModal = () => {
  const windows = document.querySelectorAll("[data-modal]");
  windows.forEach((item) => {
    if (item.style.display === "block") {
      item.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default closeModal;
