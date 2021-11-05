import express from 'express';
import { Twilio } from "twilio";
import * as dotenv from 'dotenv';

const app = express();
const port = 3000;
dotenv.config();

const accountSid:string = process.env.TWILIO_ACCOUNT_SID;
const authToken:string = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber:string = process.env.TWILIO_PHONE_NUMBER;
const myNumber:string = process.env.MY_NUMBER;

if (accountSid && authToken && myNumber && twilioNumber) {
const client = new Twilio(accountSid, authToken);

client.messages
    .create({
      from: twilioNumber,
      to: myNumber,
      body: "You just sent an SMS from TypeScript using Twilio!",
    })
    .then((message) => console.log(message.sid));
} else {
    console.error(
      "You are missing one of the variables you need to send a message"
    );
  }

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});