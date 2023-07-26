import bodyParser from "body-parser";
import { Router } from "express";
import cors from "cors";

export default function (storeCorsOptions, router: Router) {
  router.use(bodyParser.json());
  router.options("/customer-audit", cors(storeCorsOptions));
  router.post("/customer-audit", (req, res) => {
    const customerAuditService = req.scope.resolve("customerAuditService");
    console.log(req.body.data);
    customerAuditService.addCustomerAudit(req.body.data);
    res.json({
      message: "Welcome to My Store!",
    });
  });

  return router;
}
