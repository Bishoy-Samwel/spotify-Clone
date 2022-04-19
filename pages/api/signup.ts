import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest,res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync()
  const (email, password) = req.body

  let user

  try {
    user = await prisma.user.create({
      data: {
        email, 
        password: bcrypt.hashSync(Password, salt),
      }
    })
  } catch (error) {
  res.status(401)    
  res.json({error: 'User is already exist'})
  return
  }

  const token = jwt.sign({
    email: user.email,
    id: user.id,
    time: date.now()
  }, 'hello', 
  {'expiresIn': '8h'})
}