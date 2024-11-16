const params = new URLSearchParams(window.location.search);
const productId = params.get('_id')

const loadProductDetails = () => {

    fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`,{
        method: 'GET',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3Y2QwMGFlZGU3ODAwMTU3OTM5YTQiLCJpYXQiOjE3MzE3MTAyMDgsImV4cCI6MTczMjkxOTgwOH0.bqJ7IVPinpd8JgDqZxjsIFONMCtIzf0QnEju0jkqI4Y" 
        },
    }       
)
    .then(resp => {
       if(resp.ok){
    return resp.json() 
    }
    })
    .then(product =>{
        const {name, _id,createdAt, updatedAt,userId} = product;
        
        const productContainer = document.getElementsByTagName("main")[0]
        productContainer.innerHTML = `
           <h3 style="text-align: center; font-size: 2rem;">${name}Products Details</h3>
        <div class="d-flex w-100 justify-content-between mt-5">
            <div>
        <ul class="list-group">
            <label for="list-group">Server details</label>
            <li class="list-group-item">${_id}</li>
            <li class="list-group-item">${createdAt}</li>
            <li class="list-group-item">${updatedAt}</li>
            <li class="list-group-item">${userId}</li>
        </ul>`;
        }
        

)}
window.onload = () =>{
    loadProductDetails()
}