export type Stat = {
    pre: string;
    target: number;
    suffix: string;
    label: string;
};

export const STATS: Stat[] = [
    {pre: "₹", target: 800, suffix: "K", label: "revenue in 18 days"},
    {pre: "", target: 4, suffix: "TB", label: "data processed on AWS"},
    {pre: "", target: 60, suffix: "%", label: "faster SDLC (agentic)"},
    {pre: "", target: 4, suffix: "×", label: "hackathons won"},
];
