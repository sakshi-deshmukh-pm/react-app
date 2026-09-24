import MuiContainer from "@mui/material/Container"
import type { ContainerProps } from "@mui/material/Container"

const Container = (props: ContainerProps) => {
  return (
    <MuiContainer
      {...props}
      maxWidth={false}
      sx={{
        width: "100%",
        ...props.sx
      }}
    />
  )
}

export default Container