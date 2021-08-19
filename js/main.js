const app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                "id_product": 123,
                "product_name": "JavaScript и Juery",
                "year": 2016,
                "autor": "Дэвид Сойер и Макфарланд"
            },
            {
                "id_product": 124,
                "product_name": "Изучаем программирование на JavaScript",
                "year": 2017,
                "autor": "Эрик Фримен, Элизабет Робсон"
            },
            {
                "id_product": 125,
                "product_name": "Секреты Javascript ниндзя",
                "year": 2017,
                "autor": "Джон Резик, Биэр Бибо"
            },
            {
                "id_product": 126,
                "product_name": "ES6 и не только",
                "year": 2017,
                "autor": "Кайл Симпсон"
            },
        ],
        redactedBook: [],
        bookVisible: true,
        addBookVisible: false,
        redactBookVisible: false,
        bookName: "",
        bookAutor: "",
        bookYear: "",
        bookImg: "",

    },
    methods: {
        addBook() {
            this.bookVisible = false;
            this.redactBookVisible = false;
            this.addBookVisible = true;
        },
        cancelAct() {
            this.bookVisible = true;
            this.redactBookVisible = false;
            this.addBookVisible = false;
        },
        redactBook(arg) {
            this.bookVisible = false;
            this.redactBookVisible = true;
            this.addBookVisible = false;
            this.redactedBook = [];
            for (let item in arg) {
                this.redactedBook[item] = arg[item]
            }
        },
        delBook(arg) {
            this.products.forEach((element, index) => {
                if (element.id_product == arg.id_product) {
                    this.products.splice(index, 1);
                }
            });
        },
        inputChange(event) {
            this.redactedBook[event.target.name] = event.target.value

        },
        saveChanges() {
            for (let item of this.products) {
                if (item.id_product == this.redactedBook.id_product) {
                    this.products.splice(this.products.indexOf(item), 1);
                    this.products.push(this.redactedBook);
                    this.redactedBook = [];
                }
            }
            this.bookVisible = true;
            this.redactBookVisible = false;
            this.addBookVisible = false;
        },
        saveNew() {
            this.products.push(this.redactedBook);
            this.redactedBook = [];
            this.bookVisible = true;
            this.redactBookVisible = false;
            this.addBookVisible = false;
            console.log(this.redactedBook)
        }
    },
    mounted() {

    }
})