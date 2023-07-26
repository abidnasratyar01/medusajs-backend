import { Router } from "express";
import customRouteHandler from "./custom-route-handler";
import { wrapHandler } from "@medusajs/medusa";
import auditCustomer from "./auditCustomer";

// Initialize a custom router
const router = Router();

export function attachStoreRoutes(storeCorsOptions, storeRouter: Router) {
  // Attach our router to a custom path on the store router
  storeRouter.use("/custom", router);
  storeRouter.use("/hello", router);

  // auditCustomer(storeRouter);

  // Define a GET endpoint on the root route of our custom path
  router.get("/", wrapHandler(customRouteHandler));
}
