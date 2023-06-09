const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { validateBody, authenticate } = require("../../middlewares");
const schemas = require("../../schemas/contacts");



router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, ctrl.getById);
 
router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);
 
router.delete("/:contactId", authenticate, ctrl.deleteById);
 
router.put("/:contactId", authenticate, validateBody(schemas.addSchema), ctrl.updateById);
 
 router.patch("/:contactId/favorite", authenticate, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite)

module.exports = router;




// validateBody(schemas.addSchema),


























// const express = require("express");
// const Joi = require("joi");

// const contacts = require("../../models/contacts");

// const router = express.Router();

// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

// router.get("/", async (req, res, next) => {
//   try {
//     const result = await contacts.listContacts();
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.get("/:contactId", async (req, res, next) => {
//   try {
//     const contactId = req.params.contactId;
//     const result = await contacts.getContactById(contactId);

//     if (!result) {
//       res.status(404).json({ message: "Not found" });
//     } else {
//       res.json(result);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     const { error } = addSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const result = await contacts.addContact(req.body);
//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// });




// router.put("/:contactId", async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contacts.updateContact(contactId, req.body);
//     if (!result) {
//       res.status(404).json({ message: "Contact not found" });
//     } else {
//       res.json(result);
//     }
//   } catch (error) {
//      console.error(error);
//     next(error);
//   }
// });


// router.delete("/:contactId", async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contacts.removeContact(contactId);
//     if (!result) {
//       res.status(404).json({ message: "Contact not found" });
//     } else {
//       res.status(200).json(result);
//     }
//   } catch (error) {
//      console.error(error);
//     next(error);
//   }
// });


// module.exports = router;

