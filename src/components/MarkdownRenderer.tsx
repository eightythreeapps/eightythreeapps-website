/* eslint-disable @next/next/no-img-element */
import ReactMarkdown, { Components } from 'react-markdown';
import { deflateSync } from 'zlib';

interface MarkdownRendererProps {
  content: string;
}

const encodeMermaidDiagram = (code: string) => {
  // Kroki expects a raw DEFLATE stream, base64url-encoded.
  // Use UTF-8 bytes to avoid platform-specific encoding quirks.
  const input = Buffer.from(code, 'utf8');
  const compressed = deflateSync(input, { level: 9 });
  return compressed
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

const components: Components = {
  h1({ children }) {
    return <h1 className="markdown-heading-xl">{children}</h1>;
  },
  h2({ children }) {
    return <h2 className="markdown-heading-lg">{children}</h2>;
  },
  h3({ children }) {
    return <h3 className="markdown-heading-md">{children}</h3>;
  },
  h4({ children }) {
    return <h4 className="markdown-heading-sm">{children}</h4>;
  },
  h5({ children }) {
    return <h5 className="markdown-heading-sm">{children}</h5>;
  },
  h6({ children }) {
    return <h6 className="markdown-heading-sm">{children}</h6>;
  },
  p({ children }) {
    return <p className="markdown-paragraph">{children}</p>;
  },
  a({ href, children }) {
    const isExternal = href?.startsWith('http');
    return (
      <a
        href={href}
        className="markdown-link"
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  },
  ul({ children }) {
    return <ul className="markdown-list markdown-list-disc">{children}</ul>;
  },
  ol({ children }) {
    return <ol className="markdown-list markdown-list-decimal">{children}</ol>;
  },
  blockquote({ children }) {
    return <blockquote className="markdown-blockquote">{children}</blockquote>;
  },
  img({ src, alt }) {
    if (!src) return null;
    return <img src={src} alt={alt ?? ''} className="markdown-media" loading="lazy" />;
  },
  table({ children }) {
    return <table className="markdown-table">{children}</table>;
  },
  thead({ children }) {
    return <thead className="markdown-table-head">{children}</thead>;
  },
  tbody({ children }) {
    return <tbody className="markdown-table-body">{children}</tbody>;
  },
  tr({ children }) {
    return <tr className="markdown-table-row">{children}</tr>;
  },
  th({ children }) {
    return <th className="markdown-table-header">{children}</th>;
  },
  td({ children }) {
    return <td className="markdown-table-cell">{children}</td>;
  },
  code({ inline, className, children, ...props }) {
    const language = className?.replace('language-', '');
    const codeContent = String(children).replace(/\r\n/g, '\n').trim();

    if (!inline && language === 'mermaid') {
      const diagramUrl = `https://kroki.io/mermaid/svg/${encodeMermaidDiagram(codeContent)}`;

      return (
        <div className="mermaid-diagram-wrapper">
          <img
            src={diagramUrl}
            alt="Mermaid diagram"
            className="mermaid-diagram"
            loading="lazy"
          />
        </div>
      );
    }

    if (!inline) {
      const blockClassName = [className].filter(Boolean).join(' ');
      return (
        <pre className="markdown-code">
          <code className={blockClassName} {...props}>
            {codeContent}
          </code>
        </pre>
      );
    }

    return (
      <code
        className={['markdown-inline-code', className].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </code>
    );
  },
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
