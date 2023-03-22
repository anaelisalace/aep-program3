import { Request, Response } from 'express'
import { writeFile, readFile } from 'fs/promises'
import { productsService } from './productsService'

class ProductsController {


    create = (req: Request, res: Response) => {
        productsService.products.push(req.body)
        writeFile('products.json', JSON.stringify(productsService.products, null, 2))
        return res.json(`${req.body.nome} registrado com sucesso`)
    }

    read = async (req: Request, res: Response) => {
        const lerproduto = await readFile('products.json', "utf-8")
        return res.json(lerproduto)
    }
    readStock = async (req: Request, res: Response) => {
       return productsService.getStock().then(dataProducts => {
           return res.json(dataProducts)  
       })
    }

}

export default new ProductsController()
