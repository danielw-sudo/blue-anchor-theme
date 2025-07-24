import { ReactNode } from "react";

interface ContentCardProps {
  title: string;
  content: string;
  note: string;
  delay?: string;
}

export const ContentCard = ({ title, content, note, delay = "" }: ContentCardProps) => {
  return (
    <div className={`glass-light rounded-xl p-8 theme-transition hover:scale-105 shadow-xl animate-fade-in-scale opacity-0 ${delay}`}>
      <h2 className="text-3xl font-bold text-accent mb-6 leading-tight">
        {title}
      </h2>
      
      <p className="text-lg text-foreground leading-relaxed mb-6">
        {content}
      </p>
      
      <p className="text-sm text-secondary italic leading-relaxed">
        {note}
      </p>
    </div>
  );
};