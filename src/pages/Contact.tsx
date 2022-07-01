import React from "react";

function Contact() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
        <div className="w-full">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Fullname</span>
            </label>
            <input
              type="text"
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
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label"></label>
            <button className="btn btn-secondary btn-outline">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
