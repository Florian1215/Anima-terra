'use client';

import {CSSProperties, ReactNode, TransitionEvent, useId, useLayoutEffect, useRef, useState} from 'react';

type ExpandableTextProps = {
    children: ReactNode;
    lines?: number;
    moreLabel?: string;
    lessLabel?: string;
    duration?: number;
    expanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    defaultExpanded?: boolean;
    className?: string;
    textClassName?: string;
    buttonClassName?: string;
};

export default function ExpandableText({children, lines=3, moreLabel='Voir la suite', lessLabel='Voir moins', duration=200, expanded: controlledExpanded, onExpandedChange, defaultExpanded=false, className='', textClassName='', buttonClassName='',}: ExpandableTextProps) {
    const id = useId();
    const ref = useRef<HTMLParagraphElement>(null);
    const [uncontrolledExpanded, setUncontrolledExpanded] = useState(defaultExpanded);
    const expanded = controlledExpanded ?? uncontrolledExpanded;
    const [overflowing, setOverflowing] = useState(false);
    const [initiallyExpanded] = useState(expanded);
    const prevExpanded = useRef(expanded);

    const collapsedHeight = (el: HTMLElement) => {
        const cs = getComputedStyle(el);
        const lh = parseFloat(cs.lineHeight);
        return (Number.isNaN(lh) ? parseFloat(cs.fontSize) * 1.2 : lh) * lines;
    };

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const measure = () => setOverflowing(el.scrollHeight > collapsedHeight(el) + 1);
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        return () => ro.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lines, children]);

    const finish = () => {
        const el = ref.current;
        if (!el)
            return;
        if (expanded)
            el.style.setProperty('--clamp', 'none');
        else
            el.style.removeProperty('--clamp');
        el.style.height = '';
    };

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el || prevExpanded.current === expanded)
            return;
        prevExpanded.current = expanded;

        const from = parseFloat(getComputedStyle(el).height);
        el.style.height = `${from}px`;

        let to: number;
        if (expanded) {
            el.style.setProperty('--clamp', 'none');
            to = el.scrollHeight;
        } else
            to = collapsedHeight(el);

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion || Math.abs(to - from) < 1) {
            finish();
            return;
        }
        void el.offsetHeight;
        el.style.height = `${to}px`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expanded]);

    const onTransitionEnd = (e: TransitionEvent<HTMLParagraphElement>) => {
        if (e.target === e.currentTarget && e.propertyName === 'height') finish();
    };

    const toggle = () => {
        if (controlledExpanded === undefined) setUncontrolledExpanded(!expanded);
        onExpandedChange?.(!expanded);
    };

    const style = {'--lines': lines, ...(initiallyExpanded && {'--clamp': 'none'}), transitionDuration: `${duration}ms`,} as CSSProperties;

    return (<div className={'flex flex-col gap-2 ' + className}>
        <p id={id} ref={ref} style={style} onTransitionEnd={onTransitionEnd}
           className={'line-clamp-[var(--clamp,var(--lines))] transition-[height] ease-in-out motion-reduce:transition-none ' + textClassName}>
            {children}
        </p>
        {overflowing && (
            <button type="button" onClick={toggle} aria-expanded={expanded} aria-controls={id} className={'self-end ' + buttonClassName}>
                {expanded ? lessLabel : moreLabel}
            </button>
        )}
    </div>);
}
