import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Root = styled('div')(({ theme }) => ({
  '& > .logo-icon': {
    transition: theme.transitions.create(['width', 'height'], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  '& > .badge': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

function Logo() {
  return (
    <Root className="flex items-center">
      <img className="logo-icon w-32 h-32" src="assets/images/logo/logo.svg" alt="logo" />
      {/* Texto superior menú lateral */}
      {/* <div className="ml-6">
        <Typography className="username text-14 whitespace-nowrap font-medium leading-3" >
          J.A.L.P.
        </Typography>
        <Typography variant="caption" className="text-11 whitespace-nowrap" >
          MAD TECHNOLOGIC SL
        </Typography>
      </div> */}
    </Root>
  );
}

export default Logo;
