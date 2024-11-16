const handleFetch = () => {  
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: 'GET',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3Y2QwMGFlZGU3ODAwMTU3OTM5YTQiLCJpYXQiOjE3MzE3MTAyMDgsImV4cCI6MTczMjkxOTgwOH0.bqJ7IVPinpd8JgDqZxjsIFONMCtIzf0QnEju0jkqI4Y" 
        },
    })       
    .then(resp => {
       if (resp.ok) {
           return resp.json();
       }
    })
    .then(Obj => {  
        function createCard(name, description, brand, imageUrl, price, id) {
            return `
            <div class="col-lg-4 col-md-6 col-12">
                <div class="card-image w-30 h-30"> 
                   <img src="${imageUrl}" class="card-img-top" style="width:100%; height:100%;" alt="Card image">
                </div>     
                <div class="card-body">
                    <h5 class="card-title">${name}</h5><br>
                    <h6 class="card-title">${brand}</h6>
                    <p class="card-text">${description}</p>
                    <span class="card-text">Price : ${price}$</span>
                </div>
                <div class="mt-3"> 
                    <button type="button" class="btn btn-danger" onclick="removeCard(this)">Remove</button>
                    <button type="button" class="btn btn-info" onclick="goToDetails(${id})">More Details</button>   
                </div>
            </div>`;
        }
  
        function generateCards() {
            const container = document.getElementById('cardContainer');
  
            Obj.forEach(card => {
                const cardHTML = createCard(card.name, card.description, card.brand, card.imageUrl, card.price, card._id);
                container.innerHTML += cardHTML;
            });
        }
        window.removeCard = function(button) {
            const card = button.closest('.col-lg-4');
            if (card) {
                card.remove();
                console.log('Card removed');
            }
        }
        window.goToDetails = function(productId) {
            window.location.href = `details.html?id=${productId}`;
        }
  
        generateCards();
    })
    .catch(err => console.error(err));
  }
  
  window.onload = () => {
    handleFetch();
  };