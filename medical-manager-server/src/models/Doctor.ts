import { uuid } from 'uuidv4';
import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('doctors')
class Doctor {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    crm: number;

    @Column()
    landline: string;

    @Column()
    cellphone: string;

    @Column()
    cep: number;

    @Column()
    medical_specialty: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default Doctor;
