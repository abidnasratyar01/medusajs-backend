import { Column, Entity, OneToMany } from "typeorm";
import {
  // alias the core entity to not cause a naming conflict
  Customer as MedusaCustomer,
} from "@medusajs/medusa";
import { CustomerAudit } from "./customerAudit";

@Entity()
export class Customer extends MedusaCustomer {
  @OneToMany(() => CustomerAudit, (customerAudits) => customerAudits.customer, {
    cascade: true,
    eager: true,
  })
  audits: CustomerAudit[];
}
