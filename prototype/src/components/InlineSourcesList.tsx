import { makeStyles, mergeClasses } from '@fluentui/react-components';
import { CheckmarkCircleFilled } from '@fluentui/react-icons';
import type { Source } from '../data/mockData';
import { getSourceIcon, isEngageSource } from './SourceIcons';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
  },
  sourceRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '8px 0',
    cursor: 'pointer',
    textDecoration: 'none',
    borderRadius: '4px',
    ':hover': {
      backgroundColor: '#f5f5f5',
      marginLeft: '-8px',
      marginRight: '-8px',
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
  iconContainer: {
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '2px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
    flex: '1 1 0',
    minWidth: 0,
  },
  sourceTitle: {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#242424',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  },
  sourceDomain: {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    color: '#616161',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    flexWrap: 'wrap' as const,
    marginTop: '2px',
  },
  rolePill: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '16px',
    padding: '0 4px',
    borderRadius: '8px',
    backgroundColor: '#e6e6e6',
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 600,
    fontSize: '10px',
    lineHeight: '14px',
    color: '#242424',
    whiteSpace: 'nowrap' as const,
  },
  answerBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '3px',
    height: '16px',
    padding: '0 5px',
    borderRadius: '36px',
    backgroundColor: '#f5f5f5',
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 600,
    fontSize: '10px',
    lineHeight: '14px',
    whiteSpace: 'nowrap' as const,
  },
  verifiedBadge: { color: '#0f6cbd' },
  bestAnswerBadge: { color: '#0e700e' },
  sensitivityBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '16px',
    padding: '0 4px',
    borderRadius: '4px',
    backgroundColor: '#ebebeb',
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 600,
    fontSize: '10px',
    lineHeight: '14px',
    color: '#616161',
    whiteSpace: 'nowrap' as const,
  },
});

function getDomain(source: Source): string {
  if (source.metadata.domain) return source.metadata.domain;
  if (source.metadata.site) return source.metadata.site;
  if (source.metadata.community) return `Viva Engage · ${source.metadata.community}`;
  return '';
}

interface InlineSourcesListProps {
  sources: Source[];
}

export function InlineSourcesList({ sources }: InlineSourcesListProps) {
  const styles = useStyles();

  return (
    <div className={styles.list}>
      {sources.map(source => {
        const isEngage = isEngageSource(source);
        const hasBadges = isEngage && (
          source.metadata.authorRole === 'admin' ||
          source.metadata.authorRole === 'expert' ||
          source.metadata.isVerifiedAnswer ||
          source.metadata.isBestAnswer
        );
        const hasSensitivity = !!source.metadata.sensitivityLabel;

        return (
          <div
            key={source.id}
            className={styles.sourceRow}
            onClick={() => window.open(source.url, '_blank', 'noopener')}
            role="button"
            tabIndex={0}
          >
            <div className={styles.iconContainer}>
              {getSourceIcon(source, 20)}
            </div>
            <div className={styles.textContainer}>
              <span className={styles.sourceTitle}>{source.title}</span>
              <span className={styles.sourceDomain}>{getDomain(source)}</span>

              {(hasBadges || hasSensitivity) && (
                <div className={styles.badgeRow}>
                  {source.metadata.sensitivityLabel && (
                    <span className={styles.sensitivityBadge}>
                      {source.metadata.sensitivityLabel}
                    </span>
                  )}
                  {isEngage && source.metadata.authorRole === 'admin' && (
                    <span className={styles.rolePill}>Admin</span>
                  )}
                  {isEngage && source.metadata.authorRole === 'expert' && (
                    <span className={styles.rolePill}>Community expert</span>
                  )}
                  {isEngage && source.metadata.isVerifiedAnswer && (
                    <span className={mergeClasses(styles.answerBadge, styles.verifiedBadge)}>
                      <CheckmarkCircleFilled style={{ fontSize: 12, color: '#0f6cbd' }} />
                      Verified answer
                    </span>
                  )}
                  {isEngage && source.metadata.isBestAnswer && (
                    <span className={mergeClasses(styles.answerBadge, styles.bestAnswerBadge)}>
                      <CheckmarkCircleFilled style={{ fontSize: 12, color: '#0e700e' }} />
                      Best answer
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
