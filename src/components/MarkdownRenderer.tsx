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

    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
}
