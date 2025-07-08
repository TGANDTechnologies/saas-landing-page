// components/BlogHero.tsx

export default function BlogHero() {
  return (
    <section className="top-0 overflow-x-clip relative w-full h-[500px] bg-gray-900 text-white">
      <img
        src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
        alt="Blog Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover Insights, Tips & Updates
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Explore how AI is changing the way we handle communication and productivity—one email at a time.
        </p>
      </div>
    </section>
  );
}
