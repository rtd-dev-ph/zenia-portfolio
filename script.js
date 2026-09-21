document.querySelector(".burger").addEventListener("click", function () {
  var links = document.querySelector(".nav-links");
  var cta = document.querySelector(".nav-cta");
  var open = links.style.display === "flex";
  links.style.cssText = open
    ? ""
    : "display:flex;flex-direction:column;position:absolute;top:68px;left:0;right:0;background:#FBF6F2;padding:20px 32px;border-bottom:1px solid #EAD9C9;gap:16px;";
  cta.style.display = open ? "" : "inline-block";
});
