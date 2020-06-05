var heroApp = new Vue ({
    el:"#first-app",
    data:{
        productName:"Socks",
        productDescription:"This is a lovely pair of socks!",
        image: "/images/green-socks.jpg",
        link: "https://www.google.com",
        onSale: true,
        colours: [
        {
            id:1001,
            colourChoice: [{
                name: "one",
                class: "two", 
                type: "three"}]

        },
        {
            id:1002,
            colourChoice: "red"
        },
        {
            id:1003,
            colourChoice: "green"
        }
    ]
    }
})