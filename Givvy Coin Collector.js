var redirectUrl = "https://app-earnings-link.com/givvyCryptoMiner/qigxhotpfbbbfuxynhv";

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
