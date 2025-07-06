import * as React from "react";

export const Heading1 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h1 className={`text-5xl tracking-tight leading-tight md:text-6xl lg:leading-tight font-extrabold ${className}`}>
    {children}
  </h1>
);

export const Heading2 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-4xl tracking-tight leading-tight md:text-5xl font-extrabold ${className}`}>
    {children}
  </h2>
);

export const Heading3 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-3xl tracking-tight leading-tight md:text-4xl font-extrabold ${className}`}>
    {children}
  </h3>
); 