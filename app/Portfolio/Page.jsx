"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import codeImage from "../../public/code-image.webp";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import GitHubContributions from "@/components/GitHubContributions";
import Link from "next/link";
import DigitalClock from "@/components/DigitalClockDynamic";

const navItems = [
  { name: "Projects", href: "#project" },
  { name: "Service", href: "#service" },
  {
    name: "Github",
    href: "https://github.com/Maryammuhammadafzal/My-Portfolio_Website",
  },
  { name: "My CV", href: "/Maryam-Cv.pdf", download: true },
  { name: "Contact", href: "#contact" },
];

// const skills = [
//   { name: "React", level: 90 },
//   { name: "TypeScript", level: 85 },
//   { name: "Tailwind CSS", level: 80 },
//   { name: "Next.js", level: 75 },
// ];

import ProjectImage1 from "../../public/mockup-2.webp"
import ProjectImage2 from "../../public/mockup-1.webp"
import ProjectImage3 from "../../public/mockup-3.webp"
import ProjectImage4 from "../../public/mockup-4.webp"
import ProjectImage5 from "../../public/mockup-5.webp"
import ProjectImage6 from "../../public/mockup-6.webp"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek, modern portfolio with responsive design and animations.",
    image: ProjectImage1.src,
    image2: ProjectImage2.src,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce solution with seamless payment integration.",
    image: ProjectImage3.src,
    image2: ProjectImage4.src,
  },
  {
    title: "Task Manager",
    description: "A real-time collaborative task management application.",
    image: ProjectImage5.src,
    image2: ProjectImage6.src,
  },
];

const contacts = [
  {
    text: "bibimariummuhammadafzal123@gmail.com",
    url: "mailto:bibimariummuhammadafzal123@gmail.com",
    service: "Email",
  },
  {
    text: "Marium BiBi",
    url: " https://www.facebook.com/profile.php?id=61557444029142",
    service: "Faceboon",
  },
  {
    text: "/in/marium-afzal-3bibi21",
    url: "https://www.linkedin.com/in/marium-afzal-3bibi21",
    service: " LinkedIn ",
  },
];

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white text-black ">
      {/* Sticky Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full h-auto bg-white"
      >
        <div className="max-w-8xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex font-sans justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex  items-center"
            >
              <a
                href="#home"
                className="text-2xl flex justify-center items-center font-extrabold tracking-tight"
              >
                <ChevronLeft size={30} className="mt-1 -mr-2" />
                MaryamAfzal/
                <ChevronRight size={30} className="mt-1 -ml-2" />
              </a>
            </motion.div>
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  {...(item.download ? { download: true } : {})}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-gray-700 hover:text-lime-500 text-lg transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                <ChevronDown
                  className={`h-6 w-6 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden w-full font-sans bg-white shadow-md"
            >
              <div className="px-4 pt-2 pb-3 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen font-sans flex flex-col space-y-6 items-center pb-20 pt-5 bg-white"
      >
        <div className="w-[95%] h-auto py-6 px-3">
          <h1 className="main-heading w-full uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[104px] font-bold ">
            Mern Stack Developer
          </h1>
          <h1 className="main-heading w-full uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[104px] font-bold ">
            Maryam Afzal
          </h1>
        </div>
        <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h2 className="text-3xl  sm:text-lg md:text-xl font-extrabold flex leading-tight mb-6">
              <ChevronLeft size={25} className="-mr-1" />{" "}
              <span className="skillsname">
                React.js Next.js Redux.js Node.js JavaScript{" "}
              </span>{" "}
              <ChevronRight size={25} className="-ml-1" />
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg pl-4">
              A Mern stack developer with experience in both team projects and
              individual work, I focus on building scalable, efficient
              solutions. With a background in engineering, I bring a structured,
              problem-solving mindset to development.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="ml-3 px-14 py-5 h-12 rounded-3xl text-lg bg-lime-300 font-bold hover:bg-lime-400 text-black">
                <a href="#contact">Let's Connect</a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:w-1/2 flex justify-end"
          >
            <div className="2xl:max-w-3xl w-full bg-gray-300 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
              <GitHubContributions />
              {/* <img src="https://green-wall.leoku.dev/share/Maryammuhammadafzal?start=2024&showSafariHeader=false&showAttribution=false" alt="GitHub Contributions Chart"/> */}
              {/* <img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&hide_title=true&hide=issues" alt="GitHub Contributions Chart"/> */}
              {/* <iframe src="https://ghchart.rshah.org/maryammuhammadafzal" width="100%" height="300px"></iframe> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="project"
        className="flex font-sans w-full px-3 py-20 bg-neutral-900 justify-center  min-h-screen"
      >
        <div className="w-[93%] flex flex-col gap-20">
          <h3 className="text-white text-[120px] uppercase font-bold">
            Selected Projects
          </h3>
          <div className="w-full h-auto flex flex-col gap-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project w-full h-auto flex justify-between"
              >
                <div className="left max-w-2xl w-[50%]  flex flex-col justify-between h-auto">
                  <div className="flex flex-col gap-6">
                    <h4 className="text-8xl font-extrabold text-neutral-500  items-center">
                      &lt;{index + 1}&gt;
                    </h4>
                    <h2 className="text-3xl font-bold text-white">
                      {project.title}
                    </h2>
                    <div>
                      <h3 className="text-sm text-neutral-500">Role</h3>
                      <h3 className="text-base text-lime-400">
                        Mern Stack Developer
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-sm text-neutral-500">
                        Frontend Stack
                      </h3>
                      <h3 className="text-base text-white">
                        Next js, Javascript , Tailwind Css
                      </h3>
                    </div>
                    <div>
                      <h3 className="text-sm text-neutral-500">Backend</h3>
                      <h3 className="text-base text-white">
                        Mongodb , Node js , Open Ai Api
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <p className="text-white">
                      As a full-stack developer on this project, I took
                      ownership of both the frontend and backend development,
                      ensuring a seamless and intuitive user experience. I built
                      the frontend from scratch using modern frameworks and
                      tools like Next.js, TypeScript, and Tailwind CSS, adhering
                      to industry best practices for structure and scalability.
                      On the backend, I implemented a secure and efficient
                      system using MongoDB for data management and Google
                      Authentication for user login, Additionally, I integrated
                      the Open A1 API to deliver personalized, A1-driven movie
                      recommendations.
                    </p>
                  </div>
                </div>
                <div className=" w-[45%] right flex flex-col gap-5">
                  <Image
                    src={project.image}
                    alt="image"
                    width={800}
                    height={200}
                    className="rounded-lg w-full"
                  />
                  <Image
                    src={project.image2}
                    alt="image"
                    width={500}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="service"
        className="flex font-sans w-full px-3 py-20 justify-center  min-h-screen"
      >
        <div className="w-[93%] flex flex-col gap-20">
          <h3 className="text-[120px] uppercase font-bold">Services</h3>
          <div className="w-full h-auto flex flex-col gap-20">
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
              {/* Services Cards */}
              <div className="rounded-lg bg-white flex flex-col gap-5 justiy-center py-10 px-3">
                <div className="icon rounded-lg bg-lime-300 p-3 flex justify-center items-center w-10 text-white h-10"></div>
                <h2 className="title font-bold text-black">
                  Frontend Development
                </h2>
                <p>
                  Building responsive and inituative user interface using modern
                  Frameworks like React, Javascript , Next js with Tailwind Css.
                </p>
              </div>
              <div className="rounded-lg bg-white flex flex-col gap-5 justiy-center py-10 px-3">
                <div className="icon rounded-lg bg-lime-300 p-3 flex justify-center items-center w-10 text-white h-10"></div>
                <h2 className="title font-bold text-black">
                  Frontend Development
                </h2>
                <p>
                  Building responsive and inituative user interface using modern
                  Frameworks like React, Javascript , Next js with Tailwind Css.
                </p>
              </div>
              <div className="rounded-lg bg-white flex flex-col gap-5 justiy-center py-10 px-3">
                <div className="icon rounded-lg bg-lime-300 p-3 flex justify-center items-center w-10 text-white h-10"></div>
                <h2 className="title font-bold text-black">
                  Frontend Development
                </h2>
                <p>
                  Building responsive and inituative user interface using modern
                  Frameworks like React, Javascript , Next js with Tailwind Css.
                </p>
              </div>
            </div>
            <div className="image w-full p-5 flex h-auto justify-center items-center">
              <Image
                src={codeImage}
                width={1600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Clock and contacts section"
        id="contact"
        className="container flex flex-col justify-center  py-20 items-center gap-10"
      >
        <div className="w-[85%] flex flex-col gap-5">
          <h3 className="text-[120px] uppercase font-sans font-bold">
            Let's Connect
          </h3>

          <motion.div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-10">
            <div className="w-full flex justify-start items-center xl:w-1/2">
              <DigitalClock />
            </div>
            <div className="flex font-sans flex-col justify-between items-center gap-10 w-full xl:w-1/2 ">
              <p>
                Thank you for stopping by! I’m always excited to explore new
                opportunities and collaborations. Let’s connect through email,
                phone, LinkedIn, or GitHub—I’d love to hear from you!
              </p>
              <ul className="flex font-sans flex-col flex-wrap justify-start lg:justify-between items-start gap-4 lg:gap-2 w-full">
                {contacts.map((contact, index) => (
                  <li key={index} className="flex flex-col items-start gap-1">
                    <Link
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Link to contact ${contact.url}`}
                      className="group flex flex-col items-start font-bold gap-2 cursor-pointer transition-all duration-300 hover:text-grey_500"
                    >
                      {contact.text}
                      {/* <Icon
                      id="icon-arrow-up-right"
                      width={12}
                      height={12}
                      className="text-black group-hover:text-grey_500"
                    /> */}
                      <ArrowUpRight className="text-black group-hover:text-grey_500" />
                    </Link>
                    <p className="">{contact.service}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="w-full h-auto text-white bg-neutral-900 justify-center items-center flex font-sans">
        <div className="w-[95%] flex justify-center items-center lg:gap-8 flex-col h-auto py-6 px-3">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex font-sans justify-between items-center h-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                <a
                  href="#home"
                  className="text-2xl flex justify-center items-center font-extrabold tracking-tight"
                >
                  {/* <ChevronLeft size={30} className="mt-1 -mr-2" /> */}
                  &lt;MaryamAfzal/&gt;
                  {/* <ChevronRight size={30} className="mt-1 -ml-2" /> */}
                </a>
              </motion.div>
              <div className="text-white flex items-center space-x-10">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <div className="md:hidden flex items-center">
                <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                  <ChevronDown
                    className={`h-6 w-6 transform transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </div>
            </div>
          </div>
          <h1 className="main-heading py-6 border-b border-neutral-500 text-center w-full uppercase sm:text-5xl md:text-6xl font-bold ">
            Mern Stack Developer
          </h1>
          <div className="flex text-lg justify-center items-center text-neutral-500">
            ©Copyright Maryam Afzal 2025. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
