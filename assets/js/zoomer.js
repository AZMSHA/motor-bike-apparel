function zoom_element(e, t, n, r, o) {
  let l = (100 * (e.clientX - t)) / r,
    a = (100 * (e.clientY - n)) / o;
  e.currentTarget.style.transformOrigin = l + "% " + a + "%";
}
window.addEventListener("load", function () {
  let e = document.querySelectorAll(".image-hover-zoom img");
  for (let t of e)
    (t.parentElement.style.height = t.height + "px"),
      (t.parentElement.style.width = t.width + "px"),
      (t.parentElement.style.overflow = "hidden"),
      t.addEventListener("mousemove", (e) =>
        zoom_element(
          e,
          t.parentElement.offsetLeft,
          t.parentElement.offsetTop,
          t.parentElement.offsetWidth,
          t.parentElement.offsetHeight
        )
      ),
      t.addEventListener("mouseenter", function (e) {
        let t = e.currentTarget.parentElement.getAttribute("scale");
        e.currentTarget.style.transform = t ? "scale(" + t + ")" : "scale(1.5)";
      }),
      t.addEventListener("mouseleave", function (e) {
        e.currentTarget.style.transform = "none";
      });
});
