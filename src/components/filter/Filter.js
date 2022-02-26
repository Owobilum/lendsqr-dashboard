
import styles from './Filter.module.scss'

const Filter = () => {
    return (
        <div className={styles.container}>
            <div>
                <label> Organization<br />
                    <select>
                        <option value={""}>Lendsqr</option>
                    </select>
                </label>
            </div>
            <div>
                <label>Username <br />
                    <input type="text" />
                </label>
            </div>
            <div>
                <label> Email <br />
                    <input type="email" />
                </label>
            </div>
            <div>
                <label> Date<br />
                    <input type="date" />
                </label>
            </div>
            <div>
                <label>Phone Number <br />
                    <input type="text" />
                </label>
            </div>
            <div>
                <label>Status <br />
                    <select>
                        <option value={""}>Active</option>
                    </select>
                </label>
            </div>
            <div className={styles.action_area}>
                <div>
                    <button className={styles.outlined}>Reset</button>
                </div>
                <div>
                    <button className={styles.contained}>Filter</button>
                </div>
            </div>
        </div>
    )
}

export default Filter