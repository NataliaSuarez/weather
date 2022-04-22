import Typography, { TypographyProps } from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

type TypographyThemeProps = {
  children: any;
  variant: TypographyProps["variant"];
}

const Div = styled(Typography)(({ theme }) => ({
  color: '#7d858c',
  padding: theme.spacing(1),
  display: 'flex',
  gap: '8px',
  flexDirection: 'row',
  alignItems: 'center',
}));

const TypographyTheme = ({ children, variant }: TypographyThemeProps) => {
  return <Div variant={variant} >{children}</Div>;
}

export default TypographyTheme;