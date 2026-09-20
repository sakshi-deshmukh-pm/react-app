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

        <button
          className="edit-button"
          onClick={onEdit}
        >
          Edit
        </button>

        <button
          className="delete-button"
          onClick={onDelete}
        >
          Delete
        </button>

      </div>

    </div>
  )
}

export default StudentCard