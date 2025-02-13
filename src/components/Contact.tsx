// src/components/Contact.tsx
import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
    // Handle form submission and send email using EmailJS
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Send email via EmailJS
        emailjs
            .sendForm(
                "gustyff_the_dev",    // Replace with your EmailJS Service ID
                "template_fge55ls",   // Replace with your EmailJS Template ID
                e.currentTarget,
                "MO2j1JRZ6gibLwJU6"     // Replace with your EmailJS Public Key (or User ID)
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                    // Optionally, reset the form or captcha here if needed
                },
                (error) => {
                    console.error(error.text);
                    alert("An error occurred, please try again later.");
                }
            );
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center bg-base-200 py-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="card w-full max-w-md bg-base-100 shadow-xl"
            >
                <div className="card-body">
                    <h2 className="card-title text-white mb-4">Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Your Email</span>
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="john.doe@example.com"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Subject</span>
                            </label>
                            <input
                                type="text"
                                name="user_subject"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text text-white">Message</span>
                            </label>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="textarea textarea-bordered"
                                rows={4}
                                required
                            ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
