// lib/notify.ts
import { toast } from "sonner";

type ToastParams = {
    title: string;
    description?: string;
};

export const notify = {
    success: ({ title, description }: ToastParams) =>
        toast.success(title, { description }),

    error: ({ title, description }: ToastParams) =>
        toast.error(title, { description }),

    info: ({ title, description }: ToastParams) =>
        toast.info(title, { description }),

    loading: ({ title }: ToastParams) =>
        toast.loading(title),

    promise: <T>(promise: Promise<T>, messages: {
        loading: string;
        success: string;
        error: string;
    }) =>
        toast.promise(promise, {
            loading: messages.loading,
            success: messages.success,
            error: messages.error,
        }),
};
