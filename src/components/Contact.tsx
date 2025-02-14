import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const handleCaptchaChange = (value: string | null) => {
        setCaptchaToken(value);
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Please complete the captcha before submitting.");
            return;
        }

        emailjs
            .sendForm(
                "gustyff_the_dev",
                "template_fge55ls",
                e.currentTarget,
                "MO2j1JRZ6gibLwJU6"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.error(error.text);
                    alert("An error occurred, please try again later.");
                }
            );
        setCaptchaToken(null);
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
                        <div className="form-control mt-4 flex items-center justify-end">
                            <ReCAPTCHA
                                sitekey="6Lds-NYqAAAAAOeAKDm403Lt9zFChIinpuhHd2S0"
                                onChange={handleCaptchaChange}
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" disabled={!captchaToken} className="btn btn-primary">
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
