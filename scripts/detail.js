//url deki parametreye erişme,(search-param),trayıcı ile ilgili veriler için window kullanılır.

//js de url deki arama parametrelerini yönetmeye yarayan yerleişk bir class vardır URLSearcParams.

//url deki parametreleri yönetmemizi sağlayacak bir nesne oluşturduk.
const params = new URLSearchParams(window.location.search);

/*
 * yukarıdaki class'dan örnek alamamız sayesinde parametrelere
 * erişmeye ve güncellemeye yarayan metheodları kullanabilceğimiz
 * bir nense oluştu bizde bu nesnenin içerisindeki get methodu ile
 * parametreler arasından isteğimizi çağırdık
 */
//parametreler arasından istdiğimizi aldık

const paramId = params.get("id");
//sayfa yüklenmesini izle
document.addEventListener("DOMContentLoaded", async () => {
  //1-api den verileri al.

  const res = await fetch("../db.json");
  const data = await res.json();

  //2-veriler arasından url deki parametreyle eşleşeni al
  const product = data.menu.find((item) => item.id == paramId);

  //3-sayfa içeriğini elimizdeki veriye göre değiştir.
  renderPage(product);
});

const outlet = document.querySelector("#outlet");

function renderPage(product) {

  outlet.innerHTML = `
  
    <!-- üst kısım -->
    <div class="d-flex justify-content-between fs-5">
    <a href="/">
      <img width="40px" src="/images/home.png" />
    </a>

    <p>anasayfa / ${
      product.category
    } / ${product.title.toLowerCase()}</p>
  </div>
    <!-- içerik kısmı -->    
    
    <h1 class="text-center my-3">${product.title}</h1>
    <img src="${
      product.img
    }" alt="oreo" class="rounded object-fit-cover shadow">
    <h3 class="mt-4">
        <span>Ürünün Kategorisi:</span>
        <span class="text-success">${product.category}</span>
    </h3>
    <h3 class="mt-4">
        <span>Ürünün Fiyatı:</span>
        <span class="text-success">${(product.price * 30).toFixed(2)} ₺ </span>
    </h3>
    <p class="lead">${product.desc}</p>`;
 }

