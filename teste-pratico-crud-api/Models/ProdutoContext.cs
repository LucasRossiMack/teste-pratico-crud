using Microsoft.EntityFrameworkCore;

namespace teste_pratico_crud_api.Models;

public class ProdutoContext : DbContext
{
    public ProdutoContext(DbContextOptions<ProdutoContext> options)
        : base(options)
    {
    }

    public DbSet<Produto> Produtos { get; set; } = null!;
}