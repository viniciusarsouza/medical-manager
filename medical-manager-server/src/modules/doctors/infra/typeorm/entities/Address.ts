class Address {
    state: string;
    city: string;
    street: string;
    neighborhood: string;

    constructor(props: Address) {
        this.state = props.state;
        this.city = props.city;
        this.street = props.street;
        this.neighborhood = props.neighborhood;
    }
}
