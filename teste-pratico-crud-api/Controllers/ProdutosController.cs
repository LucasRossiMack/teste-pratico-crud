using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using teste_pratico_crud_api.Models;
using teste_pratico_crud_api.Services.LerListaProdustosService;
using teste_pratico_crud_api.Services.ProdutoService;

namespace teste_pratico_crud_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        private readonly IProdutosService _produtosService;
        private readonly ILerListaProdustosService _lerListaProdustosService;

        public ProdutosController(IProdutosService produtosService, ILerListaProdustosService lerListaProdustosService)
        {
            _produtosService = produtosService;
            _lerListaProdustosService = lerListaProdustosService;
        }

        // GET: api/Produtos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Produto>>> GetProdutos()
        {
            return  _produtosService.GetProdutos();
        }

        // GET: api/Produtos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Produto>> GetProduto(long id)
        {
            var produto = _produtosService.GetProduto(id);

            if (produto == null)
            {
                return NotFound();
            }

            return produto;
        }

        // PUT: api/Produtos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduto(long id, Produto produto)
        {
            if (id != produto.Id)
            {
                return BadRequest();
            }

            try
            {
                _produtosService.PutProduto(id, produto);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_produtosService.ProdutoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Produtos
        [HttpPost]
        public async Task<ActionResult<Produto>> PostProduto(Produto produto)
        {
            _produtosService.PostProduto(produto);

            return CreatedAtAction("GetProduto", new { id = produto.Id }, produto);
        }

        // DELETE: api/Produtos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduto(long id)
        {
            var produto = _produtosService.GetProduto(id);
            if (produto == null)
            {
                return NotFound();
            }

            _produtosService.DeleteProduto(produto);

            return NoContent();
        }

        // POST: api/Produtos/UploadFile
        [HttpPost("UploadFile")]
        public async Task<IActionResult> UploadFile(IFormFile formFile)
        {
            string[] linhas =_lerListaProdustosService.ConverterArquivoParaTexto(formFile);
            List<Produto> listaProdutos = _lerListaProdustosService.ConverterTextoParaProdutos(linhas);

            foreach (var produto in listaProdutos){
                _produtosService.PostProduto(produto);
            }

            return Ok(listaProdutos);
        }
    }
}
    