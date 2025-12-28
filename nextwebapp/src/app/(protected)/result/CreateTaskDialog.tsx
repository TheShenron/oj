"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import api from "@/lib/axios";
import { IconPlus } from "@tabler/icons-react";

export function CreateTaskDialog() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const payload = {
            title: formData.get("title"),
            description: formData.get("description"),
            tech: formData.get("tech"),
            level: formData.get("level"),
            category: formData.get("category"),
            repoTemplateUrl: formData.get("repoTemplateUrl"),
        };

        await api.post("/tasks", payload);

        setLoading(false);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    <IconPlus />Create Task </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[520px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Create New Task</DialogTitle>
                        <DialogDescription>
                            Add a new engineering task for candidates to work on.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="mt-6 grid gap-4">
                        {/* Title */}
                        <div className="grid gap-2">
                            <Label htmlFor="title">Task Title</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Task Management API"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Build a small API to manage tasks with basic validation."
                                rows={3}
                                required
                            />
                        </div>

                        {/* Tech + Level */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label>Technology</Label>
                                <Select name="tech" required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select tech" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="react">React</SelectItem>
                                        <SelectItem value="node">Node.js</SelectItem>
                                        <SelectItem value="python">Python</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid gap-2">
                                <Label>Level</Label>
                                <Select name="level" required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="easy">Easy</SelectItem>
                                        <SelectItem value="medium">Midium</SelectItem>
                                        <SelectItem value="hard">Hard</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Category */}
                        <div className="grid gap-2">
                            <Label>Category</Label>
                            <Select name="category">
                                <SelectTrigger>
                                    <SelectValue placeholder="Task type (optional)" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="task">General</SelectItem>
                                    <SelectItem value="ui">UI</SelectItem>
                                    <SelectItem value="api">API</SelectItem>
                                    <SelectItem value="auth">Auth</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Repo URL */}
                        <div className="grid gap-2">
                            <Label htmlFor="repoTemplateUrl">Repository Template URL</Label>
                            <Input
                                id="repoTemplateUrl"
                                name="repoTemplateUrl"
                                placeholder="https://github.com/org/task-template"
                                required
                            />
                        </div>
                    </div>

                    <DialogFooter className="mt-6">
                        <DialogClose asChild>
                            <Button variant="outline" type="button">
                                Cancel
                            </Button>
                        </DialogClose>

                        <Button type="submit" disabled={loading}>
                            {loading ? "Creating..." : "Create Task"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
