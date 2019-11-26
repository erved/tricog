import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: Theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [Theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: Theme.shape.borderRadius,
      backgroundColor: fade(Theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(Theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [Theme.breakpoints.up('sm')]: {
        marginLeft: Theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: Theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: Theme.spacing(1, 1, 1, 7),
      transition: Theme.transitions.create('width'),
      width: '100%',
      [Theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }),
);

export default useStyles;
