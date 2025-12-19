"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedTooltip } from "@/components/ui/motion-tooltip";
import { Separator } from "@/components/ui/separator";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";

const avatars = [
    {
        image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
        fallback: 'HL',
        name: 'Work like you normally do',
        designation: 'Product Manager'
    },
    {
        image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
        fallback: 'OS',
        name: 'Relax — this is real work',
        designation: 'Software Engineer'
    },
    {
        image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
        fallback: 'HR',
        name: 'Real code, calmly',
        designation: 'UI/UX Designer'
    },
    {
        image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
        fallback: 'JW',
        name: 'Code comfortably',
        designation: 'Junior Developer'
    }
]

const Dashboard = () => {

    return (
        <div className="lg:px-8 lg:border-l lg:border-r lg:border-dashed bg-gradient-to-b from-neutral-100/4 to-transparent h-150">

            <div className="pt-25">
                <div className="text-center">
                    <Badge className="text-foreground bg-background border border-gray text-sm">🎉 You’re about to work on a real engineering task. Take a breath. You’re in the right place.  🪄</Badge>
                </div>

                <div className="mt-10">
                    <h1 className="text-center text-5xl font-extrabold text-balance">
                        A Real-World Task Focused on React
                    </h1>
                </div>

                <div className="mt-5">
                    <h1 className="text-center text-5xl font-extrabold text-balance">
                        and Real Work ⚡️
                    </h1>
                </div>

                <div className="mt-8">
                    <p className="text-muted-foreground text-lg text-center">
                        You’ll work locally using your preferred tools and submit your solution via GitHub.
                    </p>
                </div>

                <div>
                    <p className="text-lg text-center">
                        There are no trick questions — this exercise reflects real engineering work.
                    </p>
                </div>


                <div className="mt-8">
                    <p className="text-lg text-center">
                        A Quick Note From the Team 🙂
                    </p>

                    <div className="flex items-center justify-center mt-6">
                        <div className='space-y-4'>
                            <div className='flex w-full flex-row items-center justify-center'>
                                <AnimatedTooltip items={avatars} />
                            </div>
                        </div>

                        <Separator orientation="vertical" className="py-6 px-[1px] ml-8 mr-4" />

                        <div className="flex gap-2">
                            <Button variant="outline" size="icon-lg" className="rounded-md">
                                <FaReact className="h-5 w-5" />
                            </Button>

                            <Button variant="outline" size="icon-lg" className="rounded-md" >
                                <FaPython className="h-5 w-5" />
                            </Button>

                            <Button variant="outline" size="icon-lg" className="rounded-md">
                                <FaNodeJs className="h-5 w-5" />
                            </Button>

                        </div>

                    </div>

                </div>


                <div className="mt-20 flex gap-3 justify-center">
                    <Button size="lg" variant='default' className="bg-foreground text-background hover:bg-foreground">Start Engineering Task</Button>
                    <Button variant="outline" size="lg">
                        View Instructions →
                    </Button>
                </div>


            </div>

        </div>
    )
};

export default Dashboard;
