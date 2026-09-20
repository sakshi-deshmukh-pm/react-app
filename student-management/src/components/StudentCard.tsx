import Button from "@mui/material/Button"

interface StudentCardProp {
  title: string
  email: string
  branch: string
  onEdit: () => void
  onDelete: () => void
}

function StudentCard({
  title,
  email,
  branch,
  onEdit,
  onDelete
}: StudentCardProp) {

  return (
    <div className="student-card">

      <h3>{title}</h3>

      <p>📧 {email}</p>

      <p>🎓 Branch: {branch}</p>

      <div className="student-buttons">

        <Button
          variant="contained"
          color="primary"
          onClick={onEdit}
          sx={{ textTransform: 'none' ,
            marginRight:'10px'
          }}
        >
          Edit
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={onDelete}
          sx={{ textTransform: 'none' }}
        >
          Delete
        </Button>

      </div>

    </div>
  )
}

export default StudentCard