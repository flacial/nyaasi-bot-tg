import 'dotenv/config'
import express from "express"
import startBot from '../index'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

app.use(cors())
app.use(helmet())

app.get('/send', async (req, res) => {
    try {
        const auth = req.headers.authorization.split(' ')?.[1]
        if (auth !== process.env.ACCESS_SECRET) return res.sendStatus(403)
    
        console.log('Sending releases...')
        await startBot()
        console.log('Sent the releases ✅')

        res.sendStatus(200)
    } catch (e) {
        res.send({ error: { message: e } })
    }

})

const PORT = process.env.PORT || 8132

app.listen(PORT, () => console.log(`App started on http://localhost:${PORT}/send`))