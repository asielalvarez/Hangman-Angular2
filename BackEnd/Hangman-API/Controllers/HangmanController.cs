using System.Web.Http;
using Hangman.Core.Model;
using System.Web.Http.Cors;

namespace Hangman_API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class HangmanController : ApiController
    {
        [HttpGet]
        [Route ("test")]
        public string Testing()
        {
            var getWord = new HangmanWord();
            return getWord.GetWord();
        }

    }
}
