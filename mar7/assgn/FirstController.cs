using Microsoft.AspNetCore.Mvc;

namespace MVCDemo1.Controllers
{
    public class FirstController : Controller
    {
        public IActionResult Index1()
        {
            return Content("FirstController - Index1");
        }

        public IActionResult Index2()
        {
            return Content("FirstController - Index2");
        }

        public IActionResult Index3()
        {
            return Content("FirstController - Index3");
        }
    }
}
