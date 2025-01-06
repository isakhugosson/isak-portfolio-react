"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import React, { FormEvent, useCallback } from "react";
import Swal from "sweetalert2";


export const ContactSection = () => {

      const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "d58c78fd-9f15-4333-ba4b-eb8d575776f4");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());

        if (res.success) {
          Swal.fire({
            color: "#ffffff",
            background: "#111827",
            confirmButtonColor: "#6ee7b7",
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
        }
      };

  return (
  <section id="contact" className="py-16 pt-12 lg:py24 lg:pt-20">
    <div className="container">
      <SectionHeader 
        eyebrow="Contact Me" 
        title="Say Hello!" 
        description="Feel free to reach out for a good chat if you think we&apos;d be a great match"
      />
      <div className="mt-20 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
        <div 
          className="absolute inset-0 opacity-5 -z-10" 
          style={{
            backgroundImage: `url(${grainImage.src})`,
        }}></div>
                  <div className="md:gap-4 gap-8 items-center">
            <div className="flex flex-col mb-4 md:mb-0">
              <h2 className="font-serif text-2xl md:text-3xl md:px-7 md:mt-6">
                Let&apos;s create something amazing together
              </h2>
              <p className="max-w-lg text-sm md:text-base mt-2 md:px-7">
                Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="flex w-full">
              <form onSubmit={onSubmit} className="bg-transparent flex-auto md:p-8 rounded-lg">
                <div className="mb-4">
                  <label className="block text-sm md:text-base font-medium text-gray-700 text-left">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    name="name"
                    className="w-full px-4 py-2 mt-2 rounded-lg focus:ring-2 focus:ring-emerald-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm md:text-base font-medium text-gray-700 text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    name="email"
                    className="w-full px-4 py-2 mt-2 rounded-lg focus:ring-2 focus:ring-sky-400"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm md:text-base font-medium text-gray-700 text-left">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Enter your message"
                    required
                    name="message"
                    className= "align-top w-full px-4 py-2 h-40 mt-2 rounded-lg focus:ring-2 focus:ring-sky-400"
                  ></textarea>
                </div>
                <div className="mb-2 mt-8 md:mt-16">
                <button
                  type="submit"
                  className="text-white bg-gray-900 flex justify-center items-center px-6 h-12 md:h-14 rounded-xl gap-2 w-full hover:bg-gray-900/80 transition duration-300"
                >
                  <span className="font-semibold">Send Message</span>
                  <ArrowUpRightIcon className="w-5 h-5" />
                </button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
