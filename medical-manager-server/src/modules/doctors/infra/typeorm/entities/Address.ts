class Address {
    state: string;
    city: string;
    street: string;

    constructor(props: Address) {
        this.state = props.state;
        this.city = props.city;
        this.street = props.street;
    }
}

export default Address;
