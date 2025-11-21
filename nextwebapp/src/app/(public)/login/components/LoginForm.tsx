"use client";

//next methods
import { useRouter } from "next/navigation";

//form
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./LoginSchema";

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
  FieldSeparator,
} from "@/components/ui/field";
import { toast } from "sonner";

export function LoginComp({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const { control, handleSubmit } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      magicURL: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (!resData.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      toast.success("Login successful!", { id: toastId });
      router.replace("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Login error:", err.message);
      } else {
        console.error("Unexpected error", err);
      }
      toast.error("Login failed", { id: toastId });
    } finally {
      console.log("Finished login attempt");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
            </a>
            <h1 className="text-xl font-bold">Welcome to Nikonerds Inc.</h1>
          </div>

          <Controller
            name="magicURL"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="magicURL">Magic URL</FieldLabel>
                <Input
                  {...field}
                  id="magicURL"
                  type="magicURL"
                  required
                  placeholder="demo@example.com"
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
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
