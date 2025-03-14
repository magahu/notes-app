import Stack from '@mui/material/Stack';
export default function Header(){

    return(
        <Stack sx={{flexWrap: 'nowrap' }} 
               width='100vw'
               height='100%'
               bgcolor="themeLight.palette.background.default" 
               color="themeLight.palette.primary"
               
               >
        <Stack justifyContent= "center" alignItems= "center">
            <h1>Notas</h1>  
        </Stack>
            
        
        </Stack>

    )
}