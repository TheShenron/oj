"use client";

import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/ui/grid-background";
import { Separator } from "@/components/ui/separator";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { UnderlineIcon } from '@/assets/underline'

import Link from "next/link";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


type TaskCardProps = {
    title: string
    description: string
    tech: string
    difficulty: "Easy" | "Medium" | "Hard"
    taskId: string
    onDownload?: () => void
}

function TaskCard({
    title,
    description,
    tech,
    difficulty,
    taskId,
    onDownload,
}: TaskCardProps) {
    return (
        <Card className='max-w-sm rounded-sm'>
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent>
                <div>
                    <p className="text-muted-foreground text-sm">
                        {description}
                    </p>
                </div>

                <Separator className="my-3" />

                <div className="flex items-center gap-3 text-sm">
                    <div className="">{tech}</div>
                    <Separator orientation="vertical" className="py-3" />
                    <div className="">{difficulty}</div>
                    <Separator orientation="vertical" className="py-3" />
                    <div className="">{taskId}</div>
                </div>
            </CardContent>

            <CardFooter>
                <Button variant='outline' onClick={onDownload}>
                    Download
                </Button>
            </CardFooter>
        </Card>

    )
}


const Task = () => {

    return (
        <>
            <div className="mx-5 relative lg:px-8 lg:border-l lg:border-r lg:border-dashed">
                <GridBackground />
                <div className="pt-10">

                    <div className="mt-10">
                        <h1 className="text-center text-5xl font-extrabold text-balance">
                            Your Engineering Tasks
                        </h1>
                    </div>

                    <div className="flex gap-2 justify-center mt-10">
                        <p className="text-muted-foreground text-lg text-center">
                            Choose a task, download it, work locally, and push your changes to GitHub.
                        </p>

                        <p className="text text-lg text-center">
                            <Link href='/result' >
                                Run tests when you’re ready.
                                <UnderlineIcon />
                            </Link>
                        </p>

                    </div>

                    <div>
                        <p className="text-lg text-center">
                            There are no trick questions — this exercise reflects real engineering work.
                        </p>
                    </div>

                    <div className="py-10 flex justify-center">
                        <ButtonGroup>
                            <Button variant="outline">
                                <FaReact className="h-5 w-5" /> ReactJS
                            </Button>
                            <Button variant="outline" disabled>
                                <FaNodeJs className="h-5 w-5" /> NodeJS
                            </Button>
                            <Button variant="outline" disabled>
                                <FaPython className="h-5 w-5" /> Python
                            </Button>
                        </ButtonGroup>
                    </div>

                </div>
            </div>

            <div className="lg:border-t lg:border-b lg:border-dashed px-5">
                <div className="lg:px-8 lg:border-l lg:border-r lg:border-dashed">
                    <div className="py-10">
                        <div className="flex gap-3">
                            <TaskCard
                                description="Build a small Node.js API to manage tasks. Focus on clean structure, clear logic, and practical decisions."
                                difficulty="Medium"
                                taskId="NODE-API-01"
                                tech="ReactJS"
                                title="Task Management API"
                            />

                        </div >

                    </div >
                </div >
            </div >
        </>
    )
};

export default Task;
