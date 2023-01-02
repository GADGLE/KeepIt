import saveBookmark from "../models/bookmark.js";

const createBookmark = (req, res) => {
    try {
        if(!req.body.title){
            return 
        }
    
        const result = saveBookmark(req.body);
        res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export default createBookmark