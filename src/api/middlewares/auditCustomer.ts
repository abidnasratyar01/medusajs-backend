// import { Customer, CustomerService } from "@medusajs/medusa";
// import CustomerAudit from "../../services/customerAudit";

// export async function auditLoggedInCustomer(req, res, next) {
//   let loggedInCustomer: Customer | null = null;
//   console.log("Here is: ", req.customer);
//   if (req.customer && req.customer.customerId) {
//     const customerService = req.scope.resolve(
//       "customerService"
//     ) as CustomerService;
//     loggedInCustomer = await customerService.retrieve(req.customer.customerId);

//     const customerAuditService = req.scope.resolve(
//       "customerAuditService"
//     ) as CustomerAudit;
//     customerAuditService.create(req.customer.customerId);
//   }

//   req.scope.register({
//     loggedInCustomer: {
//       resolve: () => loggedInCustomer,
//     },
//   });

//   next();
// }
