import { CustomerService } from "@medusajs/medusa";
import CustomerRepository from "@medusajs/medusa/dist/repositories/customer";
import { BaseService } from "medusa-interfaces";

class CustomerAuditService extends BaseService {
  customerAuditRepository: any;
  customerService: CustomerService;
  customerRepo: typeof CustomerRepository;
  constructor({
    customerAuditRepository,
    manager,
    customerService,
    customerRepository,
  }) {
    super();

    this.customerAuditRepository = customerAuditRepository;
    this.manager_ = manager;
    this.customerService = customerService;
    this.customerRepo = customerRepository;
  }

  async addCustomerAudit(data) {
    if (!data.customerId) {
      throw new Error("Customer audit requires customer ID.");
    }

    const customer = await this.customerService.retrieve(data.customerId);
    const customerAudit = this.customerAuditRepository.create({
      customer: customer,
      created_at: new Date().toDateString(),
      updated_at: new Date().toDateString(),
    });

    return await this.customerAuditRepository.save(customerAudit);
  }

  async getCustomerAudit(customer_id) {
    return await this.customerAuditRepository.find({
      customer_id,
    });
  }
}

export default CustomerAuditService;
