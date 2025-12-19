"use client";
//react & next JS
import { useState } from "react";
import Link from "next/link";

// next athuh methods
import { signIn } from "next-auth/react";

//icons
import { GrTest } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

//UI components
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field";


export function LoginComp({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [isDisabled, setIsDisabled] = useState(false);

  const handleLogin = async () => {
    setIsDisabled(true);
    await signIn("github");
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center justify-center rounded-md">
            <Button
              variant='default'
              size="icon"
              className="rounded-full w-12 h-12 bg-foreground text-background hover:bg-foreground"
            >
              <GrTest className="w-10 h-10" />
            </Button>
          </div>
          <h1 className="text-xl font-bold">Welcome to Regami Assess</h1>
          <FieldDescription>
            Understand deeply. Code freely
          </FieldDescription>
        </div>

        <Field>
          <Button variant="outline" type="button" onClick={handleLogin} disabled={isDisabled}>
            {isDisabled ? <Spinner /> : <FaGithub />}
            Login with GitHub
          </Button>
        </Field>
      </FieldGroup>
      <FieldDescription className="px-6 text-center">
        By clicking login, you agree to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
