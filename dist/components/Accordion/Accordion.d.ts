import { type ReactNode, type CSSProperties } from 'react';
type AccordionProps = {
    type?: 'single' | 'multiple';
    defaultValue?: string;
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
};
export declare function Accordion({ type, defaultValue, children, style, className }: AccordionProps): import("react").JSX.Element;
type AccordionItemProps = {
    value: string;
    children: ReactNode;
    variant?: 'line' | 'bordered';
    position?: 'single' | 'first' | 'middle' | 'last';
    style?: CSSProperties;
};
export declare function AccordionItem({ value, children, variant, position, style, }: AccordionItemProps): import("react").JSX.Element;
type AccordionTriggerProps = {
    children: ReactNode;
};
export declare function AccordionTrigger({ children }: AccordionTriggerProps): import("react").JSX.Element;
type AccordionContentProps = {
    children: ReactNode;
};
export declare function AccordionContent({ children }: AccordionContentProps): import("react").JSX.Element;
export {};
