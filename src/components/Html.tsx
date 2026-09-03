import type { ElementType, ComponentPropsWithoutRef } from 'react';

/**
 * Render a string of markup exactly as the PHP templates echoed it.
 *
 * Copy on this site carries HTML entities (`Research &amp; Intelligence`) and
 * inline markup (`<span class="color-accent-2">…</span>`, whole `<p>` blocks in
 * the FAQ answers). PHP echoed those raw; React would escape them, which would
 * both change the rendered text and drop the styling hooks the theme CSS
 * targets. So anywhere the original output was unescaped, it stays unescaped —
 * the content is authored in this repository, not supplied by a visitor.
 */
export default function Html<T extends ElementType = 'div'>({
  as,
  html,
  ...rest
}: { as?: T; html: string } & Omit<ComponentPropsWithoutRef<T>, 'as' | 'html' | 'children'>) {
  const Tag = (as ?? 'div') as ElementType;
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: html }} />;
}
