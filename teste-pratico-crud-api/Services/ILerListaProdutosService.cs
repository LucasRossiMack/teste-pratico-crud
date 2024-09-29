using teste_pratico_crud_api.Models;

namespace teste_pratico_crud_api.Services.LerListaProdustosService
{
    public interface ILerListaProdustosService
    {
        string[] ConverterArquivoParaTexto(IFormFile formFile);
        List<Produto> ConverterTextoParaProdutos(string[] lines);
 
    }
}

