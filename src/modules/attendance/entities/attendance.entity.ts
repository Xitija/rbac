import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({name:"Attendance"})
export class AttendanceEntity {
  @PrimaryGeneratedColumn('uuid')
  attendanceId: string;

  @Column()
  tenantId: string;

  @Column()
  userId: string;

  // @ManyToOne(() => User, {nullable:true})
  // @JoinColumn({ name: 'userId' })
  // user: User;

  @Column({ type: 'date' })
  attendanceDate: Date;

  @Column()
  attendance: string;

  @Column({ nullable: true })
  remark: string;

  @Column({ type: 'numeric', nullable: true })
  latitude: number;

  @Column({ type: 'numeric', nullable: true })
  longitude: number;

  @Column({ nullable: true })
  image: string;

  @Column({ type: 'jsonb', nullable: true })
  metaData: object;

  @Column({ nullable: true })
  syncTime: string;

  @Column({ nullable: true })
  session: string;

  @Column({ nullable: true })
  context: string;

  @Column({ nullable: true })
  contextId: string;

  // @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @CreateDateColumn({ type: "timestamp with time zone", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp with time zone", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @Column()
  scope: string;

  constructor(obj: Partial<AttendanceEntity>) {
    Object.assign(this, obj);
  }
}
