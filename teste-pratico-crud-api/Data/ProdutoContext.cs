using Microsoft.EntityFrameworkCore;
using teste_pratico_crud_api.Models;

namespace teste_pratico_crud_api.Data;

public class ProdutoContext : DbContext
{
    public ProdutoContext(DbContextOptions<ProdutoContext> options)
        : base(options)
    {
    }

    public DbSet<Produto> Produtos { get; set; } = null!;
}