import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "86d14cf8cc4b54",
      pass: "fa803485123da4"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
 async sendMail ({subject, body}: SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'likaa  <lika@gmail.com>',
        subject,
        html: body,
    });
 };

}; 