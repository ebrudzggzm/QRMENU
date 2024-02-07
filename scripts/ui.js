import { buttonData } from "./constants.js";
const buttonsArea = document.querySelector("#buttons");
const menuList = document.querySelector("#menu-list");

// ui değişikleri,ekranda değişiklik güncelleme yapan herşey.
export const renderMenuItems = (data) => {
  console.log("gelenveri:" , data)

  //dizideki her bir obje için bir html elementi oluşturalım.
  //foreach ve createElement  ya da map ile yapılabilir.
  //card ı div içine aktar.
  const cardsHTML = data
    .map(     
        (item) =>
        `    <a
        id="card"
        href="/detail.html?id=${item.id}"
        class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
      >
<img class="rounded shadow img-fluid" src=${item.img} alt="">
<div>
    <div class="d-flex justify-content-between">
        <h5>${item.title}</h5>
        <p class="text-success fw-bold">${Math.round(item.price * 30)} ₺ </p>
    </div>
    <p class="lead">
        ${item.desc}
    </p>
</div>
</a> `).join("");

  menuList.innerHTML = cardsHTML;
};

//dizideki her bir eleman için ekrana buton oluşturalım.
// export const renderButtons = ()=>{
//     const btnList = buttonData.forEach(()=>{

//     `<button data-id="all" class="btn btn-outline-dark">Hepsi</button>`
// })
// buttons.innerHTML = btnList;
// }

// <butt on data-id="all" class="btn btn-outline-dark">Hepsi</butt>

//diğer yöntemle
export const renderButtonsCreate = (activeText) => {
  //önceki oluşan butonları sıfırla
  buttonsArea.innerHTML = "";

  // butonlan herbiri için izleyeceğimiz adımlar.
  buttonData.forEach((btn) => {
    //1-butonu oluştur
    const buttonEle = document.createElement("button");
    //2-class belirle
    buttonEle.className = "btn btn-outline-dark";
    //3-data-id değerini tanımla
    buttonEle.setAttribute("data-id", btn.value);
    //4-içindeki yazıyı belirle.
    buttonEle.innerText = btn.text;
    //5-butonunun texti aktif ise siyah kalsın
    if (btn.text === activeText) {
      buttonEle.classList.add("btn-dark", "text-white");
    }

    //6-butonu dom html e gönder
    buttonsArea.appendChild(buttonEle);
  });
};
