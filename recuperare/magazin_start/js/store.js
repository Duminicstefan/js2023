//salveaza datele in local storage
const setStorageItem =(name,item)=>{
    localStorage.setItem(name,JSON.stringify(item));

}
//returneaza datele in local =Storage
const getStorageItem = (item)=>{
    let storageItem = localStorage.getItem(item);
    if(storageItem){
        storageItem=JSON.parse(localStorage.getItem(item))
    }else{
        storageItem =[]
    }
    return storageItem
}
//salveaza toate produsele in localStorage
let store = getStorageItem('store');
const setupStore = (products)=>{
    store=products.map((product)=>{
        const {
            id,
            fields:{featured,name,price,company,colors,image:img},
        }=product;
        const image = img[0].thumbnails.large.url;
        return{id,featured,name,price,comapny,colors,image};
    });
    setStorageItem('store',store);
};
// formateaza pretul
const formatPrice =(price)=>{
    let formattedPrice = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency: 'EUR',
    }).format((price /100 ).toFixed(2))
    return formattedPrice
}
const getElement =(selection) =>{
const element =document.querySelector(selection)
if (element) return element
throw new Error(`Please check "${selection}"selector , no such element exist`)
}