import MuiCard from '@mui/material/Card'

const Card = (props: any) => {
  return (
    <MuiCard
      {...props}
      elevation={0}
      sx={{
        borderRadius: 3,
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        ...props.sx
      }}
    />
  )
}

export default Card