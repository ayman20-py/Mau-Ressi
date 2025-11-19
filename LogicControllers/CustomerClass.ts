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


    // Getters methods
    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getEmail(): string {
        return this.email;
    }
    public getPhone(): string {
        return this.phone;
    }
    public getAddress(): string {
        return this.address;
    }
}

export interface CustomerInterface {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}