import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseEntity, Customer } from "@medusajs/medusa";
import { generateEntityId } from "@medusajs/medusa/dist/utils";

@Entity()
export class CustomerAudit extends BaseEntity {
  @Column({ type: "varchar" })
  customer_id: string | null;

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = generateEntityId(this.id, "audit");
  }

  @ManyToOne(() => Customer, (customer) => customer.audits, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "customer_id", referencedColumnName: "id" })
  customer: Customer;
}
