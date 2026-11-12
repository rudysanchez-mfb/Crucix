import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { CLASSES } from '../../../classes';
import { STYLES } from '../../styles';

const MFB_LINKS = [
  { label: 'MFB Labs', href: 'https://labs.mfbservicesinc.com' },
  { label: 'GitHub', href: 'https://github.com/rudysanchez-mfb' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rudy10sanchez/' },
] as const;

export function SettingsLinks() {
  return (
    <Box component="nav" className={CLASSES.links} sx={STYLES.links} aria-label="MFB Services">
      {MFB_LINKS.map((link) => (
        <Link
          key={link.href}
          className={CLASSES.link}
          sx={STYLES.link}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          {link.label}
        </Link>
      ))}
    </Box>
  );
}
