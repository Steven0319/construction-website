import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/assets/logo.svg" width={230} height={48} alt="logo" />
    </Link>
  );
};

export default Logo;