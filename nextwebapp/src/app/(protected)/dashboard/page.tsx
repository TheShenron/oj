"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { GridBackground } from "@/components/ui/grid-background";
import { AnimatedTooltip } from "@/components/ui/motion-tooltip";
import { Separator } from "@/components/ui/separator";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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

const words = ["ReactJS", "NodeJS", "Python"];


const Dashboard = () => {

    return (
        <>
            <div className="mx-5 relative lg:px-8 lg:border-l lg:border-r lg:border-dashed">
                <GridBackground />
                <div className="pt-25">
                    <div className="text-center">
                        <Badge className="text-foreground bg-background border border-gray text-sm">🎉 You’re about to work on a real engineering task. Take a breath. You’re in the right place.  🪄</Badge>
                    </div>

                    <div className="mt-10">
                        <h1 className="text-center text-5xl font-extrabold text-balance">
                            <span>A Real-World Task Focused on</span>
                            <span className="relative inline-block">
                                <FlipWords words={words} />

                                <svg
                                    viewBox="0 0 200 20"
                                    className="absolute left-0 -bottom-3 w-full"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M5 15 Q100 5 195 15"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h1>
                    </div>

                    <div className="mt-5">
                        <h1 className="text-center text-5xl font-extrabold text-balance">
                            and Real Work
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


                    <div className="py-10 flex gap-3 justify-center">
                        <Button size="lg" variant='default' className="bg-foreground text-background hover:bg-foreground">Start Engineering Task</Button>
                        <Button variant="outline" size="lg">
                            View Instructions →
                        </Button>
                    </div>

                </div>
            </div>

            <div className="lg:border-t lg:border-b lg:border-dashed px-5">
                <div className="lg:px-8 lg:border-l lg:border-r lg:border-dashed">
                    <div className="p-5 py-10">
                        <h1 className="text-center text-2xl font-bold text-balance">
                            <span>A Quick</span>
                            <span className="relative inline-block px-1">
                                Walkthrough
                                <svg
                                    viewBox="0 0 200 20"
                                    className="absolute left-0 -bottom-2 w-full"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M5 15 Q100 5 195 15"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h1>

                        <div className="mt-5">
                            <p className="text-muted-foreground text-lg text-center">
                                You’ll begin with a small, real-world task.
                            </p>
                            <p className="text-muted-foreground text-lg text-center">
                                Work locally in your own environment and submit your solution through GitHub when ready.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="lg:border-b lg:border-dashed px-5">
                <div className="lg:px-8 lg:border-l lg:border-r lg:border-dashed">
                    <div className="p-5 py-10">
                        <h1 className="text-center text-2xl font-bold text-balance">
                            <span>Any</span>
                            <span className="relative inline-block px-1">
                                Questions?
                                <svg
                                    viewBox="0 0 200 20"
                                    className="absolute left-0 -bottom-2 w-full"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M5 15 Q100 5 195 15"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h1>

                        <div className="mt-5">
                            <p className="text-muted-foreground text-lg text-center">
                                Browse through these FAQs to find answers to commonly asked questions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-10">
                            <div>
                                <p className="text-xl font-extrabold pb-5">
                                    General Question
                                </p>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Product Information</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-balance">
                                            <p>
                                                Our flagship product combines cutting-edge technology with sleek
                                                design. Built with premium materials, it offers unparalleled
                                                performance and reliability.
                                            </p>
                                            <p>
                                                Key features include advanced processing capabilities, and an
                                                intuitive user interface designed for both beginners and experts.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Shipping Details</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-balance">
                                            <p>
                                                We offer worldwide shipping through trusted courier partners.
                                                Standard delivery takes 3-5 business days, while express shipping
                                                ensures delivery within 1-2 business days.
                                            </p>
                                            <p>
                                                All orders are carefully packaged and fully insured. Track your
                                                shipment in real-time through our dedicated tracking portal.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Return Policy</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-balance">
                                            <p>
                                                We stand behind our products with a comprehensive 30-day return
                                                policy. If you&apos;re not completely satisfied, simply return the
                                                item in its original condition.
                                            </p>
                                            <p>
                                                Our hassle-free return process includes free return shipping and
                                                full refunds processed within 48 hours of receiving the returned
                                                item.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div>
                                <p className="text-xl font-extrabold pb-5">
                                    Technical Question
                                </p>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Product Information</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-balance">
                                            <p>
                                                Our flagship product combines cutting-edge technology with sleek
                                                design. Built with premium materials, it offers unparalleled
                                                performance and reliability.
                                            </p>
                                            <p>
                                                Key features include advanced processing capabilities, and an
                                                intuitive user interface designed for both beginners and experts.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Shipping Details</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-balance">
                                            <p>
                                                We offer worldwide shipping through trusted courier partners.
                                                Standard delivery takes 3-5 business days, while express shipping
                                                ensures delivery within 1-2 business days.
                                            </p>
                                            <p>
                                                All orders are carefully packaged and fully insured. Track your
                                                shipment in real-time through our dedicated tracking portal.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                </Accordion>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
};

export default Dashboard;
