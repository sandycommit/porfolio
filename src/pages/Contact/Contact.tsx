"use client";

import React, { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Clock3,
  CheckCircle2,
  Briefcase,
  Users,
  Rocket,
} from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  /* ====================================================== */
  /* CONTACT INFO */
  /* ====================================================== */

  const contactInfo = [
    {
      icon: Mail,

      title: "Email",

      value: "santhoshvel223@gmail.com",

      link: "mailto:santhoshvel223@gmail.com",

      color: "text-cyan-400",

      border: "border-cyan-500/20",

      bg: "bg-cyan-500/10",
    },

    {
      icon: Phone,

      title: "Phone",

      value: "+91 8220845881",

      link: "tel:+918220845881",

      color: "text-emerald-400",

      border: "border-emerald-500/20",

      bg: "bg-emerald-500/10",
    },

    {
      icon: MapPin,

      title: "Location",

      value: "Chennai, Tamil Nadu, India",

      link: "#",

      color: "text-violet-400",

      border: "border-violet-500/20",

      bg: "bg-violet-500/10",
    },
  ];

  /* ====================================================== */
  /* SOCIALS */
  /* ====================================================== */

  const socials = [
    {
      icon: FaGithub,

      name: "GitHub",

      link: "https://github.com",
    },

    {
      icon: FaLinkedin,

      name: "LinkedIn",

      link: "https://linkedin.com",
    },

    {
      icon: FaTwitter,

      name: "Twitter",

      link: "https://twitter.com",
    },
  ];

  /* ====================================================== */
  /* SUBMIT */
  /* ====================================================== */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_qb0n4gp", // YOUR_SERVICE_ID
        "template_kq22ddn",  // YOUR_TEMPLATE_ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "INlXuXEfFNwQJOguV",   // YOUR_PUBLIC_KEY
      );

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
      relative
      overflow-hidden
      bg-black
      py-20
      sm:py-24
      lg:py-32
      text-white
      "
    >
      {/* ====================================================== */}
      {/* BACKGROUND */}
      {/* ====================================================== */}

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute top-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-violet-600/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-500/10 blur-[120px]" />

      {/* ====================================================== */}
      {/* CONTAINER */}
      {/* ====================================================== */}

      <div
        className="
        relative
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-10
        "
      >
        {/* ====================================================== */}
        {/* HEADER */}
        {/* ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          {/* LABEL */}
          <div className="inline-flex items-center gap-3 mb-8">
            <Sparkles size={18} className="text-cyan-400" />

            <span className="uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm text-cyan-400">
              Contact_Protocol.Init
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-black
            tracking-tight
            leading-[1]
            mb-8
            "
          >
            Let&apos;s Build <span className="text-violet-400">The Future</span>
          </h2>

          {/* DESC */}
          <p
            className="
            max-w-4xl
            mx-auto
            text-zinc-400
            text-base
            sm:text-lg
            lg:text-xl
            leading-relaxed
            "
          >
            Open to frontend engineering roles, recruiter opportunities, product
            collaborations, freelance projects, SaaS development, AI
            integrations, and scalable software systems.
          </p>
        </motion.div>

        {/* ====================================================== */}
        {/* OPPORTUNITIES */}
        {/* ====================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 sm:mb-14">
          {[
            {
              icon: Briefcase,

              title: "Recruiters",

              desc: "Frontend engineering & leadership opportunities.",

              color: "border-cyan-500/20 text-cyan-400 bg-cyan-500/10",
            },

            {
              icon: Rocket,

              title: "Product Builders",

              desc: "SaaS platforms, AI products & startup systems.",

              color: "border-violet-500/20 text-violet-400 bg-violet-500/10",
            },

            {
              icon: Users,

              title: "Clients",

              desc: "Freelance projects, scalable frontend systems & APIs.",

              color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/10",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                }}
                className={`
                rounded-2xl
                border
                bg-white/[0.03]
                backdrop-blur-xl
                p-6
                ${item.color}
                `}
              >
                <div
                  className={`
                  w-14
                  h-14
                  rounded-2xl
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  mb-5
                  ${item.color}
                  `}
                >
                  <Icon size={26} />
                </div>

                <h3 className="text-2xl font-black mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ====================================================== */}
        {/* MAIN GRID */}
        {/* ====================================================== */}

        <div
          className="
          grid
          grid-cols-1
          xl:grid-cols-12
          gap-6
          lg:gap-8
          "
        >
          {/* ====================================================== */}
          {/* LEFT */}
          {/* ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="
            xl:col-span-5
            space-y-6
            lg:space-y-8
            "
          >
            {/* CONTACT CARD */}
            <div
              className="
              rounded-2xl
              sm:rounded-[36px]
              border
              border-violet-500/20
              bg-white/[0.03]
              backdrop-blur-2xl
              p-5
              sm:p-7
              lg:p-8
              "
            >
              {/* TOP */}
              <div className="mb-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl border border-violet-500/20 bg-violet-500/10 flex items-center justify-center mb-6">
                  <Mail size={34} className="text-violet-400" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-black mb-4">
                  Contact Node
                </h3>

                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                  Available for engineering opportunities, recruiter
                  discussions, product collaborations, and scalable frontend
                  systems.
                </p>
              </div>

              {/* INFO */}
              <div className="space-y-5">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      whileHover={{
                        x: 4,
                      }}
                      key={index}
                      href={item.link}
                      className={`
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      ${item.border}
                      bg-black/30
                      p-4
                      sm:p-5
                      transition-all
                      duration-300
                      `}
                    >
                      {/* ICON */}
                      <div
                        className={`
                        w-12
                        h-12
                        sm:w-14
                        sm:h-14
                        rounded-2xl
                        ${item.bg}
                        flex
                        items-center
                        justify-center
                        shrink-0
                        `}
                      >
                        <Icon size={22} className={item.color} />
                      </div>

                      {/* TEXT */}
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-zinc-500 mb-1">
                          {item.title}
                        </p>

                        <h4 className="text-sm sm:text-lg font-semibold text-white break-words">
                          {item.value}
                        </h4>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* STATUS */}
              <div className="mt-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.05] p-5 sm:p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

                  <h4 className="text-lg sm:text-xl font-bold text-emerald-400">
                    Available For Work
                  </h4>
                </div>

                <div className="flex items-center gap-3 text-zinc-400 text-sm sm:text-base">
                  <Clock3 size={18} />

                  <span>Average response: under 24hrs</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ====================================================== */}
          {/* RIGHT */}
          {/* ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="
            xl:col-span-7
            rounded-2xl
            sm:rounded-[36px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-5
            sm:p-7
            lg:p-10
            "
          >
            {/* HEADER */}
            <div className="mb-10 sm:mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5">
                Send A Message
              </h3>

              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                Whether you&apos;re a recruiter, startup founder, client, or
                product builder — let&apos;s discuss opportunities, scalable
                systems, frontend engineering, and innovative software products.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* NAME */}
                <div>
                  <label className="block mb-3 text-zinc-400 text-xs sm:text-sm uppercase tracking-[0.2em]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your name . . ."
                    className="
                    w-full
                    h-14
                    sm:h-16
                    px-5
                    sm:px-6
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/30
                    outline-none
                    focus:border-violet-500/30
                    transition-all
                    duration-300
                    text-white
                    placeholder:text-zinc-600
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block mb-3 text-zinc-400 text-xs sm:text-sm uppercase tracking-[0.2em]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="Enter Your email . . ."
                    className="
                    w-full
                    h-14
                    sm:h-16
                    px-5
                    sm:px-6
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/30
                    outline-none
                    focus:border-cyan-500/30
                    transition-all
                    duration-300
                    text-white
                    placeholder:text-zinc-600
                    "
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block mb-3 text-zinc-400 text-xs sm:text-sm uppercase tracking-[0.2em]">
                  Opportunity / Subject
                </label>

                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  placeholder="Frontend Engineering Role / SaaS Project / Collaboration"
                  className="
                  w-full
                  h-14
                  sm:h-16
                  px-5
                  sm:px-6
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/30
                  outline-none
                  focus:border-violet-500/30
                  transition-all
                  duration-300
                  text-white
                  placeholder:text-zinc-600
                  "
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-3 text-zinc-400 text-xs sm:text-sm uppercase tracking-[0.2em]">
                  Message
                </label>

                <textarea
                  rows={7}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell me about the opportunity, role, project, product idea, or collaboration..."
                  className="
                  w-full
                  p-5
                  sm:p-6
                  rounded-3xl
                  border
                  border-white/10
                  bg-black/30
                  outline-none
                  focus:border-cyan-500/30
                  transition-all
                  duration-300
                  text-white
                  placeholder:text-zinc-600
                  resize-none
                  "
                />
              </div>

              {/* BUTTON */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 pt-2">
                {/* LEFT */}
                <div className="text-zinc-500 text-sm">
                  Recruiters • Startups • Clients • Engineering Teams
                </div>

                {/* SUBMIT */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  type="submit"
                  className="
                  w-full
                  sm:w-auto
                  group
                  relative
                  overflow-hidden
                  px-7
                  sm:px-8
                  py-4
                  sm:py-5
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-500
                  to-purple-600
                  text-white
                  font-bold
                  text-base
                  sm:text-lg
                  shadow-[0_0_40px_rgba(139,92,246,0.3)]
                  "
                >
                  <span className="relative flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>Sending...</>
                    ) : isSubmitted ? (
                      <>
                        Message Sent
                        <CheckCircle2 size={20} />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* ====================================================== */}
        {/* SOCIALS */}
        {/* ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="relative mt-20 sm:mt-28"
        >
          {/* TOP LABEL */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-violet-500" />

            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-zinc-500">
              Connect_With_Me
            </p>

            <div className="h-px w-14 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>

          {/* SOCIAL GRID */}
          <div
            className="
    relative
    flex
    flex-wrap
    items-center
    justify-center
    gap-5
    sm:gap-7
    "
          >
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
          group
          relative
          overflow-hidden
          "
                >
                  {/* GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700" />

                  {/* CARD */}
                  <div
                    className="
            relative
            w-[150px]
            sm:w-[170px]
            h-[160px]
            sm:h-[180px]
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            overflow-hidden
            transition-all
            duration-500
            group-hover:border-violet-500/30
            "
                  >
                    {/* TOP LIGHT */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* BG ORB */}
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-violet-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                    {/* CONTENT */}
                    <div className="relative h-full flex flex-col items-center justify-center px-5">
                      {/* ICON WRAPPER */}
                      <motion.div
                        whileHover={{
                          rotate: 8,
                        }}
                        className="
                relative
                mb-6
                "
                      >
                        {/* RING */}
                        <div className="absolute inset-0 rounded-full border border-violet-500/20 scale-125 group-hover:scale-[1.45] transition-all duration-700" />

                        {/* ICON BOX */}
                        <div
                          className="
                  relative
                  w-20
                  h-20
                  rounded-3xl
                  border
                  border-white/10
                  bg-black/40
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  group-hover:border-violet-500/30
                  transition-all
                  duration-500
                  "
                        >
                          {/* INNER GLOW */}
                          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                          {/* ICON */}
                          <Icon
                            size={32}
                            className="
                    relative
                    text-white
                    group-hover:text-violet-400
                    transition-all
                    duration-500
                    "
                          />
                        </div>
                      </motion.div>

                      {/* NAME */}
                      <h4
                        className="
                text-base
                sm:text-lg
                font-bold
                tracking-wide
                mb-2
                group-hover:text-violet-300
                transition-all
                duration-500
                "
                      >
                        {social.name}
                      </h4>

                      {/* STATUS */}
                      <div className="flex items-center gap-2 text-zinc-500">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                        <span className="text-xs uppercase tracking-[0.2em]">
                          Active
                        </span>
                      </div>

                      {/* HOVER LINE */}
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-700" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* BOTTOM TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Building futuristic digital products, scalable frontend systems,
              AI-native applications, and premium developer experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
