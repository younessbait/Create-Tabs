let tabs = document.querySelectorAll(".tabs li");
let tabsarray = Array.from(tabs);
let cont = document.querySelectorAll(".content > div");
let contarray = Array.from(cont);
tabsarray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsarray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    contarray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.con).style.display = "block";
  });
});
