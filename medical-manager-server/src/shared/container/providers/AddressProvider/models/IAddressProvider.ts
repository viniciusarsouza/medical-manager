export default interface IAddressProvider {
    getAddress(cepDoctor: number): Promise<Address>;
}
