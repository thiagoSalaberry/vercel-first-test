import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
    async post(req:NextApiRequest, res:NextApiResponse) {
        const {email} = req.body;
        if(!email) return res.status(400).json({error:"Email is required"});
        return res.status(201).json({
            message:`Te has registrado correctamente con el mail: ${email}`,
            code: Math.floor(Math.random() * 10000)
        })
    }
})