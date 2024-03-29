import {Poppins} from "next/font/google";
import Image from "next/image";
import {cn} from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        alt="Logo"
        width="40"
        height="40"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="Logo"
        width="40"
        height="40"
        className="dark:block hidden"
      />
      <p className={cn("font-semibold", font.className)}>
        Jotion
      </p>
    </div>
  )
}

export default Logo;