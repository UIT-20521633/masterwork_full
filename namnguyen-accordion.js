document.querySelectorAll(".card-header").forEach((header) => {
  header.addEventListener("click", function () {
    const collapse = this.nextElementSibling;
    const isOpen = collapse.classList.contains("show");

    // Đóng tất cả các accordion khác
    document.querySelectorAll("#accordion .collapse").forEach((item) => {
      item.classList.remove("show");
      item.previousElementSibling.setAttribute("aria-expanded", "false");
    });

    // Nếu accordion đang đóng, mở nó và thay đổi aria-expanded
    if (!isOpen) {
      collapse.classList.add("show");
      this.setAttribute("aria-expanded", "true");
    } else {
      this.setAttribute("aria-expanded", "false");
    }
  });
});
