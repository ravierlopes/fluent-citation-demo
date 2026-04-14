import { makeStyles, mergeClasses, tokens, Avatar, Badge } from '@fluentui/react-components';
import {
  CheckmarkCircleFilled,
  CheckmarkCircleRegular,
} from '@fluentui/react-icons';
import type { Source } from '../data/mockData';
import { getSourceIcon, isEngageSource } from './SourceIcons';

const useStyles = makeStyles({
  engageCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: tokens.borderRadiusMedium,
    cursor: 'pointer',
    ':hover': { backgroundColor: tokens.colorNeutralBackground1Hover },
  },
  authorInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flex: '1 1 0',
    minWidth: 0,
    flexWrap: 'wrap' as const,
  },
  authorName: {
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground1,
  },
  snippet: {
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground3,
    paddingLeft: '36px',
    borderLeft: 'none',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical' as const,
  },
  snippetBar: {
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground3,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical' as const,
    marginTop: '2px',
  },
  docCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: tokens.borderRadiusMedium,
    cursor: 'pointer',
    ':hover': { backgroundColor: tokens.colorNeutralBackground1Hover },
  },
  docIcon: {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '1px',
  },
  docText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
    flex: '1 1 0',
    minWidth: 0,
  },
  docTitle: {
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  },
  docMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground3,
  },
  docMetaSep: {
    color: tokens.colorNeutralStroke2,
  },
  answerBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '3px',
    height: '18px',
    padding: '0 6px',
    borderRadius: '9px',
    backgroundColor: tokens.colorNeutralBackground1,
    fontWeight: tokens.fontWeightSemibold,
    fontSize: '11px',
    lineHeight: '14px',
    whiteSpace: 'nowrap' as const,
  },
  verifiedBadge: { color: tokens.colorBrandForeground1 },
  bestAnswerBadge: { color: tokens.colorPaletteGreenForeground1 },
});

// ─── Engage Source Card ──────────────────────────────────────────────────

function EngageSourceCard({ source }: { source: Source }) {
  const styles = useStyles();
  const { metadata } = source;

  const badge = metadata.isVerifiedAnswer ? (
    <span className={mergeClasses(styles.answerBadge, styles.verifiedBadge)}>
      <CheckmarkCircleFilled style={{ fontSize: 13 }} />
      Verified answer
    </span>
  ) : metadata.isBestAnswer ? (
    <span className={mergeClasses(styles.answerBadge, styles.bestAnswerBadge)}>
      <CheckmarkCircleRegular style={{ fontSize: 13 }} />
      Best answer
    </span>
  ) : null;

  const roleBadge = metadata.authorRole === 'admin' ? (
    <Badge appearance="filled" color="informative" size="small">Community Admin</Badge>
  ) : metadata.authorRole === 'expert' ? (
    <Badge appearance="filled" color="informative" size="small">Community Expert</Badge>
  ) : null;

  return (
    <div
      className={styles.engageCard}
      onClick={() => window.open(source.url, '_blank', 'noopener')}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open(source.url, '_blank', 'noopener'); } }}
    >
      <Avatar
        name={metadata.author || 'Unknown'}
        initials={metadata.authorInitials || metadata.author?.split(' ').map(w => w[0]).join('') || '?'}
        image={metadata.avatarPhoto ? { src: import.meta.env.BASE_URL + metadata.avatarPhoto } : undefined}
        color="colorful"
        size={28}
      />
      <div className={styles.docText}>
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{metadata.author}</span>
          {roleBadge}
          <span style={{ flex: '1 1 0' }} />
          {badge}
        </div>
        <div className={styles.docMeta}>
          <span>{metadata.date}</span>
        </div>
        <div className={styles.snippetBar}>
          {source.snippet.replace(/^"|"$/g, '')}
        </div>
      </div>
    </div>
  );
}

// ─── Document Source Card ────────────────────────────────────────────────

function DocSourceCard({ source }: { source: Source }) {
  const styles = useStyles();
  const { metadata } = source;
  const location = metadata.site || '';

  return (
    <div
      className={styles.docCard}
      onClick={() => window.open(source.url, '_blank', 'noopener')}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open(source.url, '_blank', 'noopener'); } }}
    >
      <div className={styles.docIcon}>{getSourceIcon(source, 24)}</div>
      <div className={styles.docText}>
        <span className={styles.docTitle}>{source.title}</span>
        <div className={styles.docMeta}>
          {location && <span>{location}</span>}
          {location && metadata.date && <span className={styles.docMetaSep}>·</span>}
          {metadata.date && <span>{metadata.date}</span>}
        </div>
        {metadata.sensitivityLabel && (
          <Badge appearance="filled" color="informative" size="small" style={{ marginTop: '2px', alignSelf: 'flex-start' }}>
            {metadata.sensitivityLabel}
          </Badge>
        )}
      </div>
    </div>
  );
}

// ─── Web Source Card ─────────────────────────────────────────────────────

function WebSourceCard({ source }: { source: Source }) {
  const styles = useStyles();
  const { metadata } = source;

  return (
    <div
      className={styles.docCard}
      onClick={() => window.open(source.url, '_blank', 'noopener')}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open(source.url, '_blank', 'noopener'); } }}
    >
      <div className={styles.docIcon}>{getSourceIcon(source, 24)}</div>
      <div className={styles.docText}>
        <span className={styles.docTitle}>{source.title}</span>
        <div className={styles.docMeta}>
          {metadata.domain && <span>{metadata.domain}</span>}
          {metadata.date && (
            <>
              {metadata.domain && <span className={styles.docMetaSep}>·</span>}
              <span>{metadata.date}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Unified SourceCard ─────────────────────────────────────────────────

interface SourceCardProps {
  source: Source;
}

export function SourceCard({ source }: SourceCardProps) {
  if (isEngageSource(source)) return <EngageSourceCard source={source} />;
  if (source.type === 'web') return <WebSourceCard source={source} />;
  return <DocSourceCard source={source} />;
}

// ─── Sorted sources (Engage first, then docs, then web) ─────────────────

export function sortSourcesSocial(sources: Source[]): Source[] {
  const engage = sources.filter(isEngageSource);
  const docs = sources.filter(s => s.type === 'sharepoint');
  const web = sources.filter(s => s.type === 'web');
  return [...engage, ...docs, ...web];
}
