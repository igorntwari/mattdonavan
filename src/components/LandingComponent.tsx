import React from "react";
import StarIcon from "../assets/icons/StarIcon";
import FigmaIcon from "../assets/icons/FigmaIcon";
import FramerIcon from "../assets/icons/FramerIcon";
import SystemIcon from "../assets/icons/SystemIcon";
import ToolIcon from "../assets/icons/ToolIcon";
import Projectimage from "../assets/images/Projectimage.png";
const LandingComponent = () => {
  return (
    <div className="">
      <div className="flex justify-between p-6 text-white bg-zinc-900 sm:px-14">
        <h1 className="font-epical">dushime aime</h1>
        <div className="flex gap-8 sm:gap-8 font-Manrope-Regular">
          <h1>about</h1>
          <h1>work</h1>
          <h1>contact</h1>
        </div>
      </div>
      <div className="bg-black text-white flex flex-col gap-12 p-56 justify-center items-center">
        <h1 className="font-epical text-4xl capitalize text-center">
          i am dushime <br /> a senior product designer <br /> based in rwanda
        </h1>
        <p className="font-Manrope-Regular">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quasi
          a blanditiis distinctio tenetur reprehenderit provident ab unde,
          esse,!
        </p>

        <button className="border-2 border-white rounded-md py-2 px-6 font-Manrope-Regular">
          get in touch
        </button>
      </div>
      <div className="bg-black text-white p-8">
        <div className="flex gap-2">
          <StarIcon />
          <h1 className="font-epical">porfolio</h1>
          <StarIcon />
        </div>
        <h1 className="font-Manrope-Regular py-2 text-4xl">
          Explore My Portfolio
        </h1>
        <p className="font-Manrope-Regular text-xs py-4">
          Discover my impressive projects with innovative ideas. See for
          yourself why I stand out.
        </p>
        <div className="flex gap-8 justify-between border-4 p-10 border-slate-500 rounded-3xl bg-zinc-900">
          <div className="flex gap-4 flex-col">
            <h1 className="font-epical text-2xl">engine lab</h1>
            <h1 className="font-Manrope-bold text-3xl">
              growth Business - <br /> unlimited possibilities
            </h1>
            <h1 className="font-Manrope-Regular text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem deleniti quisquam eligendi magni doloribus quidem dolor
              quis obcaecati cumque itaque!
            </h1>
            <button className="bg-black w-1/4 border-2 border-white rounded-md py-2 px-6 font-Manrope-Regular">
              get in touch
            </button>
          </div>
          <div>
            <img src={Projectimage} alt="project-1" />
          </div>
        </div>
      </div>
      <div className="bg-black text-white p-8">
        <div className="flex gap-2">
          <StarIcon />
          <h1 className="font-epical">service</h1>
          <StarIcon />
        </div>
        <h1 className="font-Manrope-Regular py-2 text-4xl">
          My Offered Services
        </h1>
        <p className="font-Manrope-Regular text-xs py-4">
          Discover my impressive projects with innovative ideas. See for
          yourself why I stand out.
        </p>
        <div className="flex justify-between gap-4 py-8 px-8 border-4 rounded-lg items-center border-neutral-700 bg-zinc-900">
          <FigmaIcon />
          <h1 className="font-Manrope-bold text-3xl">UI / UX Design</h1>
          <h1 className="font-Manrope-Regular">
            My UI/UX Design service is dedicated to crafting visually <br />
            appealing and user-centric digital interfaces, ensuring a <br />{" "}
            seamless and engaging user experience for your audience
          </h1>
        </div>
        <div className="mt-4 flex justify-between gap-4 py-8 px-8 border-4 rounded-lg items-center border-neutral-700 bg-zinc-900">
          <FramerIcon />
          <h1 className="font-Manrope-bold text-3xl">Web Development</h1>
          <h1 className="font-Manrope-Regular">
            My UI/UX Design service is dedicated to crafting visually <br />
            appealing and user-centric digital interfaces, ensuring a <br />{" "}
            seamless and engaging user experience for your audience
          </h1>
        </div>
        <div className="mt-4 flex justify-between gap-4 py-2 px-8 border-4 rounded-lg items-center border-neutral-700 bg-zinc-900">
          <SystemIcon />
          <h1 className="font-Manrope-bold text-3xl">Design System</h1>
          <h1 className="font-Manrope-Regular">
            My UI/UX Design service is dedicated to crafting visually <br />
            appealing and user-centric digital interfaces, ensuring a <br />{" "}
            seamless and engaging user experience for your audience
          </h1>
        </div>
        <div className="mt-4 flex justify-between gap-4 py-8 px-8 border-4 rounded-lg items-center border-neutral-700 bg-zinc-900">
          <ToolIcon />
          <h1 className="font-Manrope-bold text-3xl">Graphic Design</h1>
          <h1 className="font-Manrope-Regular">
            My UI/UX Design service is dedicated to crafting visually <br />
            appealing and user-centric digital interfaces, ensuring a <br />{" "}
            seamless and engaging user experience for your audience
          </h1>
        </div>
      </div>
      <div className="bg-black text-white px-8">
        <div className="flex gap-2">
          <StarIcon />
          <span className="font-epical">process</span>
          <StarIcon />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="font-Manrope-Regular py-2 text-4xl">How It Works</h1>
            <p className="font-Manrope-Regular text-xs">
              The Steps I Typically Take When Engaging in Projects with My
              Clients
            </p>
          </div>
          <div className="">
            <div className="flex flex-col gap-4 rounded-3xl border-red-700 border-x-[0.5px] border-t-4 bg-zinc-800 p-8">
              <p className="flex justify-between">
                <span className="font-Manrope-light text-2xl">1.</span>
                <span className="font-epical text-2xl">Request Project</span>
              </p>
              <p className="font-Manrope-Regular text-sm">
                It all starts with your project request. I listen carefully to{" "}
                <br />
                understand what you need and your ideas. Your ideas are my{" "}
                <br />
                inspiration, and understanding your goals is my top priority.{" "}
                <br />
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-10 rounded-3xl border-4 border-slate-300 bg-zinc-800 p-8">
              <p className="flex justify-between">
                <span className="font-Manrope-light text-2xl">2.</span>
                <span className="font-epical text-2xl">IDeation</span>
              </p>
              <p className="font-Manrope-Regular text-sm">
                In this step, creativity takes center stage. I delve into <br />
                brainstorming sessions to conceptualize your project. This is{" "}
                <br />
                where I explore innovative solutions and artistic approaches to{" "}
                <br />
                bring your vision to life.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-10 rounded-3xl border-4 border-slate-300 bg-zinc-800 p-8">
              <p className="flex justify-between">
                <span className="font-Manrope-light text-2xl">3.</span>
                <span className="font-epical text-2xl">Designing</span>
              </p>
              <p className="font-Manrope-Regular text-sm">
                With a clear concept in mind, we move to the design phase. This{" "}
                <br />
                is where I weave together visual elements, user-friendly <br />
                interfaces, and all the creative components that will make your{" "}
                <br />
                project stand out.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-10 rounded-3xl border-4 border-slate-300 bg-zinc-800 p-8">
              <p className="flex justify-between">
                <span className="font-Manrope-light text-2xl">4.</span>
                <span className="font-epical text-2xl">FeedBack</span>
              </p>
              <p className="font-Manrope-Regular text-sm">
                Your feedback is invaluable. I present the design work to you{" "}
                <br />
                for your input. I'm dedicated to collaboration and will make{" "}
                <br />
                revisions as necessary to ensure the final product aligns <br />
                perfectly with your artistic vision.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-10 rounded-3xl border-4 border-slate-300 bg-zinc-800 p-8">
              <p className="flex justify-between">
                <span className="font-Manrope-light text-2xl">5.</span>
                <span className="font-epical text-2xl">Launch</span>
              </p>
              <p className="font-Manrope-Regular text-sm">
                After your approval, it's time to release your project to the{" "}
                <br />
                world. I handle all the technical details, ensuring a seamless{" "}
                <br />
                launch. Your project is introduced to the public, where it will{" "}
                <br />
                inspire and engage.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-black text-white flex flex-col gap-52 pt-52">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="font-Manrope-Regular text-4xl">
            Have a Project In Mind?
          </h1>
          <h1 className="font-epical">Lets Create Together</h1>
          <p className="font-Manrope-Regular text-sm">
            Reach out through the form, and I'll respond within the next 24
            hours.
          </p>
          <button className="border-2 w-1/5 border-white rounded-md py-2 px-6 font-Manrope-Regular">
            get in touch
          </button>
        </div>

        <div className="flex justify-center gap-8 px-20 py-10">
          <a href="#link">LinkedIn</a>
          <a href="#link">Instagram</a>
          <a href="#link">Twitter</a>
          <a href="#link">Dribble</a>
        </div>
      </section>
    </div>
  );
};

export default LandingComponent;
