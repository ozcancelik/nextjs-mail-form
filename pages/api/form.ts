
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
const path = require("path");
const hbs = require("nodemailer-express-handlebars");

interface Data {
    nameSurname: string;
    email: string;
    message: string;
    phone: string;
    token: string;
}

const handlebarOptions = {
    viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve("./src/templates/"),
        defaultLayout: false,
    },
    viewPath: path.resolve("./src/templates/"),
    extName: ".handlebars",
};

export default async function ContactApi(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { nameSurname, email, phone, message, token }: Data = req.body;

    const human = await validateHuman(token);
    if (!human) {
        res.status(400);
        res.json({ errors: ["It's a bot! ❤️ ❌ 🤖"] });
        return;
    }
    const transporter = nodemailer.createTransport({
        port: 465,
        secure: true,
        host: process.env.CONTACT_FORM_HOST,
        auth: {
            user: process.env.CONTACT_FORM_SEND_EMAIL,
            pass: process.env.CONTACT_FORM_PASS,
        },
        tls: { rejectUnauthorized: false },
    });
    transporter.use("compile", hbs(handlebarOptions));
    try {
        await transporter.sendMail({
            from: `${nameSurname} ${email}`,
            replyTo: email,
            to: process.env.CONTACT_FORM_RECEIVE_EMAIL,
            subject: `Contact form from - ${nameSurname}`,
            // @ts-ignore-next-line
            template: "contact", //
            context: {
                nameSurname: nameSurname,
                email: email,
                phone: phone,
                message: message,
            },
        });
        res.status(200).json({ message: "success" });
    } catch (err) {
        res.status(500).json({ message: "an error occured" });
        console.log(err);
    }
}

async function validateHuman(
    token: string
) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
        {
            method: "POST",
        }
    );
    const data = await response.json();
    return data.success;
}
