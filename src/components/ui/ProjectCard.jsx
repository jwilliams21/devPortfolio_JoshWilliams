import React, { useState, useRef, useEffect } from 'react';
import Badge from './Badge';
import Button from './Button';

const ProjectCard = ({ image, title, description, badges, demoLink, codeLink, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current) {
        const hasOverflow = descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
        setIsOverflowing(hasOverflow);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [description]);

  return (
    <div className="mx-auto md:my-4 lg:mx-8 rounded-lg hover:shadow-lg min-h-125 h-auto w-7/8 flex flex-col border border-slate-300 bg-white transition-all duration-300">
      <div className="w-full flex flex-col justify-center items-center mx-auto h-42 xl:h-72 shrink-0 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full rounded-t-lg ${className || ''}`} 
        />
      </div>
      <div className="p-4 text-slate-900 flex flex-col grow">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <div className="relative mt-2">
          <p
            ref={descriptionRef}
            className={`text-sm text-slate-800 leading-relaxed ${
              !isExpanded ? 'line-clamp-3' : ''
            }`}
          >
            {description}
          </p>
          {isOverflowing && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors focus:outline-none flex items-center gap-1"
            >
              {isExpanded ? '...Read Less' : '...Read More'}
            </button>
          )}
        </div>
        <div className="mt-auto pt-4 min-h-12.5">
          <div className="flex flex-wrap gap-2">
            {badges.map((tag) => (
              <Badge key={tag} variant="skills">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
          <Button href={demoLink} rel="noreferrer" variant="project">
            Live Demo
          </Button>
          <Button href={codeLink} rel="noreferrer" variant="project">
            View Code
          </Button>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard