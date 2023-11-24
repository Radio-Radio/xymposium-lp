import XymposiumInvitation from "@/assets/images/xymposium-invitation.png";
import SymbolLogoLight from "@/assets/symbol-logo-with-text-light.png";
import { SignUpForm } from "@/components/atom/moleculs/signup-form";
import { Link } from "@/components/ui/link";
import { Paragraph } from "@/components/ui/typography";
import { navigations } from "@/lib/navigations";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Registration: Symbol/NEM Community Xymposium",
  description: "Community Xymposium への参加申し込み",
};

export default function AuthenticationPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 px-3 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div
          className="absolute inset-0 w-full h-screen after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-black/50"
          style={{
            backgroundImage: `url(${XymposiumInvitation.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              Empowering People with Blockchain. Welcome to Symbol/NEM. L1 chain that is easy to install and can be used
              by anyone, anytime.
            </p>
            <footer className="text-sm">Symbol Community</footer>
          </blockquote>
        </div>
      </div>
      <div className="mx-auto min-h-screen h-full flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex items-center justify-center mt-8 mb-4">
          <Link href={navigations.index}>
            <Image loading="eager" alt="symbol logo" src={SymbolLogoLight} height={40} />
          </Link>
        </div>
        <SignUpForm />
        <Paragraph className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link href="/terms#terms" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/terms#privacy" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </Link>
        </Paragraph>
        <div className="h-10" />
      </div>
    </div>
  );
}
