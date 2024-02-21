import { useGlobalContext } from './context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    setSearchTerm(searchValue)
  }

  return (
    <section className="form-section">
      <h3 className="title">Discover stunning free images</h3>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="dog"
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  )
}
export default SearchForm
