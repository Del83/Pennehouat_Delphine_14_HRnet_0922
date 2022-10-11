import "../../styles/create.css"

/**
* Header layout
* @component
*/
export default function Profile () {

    return (
        <section className="profile-ctn">
            <div className="input-wrapper">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                value=""
                //onChange={(e) => setUserPassword(e.target.value)}
                type="text"
                id="firstname"
                className="form-control"
              />
            </div>
        </section>
    )
}