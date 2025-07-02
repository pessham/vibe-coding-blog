import { urlFor } from '../lib/sanity';

interface PortableTextProps {
  content: any[];
}

export default function PortableText({ content }: PortableTextProps) {
  const renderBlock = (block: any, index: number) => {
    switch (block._type) {
      case 'block':
        return renderTextBlock(block, index);
      case 'image':
        return renderImage(block, index);
      default:
        return null;
    }
  };

  const renderTextBlock = (block: any, index: number) => {
    const { style = 'normal', children } = block;
    
    const text = children?.map((child: any, childIndex: number) => {
      const { text, marks = [] } = child;
      
      let element = <span key={childIndex}>{text}</span>;
      
      // Apply marks (bold, italic, etc.)
      marks.forEach((mark: string) => {
        switch (mark) {
          case 'strong':
            element = <strong key={childIndex}>{element}</strong>;
            break;
          case 'em':
            element = <em key={childIndex}>{element}</em>;
            break;
          case 'code':
            element = <code key={childIndex} className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{element}</code>;
            break;
          default:
            break;
        }
      });
      
      return element;
    });

    switch (style) {
      case 'h1':
        return <h1 key={index} className="text-4xl font-bold mb-6 text-gray-900">{text}</h1>;
      case 'h2':
        return <h2 key={index} className="text-3xl font-bold mb-5 text-gray-900">{text}</h2>;
      case 'h3':
        return <h3 key={index} className="text-2xl font-bold mb-4 text-gray-900">{text}</h3>;
      case 'h4':
        return <h4 key={index} className="text-xl font-bold mb-4 text-gray-900">{text}</h4>;
      case 'blockquote':
        return (
          <blockquote key={index} className="border-l-4 border-blue-500 pl-6 italic text-gray-600 my-6">
            {text}
          </blockquote>
        );
      default:
        return <p key={index} className="text-gray-700 leading-relaxed mb-4">{text}</p>;
    }
  };

  const renderImage = (block: any, index: number) => {
    if (!block.asset) return null;
    
    return (
      <figure key={index} className="my-8">
        <img
          src={urlFor(block).width(800).url()}
          alt={block.alt || ''}
          className="w-full rounded-lg shadow-lg"
        />
        {block.alt && (
          <figcaption className="text-center text-gray-600 text-sm mt-2">
            {block.alt}
          </figcaption>
        )}
      </figure>
    );
  };

  return (
    <div className="blog-content">
      {content?.map((block, index) => renderBlock(block, index))}
    </div>
  );
}