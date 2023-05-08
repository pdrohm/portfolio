import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto: opedrohenriquemarques@gmail.com?subject=${data.subject}&body=My name is ${data.name}. ${data.message}`;
  };
  return (
    <div
      id="contact"
      className="h-screen snap-center flex relative flex-col text-center md:text-left items-center md:flex-row max-w-7xl px-10 mx-auto justify-evenly"
    >
      <h2 className="title-section absolute top-24">Contact</h2>
      <div className="flex flex-col space-y-8">
        <motion.h3
          initial={{ opacity: 0, y: -250 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-3xl text-center"
        >
          <span className="font-semibold">Interested?</span> Feel free to{" "}
          <span className=" font-semibold underline decoration-blue ">
            contact me.
          </span>
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="flex flex-col items-start space-y-3"
        >
          <div className="flex items-center justify-center space-x-4">
            <EnvelopeIcon className="text-blue h-8 w-8 animate-pulse" />
            <p className="text-2xl">opedrohenriquemarques@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <PhoneIcon className="text-blue h-8 w-8 animate-pulse" />
            <p className="text-2xl">+5548991500793</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <MapPinIcon className="text-blue h-8 w-8 animate-pulse" />
            <p className="text-2xl">Tubarão, SC. Brazil.</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3 w-fit mx-auto"
        >
          <div className="flex space-x-3">
            <input
              {...register("name")}
              className="contact-input"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contact-input"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contact-input"
            type="text"
            placeholder="Subject"
          />
          <textarea className="contact-input" placeholder="Message" />
          <button
            {...register("message")}
            className="bg-blue py-5 px-10 rounded-md text-black font-semibold text-lg"
            type="submit"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
}
