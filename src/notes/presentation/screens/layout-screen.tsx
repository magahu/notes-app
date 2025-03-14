import { Stack } from "@mui/material";
import Footer from "../components/shared/footer";
import Header from "../components/shared/header";
import { ReactElement } from "react";


export default function Layout({children}: {children: ReactElement}){
    return(
        <Stack width='100%' height='100%' position='relative'>
            <Stack width='100vw' height='10%'>
            <Header/>
            </Stack>
            <Stack width='100vw' height='80%'>
            {children}
            </Stack>
            <Stack width='100vw' height='10%'>
            <Footer/>
            </Stack>
        </Stack>
    )
}