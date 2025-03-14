import { styled} from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#999',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#000',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#d6ec99',
      border: '6px solid #d6ec99',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[600],
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#d6ec99',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#d6ec99',
    }),
  },
}));

type Mode =  "light" | "dark" | "system" | undefined
type Fmode =  "light" | "dark" | "system"

interface CustomSwitchProps  {
    mode: Mode,
    setMode: (mode: Fmode | null )=> void
}



export default function ToogleButton({mode, setMode}:CustomSwitchProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event){
          if(mode === 'dark'){
            setMode('light');
          }else{
            setMode('dark');
          }
         
        }
        
      };

  return (
    <FormGroup>
    <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} onChange={handleChange} />}
        label=""
      />
    
    </FormGroup>
  );
}