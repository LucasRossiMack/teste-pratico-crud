using Microsoft.EntityFrameworkCore;
using teste_pratico_crud_api.Models;
using teste_pratico_crud_api.Data;

namespace teste_pratico_crud_api.Services.ProdutoService
{
    public class ProdutosService : IProdutosService
    {
        private readonly ProdutoContext _context;

        public ProdutosService(ProdutoContext context)
        {
            _context = context;
        }

        public List<Produto> GetProdutos()
        {
            return _context.Produtos.ToList();
        }

        public Produto GetProduto(long id) => _context.Produtos.Find(id);
        public void PutProduto(long id, Produto produto)
        {
            _context.Entry(produto).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void PostProduto(Produto produto)
        {
            _context.Produtos.Add(produto);
            _context.SaveChanges();
        }

        public void DeleteProduto(Produto produto)
        {
            _context.Produtos.Remove(produto);
            _context.SaveChangesAsync();
        }
        
        public bool ProdutoExists(long id)
        {
            return _context.Produtos.Any(e => e.Id == id);
        }
    }
}

