var heroApp = new Vue ({
    el:"#first-app",
    data:{
        productName:"Socks",
        productDescription:"This is a lovely pair of socks!",
        image: "/images/green-socks.jpg",
        link: "https://www.google.com",
        onSale: true,
        colours: ["red", "blue", "green"],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1;
        }
    }
})