import Card from './ui/Card'
import CardContent from './ui/CardContent'
import Typography from './ui/Typography'
import Box from './ui/Box'

interface StatCardProps {
  title: string
  value: number
  description: string
  icon: React.ReactNode
  iconBackground: string
  iconColor: string
}

function StatCard({
  title,
  value,
  description,
  icon,
  iconBackground,
  iconColor
}: StatCardProps) {

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        transition: '0.3s',

        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow:
            '0 10px 25px rgba(0,0,0,0.08)'
        }
      }}
    >
      <CardContent>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3
          }}
        >

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontWeight: 600 }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 2,
              backgroundColor: iconBackground,
              color: iconColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {icon}
          </Box>

        </Box>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700
          }}
        >
          {value}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {description}
        </Typography>

      </CardContent>
    </Card>
  )
}

export default StatCard
