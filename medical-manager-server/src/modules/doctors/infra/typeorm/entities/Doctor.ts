import { uuid } from 'uuidv4';
import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
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
    state: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column()
    first_medical_specialty: string;

    @Column()
    second_medical_specialty: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default Doctor;
