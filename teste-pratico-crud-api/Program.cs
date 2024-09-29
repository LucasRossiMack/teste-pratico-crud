using Microsoft.EntityFrameworkCore;
using teste_pratico_crud_api.Data;
using teste_pratico_crud_api.Services.ProdutoService;
using teste_pratico_crud_api.Services.LerListaProdustosService;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<ProdutoContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IProdutosService, ProdutosService>();
builder.Services.AddScoped<ILerListaProdustosService, LerListaProdustosService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
