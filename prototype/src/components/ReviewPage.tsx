import { useState, Fragment, type ReactNode } from 'react';
import {
  FluentProvider,
  webLightTheme,
  makeStyles,
  tokens,
  Avatar,
  Button,
  Badge,
  Divider,
  TabList,
  Tab,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@fluentui/react-components';
import {
  ThumbLikeRegular,
  ThumbDislikeRegular,
  CheckmarkRegular,
  EditRegular,
  DismissRegular,
  MoreHorizontalRegular,
  PeopleCommunityRegular,
  ChatRegular,
  ShareRegular,
} from '@fluentui/react-icons';
import { CitationPreview } from './CitationPreview';
import { SourcesDrawer } from './SourcesDrawer';
import { SourceCard, sortSourcesSocial } from './SourceCard';
import { getSourceSummaryLabel, getStackedSourceItems, type StackedItem } from './SourceIcons';
import { mockCards } from '../data/mockData';
import type { Source, CardData } from '../data/mockData';

type Variant = 'A' | 'B';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundColor: tokens.colorNeutralBackground2,
  },
  variantBar: {
    maxWidth: '852px',
    margin: '24px auto 0',
  },
  container: {
    maxWidth: '852px',
    margin: '16px auto 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  card: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: tokens.shadow4,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
  },
  questionHeader: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-end',
    paddingBottom: '16px',
  },
  personaDetail: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0',
    minWidth: 0,
  },
  personaName: {
    fontWeight: tokens.fontWeightBold,
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    color: tokens.colorNeutralForeground1,
  },
  personaDate: {
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground3,
  },
  convoRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    height: '32px',
    flexShrink: 0,
  },
  seenBy: {
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground3,
    whiteSpace: 'nowrap' as const,
  },
  questionWrapper: {
    position: 'relative' as const,
    display: 'grid',
  },
  questionPill: {
    gridColumn: 1,
    gridRow: 1,
    alignSelf: 'start',
    justifySelf: 'start',
    marginLeft: '26px',
    zIndex: 2,
    backgroundColor: tokens.colorBrandBackground,
    border: '1px solid ' + tokens.colorBrandStroke1,
    borderRadius: tokens.borderRadiusCircular,
    padding: '4px 8px 5px',
    fontWeight: tokens.fontWeightBold,
    fontSize: '10px',
    lineHeight: '14px',
    color: tokens.colorNeutralForegroundOnBrand,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.2px',
  },
  questionBox: {
    gridColumn: 1,
    gridRow: 1,
    marginTop: '10px',
    border: '1px solid ' + tokens.colorBrandStroke1,
    borderRadius: tokens.borderRadiusMedium,
    padding: '24px',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  questionTitle: {
    fontWeight: tokens.fontWeightBold,
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    color: tokens.colorNeutralForeground1,
  },
  questionBody: {
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    color: tokens.colorNeutralForeground1,
    marginTop: '8px',
  },
  socialBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 0',
  },
  socialRight: {
    flex: '1 1 0',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '8px 0',
  },
  beFirstText: {
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground3,
    padding: '0 8px',
  },
  replyThread: {
    paddingTop: '12px',
    paddingBottom: '8px',
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-start',
  },
  agentAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '9px',
    overflow: 'hidden',
    flexShrink: 0,
    background: 'linear-gradient(189.45deg, #5c98ed 4.96%, #6c6ae1 51.15%, #764bce 93.3%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: tokens.colorNeutralForegroundOnBrand,
    marginTop: '8px',
  },
  messageBubble: {
    flex: '1 1 0',
    backgroundColor: tokens.colorNeutralBackground3,
    border: '2px solid ' + tokens.colorBrandStroke1,
    borderRadius: tokens.borderRadiusSmall,
    padding: '0 16px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    minWidth: 0,
  },
  answerMetadata: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    paddingTop: '12px',
    flexWrap: 'wrap' as const,
  },
  agentNameLabel: {
    fontWeight: tokens.fontWeightBold,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground1,
    whiteSpace: 'nowrap' as const,
  },
  draftedLabel: {
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground3,
    whiteSpace: 'nowrap' as const,
  },
  answerBody: {
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    color: tokens.colorNeutralForeground1,
    whiteSpace: 'pre-wrap' as const,
    '& strong': { fontWeight: tokens.fontWeightBold, color: tokens.colorNeutralForeground1 },
    '& ul': { listStyleType: 'disc', paddingLeft: '20px', margin: '4px 0' },
    '& li': { marginBottom: '2px' },
  },
  actionsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '6px',
    paddingTop: '4px',
  },
  sourcesBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 10px',
    border: 'none',
    borderRadius: tokens.borderRadiusMedium,
    background: 'transparent',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    color: tokens.colorNeutralForeground2,
    height: '32px',
    ':hover': { backgroundColor: tokens.colorNeutralBackground1Hover },
  },
  summaryLabel: {
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    color: tokens.colorNeutralForeground2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  },
  sourceLogos: { display: 'inline-flex', alignItems: 'center', marginLeft: '2px' },
  sourceLogo: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: tokens.colorNeutralBackground1,
    border: '1.5px solid ' + tokens.colorNeutralBackground1,
    overflow: 'hidden',
    flexShrink: 0,
    marginLeft: '-4px',
    boxShadow: '0 0 0 1px rgba(0,0,0,0.08)',
  },
  sourceOverflow: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: tokens.colorNeutralBackground4,
    border: '1.5px solid ' + tokens.colorNeutralBackground1,
    marginLeft: '-4px',
    fontWeight: tokens.fontWeightSemibold,
    fontSize: '9px',
    lineHeight: '12px',
    color: tokens.colorNeutralForeground2,
    flexShrink: 0,
    boxShadow: '0 0 0 1px rgba(0,0,0,0.08)',
  },
  personaAvatarSmall: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: tokens.borderRadiusCircular,
    border: '1.5px solid ' + tokens.colorNeutralBackground1,
    marginLeft: '-4px',
    fontWeight: tokens.fontWeightSemibold,
    fontSize: '8px',
    lineHeight: '10px',
    color: tokens.colorNeutralForegroundOnBrand,
    flexShrink: 0,
    boxShadow: '0 0 0 1px rgba(0,0,0,0.08)',
  },
  reasoningAccordion: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusSmall,
    boxShadow: tokens.shadow2,
  },
  reasoningPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    paddingLeft: '8px',
  },
  reasoningStep: {
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-start',
  },
  reasoningStepNum: {
    fontWeight: tokens.fontWeightSemibold,
    fontSize: '11px',
    lineHeight: '18px',
    color: tokens.colorNeutralForeground4,
    flexShrink: 0,
    minWidth: '14px',
  },
  reasoningStepText: {
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground3,
  },
  reviewActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    paddingTop: '4px',
  },
  postComment: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    height: '58px',
    paddingTop: '8px',
  },
  commentInput: {
    flex: '1 1 0',
    height: '40px',
    borderRadius: tokens.borderRadiusCircular,
    border: '1px solid ' + tokens.colorNeutralStroke2,
    backgroundColor: tokens.colorNeutralBackground3,
    padding: '8px 16px',
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    color: tokens.colorNeutralForeground3,
    display: 'flex',
    alignItems: 'center',
  },
});

// ─── Helpers ─────────────────────────────────────────────────────────────

function StackedIcons({ items, max = 4 }: { items: StackedItem[]; max?: number }) {
  const styles = useStyles();
  const visible = items.slice(0, max);
  const overflow = items.length - max;

  return (
    <span className={styles.sourceLogos}>
      {visible.map((item, i) =>
        item.kind === 'avatar' ? (
          item.photo ? (
            <span key={item.key} className={styles.sourceLogo} style={{ marginLeft: i === 0 ? '0' : '-4px' }}>
              <img src={import.meta.env.BASE_URL + item.photo} width={16} height={16} alt="" style={{ display: 'block' }} />
            </span>
          ) : (
            <span
              key={item.key}
              className={styles.personaAvatarSmall}
              style={{ marginLeft: i === 0 ? '0' : '-4px', backgroundColor: item.color }}
            >
              {item.initials}
            </span>
          )
        ) : (
          <span key={item.key} className={styles.sourceLogo} style={{ marginLeft: i === 0 ? '0' : '-4px' }}>
            {item.icon}
          </span>
        )
      )}
      {overflow > 0 && <span className={styles.sourceOverflow}>+{overflow}</span>}
    </span>
  );
}

function SourcesEntrypoint({ sources, onClick }: { sources: Source[]; onClick: () => void }) {
  const styles = useStyles();
  const items = getStackedSourceItems(sources);
  const label = getSourceSummaryLabel(sources);

  return (
    <button className={styles.sourcesBtn} onClick={onClick}>
      <StackedIcons items={items} />
      <span className={styles.summaryLabel}>{label}</span>
    </button>
  );
}

function renderAnswerContent(content: string, sources: Source[]): ReactNode[] {
  const lines = content.split('\n');
  return lines.map((line, lineIdx) => {
    if (line.trim() === '') return <br key={'br-' + lineIdx} />;
    const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-');
    const isNumbered = /^\d+\.\s/.test(line.trim());
    const parts = line.split(/(\[\d+\])/g);
    const rendered = parts.map((part, i) => {
      const match = part.match(/^\[(\d+)\]$/);
      if (match) {
        const num = parseInt(match[1], 10);
        const source = sources.find(s => s.id === num);
        if (source) return <CitationPreview key={lineIdx + '-' + i} source={source} citationNumber={num} />;
      }
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      return (
        <Fragment key={lineIdx + '-' + i}>
          {boldParts.map((bp, j) =>
            bp.startsWith('**') && bp.endsWith('**')
              ? <strong key={j}>{bp.slice(2, -2)}</strong>
              : <span key={j}>{bp}</span>
          )}
        </Fragment>
      );
    });
    if (isBullet || isNumbered) return <li key={lineIdx}>{rendered}</li>;
    return <p key={lineIdx} style={{ margin: '2px 0' }}>{rendered}</p>;
  });
}

// ─── Shared question/answer top section ──────────────────────────────────

function QuestionSection({ question }: { question: CardData['question'] }) {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.questionHeader}>
        <Avatar
          name={question.author}
          initials={question.authorInitials}
          color="colorful"
          size={32}
        />
        <div className={styles.personaDetail}>
          <span className={styles.personaName}>{question.author}</span>
          <span className={styles.personaDate}>{question.date}</span>
        </div>
        <div className={styles.convoRight}>
          <span className={styles.seenBy}>Seen by {question.seenBy}</span>
          <Button appearance="subtle" icon={<MoreHorizontalRegular />} size="small" aria-label="More options" />
        </div>
      </div>

      <div className={styles.questionWrapper}>
        <div className={styles.questionPill}>QUESTION</div>
        <div className={styles.questionBox}>
          <div className={styles.questionTitle}>{question.title}</div>
          {question.body && <div className={styles.questionBody}>{question.body}</div>}
        </div>
      </div>

      <div className={styles.socialBar}>
        <Button appearance="subtle" size="small" icon={<ThumbLikeRegular />}>Like</Button>
        <Button appearance="subtle" size="small" icon={<ChatRegular />}>Answer</Button>
        <Button appearance="subtle" size="small" icon={<ShareRegular />}>Share</Button>
        <div className={styles.socialRight}>
          <span className={styles.beFirstText}>Be the first to like this</span>
        </div>
      </div>
    </div>
  );
}

function ReviewButtons() {
  const styles = useStyles();
  return (
    <div className={styles.reviewActions}>
      <Button appearance="primary" icon={<CheckmarkRegular />}>Approve</Button>
      <Button appearance="outline" icon={<EditRegular />}>Edit</Button>
      <Button appearance="outline" icon={<DismissRegular />}>Dismiss</Button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Option A Card — Sources button + Drawer
// ═══════════════════════════════════════════════════════════════════════════

function CardOptionA({ data }: { data: CardData }) {
  const styles = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { question, answer, sources } = data;

  return (
    <>
      <div className={styles.card}>
        <QuestionSection question={question} />
        <Divider />

        <div className={styles.replyThread}>
          <div className={styles.agentAvatar}>
            <PeopleCommunityRegular style={{ fontSize: 24 }} />
          </div>
          <div style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className={styles.messageBubble}>
              <div className={styles.answerMetadata}>
                <span className={styles.agentNameLabel}>{answer.agentName}</span>
                <Badge appearance="filled" color="informative" size="small">AI generated</Badge>
                <span className={styles.draftedLabel}>Drafted {answer.draftedDate}</span>
              </div>
              <div className={styles.answerBody}>
                {renderAnswerContent(answer.content, answer.sources)}
              </div>

              <div className={styles.actionsRow}>
                <SourcesEntrypoint sources={sources} onClick={() => setDrawerOpen(true)} />
              </div>

              <div className={styles.actionsRow} style={{ justifyContent: 'flex-end' }}>
                <Button appearance="subtle" size="small" icon={<ThumbLikeRegular />} aria-label="Like" />
                <Button appearance="subtle" size="small" icon={<ThumbDislikeRegular />} aria-label="Dislike" />
              </div>

              <div className={styles.reasoningAccordion}>
                <Accordion collapsible>
                  <AccordionItem value="reasoning">
                    <AccordionHeader size="small">Reasoning</AccordionHeader>
                    <AccordionPanel>
                      <div className={styles.reasoningPanel}>
                        {answer.reasoning?.split('\n').map((step, i) => (
                          <div key={i} className={styles.reasoningStep}>
                            <span className={styles.reasoningStepNum}>{i + 1}.</span>
                            <span className={styles.reasoningStepText}>{step}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <ReviewButtons />
            </div>
          </div>
        </div>

        <div className={styles.postComment}>
          <Avatar name="Ravier Souza" initials="RS" color="colorful" size={32} />
          <div className={styles.commentInput}>Answer this question</div>
        </div>
      </div>
      <SourcesDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} sources={sources} />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Option B Card — Progressive disclosure (Sources expand inline)
// ═══════════════════════════════════════════════════════════════════════════

function CardOptionB({ data }: { data: CardData }) {
  const styles = useStyles();
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const { question, answer, sources } = data;
  const sorted = sortSourcesSocial(sources);

  return (
    <div className={styles.card}>
      <QuestionSection question={question} />
      <Divider />

      <div className={styles.replyThread}>
        <div className={styles.agentAvatar}>
          <PeopleCommunityRegular style={{ fontSize: 24 }} />
        </div>
        <div style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className={styles.messageBubble}>
            <div className={styles.answerMetadata}>
              <span className={styles.agentNameLabel}>{answer.agentName}</span>
              <Badge appearance="filled" color="informative" size="small">AI generated</Badge>
              <span className={styles.draftedLabel}>Drafted {answer.draftedDate}</span>
            </div>
            <div className={styles.answerBody}>
              {renderAnswerContent(answer.content, answer.sources)}
            </div>

            <div>
              <div className={styles.actionsRow}>
                <SourcesEntrypoint sources={sources} onClick={() => setSourcesOpen(prev => !prev)} />
              </div>
              {sourcesOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '4px 0 0' }}>
                  {sorted.map(source => (
                    <SourceCard key={source.id} source={source} />
                  ))}
                </div>
              )}
            </div>

            <div className={styles.actionsRow} style={{ justifyContent: 'flex-end' }}>
              <Button appearance="subtle" size="small" icon={<ThumbLikeRegular />} aria-label="Like" />
              <Button appearance="subtle" size="small" icon={<ThumbDislikeRegular />} aria-label="Dislike" />
            </div>

            <div className={styles.reasoningAccordion}>
              <Accordion collapsible>
                <AccordionItem value="reasoning">
                  <AccordionHeader size="small">Reasoning</AccordionHeader>
                  <AccordionPanel>
                    <div className={styles.reasoningPanel}>
                      {answer.reasoning?.split('\n').map((step, i) => (
                        <div key={i} className={styles.reasoningStep}>
                          <span className={styles.reasoningStepNum}>{i + 1}.</span>
                          <span className={styles.reasoningStepText}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <ReviewButtons />
          </div>
        </div>
      </div>

      <div className={styles.postComment}>
        <Avatar name="Ravier Souza" initials="RS" color="colorful" size={32} />
        <div className={styles.commentInput}>Answer this question</div>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────

export default function ReviewPage() {
  const styles = useStyles();
  const [variant, setVariant] = useState<Variant>('A');

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.root}>
        <div className={styles.variantBar}>
          <TabList
            selectedValue={variant}
            onTabSelect={(_, data) => setVariant(data.value as Variant)}
          >
            <Tab value="A">Option A — Drawer</Tab>
            <Tab value="B">Option B — Progressive Disclosure</Tab>
          </TabList>
        </div>

        <div className={styles.container}>
          {mockCards.map(card =>
            variant === 'A'
              ? <CardOptionA key={card.question.id} data={card} />
              : <CardOptionB key={card.question.id + '-b'} data={card} />
          )}
        </div>
      </div>
    </FluentProvider>
  );
}
