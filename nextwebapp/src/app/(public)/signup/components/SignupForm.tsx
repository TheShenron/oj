"use client";

//next methods
import { useRouter } from "next/navigation";
import Link from "next/link";

//form
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/app/(public)/signup/components/SignupSchema";
import { signup } from "@/lib/services/auth";

//icons
import { GalleryVerticalEnd } from "lucide-react";

//UI components
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { toast } from "sonner";

export function SignupComp({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const { control, handleSubmit } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    const toastId = toast.loading("Logging in...");

    try {
      const res = await signup({ email: data.email });
      console.log(res, 'signup res');
      toast.success("Signup successful!", { id: toastId });
      router.replace("/login");
    } catch (error) {
      console.log(error, 'signup error');
      toast.error("Signup failed", { id: toastId });
    }

  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <Link
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
            </Link>
            <h1 className="text-xl font-bold">Welcome to Nikonerds Inc.</h1>
            <FieldDescription>
              Already have an account? <Link href="/login">Log in</Link>
            </FieldDescription>
          </div>

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  required
                  placeholder="Nikon@gmail.com"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Field>
            <Button type="submit">Continue</Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
