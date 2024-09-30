using System.Text;
using System.Text.RegularExpressions;
using teste_pratico_crud_api.Models;

namespace teste_pratico_crud_api.Services.LerListaProdustosService
{
    public class LerListaProdustosService : ILerListaProdustosService
    {
        public string[] ConverterArquivoParaTexto(IFormFile formFile)
        {
            var result = new StringBuilder();
            using (var reader = new StreamReader(formFile.OpenReadStream()))
            {
                while (reader.Peek() >= 0)
                    result.AppendLine(reader.ReadLine()); 
            }
            string[] lines = result.ToString().Split(new string[] { Environment.NewLine }, StringSplitOptions.RemoveEmptyEntries);

            return lines;
        }

        public List<Produto> ConverterTextoParaProdutos(string[] lines)
        {
            List<Produto> listaProdutos = new List<Produto>();

            Regex regexObj = new Regex(@"[^\d]");

            foreach (string linhaProduto in lines)
            {
                string[] splitProduto = linhaProduto.Split(";"); 
                string categoria = splitProduto[1].ToString();
                string nome = splitProduto[2].ToString();
                string descricao = splitProduto[3].ToString();
                string preco = splitProduto[4].ToString();
                string quantidade = regexObj.Replace(splitProduto[5].ToString(), "");

                var novoProduto = new Produto(categoria, nome,  double.Parse(preco),  descricao, int.Parse(quantidade));

                listaProdutos.Add(novoProduto);
            }

            return listaProdutos;
        }
    }
}

