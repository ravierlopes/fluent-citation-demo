import {
  Popover,
  PopoverTrigger,
  PopoverSurface,
  makeStyles,
  mergeClasses,
  tokens,
  Avatar,
  Badge,
} from '@fluentui/react-components';
import {
  CheckmarkCircleFilled,
  CheckmarkCircleRegular,
} from '@fluentui/react-icons';
import type { Source } from '../data/mockData';
import { getSourceIcon, isEngageSource } from './SourceIcons';

const useStyles = makeStyles({
  trigger: {
    display: 'inline',
    color: tokens.colorBrandForeground1,
    fontSize: 'inherit',
    fontWeight: 'inherit',
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
    borderRadius: tokens.borderRadiusSmall,
    padding: '0 1px',
    transition: 'background-color 0.1s ease',
    ':hover': {
      backgroundColor: tokens.colorBrandBackground2,
    },
  },
  surface: {
    padding: '0 !important',
    width: '256px',
    borderRadius: tokens.borderRadiusSmall,
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0)',
    boxShadow: tokens.shadow8,
  },
  content: {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    height: '20px',
  },
  citationBadge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '14px',
    height: '14px',
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: tokens.colorNeutralBackground3,
    border: '1px solid ' + tokens.colorNeutralStroke2,
    fontWeight: tokens.fontWeightSemibold,
    fontSize: '10px',
    lineHeight: '14px',
    color: tokens.colorNeutralForeground2,
    flexShrink: 0,
  },
  iconWrapper: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    width: '16px',
    height: '16px',
  },
  entityName: {
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
    flex: '1 1 0',
    minWidth: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
      color: tokens.colorBrandForeground1,
    },
  },
  metadataRow: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '0px',
    fontWeight: tokens.fontWeightRegular,
    fontSize: '10px',
    lineHeight: '14px',
    color: tokens.colorNeutralForeground2,
  },
  metaItem: {
    whiteSpace: 'nowrap' as const,
  },
  metaSep: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '8px',
    height: '12px',
    color: tokens.colorNeutralStroke2,
    fontSize: '10px',
  },
  snippet: {
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground2,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
  footer: {
    fontWeight: tokens.fontWeightRegular,
    fontSize: '10px',
    lineHeight: '14px',
    color: tokens.colorNeutralForeground2,
  },
  engageHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    height: '24px',
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    flexWrap: 'wrap' as const,
  },
  engageStats: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: tokens.fontWeightRegular,
    fontSize: '10px',
    lineHeight: '14px',
    color: tokens.colorNeutralForeground4,
  },
  answerBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '3px',
    height: '18px',
    padding: '0 6px',
    borderRadius: '36px',
    backgroundColor: tokens.colorNeutralBackground3,
    fontWeight: tokens.fontWeightSemibold,
    fontSize: '10px',
    lineHeight: '14px',
    whiteSpace: 'nowrap' as const,
  },
  verifiedBadge: { color: tokens.colorBrandForeground1 },
  bestAnswerBadge: { color: tokens.colorPaletteGreenForeground1 },
});

function getSourceLabel(source: Source): string {
  if (source.metadata.site) return source.metadata.site;
  if (source.metadata.community) return 'Viva Engage · ' + source.metadata.community;
  if (source.metadata.domain) return source.metadata.domain;
  switch (source.type) {
    case 'sharepoint': return 'SharePoint';
    case 'engage-answer': return 'Viva Engage';
    case 'engage-conversation': return 'Viva Engage';
    case 'web': return 'Web';
  }
}

interface CitationPreviewProps {
  source: Source;
  citationNumber: number;
}

export function CitationPreview({ source, citationNumber }: CitationPreviewProps) {
  const styles = useStyles();
  const isEngage = isEngageSource(source);
  const hasBadges = isEngage && (
    source.metadata.authorRole === 'admin' ||
    source.metadata.authorRole === 'expert' ||
    source.metadata.isVerifiedAnswer ||
    source.metadata.isBestAnswer
  );

  const badge = isEngage && source.metadata.isVerifiedAnswer ? (
    <span className={mergeClasses(styles.answerBadge, styles.verifiedBadge)}>
      <CheckmarkCircleFilled style={{ fontSize: 12 }} />
      Verified answer
    </span>
  ) : isEngage && source.metadata.isBestAnswer ? (
    <span className={mergeClasses(styles.answerBadge, styles.bestAnswerBadge)}>
      <CheckmarkCircleRegular style={{ fontSize: 12 }} />
      Best answer
    </span>
  ) : null;

  return (
    <Popover
      withArrow
      positioning="above"
      openOnHover
      mouseLeaveDelay={200}
    >
      <PopoverTrigger disableButtonEnhancement>
        <span
          className={styles.trigger}
          role="button"
          tabIndex={0}
          aria-label={'Source ' + citationNumber + ': ' + source.title}
        >
          [{citationNumber}]
        </span>
      </PopoverTrigger>
      <PopoverSurface className={styles.surface}>
        <div className={styles.content}>
          {isEngage ? (
            <>
              <div className={styles.engageHeader}>
                <span className={styles.citationBadge}>{citationNumber}</span>
                <Avatar
                  name={source.metadata.author || 'Unknown'}
                  initials={source.metadata.authorInitials || source.metadata.author?.split(' ').map(w => w[0]).join('') || '?'}
                  image={source.metadata.avatarPhoto ? { src: import.meta.env.BASE_URL + source.metadata.avatarPhoto } : undefined}
                  color="colorful"
                  size={20}
                />
                <span className={styles.entityName}>{source.metadata.author}</span>
              </div>
              {hasBadges && (
                <div className={styles.badgeRow}>
                  {source.metadata.authorRole === 'admin' && (
                    <Badge appearance="filled" color="informative" size="small">Community Admin</Badge>
                  )}
                  {source.metadata.authorRole === 'expert' && (
                    <Badge appearance="filled" color="informative" size="small">Community Expert</Badge>
                  )}
                  {badge}
                </div>
              )}
              <div className={styles.snippet}>{source.snippet.replace(/^"|"$/g, '')}</div>
              <div className={styles.engageStats}>
                <span>{source.metadata.date}</span>
              </div>
            </>
          ) : (
            <>
              <div className={styles.header}>
                <span className={styles.citationBadge}>{citationNumber}</span>
                <span className={styles.iconWrapper}>{getSourceIcon(source)}</span>
                <a
                  className={styles.entityName}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {source.title}
                </a>
              </div>
              <div className={styles.metadataRow}>
                <span className={styles.metaItem}>{getSourceLabel(source)}</span>
                {source.metadata.date && (
                  <>
                    <span className={styles.metaSep}>|</span>
                    <span className={styles.metaItem}>{source.metadata.date}</span>
                  </>
                )}
                {source.metadata.author && (
                  <>
                    <span className={styles.metaSep}>|</span>
                    <span className={styles.metaItem}>{source.metadata.author}</span>
                  </>
                )}
              </div>
              {source.metadata.sensitivityLabel && (
                <Badge appearance="filled" color="informative" size="small">
                  {source.metadata.sensitivityLabel}
                </Badge>
              )}
              <div className={styles.snippet}>{source.snippet}</div>
              {source.metadata.fileType && (
                <div className={styles.footer}>
                  {source.metadata.fileType.toUpperCase()} document
                </div>
              )}
            </>
          )}
        </div>
      </PopoverSurface>
    </Popover>
  );
}
