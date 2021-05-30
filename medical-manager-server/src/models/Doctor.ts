import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('doctors')
class Doctor {
    @PrimaryColumn()
    id: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default Doctor;
