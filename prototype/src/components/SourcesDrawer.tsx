import {
  OverlayDrawer,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerBody,
  Button,
  makeStyles,
} from '@fluentui/react-components';
import { DismissRegular } from '@fluentui/react-icons';
import type { Source } from '../data/mockData';
import { SourceCard, sortSourcesSocial } from './SourceCard';

const useStyles = makeStyles({
  drawer: {
    boxShadow: '0px 32px 64px rgba(0,0,0,0.24), 0px 0px 8px rgba(0,0,0,0.2)',
    maxWidth: '520px',
    width: '520px',
  },
  drawerHeader: {
    padding: '20px 24px 12px 24px',
    backgroundColor: '#faf9f8',
  },
  headerTitle: {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '22px',
    color: '#242424',
  },
  body: {
    padding: '12px 24px 24px !important',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    backgroundColor: '#faf9f8',
  },
});

interface SourcesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  sources: Source[];
}

export function SourcesDrawer({ isOpen, onClose, sources }: SourcesDrawerProps) {
  const styles = useStyles();
  const sorted = sortSourcesSocial(sources);

  return (
    <OverlayDrawer
      open={isOpen}
      onOpenChange={(_, data) => { if (!data.open) onClose(); }}
      position="end"
      className={styles.drawer}
    >
      <DrawerHeader className={styles.drawerHeader}>
        <DrawerHeaderTitle
          action={
            <Button
              appearance="subtle"
              aria-label="Close"
              icon={<DismissRegular />}
              onClick={onClose}
            />
          }
        >
          <span className={styles.headerTitle}>Sources ({sources.length})</span>
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody className={styles.body}>
        {sorted.map(source => (
          <SourceCard key={source.id} source={source} />
        ))}
      </DrawerBody>
    </OverlayDrawer>
  );
}
