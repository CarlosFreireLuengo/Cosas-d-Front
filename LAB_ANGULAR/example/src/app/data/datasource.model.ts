import{Product} from './product.model';


export class SimpleDataSource {
    private data: Product[];
    constructor(){
        this.data = new Array<Product>(
            new Product(1, "Kayak", 275, "Watersports"),
            new Product(2, "Lifejacket", 48.95, "Watersports"),
            new Product(3, "Soccer Ball", 19.50, "Soccer"),
            new Product(4, "Corner Flags", 34.95, "Soccer"),
            new Product(5, "Stadium", 79500, "Soccer")
        );
    }


    getData(): Product[] {
        return this.data;
    }
}