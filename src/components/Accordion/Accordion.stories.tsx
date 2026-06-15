import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

const meta: Meta = {
  title: 'Components/Accordion',
  parameters: {
    layout: 'padded',
  },
};
export default meta;

// ── Line Accordion ────────────────────────────────────────────────────────────

export const LineDefault: StoryObj = {
  name: 'Line / Single expand',
  render: () => (
    <Accordion type="single" defaultValue="item-1" style={{ width: 480 }}>
      <AccordionItem value="item-1" variant="line">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent>
          Our flagship product combines cutting-edge technology with sleek design. Built with premium
          materials, it offers unparalleled performance and reliability.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant="line">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent>
          We offer free standard shipping on all orders over $50. Express and overnight delivery
          options are available at checkout.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant="line">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent>
          Items can be returned within 30 days of purchase in original condition. Refunds are
          processed within 5–7 business days.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const LineMultiple: StoryObj = {
  name: 'Line / Multiple expand',
  render: () => (
    <Accordion type="multiple" style={{ width: 480 }}>
      <AccordionItem value="item-1" variant="line">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent>
          Our flagship product combines cutting-edge technology with sleek design. Built with premium
          materials, it offers unparalleled performance and reliability.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant="line">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent>
          We offer free standard shipping on all orders over $50. Express and overnight delivery
          options are available at checkout.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant="line">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent>
          Items can be returned within 30 days of purchase in original condition. Refunds are
          processed within 5–7 business days.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// ── Bordered Accordion ────────────────────────────────────────────────────────

export const BorderedDefault: StoryObj = {
  name: 'Bordered / Single expand',
  render: () => (
    <Accordion type="single" defaultValue="item-1" style={{ width: 480 }}>
      <AccordionItem value="item-1" variant="bordered" position="first">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent>
          Our flagship product combines cutting-edge technology with sleek design. Built with premium
          materials, it offers unparalleled performance and reliability.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant="bordered" position="middle">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent>
          We offer free standard shipping on all orders over $50. Express and overnight delivery
          options are available at checkout.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant="bordered" position="last">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent>
          Items can be returned within 30 days of purchase in original condition. Refunds are
          processed within 5–7 business days.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const BorderedSingle: StoryObj = {
  name: 'Bordered / Single item',
  render: () => (
    <Accordion type="single" style={{ width: 480 }}>
      <AccordionItem value="item-1" variant="bordered" position="single">
        <AccordionTrigger>
          What are the key considerations when implementing a comprehensive enterprise-level
          authentication system?
        </AccordionTrigger>
        <AccordionContent>
          Key considerations include multi-factor authentication, token lifecycle management, secure
          session handling, and compliance with standards like OAuth 2.0 and OpenID Connect.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// ── Dark theme ────────────────────────────────────────────────────────────────

export const DarkTheme: StoryObj = {
  name: 'Line / Dark theme',
  decorators: [
    (Story) => (
      <div data-theme="dark" style={{ background: 'var(--generalBackground)', padding: 24, minHeight: 200 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Accordion type="single" defaultValue="item-1" style={{ width: 480 }}>
      <AccordionItem value="item-1" variant="line">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent>
          Our flagship product combines cutting-edge technology with sleek design.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant="line">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent>
          We offer free standard shipping on all orders over $50.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant="line">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent>
          Items can be returned within 30 days of purchase.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const BorderedDarkTheme: StoryObj = {
  name: 'Bordered / Dark theme',
  decorators: [
    (Story) => (
      <div data-theme="dark" style={{ background: 'var(--generalBackground)', padding: 24, minHeight: 200 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Accordion type="single" defaultValue="item-1" style={{ width: 480 }}>
      <AccordionItem value="item-1" variant="bordered" position="first">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent>
          Our flagship product combines cutting-edge technology with sleek design.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant="bordered" position="middle">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent>
          We offer free standard shipping on all orders over $50.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant="bordered" position="last">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent>
          Items can be returned within 30 days of purchase.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
