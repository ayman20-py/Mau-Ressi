export class Customer {
    private id: string;
    private name: string;
    private email: string;
    private phone: string;
    private address: string;


    public constructor(id: string, name: string, email: string, phone: string, address: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }


    public getId(): string {
        return this.id;
    }
}

export interface CustomerInterface {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}