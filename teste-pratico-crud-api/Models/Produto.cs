namespace teste_pratico_crud_api.Models;

public class Produto
{
    public long Id { get; set; }
    public string Nome { get; set; }
    public double Preco { get; set; }
    public string Descricao { get; set; }
    public int Quantidade { get; set; }
    public string Categoria { get; set; }
}