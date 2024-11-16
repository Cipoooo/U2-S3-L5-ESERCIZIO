document.getElementsByTagName('form')[0].addEventListener("submit", (e)=>{
        e.preventDefault()
})
    const submitBtn = document.getElementById('submitBtn')
    const productName = document.getElementById('productName')
    const productDescription = document.getElementById('productDescription')
    const productBrand = document.getElementById('productBrand')
    const productImage = document.getElementById('productImage')
    const productPrice = document.getElementById('productPrice')

    const fetchPost = ()=>{
        const data = {
            name: productName.value,
            description : productDescription.value,
            brand: productBrand.value,
            imageUrl: productImage.value,
            price: productPrice.value
          };
          fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3Y2QwMGFlZGU3ODAwMTU3OTM5YTQiLCJpYXQiOjE3MzE3MTAyMDgsImV4cCI6MTczMjkxOTgwOH0.bqJ7IVPinpd8JgDqZxjsIFONMCtIzf0QnEju0jkqI4Y" 
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {console.log('Success:', data);
        })
        .catch(error => {console.error('Error:', error); 
        });
    }
submitBtn.addEventListener("click", fetchPost)
