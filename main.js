import { renderMenuItems,renderButtonsCreate } from "./scripts/ui.js";



const buttonsArea = document.getElementById("buttons");

let data;
async function fetchMenu() {
  const res = await fetch("./db.json");
  data = await res.json();
  // console.log(data);
}

fetchMenu();

// or

// function fetchMenuThen(){
//     fetch('./db.json')
//     .then((result)=>result.json())
//     .then ((data)=>console.log(data))
//     .catch((err)=>console.log(err));
// }

// fetchMenuThen()

//sayfa yükleme olayını izle
document.addEventListener("DOMContentLoaded", () => {
    renderButtonsCreate('Hepsi');
  fetchMenu().then(() => renderMenuItems(data.menu));
});

//buttons tıklanma olaylarını izle
buttonsArea.addEventListener("click", (e) => {
  // hangi butona tıklanmadıya fonksiyonu durdur,
  if (e.target.id == "buttons") return;

//active olan butonu belirlemek için butonları ekrana tekar bas
renderButtonsCreate(e.target.innerText);


  //filtrelenecek category ismini belirleyelim.
   const selectedCategory = e.target.dataset.id;

   //ürünlerin arasından kategori ismi seçtiğimiz kategoriye eşit olanları alalım.
 if(selectedCategory === "all"){
    //tüm elemanları ekrana bas
    renderMenuItems(data.menu)
 }
 else {
    //hepsi seçilediyse
    const filteredCategory = data.menu.filter((item)=> item.category === selectedCategory
   
    );
    //verileri ekrana basan fonkiyona filtrelemiş verileri verdik.
    renderMenuItems(filteredCategory);
 }
 
});


