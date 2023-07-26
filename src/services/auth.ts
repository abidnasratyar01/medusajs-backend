import { Lifetime } from "awilix";
import {
  AuthService as MedusaAuthService,
  authenticateCustomer,
} from "@medusajs/medusa";

class AuthService extends MedusaAuthService {
  // The default life time for a core service is SINGLETON
  static LIFE_TIME = Lifetime.SCOPED;

  //   authenticateCustomer(email: string, password: string): any {
  //     console.log("Here I am ");
  //     // AuthService.prototype.authenticateCustomer(email, password);
  //   }
  // ...
}

export default AuthService;
