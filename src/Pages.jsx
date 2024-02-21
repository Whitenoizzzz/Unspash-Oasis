import { useGlobalContext } from './context'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
function Pages() {
  const { currentPage, totalPages, setCurrentPage } = useGlobalContext()

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="pages">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="btn"
      >
        <SlArrowLeft></SlArrowLeft>
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="btn"
      >
        <SlArrowRight></SlArrowRight>
      </button>
    </div>
  )
}
export default Pages
