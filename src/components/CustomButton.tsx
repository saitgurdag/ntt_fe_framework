import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

type CustomButtonVariant = 'primary' | 'secondary' | 'outline';

interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: CustomButtonVariant;
}

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  padding: '8px 24px',
  '&.primary': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  '&.secondary': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  '&.outline': {
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
}));

export default function CustomButton({
  children,
  variant = 'primary',
  className,
  ...props
}: CustomButtonProps) {
  return (
    <StyledButton {...props} className={`${className || ''} ${variant}`}>
      {children}
    </StyledButton>
  );
}
