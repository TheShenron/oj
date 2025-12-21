"use client";

import { GridBackground } from "@/components/ui/grid-background";
import { Button } from "@/components/ui/button"
import data from "@/app/(protected)/result/data.json"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DataTable } from "./data-table";
import { ChartAreaInteractive } from "./chart-area-interactive";


const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]

const Result = () => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <>
            <div className="mx-5 relative lg:px-8 lg:border-l lg:border-r lg:border-dashed">
                <GridBackground />
                <div className="pt-10">

                    <div className="mt-10">
                        <h1 className="text-center text-5xl font-extrabold text-balance">
                            Results Overview
                        </h1>
                    </div>

                    <div className="pt-10">
                        <p className="text-muted-foreground text-lg text-center">
                            These results reflect the automated checks run against your submitted code for the selected task.
                        </p>

                        <p className="text text-lg text-center">
                            You can update your code and run the tests again whenever you’re ready.
                        </p>
                    </div>

                    <div className="py-10 flex items-center justify-center gap-2">
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-[200px] justify-between"
                                >
                                    {value
                                        ? frameworks.find((framework) => framework.value === value)?.label
                                        : "Select framework..."}
                                    <ChevronsUpDown className="opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search framework..." className="h-9" />
                                    <CommandList>
                                        <CommandEmpty>No framework found.</CommandEmpty>
                                        <CommandGroup>
                                            {frameworks.map((framework) => (
                                                <CommandItem
                                                    key={framework.value}
                                                    value={framework.value}
                                                    onSelect={(currentValue) => {
                                                        setValue(currentValue === value ? "" : currentValue)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    {framework.label}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto",
                                                            value === framework.value ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>

                        <Button variant='secondary'>
                            Run Test
                        </Button>

                    </div>

                </div>
            </div>

            <div className="lg:border-t lg:border-b lg:border-dashed px-5">
                <div className="lg:px-8 lg:border-l lg:border-r lg:border-dashed">
                    <div className="py-10">
                        <div className="mb-10">
                            <ChartAreaInteractive />
                        </div>
                        <DataTable data={data} />
                    </div >
                </div >
            </div >
        </>
    )
};

export default Result;
