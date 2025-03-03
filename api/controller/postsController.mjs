import db from "../db.mjs"


export function getPosts(req,res){
        const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts"
        db.query(q,[req.query.cat], (err,data) =>{
            if(err) return res.send(err)
            return res.status(200)
        })

}
export function getPost(req,res){
return res.json("post adding page")
}
export function addPost(req,res){
return res.json("post adding page")
}
export function deletePost(req,res){
return res.json("post adding page")
}
export function updatePost(req,res){
return res.json("post adding page")
}
