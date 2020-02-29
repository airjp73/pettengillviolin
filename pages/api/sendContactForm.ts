import { NextApiRequest, NextApiResponse } from 'next';
import * as EmailValidator from 'email-validator';
import phone from 'phone';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;
const twilioClient = twilio(accountSid, authToken);

interface RequestBody {
  name: string;
  parentName: string;
  email?: string;
  phone: string;
  message: string;
}

function validateBody(data: any): RequestBody | string {
  const { name, parentName, email, phone: phoneNumber, message } = data;
  if (!name) return 'Missing Name';
  if (!parentName) return 'Missing Parent Name';
  if (email && !EmailValidator.validate(email)) return 'Invalid email';
  if (!message) return 'Missing Message';
  if (!phoneNumber) return 'Missing Phone';

  return data;
}

function getPhone(phoneNumber: string) {
  if (phoneNumber.replace('-', '').length === 7)
    return phone(`207-${phoneNumber}`);
  else return phone(phoneNumber);
}

function buildMessage(body: RequestBody, phoneNumber: string): string {
  const { name, parentName, email, message } = body;
  const emailStr = email ? `Email: ${email}\n` : '';
  return (
    `Name: ${name}\n` +
    `Parent: ${parentName}\n` +
    emailStr +
    `Phone: ${phoneNumber}\n` +
    message
  );
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!myPhoneNumber)
    return res.status(500).json({ message: 'Failed to send' });
  if (req.method && req.method.toUpperCase() !== 'POST')
    return res.status(405).json({ message: 'Method not allowed' });

  const body = validateBody(JSON.parse(req.body));
  if (typeof body === 'string') return res.status(400).json({ message: body });

  const phoneNumber = getPhone(body.phone);
  if (!phoneNumber.length)
    return res.status(400).json({ message: 'Invalid phone number' });

  return twilioClient.messages
    .create({
      body: buildMessage(body, phoneNumber[0]),
      from: twilioPhone,
      to: myPhoneNumber,
    })
    .then(() => res.status(200).json({ message: 'Sent!' }))
    .catch(err =>
      res.status(err.status).json({
        message:
          'Failed to send message. The provided phone number may be invalid',
        devMessage: err.message,
      })
    );
};
