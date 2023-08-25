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
  const { isEnglish } = useLanguage();
  const [width] = useWindowSize();
  const isSmallScreen = width <= 640; // Small screens have a width of less than 640px

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto: opedrohenriquemarques@gmail.com?subject=${data.subject}&body=My name is ${data.name}. ${data.message}`;
  };
  return (
    <div
      id="contact"
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h2 className="title-section">
        {isEnglish ? ContactText.mainTitle.en : ContactText.mainTitle.br}
      </h2>
      <div className="flex flex-col items-center space-y-8">
        <motion.h3
          initial={{ opacity: 0, y: -250 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-3xl xl:text-3xl"
        >
          <span className="font-semibold">
            {isEnglish ? ContactText.interested.en : ContactText.interested.br}
          </span>{" "}
          {isEnglish ? ContactText.feel.en : ContactText.feel.br}
          <span className=" font-semibold underline decoration-blue">
            {isEnglish ? ContactText.contact.en : ContactText.contact.br}
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
            <EnvelopeIcon className="h-5 w-5 animate-pulse text-blue md:h-8 md:w-8 xl:h-8 xl:w-8" />
            <p className="text-sm md:text-2xl xl:text-2xl">
              opedrohenriquemarques@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <PhoneIcon className="h-5 w-5 animate-pulse text-blue md:h-8 md:w-8 xl:h-8 xl:w-8" />
            <p className="text-sm md:text-2xl xl:text-2xl">+5548991500793</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <MapPinIcon className="h-5 w-5 animate-pulse text-blue md:h-8 md:w-8 xl:h-8 xl:w-8" />
            <p className="text-sm md:text-2xl xl:text-2xl">
              Tubarão, SC.{" "}
              {isEnglish ? ContactText.country.en : ContactText.country.br}.
            </p>
          </div>
        </motion.div>

        {isSmallScreen ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-full flex-col space-y-3"
          >
            <div className="flex space-x-3 ">
              <input
                {...register("name")}
                className="contact-input w-1/2 md:w-auto xl:w-auto "
                type="text"
                placeholder={
                  isEnglish
                    ? ContactText.form.name.en
                    : ContactText.form.name.br
                }
              />
              <input
                {...register("email")}
                className="contact-input w-1/2 md:w-auto xl:w-auto"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              className="contact-input "
              type="text"
              placeholder={
                isEnglish
                  ? ContactText.form.subject.en
                  : ContactText.form.subject.br
              }
            />
            <textarea
              className="contact-input"
              placeholder={
                isEnglish
                  ? ContactText.form.message.en
                  : ContactText.form.message.br
              }
            />
            <button
              {...register("message")}
              className="rounded-md bg-blue px-10 py-5 text-lg font-semibold text-black"
              type="submit"
            >
              {isEnglish
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
            className="mx-auto flex w-full flex-col space-y-3"
          >
            <div className="flex space-x-3 ">
              <input
                {...register("name")}
                className="contact-input w-1/2 md:w-full xl:w-full "
                type="text"
                placeholder={
                  isEnglish
                    ? ContactText.form.name.en
                    : ContactText.form.name.br
                }
              />
              <input
                {...register("email")}
                className="contact-input w-1/2 md:w-full xl:w-full"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              className="contact-input "
              type="text"
              placeholder={
                isEnglish
                  ? ContactText.form.subject.en
                  : ContactText.form.subject.br
              }
            />
            <textarea
              className="contact-input"
              placeholder={
                isEnglish
                  ? ContactText.form.message.en
                  : ContactText.form.message.br
              }
            />
            <button
              {...register("message")}
              className="rounded-md bg-blue px-10 py-5 text-lg font-semibold text-black"
              type="submit"
            >
              {isEnglish
                ? ContactText.form.button.en
                : ContactText.form.button.br}
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
