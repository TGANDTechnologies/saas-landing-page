import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

const FOUNDER_VIDEO_URL =
  "https://auth.solamailer.com/storage/v1/object/public/tech-crunch-vid/tech-crunch-founder-video.mp4";

function VideoEmbed({ title, src }: { title: string; src: string }) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-[#010d3e] mb-4 text-center">
        {title}
      </h2>
      <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-[0_7px_14px_#eaeaea] bg-black">
        <video
          className="w-full h-full object-contain"
          controls
          playsInline
          preload="metadata"
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support this video format.
        </video>
      </div>
    </div>
  );
}

function VideoPlaceholder({ title }: { title: string }) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-[#010d3e] mb-4 text-center">
        {title}
      </h2>
      <div
        className="aspect-video w-full rounded-2xl border-2 border-dashed border-[#222222]/20 bg-white/60 flex items-center justify-center shadow-[0_7px_14px_#eaeaea]"
        aria-label={`${title} placeholder`}
      >
        <p className="text-[#010d3e]/60 text-sm md:text-base px-6 text-center">
          Video placeholder — embed your {title.toLowerCase()} here
        </p>
      </div>
    </div>
  );
}

export default function TechCrunchPage() {
  return (
    <>
      <Header />
      <section className="max-w-3xl mx-auto py-16 px-4 mb-24">
        <div className="text-center section-heading">
          <h1 className="section-title">Welcome, TechCrunch Selection Committee</h1>
          <p className="section-description mt-6 text-left md:text-center">
            Thank you for visiting my website and taking the time to review my
            founder introduction video and product demo video. I appreciate your
            consideration and am excited to share what we are building at Sola
            Mailer.
          </p>
        </div>

        <div className="mt-10 p-8 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea] bg-white text-[#010d3e] text-center">
          <h2 className="text-lg font-semibold mb-3">Questions? Reach out anytime</h2>
          <p>
            Phone:{" "}
            <a href="tel:+14085047882" className="underline hover:text-black">
              +1 (408) 504-7882
            </a>
          </p>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:david@solamailer.com"
              className="underline hover:text-black"
            >
              david@solamailer.com
            </a>
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16">
          <VideoEmbed title="Founder Introduction Video" src={FOUNDER_VIDEO_URL} />
          <VideoPlaceholder title="Product Demo Video" />
        </div>
      </section>
      <Footer />
    </>
  );
}
