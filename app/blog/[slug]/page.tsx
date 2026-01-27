import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import { CTAButton } from "@/components/CTAButton";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | GymFlow Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://gymflow.ragspro.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="GymFlow Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold">GymFlow</span>
          </Link>
        </div>
      </header>

      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-600">{post.title}</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-gray-500">{post.category}</span>
              <span className="text-sm text-gray-600">•</span>
              <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-400">
              <span>By {post.author}</span>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-12 flex items-center justify-center">
            <span className="text-gray-600">Featured Image</span>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-gray-300 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n\n')
                  .map(paragraph => {
                    // Handle headings
                    if (paragraph.startsWith('## ')) {
                      return `<h2 class="text-3xl font-bold text-white mt-12 mb-6">${paragraph.replace('## ', '')}</h2>`;
                    }
                    if (paragraph.startsWith('### ')) {
                      return `<h3 class="text-2xl font-semibold text-white mt-8 mb-4">${paragraph.replace('### ', '')}</h3>`;
                    }
                    // Handle bold text
                    paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
                    // Handle lists
                    if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                      return `<ul class="list-disc list-inside space-y-2 ml-4">${items.map(item => 
                        `<li class="text-gray-300">${item.replace('- ', '')}</li>`
                      ).join('')}</ul>`;
                    }
                    // Handle numbered lists
                    if (/^\d+\./.test(paragraph)) {
                      const items = paragraph.split('\n').filter(line => /^\d+\./.test(line));
                      return `<ol class="list-decimal list-inside space-y-2 ml-4">${items.map(item => 
                        `<li class="text-gray-300">${item.replace(/^\d+\.\s*/, '')}</li>`
                      ).join('')}</ol>`;
                    }
                    // Handle horizontal rules
                    if (paragraph === '---') {
                      return '<hr class="border-white/10 my-8" />';
                    }
                    // Regular paragraphs
                    return `<p class="text-gray-300 leading-relaxed">${paragraph}</p>`;
                  })
                  .join('')
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 backdrop-blur-lg rounded-full text-sm text-gray-400 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Fitness?</h2>
            <p className="text-gray-400 mb-8">
              Download GymFlow and experience AI-powered fitness coaching
            </p>
            <CTAButton
              label="Download GymFlow"
              href="https://github.com/raghavshahhh/gym-flow/raw/main/releases/GymFlow-v1.0.0.apk"
              variant="primary"
              size="large"
            />
          </div>

          {/* Author Bio */}
          <div className="mt-12 bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl">
            <h3 className="text-xl font-semibold mb-3">About the Author</h3>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-white">Raghav Shah</strong> is the founder of RagsPro and creator of GymFlow. 
              With a passion for fitness and technology, Raghav builds premium apps that solve real problems. 
              Follow him for more insights on fitness, AI, and app development.
            </p>
          </div>
        </div>
      </article>

      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">© GymFlow by RagsPro</div>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
