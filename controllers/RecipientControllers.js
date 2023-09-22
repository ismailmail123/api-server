const recipient = require('../models').recipient
const db = require("../db/index");

class RecipientController{
    static get(req, res){
        recipient.findAll()
        .then(recipient => {
            res.status(200).json(recipient)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
    }
    static readOne(req, res ){
        recipient.findByPk(+req.params.id)
        .then(recipient => {
            res.status(200).json(recipient)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
    }
    static add(req, res){
        console.log(req.file)
        const {name, adress, phone, say} = req.body
        recipient.create({
            name, 
            adress,
            phone, 
            say 
        })
        .then(recipient => {
            res.status(201).json(recipient)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
    }
    // static delete(req,res){
    //     const id = +req.params.id;
    //     card.destroy({
    //         where: {
    //             id
    //         }
    //     })
    //     .then(result => {
    //         res.json(result)
    //     })
    //     .catch(err => {
    //         res.json(err)
    //     })

    // }
    static delete(req, res){
        recipient.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
    }
    static update(req, res){
        recipient.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true
        })
        .then(recipient => {
            res.status(201).json(recipient)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
    }
}

module.exports = RecipientController;