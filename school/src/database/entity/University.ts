import {Column, Entity} from "typeorm";
import Institute from './Institute'

@Entity('university')
export class University extends Institute{
    @Column()
    graduations: string;

    @Column()
    masters: string;

    @Column()
    doctors: string;
}
