var heroApp = new Vue ({
    el:"#first-app",
    data:{
        productName:"Socks",
        productDescription:"This is a lovely pair of socks!",
        image: "/images/green-socks.jpg",
        link: "https://www.google.com",
        onSale: true,
        colours: [{
            id:1001,
            coloursChoice: "blue",
            image:"/images/blue-socks.jpg"
        },
        {
            id:1002,
            coloursChoice: "green",
            image:"/images/green-socks.jpg"
        }],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1;
        },
        updateProduct(image){
            this.image = image;
        }
    }
})