import MuiCard from "@mui/material/Card"
import type { CardProps } from "@mui/material/Card"

const Card = (props: CardProps) => {
  return (
    <MuiCard {...props} />
  )
}

export default Card