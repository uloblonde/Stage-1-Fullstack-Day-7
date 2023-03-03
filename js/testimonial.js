class TestiMonial {
   constructor(quote,image){
    this._image = image;
    this._quote = quote;
   }

   get quote(){
    return this._quote;
   }
   get image(){
    return this._image;
   }

   get html(){
    return `
    <div class="card-warp">
        <div class="card-post">
            <div class="testi-img">
                <img src="${this.image}" alt="">
                </div>
                <div class="testi-quote">
                    <p>${this.quote} </p>
                </div>
                <div class="testi-name">
                    <h5>${this.name}</h5>
                </div>
            </div>
        </div>
    </div>`
    
   }
}

class NamaAuthor extends TestiMonial{
    constructor(name, quote,image){
        super(quote,image);
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

const data1 = new NamaAuthor("Gajah","Fullstack Developer", "https://www.tanjungpinangpos.co.id/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/11/fromandroid-a1a22b6760b28af0a2a79e36bd5e08fc.jpg.webp");
const data2 = new NamaAuthor("Semut","Nurse", "https://asset.kompas.com/crops/3YcngmR3WtpyuVlWZu643I6X5JY=/196x127:1724x1146/750x500/data/photo/2022/05/07/627657e2d1bfb.jpg");
const data3 = new NamaAuthor("GKJW Mojowarno","Gereja Jawa Pertama di Jawa Timur", "https://radarjombang.jawapos.com/wp-content/uploads/2018/11/gkjw-mojowarno-gereja-jawa-tertua-di-indonesia_m_103761.jpg");

let tampungData = [data1,data2,data3];
let testiHtml = "";

for(let i = 0 ; i < tampungData.length ; i++){
    testiHtml += tampungData[i].html;
}

document.getElementById("card-testi").innerHTML = testiHtml;





