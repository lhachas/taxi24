import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'passengers' })
export class Passenger {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        nullable: false,
        name: 'full_name',
        type: 'varchar',
        length: 255,
    })
    fullName: string;

    @Column({
        nullable: false,
        unique: true,
        type: 'varchar',
        length: 255,
    })
    email: string;

    @Column({
        nullable: false,
        name: 'phone_number',
        type: 'varchar',
        length: 50,
    })
    phoneNumber: string;
}
