"use client";

import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

/**
 * @description Contact Form
 * @version 1.0.0
 */
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 p-10"
    >
      <div className="">
        <input
          {...register("name")}
          type="text"
          placeholder="Votre email"
          className="p-2 text-gray-900"
        />
      </div>

      <div className="">
        <input
          {...register("email")}
          placeholder="Votre email"
          className="p-2 text-gray-900"
          type="email"
        />
      </div>

      <div className="">
        <textarea
          {...register("message")}
          placeholder="Votre message"
          className="p-2 w-full text-gray-900"
        />
      </div>

      <button
        role="submit"
        className="py-2 px-6 bg-amber-400 font-semibold text-lg rounded-xl shadow-lg shadow-black/20 text-gray-800 uppercase"
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </button>

      {successMessage ? <p>{successMessage}</p> : <p>Pas de message envoyé</p>}
    </form>
  );
}
