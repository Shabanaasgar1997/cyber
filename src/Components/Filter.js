import React from "react";
import styles from "./filter.module.css";
function Filter()
{
    return(
        <div className={styles.filterdiv}>
            <div className={styles.fdiv}>
                 <p className={styles.filterp}>Filter</p>
                 <p className={styles.filselling}>Best Selling</p>
            </div>
        </div>
    );
}
export default Filter;