import { ReactNode } from 'react';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export default function SectionWrapper({ id, className = '', children, ariaLabel }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 ${className}`}
      aria-label={ariaLabel}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
