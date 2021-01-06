import nodeMailer from 'nodemailer';
/**
 * @param {to} : customer email address.
 *@param {subject} : subject of email.
 *@param {text} : text for email.
 *@param {htmlContent} : content of email.
 */
const adminEmail =
  process.env.ADMIN_EMAIL_NAME || 'realestatelink.global@gmail.com';
const AdminEmailPassword =
  process.env.ADMIN_EMAIL_PASSWORD || 'Andyvong.com123';
const mailHost = process.env.MAIL_HOST || 'smtp.gmail.com';
const mailPort = process.env.MAIL_PORT || 587;

const sendEmailService = (to, subject, htmlContent) => {
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false,
    auth: {
      user: adminEmail,
      pass: AdminEmailPassword,
    },
  });
  const options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent,
  };
  // transporter.sendEmail is a promise
  return transporter.sendMail(options);
};
export default sendEmailService;
