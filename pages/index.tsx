import Head from "next/head";
import Form from "../src/components/form";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Mail Sender Example</title>
      </Head>
      <div className="md:w-1/2  w-5/6 p-5 border mx-auto my-5">
        <h1 className="text-xl font-bold">Next.js Mail Sender Example</h1>
        <p className="mb-12">
          This is an example of how to send emails from a Next.js app using
          nodemailer. Zod is used for validation and styled with Tailwind CSS.
          React Hook Form is used for form state management.
        </p>
        <Form />
      </div>
    </>
  );
}
