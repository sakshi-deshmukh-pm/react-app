import MuiTextField from "@mui/material/TextField"
import type { TextFieldProps } from "@mui/material/TextField"

const TextField=(props : TextFieldProps)=>{
    return(
        <MuiTextField
        {...props}
        />
    )
}
export default TextField