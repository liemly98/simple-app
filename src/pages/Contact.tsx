import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    toast.success("Contact created successfully!", {
      position: "top-right",
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Fullname</span>
              </label>
              <input
                type="text"
                {...register("fullname")}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email")}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <textarea
                {...register("content")}
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label"></label>
              <button type="submit" className="btn btn-secondary btn-outline">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
