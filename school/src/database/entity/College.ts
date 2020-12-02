import {Column, Entity} from "typeorm"
import Institute from './Institute'

@Entity('college')
export default class College extends Institute{
    @Column()
    graduations: string;
}
