import Link from "next/link";

import Container from "@/components/ui/container";

const NavBar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative flex px-4 md:px-6 lg:px-8 h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Store</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
