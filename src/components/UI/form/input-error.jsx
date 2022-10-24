
export default function InputError ( { valid }) {
    if (valid === false) {
      return (
        <div>
          <span className="InputError">Invalid format, enter at least 3 characters</span>
        </div>
      )
    }
  }

