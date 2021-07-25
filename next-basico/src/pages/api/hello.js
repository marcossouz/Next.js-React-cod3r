// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { name: 'John Doe' },
    { name: 'Maria' },
    { name: 'João' },
    { name: 'Pedro' },
    { name: 'Silvanio' },
    { name: 'Josefa' },
  ])
}
