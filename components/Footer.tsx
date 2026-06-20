import Image from "next/image";
import { asset } from "@/lib/asset";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-bone/10 bg-paper-900 px-5 py-10 md:px-12">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <Image
            src={asset("/img/logo-mark.png")}
            alt="DJ ELVIN"
            width={573}
            height={436}
            className="h-9 w-auto opacity-80"
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone-dim">
            Wedding &amp; Private Events · DJ
          </span>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-dim">
          © {year} DJ ELVIN
        </p>
      </div>
    </footer>
  );
}
