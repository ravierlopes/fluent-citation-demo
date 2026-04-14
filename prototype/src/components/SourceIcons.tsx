import { GlobeRegular } from '@fluentui/react-icons';
import React from 'react';
import type { Source } from '../data/mockData';

// ─── Product logos (official Figma SVGs served from /public/logos/) ──────

function LogoImg({ src, size }: { src: string; size: number }) {
  return <img src={`${import.meta.env.BASE_URL}${src}`} width={size} height={size} alt="" style={{ flexShrink: 0, display: 'block' }} />;
}

export function VivaEngageLogo({ size = 16 }: { size?: number }) {
  return <LogoImg src="logos/viva-engage.svg" size={size} />;
}

export function WordIcon({ size = 16 }: { size?: number }) {
  return <LogoImg src="logos/word.svg" size={size} />;
}

export function ExcelIcon({ size = 16 }: { size?: number }) {
  return <LogoImg src="logos/excel.svg" size={size} />;
}

export function PowerPointIcon({ size = 16 }: { size?: number }) {
  return <LogoImg src="logos/powerpoint.svg" size={size} />;
}

export function SharePointIcon({ size = 16 }: { size?: number }) {
  return <LogoImg src="logos/sharepoint.svg" size={size} />;
}

// ─── Shared icon helpers ─────────────────────────────────────────────────

export function getSourceIcon(source: Source, size = 16): React.JSX.Element {
  switch (source.type) {
    case 'engage-answer':
    case 'engage-conversation':
      return <VivaEngageLogo size={size} />;
    case 'sharepoint':
      switch (source.metadata.fileType) {
        case 'pdf':
          return <SharePointIcon size={size} />;
        case 'pptx':
          return <PowerPointIcon size={size} />;
        case 'xlsx':
          return <ExcelIcon size={size} />;
        case 'aspx':
          return <SharePointIcon size={size} />;
        default:
          return <WordIcon size={size} />;
      }
    case 'web':
      return <GlobeRegular style={{ fontSize: size, color: '#616161' }} />;
  }
}

export function isEngageSource(source: Source): boolean {
  return source.type === 'engage-answer' || source.type === 'engage-conversation';
}

// ─── Stacked source items (avatars first, then icons) ────────────────────

export type StackedItem =
  | { kind: 'avatar'; key: string; photo?: string; initials: string; color: string }
  | { kind: 'icon'; key: string; icon: React.JSX.Element };

/**
 * Returns engage user avatars first (photos/initials), then deduplicated
 * source-type icons for non-engage sources. Sorted socially: people first.
 */
export function getStackedSourceItems(sources: Source[]): StackedItem[] {
  const items: StackedItem[] = [];
  const seenAuthors = new Set<string>();
  const seenIconKeys = new Set<string>();

  // Engage avatars first
  for (const s of sources) {
    if (!isEngageSource(s)) continue;
    const author = s.metadata.author ?? 'Unknown';
    if (seenAuthors.has(author)) continue;
    seenAuthors.add(author);
    items.push({
      kind: 'avatar',
      key: `avatar-${author}`,
      photo: s.metadata.avatarPhoto,
      initials: s.metadata.authorInitials ?? author.slice(0, 2).toUpperCase(),
      color: s.metadata.authorAvatarColor ?? '#616161',
    });
  }

  // Non-engage source-type icons (deduplicated)
  for (const s of sources) {
    if (isEngageSource(s)) continue;
    const key = s.type === 'sharepoint' ? `sp-${s.metadata.fileType || 'docx'}` : s.type;
    if (seenIconKeys.has(key)) continue;
    seenIconKeys.add(key);
    items.push({ kind: 'icon', key, icon: getSourceIcon(s, 16) });
  }

  return items;
}

// ─── Social summary label ────────────────────────────────────────────────

export function getSourceSummaryLabel(sources: Source[]): string {
  const engage = sources.filter(isEngageSource);

  const verifiedCount = engage.filter(s => s.metadata.isVerifiedAnswer).length;
  const bestCount = engage.filter(s => !s.metadata.isVerifiedAnswer && s.metadata.isBestAnswer).length;
  const expertCount = engage.filter(s => s.metadata.authorRole === 'expert').length;

  const total = sources.length;
  const signals: string[] = [];

  if (verifiedCount > 0) signals.push(`${verifiedCount} verified`);
  if (bestCount > 0) signals.push(`${bestCount} best`);
  if (expertCount > 0) signals.push(`${expertCount} expert`);

  if (signals.length > 0) {
    const totalSignals = verifiedCount + bestCount + expertCount;
    return `${total} sources · ${signals.join(', ')} answer${totalSignals > 1 ? 's' : ''}`;
  }
  return `${total} sources`;
}
