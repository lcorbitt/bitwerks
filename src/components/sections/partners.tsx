import Image from "next/image";

export function Partners() {
  return (
    <section className="bg-white dark:bg-primary pb-12 w-full">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl text-muted-foreground mb-8 font-bold">
          Companies we&apos;ve partnered with
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">
            <Image
              src="/urban_sky_logo.jpg"
              alt="Urban Sky Logo"
              width={96}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">
            <Image
              src="/hodinkee.png"
              alt="Hodinkee Logo"
              width={96}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">
            <Image
              src="/spectora.png"
              alt="Spectora Logo"
              width={96}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">Logo 4</div>
          <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">Logo 5</div>
          <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">Logo 6</div>
        </div>
      </div>
    </section>
  );
} 