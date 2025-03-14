import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
export default function Footer(){
    return(
        <Stack width='100vw'
               height='100%'
               justifyContent='center'
               alignItems='center'>
            <Typography variant="caption" gutterBottom sx={{ display: 'block' }} margin='0' padding='0'>Margarita Garcia</Typography>
        </Stack>



    )
}