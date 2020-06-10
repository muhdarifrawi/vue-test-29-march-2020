var heroApp = new Vue ({
    el:"#first-app",
    data:{
        brand:"Legit",
        productName:"Socks",
        productDescription:"This is a lovely pair of socks!",
        selectedProduct: 0,
        link: "https://www.google.com",
        onSale: true,
        colours: [{
            id:1001,
            coloursChoice: "blue",
            image:"/images/blue-socks.jpg",
            stock: 3
        },
        {
            id:1002,
            coloursChoice: "green",
            image:"/images/green-socks.jpg",
            stock: 0
        }],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            this.cart -= 1;
        },
        updateProduct(index){
            this.selectedProduct = index;
            console.log(index);
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.productName
        },
        image(){
            return this.colours[this.selectedProduct].image
        },
        inStock(){
            return this.colours[this.selectedProduct].stock
        }
    }
})