"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "As a busy designer constantly juggling emails, this AI email agent has been a total game-changer. It handles my inbox with precision and speed.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this AI to handle our emails. It's like having an assistant who never sleeps.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This AI agent has completely transformed how I manage my inbox—no more email overload, just clean, smart replies and organization.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly the AI integrated with my email and started providing accurate, thoughtful responses within hours.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Managing client communications used to be overwhelming. Now with this AI email agent, I can focus on strategy instead of replying to every message.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this AI email tool are top-notch. It fits seamlessly into our workflow.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this AI email responder has not only saved us time but also improved the quality and consistency of our client communication.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this AI, we no longer stress over inbox zero. It auto-responds, flags important messages, and helps us stay on top of everything.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and powerful AI responses make it an essential tool for anyone looking to tame their inbox.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonalsColumn = (props: {
  className?: string;
  testimonals: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className="props.className" id="customers">
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className={twMerge("flex flex-col gap-6 pb-6")}
      >
        {props.testimonals.map(({ text, imageSrc, name, username }) => (
          <div key={name} className="card">
            <div>{text}</div>
            <div className="flex items-center gap-2 mt-5">
              <Image
                src={imageSrc}
                alt={name}
                className="h-10 w-10 rounded-full"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">
                  {name}
                </div>
                <div className="leading-5 tracking-tight">{username}</div>
              </div>
            </div>
          </div>
        ))}
        {props.testimonals.map(({ text, imageSrc, name, username }) => (
          <div key={name} className="card">
            <div>{text}</div>
            <div className="flex items-center gap-2 mt-5">
              <Image
                src={imageSrc}
                alt={name}
                className="h-10 w-10 rounded-full"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">
                  {name}
                </div>
                <div className="leading-5 tracking-tight">{username}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export const Testimonials = () => {
  return (
    <section className="bg-white py-0">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our customers say</h2>
          <p className="section-description mt-5">
            From faster email responses to increased productivity, our AI agents have become an essential tool for users all around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonalsColumn testimonals={firstColumn} duration={15}/>
          <TestimonalsColumn
            testimonals={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonalsColumn
            testimonals={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
