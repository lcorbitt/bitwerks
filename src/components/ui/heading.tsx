import * as React from "react";

export const Heading1 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h1 className={`mb-6 text-3xl tracking-tight sm:text-4xl md:text-5xl lg:leading-tight mx-auto lg:mx-0 max-w-3xl lg:max-w-none font-bold ${className}`}>
    {children}
  </h1>
);

export const Heading2 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`mb-4 text-2xl tracking-tight sm:text-3xl md:text-4xl font-bold ${className}`}>
    {children}
  </h2>
);

export const Heading3 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`mb-2 text-xl tracking-tight sm:text-2xl md:text-3xl font-bold ${className}`}>
    {children}
  </h3>
); 