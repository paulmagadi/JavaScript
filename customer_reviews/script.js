(function() {
    const customerImage = document.querySelector("#customerImage");
    const customerName = document.querySelector("#customerName");
    const customerText = document.querySelector("#reviews");

    var myBtn = document.querySelectorAll(".btn");
    let index = 0;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`;
        let customer = new Customer(Img, name, text);

        customers.push(customer);
    }

    createCustomer(1, "Annie", "aaaaaaaa aaaaa aaaaa aaaaa aaaaaaa aaaaaa aaaaaa aaaaa aaaaa aaaaa aaaaa aaaa aaaaaaa aaaaa aaaa");
    createCustomer(2, "Paul", "bbbbbbbb bbbb bbbbb bbbbb bbbb bbbbbbb bbb bbbbbb bbb bbbb bbbbb bbb bbbb bb bbbbb bbbbbbb bbbb bbbb");
    createCustomer(3, "Bells", "ccccccc ccccc cccc cccc ccccc cccccc cccccc cccc cccccc ccccc ccccccc cccccc cccc cccccccc cccc");
    createCustomer(4, "Tinna", "ddddddd dddd ddddd dddddddddd dddddddd ddd dddd dddddd dddddddd dddd ddddd ddddd dddd dddd ddddd");
    createCustomer(5, "Natea", "eeeeeeeeeeee eeeeee eeee eeee eeeee eeee eeee ee eeeeeeee eeeeee eeeeee eeeee eeeeeeee eeeeee");
    createCustomer(6, "Black", "fffffff fff fffffffff fffff fff ffff ffffffff ffffff ff fffff fff fffff ffff f f ff");

    function setCustomerDetails() {
        customerImage.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
    }

    setCustomerDetails(); // Set initial customer details

    myBtn.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (button.classList.contains("prevbtn")) {
                if (index !== 0) {
                    index--;
                }
            }

            if (button.classList.contains("nextbtn")) {
                if (index !== customers.length - 1) {
                    index++;
                }
            }

            setCustomerDetails(); // Update customer details
        });
    });
})();


