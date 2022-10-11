export default function Search ({ searchInput, setSearchInput }) {
 
const handleSearchInput = (e) => {
    const inputContent = e.target.value.toLowerCase()
    .replace(/\s/g, "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
    setSearchInput(inputContent)
}
    return (
        <div className="search">
            <span>Search</span>
            <input className="search-input" type="text" placeholder={" ..."} onChange={handleSearchInput} value={searchInput} />
        </div>
    )
}