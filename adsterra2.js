var redirectUrl = "https://robotbagpipe.com/qpqd7670q7?key=8f247dbe26a4c4571e3d196c9944b123";

// versi aman agar tidak dianggap popup otomatis
document.addEventListener("click", function () {
  let a = document.createElement("a");
  a.href = redirectUrl;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  a.remove();
});
