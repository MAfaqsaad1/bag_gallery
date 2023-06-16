import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const [data, setData] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    setData([...data, formData]);
    console.log(formData);
    alert(JSON.stringify(formData));
    reset();
  };
  return (
    <div className="md:h-[70vh] bg-[rgb(241,241,241)] md:py-16 py-6 px-8 w-full mx-auto">
      <h2 className="text-center lg:text-4xl md:text-3xl text-xl">
        CONTACT OR FIND US ON THE MAP{" "}
        <span className="text-red-600 border-b-2 border-red-600">THE MAP</span>
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto md:py-16 py-6 w-2/3 h-full"
      >
        <div className="flex md:items-start md:justify-between flex-col md:flex-row h-full items-center md:space-x-10">
          <div className="flex flex-col h-full md:w-2/3 w-full">
            <label htmlFor="name">Name</label>
            <input
              defaultValue="Enter Your Name"
              id="name"
              name="name"
              {...register("Name", { required: true, maxLength: 20 })}
              className="h-full "
            />
            {errors.Name?.type === "required" && (
              <p className="text-red-500 text-xs italic" role="alert">
                First name is required
              </p>
            )}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("Email", { required: true })}
            />
            {errors.Email?.type === "required" && (
              <p className="text-red-500 text-xs italic " role="alert">
                Email is required
              </p>
            )}

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              {...register("Subject", { required: true })}
            />
            {errors.Subject?.type === "required" && (
              <p className="text-red-500 text-xs italic " role="alert">
                Subject is required
              </p>
            )}
          </div>
          <div className="md:w-2/3 w-full h-full flex flex-col ">
            <label htmlFor="message">Message</label>
            <textarea
              className="w-full flex-grow px-2 py-1"
              name="message"
              id="message"
              {...register("Message", { required: true })}
            ></textarea>
            {errors.Message?.type === "required" && (
              <p className="text-gray-600 text-xs italic" role="alert">
                Type your Message
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 px-6 py-2 text-white my-4"
        >
          Submit
        </button>

        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
}

export default Form;
