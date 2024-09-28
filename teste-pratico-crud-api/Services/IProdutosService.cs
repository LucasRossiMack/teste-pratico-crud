using teste_pratico_crud_api.Models;

namespace teste_pratico_crud_api.Services.ProdutoService
{
    public interface IProdutosService
    {
        List<Produto> GetProdutos();
        Produto GetProduto(long id);
        void PutProduto(long id, Produto produto);
        void PostProduto(Produto produto);
        void DeleteProduto(Produto produto);
        bool ProdutoExists(long id);
    }
}

