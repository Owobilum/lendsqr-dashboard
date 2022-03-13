import prevIcon from '../../images/icons/prev_btn.png'
import nextIcon from '../../images/icons/next_btn.png'
import styles from './TableFooter.module.scss'

const TableFooter = ({ handleChange, users, setCurrentPage, currentPage, totalPages }) => {

    const handlePageNumbers = () => {
        let pages = []
        for (let i = 0; i < totalPages; i++) {
            if (i === 3) {
                break
            }
            pages.push(<button key={i * 100} className={styles.page_btn} onClick={() => setCurrentPage(`${Number(i + 1)}`)}>{i + 1}</button>)
        }
        return pages
    }

    return <>
        <div className={styles.table_footer}>
            <div>
                <span>Showing </span>
                <select onChange={handleChange}>
                    <option value={10} defaultValue>{10}</option>
                    <option value={25} >{25}</option>
                    <option value={100} >{100}</option>
                </select>
                {" "}<span>out of {users.length}</span>
            </div>
            <div className={styles.table_nav}>
                <div>
                    <img
                        src={prevIcon}
                        alt=""
                        width="24px"
                        onClick={() => currentPage > 1 && setCurrentPage(prev => Number(prev) - 1)}
                    />
                </div>
                {
                    totalPages >= 4 &&
                    <div>
                        {handlePageNumbers()}
                        <span>....</span>
                        <button className={styles.page_btn} onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
                    </div>
                }
                {
                    totalPages < 4 &&
                    <div>{handlePageNumbers()}</div>
                }
                <div>
                    <img src={nextIcon} alt="" width="24px"
                        onClick={() => currentPage < totalPages && setCurrentPage(prev => Number(prev) + 1)}
                    />
                </div>
            </div>
        </div>
        <p className={styles.current_page}>{`page ${currentPage} of ${totalPages}`}</p>
    </>
}

export default TableFooter