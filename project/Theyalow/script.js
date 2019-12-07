// Кнопка перехода на мобильную-дектопную версию

let mobileVersion = document.getElementById('buttons_mobile_version');
let wrapper = document.getElementById('wrapper');
mobileVersion.addEventListener("click", function() {
  wrapper.classList.toggle("wrapper_mobile");

  if (mobileVersion.innerText == "Mobile")  {
    mobileVersion.textContent = "Desktop";
 	document.getElementById("mystyle").href="css/style_mobile.css";
  } else {
  	mobileVersion.textContent = "Mobile";
  	document.getElementById("mystyle").href="css/style.css";
  }
});