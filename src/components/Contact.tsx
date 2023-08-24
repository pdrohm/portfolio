import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageProvider";
import { ContactText } from "../exports/Texts";
import { useWindowSize } from "@react-hook/window-size";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const { isEngActive } = useLanguage();
  const [width] = useWindowSize();
  const isSmallScreen = width <= 640; // Small screens have a width of less than 640px

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto: opedrohenriquemarques@gmail.com?subject=${data.subject}&body=My name is ${data.name}. ${data.message}`;
  };
  return (
    <div
      id="contact"
      className="h-screen flex relative flex-col text-center md:text-left items-center md:flex-row max-w-7xl px-10 mx-auto justify-evenly"
    >
      <h2 className="title-section">
        {isEngActive ? ContactText.mainTitle.en : ContactText.mainTitle.br}
      </h2>
      <div className="flex flex-col space-y-8 items-center">
        <motion.h3
          initial={{ opacity: 0, y: -250 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="xl:text-3xl md:text-3xl text-lg text-center"
        >
          <span className="font-semibold">
            {isEngActive
              ? ContactText.interested.en
              : ContactText.interested.br}
          </span>{" "}
          {isEngActive ? ContactText.feel.en : ContactText.feel.br}
          <span className=" font-semibold underline decoration-blue">
            {isEngActive ? ContactText.contact.en : ContactText.contact.br}
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
            <EnvelopeIcon className="text-blue xl:h-8 xl:w-8 md:h-8 md:w-8 w-5 h-5 animate-pulse" />
            <p className="xl:text-2xl md:text-2xl text-sm">
              opedrohenriquemarques@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <PhoneIcon className="text-blue xl:h-8 xl:w-8 md:h-8 md:w-8 w-5 h-5 animate-pulse" />
            <p className="xl:text-2xl md:text-2xl text-sm">+5548991500793</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <MapPinIcon className="text-blue xl:h-8 xl:w-8 md:h-8 md:w-8 w-5 h-5 animate-pulse" />
            <p className="xl:text-2xl md:text-2xl text-sm">
              Tubarão, SC.{" "}
              {isEngActive ? ContactText.country.en : ContactText.country.br}.
            </p>
          </div>
        </motion.div>

        {isSmallScreen ? (
          <form
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-3 w-full mx-auto"
          >
            <div className="flex space-x-3 ">
              <input
                {...register("name")}
                className="contact-input xl:w-auto md:w-auto w-1/2 "
                type="text"
                placeholder={
                  isEngActive
                    ? ContactText.form.name.en
                    : ContactText.form.name.br
                }
              />
              <input
                {...register("email")}
                className="contact-input xl:w-auto md:w-auto w-1/2"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              className="contact-input "
              type="text"
              placeholder={
                isEngActive
                  ? ContactText.form.subject.en
                  : ContactText.form.subject.br
              }
            />
            <textarea
              className="contact-input"
              placeholder={
                isEngActive
                  ? ContactText.form.message.en
                  : ContactText.form.message.br
              }
            />
            <button
              {...register("message")}
              className="bg-blue py-5 px-10 rounded-md text-black font-semibold text-lg"
              type="submit"
            >
              {isEngActive
                ? ContactText.form.button.en
                : ContactText.form.button.br}
            </button>
          </form>
        ) : (
          <motion.form
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-3 w-full mx-auto"
          >
            <div className="flex space-x-3 ">
              <input
                {...register("name")}
                className="contact-input xl:w-auto md:w-auto w-1/2 "
                type="text"
                placeholder={
                  isEngActive
                    ? ContactText.form.name.en
                    : ContactText.form.name.br
                }
              />
              <input
                {...register("email")}
                className="contact-input xl:w-auto md:w-auto w-1/2"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              className="contact-input "
              type="text"
              placeholder={
                isEngActive
                  ? ContactText.form.subject.en
                  : ContactText.form.subject.br
              }
            />
            <textarea
              className="contact-input"
              placeholder={
                isEngActive
                  ? ContactText.form.message.en
                  : ContactText.form.message.br
              }
            />
            <button
              {...register("message")}
              className="bg-blue py-5 px-10 rounded-md text-black font-semibold text-lg"
              type="submit"
            >
              {isEngActive
                ? ContactText.form.button.en
                : ContactText.form.button.br}
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
