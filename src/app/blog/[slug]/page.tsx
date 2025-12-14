import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 text-lg font-medium hover:opacity-80 transition-opacity"
            style={{ color: 'var(--accent)' }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium glass"
                    style={{ color: 'var(--accent)' }}>
                Development
              </span>
              <div className="flex items-center space-x-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{(post.frontMatter.readTime as string) || '5 min read'}</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: 'var(--foreground)' }}>
              {post.title}
            </h1>
            
            <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {post.excerpt}
            </p>
            
            {(post.frontMatter.tags as string[]) && (
              <div className="flex flex-wrap gap-2">
                {(post.frontMatter.tags as string[]).map((tag) => (
                  <span 
                    key={tag}
                    className="flex items-center space-x-1 px-3 py-1 rounded-lg text-sm"
                    style={{ 
                      backgroundColor: 'var(--glass-bg)', 
                      color: 'var(--text-secondary)' 
                    }}
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Post Content */}
        <article className="markdown-article max-w-3xl mx-auto">
          <MarkdownRenderer content={post.content} />
        </article>

        {/* Post Footer */}
        <footer className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--glass-bg)' }}>
          <div className="flex items-center justify-between">
            <Link 
              href="/blog"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold glass-card hover:scale-105 transition-all duration-300"
              style={{ color: 'var(--foreground)' }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
            
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Published on {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
