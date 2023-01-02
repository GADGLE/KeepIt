import { pool } from "../config/mysql.config.js";

const saveBookmark = async (bookmark) => {
    const { title, tags, url } = bookmark;
    const [rows] = await pool.query(
        "INSERT INTO bookmark (title, tags, url) VALUES (?, ?, ?)",
        [title, tags, url]
    );
    return rows;
}

export default saveBookmark;