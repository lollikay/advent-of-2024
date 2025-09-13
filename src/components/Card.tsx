import { h, VNode } from '../jsx-runtime';

export interface CardProps {
  title: string;
  content: string;
  className?: string;
}

export function Card({ title, content, className = '' }: CardProps): VNode {
  return (
    <div className={`card ${className}`}>
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
}