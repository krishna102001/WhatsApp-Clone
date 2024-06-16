import express from "express";
import { addUser, getUsers } from "../controller/user-controller.js";
import {
  getConversation,
  newConversation,
} from "../controller/conversation-controller.js";
import { getMessage, newMessage } from "../controller/message-controller.js";
const router = express.Router();

router.post("/add", addUser);
router.get("/users", getUsers);
router.post("/conversation/add", newConversation);
router.post("/conversation/get", getConversation);
router.post("/message/add", newMessage);
router.get("/message/get/:id", getMessage);
export default router;
