import Stack from '@mui/material/Stack';
import {  useSelector } from 'react-redux';
import { increment,  } from '../../../infraestructure/slices/notes';
import { RootState } from '../../../infraestructure/store/store';
import { useAppDispatch, useAppSelector } from '../../../infraestructure/store/hooks';
export default function Counter(){
    const count = useSelector((state: RootState) => state.notesReducer.value)
    const value = useAppSelector(({notesReducer})=>notesReducer.value)
    const dispatch = useAppDispatch()
    return(
        <Stack sx={{ width: '100%' }} maxWidth={'15%'} bgcolor="themeLight.palette.background.default" color="themeLight.palette.primary">
            
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <span>{value}</span>
 
 
        </Stack>

    )
}