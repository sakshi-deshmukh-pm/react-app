import MuiButton from "@mui/material/Button"

const Button = (props: any) => {
  return (
    <MuiButton
      {...props}
      sx={{
        textTransform: "none",
        ...props.sx
      }}
    />
  )
}

export default Button