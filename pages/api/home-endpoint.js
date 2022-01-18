export default function handler(req, res) {
    if (req.method === "POST") {
        const { body } = req 
        console.log(body)

        res.status(200).json({ status: 200 })
      } else {
        res.status(200).json({ name: 'John Doe' })
      }
  }
  