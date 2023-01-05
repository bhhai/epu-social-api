import { db } from "../connect.js";


export const follow = (req, res, next) => {
    try {
        const { idUser, idUserFollow } = req.body;
        const SQL = "INSERT INTO follow(userId, userId_follow) VALUES(?, ?)";
        const [rows, fields] = db.query(SQL, [idUser, idUserFollow]);
        console.log(idUser, idUserFollow)
        res.status(200).json({
            data: fields
        })
    } catch (err) {
        res.json({
            message: err
        })
    }
}

export const getUserFollow = (req, res, next) => {

    const { idUser } = req.body;
    const SQL = "SELECT * FROM follow WHERE userId = ?";
    const [rows, fields] = db.query(SQL, [idUser]);
    console.log(idUser, idUserFollow)
    res.status(200).json({
        data: fields
    })

}

