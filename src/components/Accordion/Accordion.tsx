import { createContext, useContext, useState, type ReactNode, type CSSProperties } from 'react';

type AccordionContextValue = {
  openItems: Set<string>;
  toggle: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

type ItemContextValue = {
  value: string;
  isOpen: boolean;
  variant: 'line' | 'bordered';
  position: 'single' | 'first' | 'middle' | 'last';
};

const ItemContext = createContext<ItemContextValue | null>(null);

function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('AccordionItem must be inside Accordion');
  return ctx;
}

function useItem() {
  const ctx = useContext(ItemContext);
  if (!ctx) throw new Error('AccordionTrigger/Content must be inside AccordionItem');
  return ctx;
}

// ── Chevron SVGs ──────────────────────────────────────────────────────────────

function ChevronDown({ style }: { style?: CSSProperties }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden style={style}>
      <path d="M3.5 5.5L8 10L12.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Accordion root ────────────────────────────────────────────────────────────

type AccordionProps = {
  type?: 'single' | 'multiple';
  defaultValue?: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
};

export function Accordion({ type = 'single', defaultValue, children, style, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(
    defaultValue ? new Set([defaultValue]) : new Set()
  );

  function toggle(value: string) {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        if (type === 'single') next.clear();
        next.add(value);
      }
      return next;
    });
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div style={style} className={className}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

// ── AccordionItem ─────────────────────────────────────────────────────────────

type AccordionItemProps = {
  value: string;
  children: ReactNode;
  variant?: 'line' | 'bordered';
  position?: 'single' | 'first' | 'middle' | 'last';
  style?: CSSProperties;
};

export function AccordionItem({
  value,
  children,
  variant = 'line',
  position = 'single',
  style,
}: AccordionItemProps) {
  const { openItems } = useAccordion();
  const isOpen = openItems.has(value);

  const borderedRadius: CSSProperties =
    variant === 'bordered'
      ? position === 'single'
        ? { borderRadius: 16, border: '1px solid var(--generalBorder)' }
        : position === 'first'
        ? { borderTopLeftRadius: 16, borderTopRightRadius: 16, borderTop: '1px solid var(--generalBorder)', borderLeft: '1px solid var(--generalBorder)', borderRight: '1px solid var(--generalBorder)' }
        : position === 'last'
        ? { borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderBottom: '1px solid var(--generalBorder)', borderLeft: '1px solid var(--generalBorder)', borderRight: '1px solid var(--generalBorder)' }
        : { borderLeft: '1px solid var(--generalBorder)', borderRight: '1px solid var(--generalBorder)' }
      : {};

  return (
    <ItemContext.Provider value={{ value, isOpen, variant, position }}>
      <div
        style={{
          background: 'var(--generalBackground)',
          position: 'relative',
          ...borderedRadius,
          ...style,
        }}
      >
        {children}
        {/* divider between middle bordered items */}
        {variant === 'bordered' && (position === 'first' || position === 'middle') && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: -1,
              right: -1,
              height: 1,
              background: 'var(--generalBorder)',
            }}
            aria-hidden
          />
        )}
      </div>
    </ItemContext.Provider>
  );
}

// ── AccordionTrigger ──────────────────────────────────────────────────────────

type AccordionTriggerProps = {
  children: ReactNode;
};

export function AccordionTrigger({ children }: AccordionTriggerProps) {
  const { toggle } = useAccordion();
  const { value, isOpen, variant } = useItem();

  return (
    <button
      onClick={() => toggle(value)}
      aria-expanded={isOpen}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '16px',
        background: 'var(--generalBackground)',
        border: 'none',
        borderBottom: variant === 'line' ? '1px solid var(--generalBorder)' : 'none',
        cursor: 'pointer',
        gap: 16,
        textAlign: 'left',
        color: 'var(--generalForeground)',
        transition: 'background 150ms ease',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--generalAccent)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--generalBackground)'; }}
    >
      <span
        style={{
          flex: '1 0 0',
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '20px',
          letterSpacing: 0,
          minWidth: 0,
          wordBreak: 'break-word',
        }}
      >
        {children}
      </span>
      <ChevronDown
        style={{
          flexShrink: 0,
          transition: 'transform 200ms ease',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
      />
    </button>
  );
}

// ── AccordionContent ──────────────────────────────────────────────────────────

type AccordionContentProps = {
  children: ReactNode;
};

export function AccordionContent({ children }: AccordionContentProps) {
  const { isOpen, variant } = useItem();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows 200ms ease',
        overflow: 'hidden',
        paddingLeft: variant === 'bordered' ? 16 : 0,
        paddingRight: variant === 'bordered' ? 16 : 0,
      }}
    >
      <div style={{ overflow: 'hidden' }}>
        <div
          style={{
            paddingBottom: 16,
            paddingTop: variant === 'bordered' ? 0 : 0,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '20px',
            color: 'var(--generalForeground)',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
