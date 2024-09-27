using Microsoft.EntityFrameworkCore;

namespace teste_pratico_crud_api.Models;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options)
        : base(options)
    {
    }

    public DbSet<Produto> TodoItems { get; set; } = null!;
}