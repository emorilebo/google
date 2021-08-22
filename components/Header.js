import { useRouter } from "next/dist/client/router";
import Image from "next/image";

function Header() {
  const router = useRouter();
  return (
    <header>
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
    </header>
  );
}

export default Header;
