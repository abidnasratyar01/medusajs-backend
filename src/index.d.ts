import { Audit } from "./models/customerAudit";

export declare module "@medusajs/medusa/dist/models/customer" {
  declare interface Customer {
    audits: Audit[];
  }
}
