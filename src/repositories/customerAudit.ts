import { dataSource } from "@medusajs/medusa/dist/loaders/database";
import { CustomerAudit } from "../models/customerAudit";

export const CustomerAuditRepository = dataSource.getRepository(CustomerAudit);

export default CustomerAuditRepository;
