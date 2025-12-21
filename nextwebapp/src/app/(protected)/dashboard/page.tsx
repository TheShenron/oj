"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { GridBackground } from "@/components/ui/grid-background";
import { AnimatedTooltip } from "@/components/ui/motion-tooltip";
import { Separator } from "@/components/ui/separator";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { UnderlineIcon } from '@/assets/underline'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Link from "next/link";

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

const steps = [
    {
        title: "Choose a task",
        desc: [
            "Start by clicking Start Engineering Task,",
            "or visit the task page to choose the task you want to work on.",
        ],
    },
    {
        title: "Download & set up",
        desc: [
            "Download the selected task and open it in your preferred editor.",
            "Read the README.md carefully — it contains setup steps and clear instructions on what needs to be built.",
        ],
    },
    {
        title: "Code locally",
        desc: [
            "Work on the task in your local environment. You can commit and push your code to GitHub as you progress.",
            "The required repository name and branch are mentioned in the README.",
        ],
    },
    {
        title: "Run tests & submit",
        desc: [
            "When you’re ready, return to the web app and open the Run Tests page.",
            "Select the language and project ID, then click Run Tests.",
        ],
    },
];

const faqs = [
    {
        value: "item-1",
        question: "Is this a timed test?",
        answer:
            "No. There’s no strict time limit. We encourage you to work at a comfortable pace, just like you would on a real task..",
    },
    {
        value: "item-2",
        question: "Can I use Google, documentation, or AI tools?",
        answer:
            "Yes. You’re free to use documentation, search, and standard tools you normally rely on. This task is about real-world problem solving, not memorization.",
    },
    {
        value: "item-3",
        question: "What if I get stuck?",
        answer:
            "That’s completely okay. We’re more interested in how you approach the problem than in a perfect solution.",
    },
    {
        value: "item-4",
        question: "Do I need to finish everything to submit?",
        answer:
            "No. Submit what you have when you feel comfortable — partial solutions are okay if your approach is clear.",
    },
];

const technicalFaqs = [
    {
        value: "item-1",
        question: "Do I need to code in the browser?",
        answer:
            "No. All work is done locally in your own development environment.",
    },
    {
        value: "item-2",
        question: "How do I submit my solution?",
        answer:
            "You’ll push your code to a GitHub repository and submit the repository link through this platform.",
    },
    {
        value: "item-3",
        question: "Can I make multiple commits?",
        answer:
            "Yes — and we encourage it. Your commit history can help us understand your thought process.",
    },
    {
        value: "item-4",
        question: "Can I update my submission after submitting?",
        answer:
            "In most cases, yes — until the evaluation process begins. You’ll see clear guidance before final submission.",
    },
    {
        value: "item-5",
        question: "What do you look for when reviewing the solution?",
        answer:
            "We focus on clarity of thought, code structure, problem-solving approach, practicality, Not perfection.",
    },
];

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
                                < UnderlineIcon />
                            </span>
                        </h1>
                    </div>

                    <div className="mt-10">
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

                                <Link href='/task' >
                                    <Button variant="outline" size="icon-lg" className="rounded-md">
                                        <FaReact className="h-5 w-5" />
                                    </Button>
                                </Link>

                                <Link href='/task' >
                                    <Button variant="outline" size="icon-lg" className="rounded-md" >
                                        <FaPython className="h-5 w-5" />
                                    </Button>
                                </Link>

                                <Link href='/task' >
                                    <Button variant="outline" size="icon-lg" className="rounded-md">
                                        <FaNodeJs className="h-5 w-5" />
                                    </Button>
                                </Link>

                            </div>

                        </div>

                    </div>


                    <div className="py-10 flex gap-3 justify-center">
                        <Link href='/task' >
                            <Button size="lg" variant='default' className="bg-foreground text-background hover:bg-foreground">Start Engineering Task</Button>
                        </Link>

                        <Link href='/task' >
                            <Button variant="outline" size="lg">
                                Try a Sample Task →
                            </Button>
                        </Link>
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
                                < UnderlineIcon />
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

                        <div className="w-[80%] m-auto pt-15">

                            <ol className="relative text-body border-default">
                                <Separator orientation="vertical" className="absolute max-h-[85%]" />
                                {steps.map((step, index) => (
                                    <li key={index} className="mb-10 ms-8">
                                        <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-buffer bg-background">
                                            {index + 1}
                                        </span>

                                        <h3 className="font-medium leading-tight">{step.title}</h3>

                                        {step.desc.map((text, i) => (
                                            <p key={i} className="text-sm text-muted-foreground">
                                                {text}
                                            </p>
                                        ))}
                                    </li>
                                ))}

                            </ol>
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
                                < UnderlineIcon />
                            </span>
                        </h1>

                        <div className="mt-5">
                            <p className="text-muted-foreground text-lg text-center">
                                Browse through these FAQs to find answers to commonly asked questions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-15 mb-5">
                            <div>
                                <p className="text-xl font-extrabold pb-5">
                                    General Question
                                </p>
                                <Accordion type="single" collapsible className="w-full">
                                    {faqs.map((faq) => (
                                        <AccordionItem key={faq.value} value={faq.value}>
                                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <p className="text-gray-400">{faq.answer}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>

                            </div>

                            <div>
                                <p className="text-xl font-extrabold pb-5">
                                    Technical Question
                                </p>
                                <Accordion type="single" collapsible className="w-full">
                                    {technicalFaqs.map((faq) => (
                                        <AccordionItem key={faq.value} value={faq.value}>
                                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <p className="text-gray-400">{faq.answer}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
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
