import { Request, Response } from 'express'
import { writeFile, readFile } from 'fs/promises'

const productsAna = [
    { "nome": "Caneta", "qtde": 10, "preco": 7.99, "data_compra": "2023-03-15", "data_entrega": "2023-04-25" },
    { "nome": "Impressora", "qtde": 0, "preco": 649.50, "data_compra": "2023-03-17", "data_entrega": "2023-05-26" },
    { "nome": "Caderno", "qtde": 4, "preco": 27.10, "data_compra": "2023-03-10", "data_entrega": "2023-03-12" },
    { "nome": "Lapis", "qtde": 3, "preco": 5.8, "data_compra": "2023-03-02", "data_entrega": "2023-04-20" },
    { "nome": "Tesoura", "qtde": 1, "preco": 19.99, "data_compra": "2023-03-25", "data_entrega": "2023-04-13" }
]



class ProductsController {

    products = productsAna

    create = (req: Request, res: Response) => {
          this.products.push(req.body)
          writeFile('products.json', JSON.stringify(this.products, null, 2))
        return res.json(`${req.body.nome} registrado com sucesso`)
    }

    read = async (req: Request, res: Response) => {
        const lerproduto = await readFile('products.json', "utf-8")
      return res.json(lerproduto)
  }



}

export default new ProductsController()
