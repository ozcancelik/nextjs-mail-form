# Next.js contact form with nodemailer, React Hook Form, Zod, Tailwind CSS, reCAPTCHA, Handlebars with TypeScript

### This is a template for a contact form with Next.js. It uses a custom server to send the email and validate the form. It also uses reCAPTCHA to prevent spam. Handlebars is used to create the email template.

## Demo

https://nextjs-mail-form-ozcancelik.vercel.app/

## Features

- [x] [Next.js](https://nextjs.org/)
- [x] Custom server: You can run with different port. It's useful for same server with other apps.
- [x] [Nodemailer](https://nodemailer.com/)
- [x] [React Hook Form](https://react-hook-form.com/)
- [x] [Zod](https://zod.dev)
- [x] [reCAPTCHA with react-google-recaptcha](https://github.com/dozoisch/react-google-recaptcha) It uses the invisible reCAPTCHA v2.
      More info about reCAPTCHA: https://developers.google.com/recaptcha/docs/display
- [x] Email templating with Handlebars. https://github.com/yads/nodemailer-express-handlebars
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] CSS with [Tailwind CSS](https://tailwindcss.com/)
- [x] Icons with [React Icons](https://react-icons.github.io/react-icons/)

## How to use

### Prerequisites

- Clone the repository and install the dependencies.
- Create a `.env` file or change the name of `.env.example` to `.env` and fill the variables.

```bash
SERVER_PORT=
CONTACT_FORM_SEND_EMAIL=
CONTACT_FORM_RECEIVE_EMAIL=
CONTACT_FORM_PASS=
CONTACT_FORM_HOST=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
```

### Install dependencies

```bash
npm install
# or
yarn
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
```

### Build the app

```bash
npm run build
# or
yarn build
```

### Run the production server:

```bash
npm run start
# or
yarn start
```

# Notes

- You can change the server port in `.env` file. If empty, it will use the default port 3000.
- If you have problems with Nodemailer, you can try to change the port or other settings. You can find more info in the Nodemailer documentation. More info: https://nodemailer.com/smtp/
- Gmail requires you to enable "Less secure app access" in your account settings. More info: https://nodemailer.com/usage/using-gmail/
- For the reCAPTCHA to work, you need to add the domain to the reCAPTCHA admin panel.

Tested with Node.js v18.12.1.
