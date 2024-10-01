import { Schema, model } from "mongoose";

const SendEmail = new Schema({
  sendingTo: { type: String, required: true, trim: true },
  sendingFrom: { type: String, required: true, trim: true },
  subject: { type: String, required: true },
  message: { type: String, required: true, trim: true },
});

const sendEmailModel = model("SendEmail", SendEmail);

export default sendEmailModel;
