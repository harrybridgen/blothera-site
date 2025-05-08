// components/Anchor.tsx
export function Anchor({ id }: { id: string }) {
  // scroll-mt-20 ensures a 5rem top-margin when jumping so
  // it won’t get hidden under your sticky header/sidebar
  return <span id={id} className="block h-0 scroll-mt-20" />
}
