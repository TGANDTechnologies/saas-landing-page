import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero3 } from "@/sections/Hero3";

// app/blog/page.tsx
export default function BlogPage() {
  const posts = [
    {
      title: "How AI is Transforming Email Management",
      description:
        "Discover how modern businesses are using AI to automate inbox tasks, reduce response time, and reclaim hours every week.",
      date: "July 1, 2025",
      slug: "ai-email-management",
            img: "https://media.licdn.com/dms/image/v2/D4E12AQF-vS2Wbtat9A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1734575029864?e=2147483647&v=beta&t=WC4momd9Lt3tmrfZCJHJdL-tZaEEB_Pqk_BGF9aWOb8"

    },
    {
      title: "Top 5 Features of Our Email Assistant",
      description:
        "Explore the most powerful tools built into our platform—from smart replies to calendar scheduling.",
      date: "June 18, 2025",
      slug: "top-features",
            img: "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="

    },
    {
      title: "The Future of Customer Communication",
      description:
        "Why AI-powered communication is the future of support and how your team can stay ahead.",
      date: "June 5, 2025",
      slug: "future-of-support",
      img: "https://cdn.prod.website-files.com/5b0eca6590b4e96d006f6b83/5dc36bc3dc6c0c5fdff5c1d7_iStock-845739284.jpg"
    },
  ];


  return (
    <>
    <Header />
    <Hero3 />
    <section className="bg-white py-24 mt-18">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Blog</div>
          </div>
          <h1 className="section-title mt-5">Insights & Updates</h1>
          <p className="section-description mt-5">
            Stay up to date with the latest on email automation, AI productivity,
            and product news.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-40 object-cover rounded-tl-3xl rounded-tr-3xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <p className="mt-4 text-muted-foreground">{post.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

